pipeline {
    agent {
        docker {
            image 'node:6.1' 
            args '-p 3000:3000 -u 0:0'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing'
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying'
                sh 'npm start'
            }
        }
    }
}