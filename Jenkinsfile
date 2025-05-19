pipeline {
  agent any
  tools {
	nodejs 'NodeJS'  
  }
  environment {
	CI = 'true'
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
	stage('Test') {
  	steps {
    	sh 'npm test'
  	}
  	post {
    	always {
      	junit 'junit.xml'  // Test reports (if using jest-junit)
    	}
  	}
	}
	stage('Deploy') {
  	steps {
    	script {
      	if (env.BRANCH_NAME == 'main') {
        	sh 'npm run deploy:prod'
      	} else {
        	sh 'npm run deploy:stage'
      	}
    	}
  	}
	}
  }
 }

