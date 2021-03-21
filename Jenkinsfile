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
                sh(script: 'npm install')
            }
        }
        stage('Run tests') {
            steps {
                sh(script: 'npm run test:ci')
            }
        }
        stage('Run Build') {
            options {
                timeout(time: 15, unit: 'HOURS')
            }
            steps {
                sh(script: 'npm run build' )
            }
            post {
                success {
                    echo "App build success :)"
                }
                failure {
                    echo "App build failed :("
                }
            }
        }
    }
}