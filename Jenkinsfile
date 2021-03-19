pipeline {
    agent any

    stages {
        
        stage('Pull') { 
            steps {
                // Get some code from a GitHub repository
                git url: 'https://github.com/Herbriany/Tech-front-end-exercise.git', branch: 'main'
            }
        }
        
        stage('Build') {
            steps {
                // Run npm scripts.
                bat "npm install"
            }
        }
    }
}