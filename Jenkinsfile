node {

  try {

    if  (!(env.BRANCH_NAME =~ /(dev|master|PR-)/)){
        // Only Build PRs, Dev, and Master, don't build on branch push
       echo "Not master, dev, or a PR-* so not building"
       currentBuild.result = 'SUCCESS'
       return
    }

    def projectName = "marketing-website"
    def container
    def imageTag
    def branchTag

    stage('Clone repository') {
        step([$class: 'WsCleanup'])
        checkout scm
    }

    stage('Build') {

        if (env.BRANCH_NAME == 'master' || env.BRANCH_NAME == 'dev'){
            def branchReplaced = env.BRANCH_NAME.toLowerCase().replaceAll("\\/", "-")
         
            withCredentials([string(credentialsId: "GOOGLE_PROJECT_ID", variable: 'GOOGLE_PROJECT_ID')]){ 
              branchTag = "gcr.io/${GOOGLE_PROJECT_ID}/${projectName}:${branchReplaced}"
              imageTag = "gcr.io/${GOOGLE_PROJECT_ID}/${projectName}:${branchReplaced}-${env.BUILD_ID}"        
            }

            def secret_addition = ""
            if (env.BRANCH_NAME != 'master'){
              secret_addition = "_DEV"
            }
            withCredentials([
                         string(credentialsId: "MAILCHIMP_API_KEY${secret_addition}", variable: 'MAILCHIMP_API_KEY'),
                         string(credentialsId: "MAILCHIMP_DOMAIN${secret_addition}", variable: 'MAILCHIMP_DOMAIN'),
                         string(credentialsId: "MAILCHIMP_FORM_ID${secret_addition}", variable: 'MAILCHIMP_FORM_ID'),
                         string(credentialsId: "MAILCHIMP_LIST_ID${secret_addition}", variable: 'MAILCHIMP_LIST_ID'),
                         string(credentialsId: "SEGMENT_ID${secret_addition}", variable: 'SEGMENT_ID'),
                         string(credentialsId: "STRIPE_SECRET_KEY${secret_addition}", variable: 'STRIPE_SECRET_KEY')]){
                            sh  'env > .env.production'
                            container = docker.build(imageTag, ".")
                            sh  'rm .env.production'
                      }
        }
    }
  
    stage('push to gcr.io') {
        if (env.BRANCH_NAME == 'master' || env.BRANCH_NAME == 'dev') {
            sh "docker tag ${imageTag} ${branchTag}"
            sh "gcloud docker -- push ${imageTag}"
            sh "gcloud docker -- push ${branchTag}"       
        } 
    }

    stage('deploy') {
        milestone()

        withCredentials([string(credentialsId: "GOOGLE_COMPUTE_ZONE", variable: 'GOOGLE_COMPUTE_ZONE'),
            string(credentialsId: "GOOGLE_PROJECT_ID", variable: 'GOOGLE_PROJECT_ID'),
            string(credentialsId: "DEV_CLUSTER_NAME", variable: 'DEV_CLUSTER_NAME'),
            string(credentialsId: "PROD_CLUSTER_NAME", variable: 'PROD_CLUSTER_NAME')]){    

        if (env.BRANCH_NAME == 'dev'){
            echo 'Getting Kube context for dev cluster'
            sh "gcloud container clusters get-credentials ${DEV_CLUSTER_NAME} --zone ${GOOGLE_COMPUTE_ZONE} --project ${GOOGLE_PROJECT_ID}"
            sh "kubectl set image deployment/${projectName} ${projectName}=${imageTag}"
        }

        if (env.BRANCH_NAME == 'master'){
            echo 'Getting Kube context for prod cluster'
            sh "gcloud container clusters get-credentials ${PROD_CLUSTER_NAME} --zone ${GOOGLE_COMPUTE_ZONE} --project ${GOOGLE_PROJECT_ID}"
            sh "kubectl set image deployment/${projectName} ${projectName}=${imageTag}"
        }


      }
    }

  } catch (e) {
      // If there was an exception thrown, the build failed
      currentBuild.result = "FAILED"
      throw e
  } finally {
      // Success or failure, always send notifications
      // notifyBuild(currentBuild.result)
  }
}

