node {

  try {

    isTag = env.TAG_NAME != ""
    if  ( !(env.BRANCH_NAME =~ /(dev|master|PR-)/) && !isTag ){
        // Only Build PRs, Dev, and Master and tags, don't build on branch push
       echo "Not master, dev, PR-*, or tag so not building"
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

        if (env.BRANCH_NAME == 'master' || env.BRANCH_NAME == 'dev'|| isTag){
            def branchReplaced = env.BRANCH_NAME.toLowerCase().replaceAll("\\/", "-")
         
            branchTag = "gcr.io/featurepeek-build/${projectName}:${branchReplaced}"
            imageTag = "gcr.io/featurepeek-build/${projectName}:${branchReplaced}-${env.BUILD_ID}"

            def secret_addition = ""
            if (!isTag){
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
      if (env.BRANCH_NAME == 'master' || env.BRANCH_NAME == 'dev' || isTag) {
        sh "docker tag ${imageTag} ${branchTag}"
        sh "gcloud docker -- push ${imageTag}"
        sh "gcloud docker -- push ${branchTag}"
      } 
    }

    stage('deploy') {
      milestone()
      if (env.BRANCH_NAME == 'dev'){
        echo 'Getting Kube context for dev cluster'
        sh "gcloud container clusters get-credentials primary --zone us-central1-a --project featurepeek-dev"
      }

      if (env.BRANCH_NAME == 'master'){
        echo 'Getting Kube context for stable cluster'
        sh "gcloud container clusters get-credentials primary --zone us-central1-a --project featurepeek-stable"
      }

      if (isTag){
        echo 'Getting Kube context for production cluster'
        sh "gcloud container clusters get-credentials primary --zone us-central1-a --project featurepeek-production"
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

