node {

  try {

    // if  (!(env.BRANCH_NAME =~ /(dev|master|PR-)/)){
    //     // Only Build PRs, Dev, and Master, don't build on branch push
    //    echo "Not master, dev, or a PR-* so not building"
    //    currentBuild.result = 'SUCCESS'
    //    return
    // }

    def projectName = "marketing-website"
    def gcloudProject = "featurepeek-228719"
    def gcr_path = "gcr.io/${gcloudProject}/${projectName}"
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
            branchTag = "${gcr_path}:${branchReplaced}"
            imageTag = "${gcr_path}:${branchReplaced}-${env.BUILD_ID}"        

            def secret_addition = ""
            if (env.BRANCH_NAME == 'dev'){
              secret_addition = "_DEV"
            }
           withCredentials([string(credentialsId: "MAILCHIMP_DOMAIN${secret_addition}", variable: 'MAILCHIMP_DOMAIN'),
                         string(credentialsId: "MAILCHIMP_FORM_ID${secret_addition}", variable: 'MAILCHIMP_FORM_ID'),
                         string(credentialsId: "MAILCHIMP_LIST_ID${secret_addition}", variable: 'MAILCHIMP_LIST_ID'),
                         string(credentialsId: "SEGMENT_ID${secret_addition}", variable: 'SEGMENT_ID'),
                         string(credentialsId: "STRIPE_SECRET_KEY${secret_addition}", variable: 'STRIPE_SECRET_KEY')]){
                            sh  'env > .env.production'
                            container = docker.build(imageTag, ".")
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

        if (env.BRANCH_NAME == 'dev'){
            echo 'Getting Kube context for dev cluster'
            sh "gcloud container clusters get-credentials featurepeek-dev --zone us-central1-a --project ${gcloudProject}"
        }

        if (env.BRANCH_NAME == 'master'){
            echo 'Getting Kube context for prod cluster'
            sh "gcloud container clusters get-credentials featurepeek-prod --zone us-central1-a --project ${gcloudProject}"
        }

        sh "kubectl set image deployment/${projectName} ${projectName}=${imageTag}"

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

