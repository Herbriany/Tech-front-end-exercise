pipeline {
    agent any

    stages {
        
        stage('Pull') { 
            steps {
                // Get some code from a GitHub repository
                echo "$GIT_BRANCH"
            }
        }
        stage('Build Install') {
            steps {
                bat(script: 'npm install')
            }
        }
        stage('Run tests') {
            steps {
                bat(script: 'npm run test:ci')
            }
        }
        stage('Run Build') {
            steps {
                bat(script: 'npm run build' )
            }
        }
    }
}