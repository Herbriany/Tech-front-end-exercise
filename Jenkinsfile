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
                pwsh(script: 'npm install')
            }
        }
    }
}