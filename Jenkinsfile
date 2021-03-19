pipeline {
    agent any

    stages {
        
        stage('Pull') { 
            steps {
                // Get some code from a GitHub repository
                echo "$GIT_BRANCH"
            }
        }
        stage('Docker Build') {
            steps {
                bat(script: 'npm install')
            }
        }
    }
}