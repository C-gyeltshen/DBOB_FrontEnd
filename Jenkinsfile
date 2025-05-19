pipeline {
  agent any
  tools {
    nodejs 'NodeJS'  
  }
  environment {
    CI = 'true'
    DOCKER_REGISTRY = 'gyeltshen23'
    // DOCKER_CREDENTIALS = credentials('docker-registry-credentials')
  }
  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'  // For frameworks like React, Next.js
      }
    }
    // stage('Test') {
    //   steps {
    //     sh 'npm test'
    //   }
    //   post {
    //     always {
    //         junit 'junit.xml'  
    //     }
    //   }
    // }
    stage('Deploy') {
      steps {
        script {
          // Optional: Docker login if using private registry
          // sh 'echo $DOCKER_CREDENTIALS_PSW | docker login $DOCKER_REGISTRY -u $DOCKER_CREDENTIALS_USR --password-stdin'
          
          if (env.BRANCH_NAME == 'main') {
            sh 'npm run deploy:prod'
          } else {
            sh 'npm run deploy:stage'
          }
        }
      }
    }
  }
  post {
    always {
      // Clean up Docker to prevent disk space issues
      sh 'docker system prune -f || true'
    }
  }
}