pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building application...'
                sh './build.sh'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh './test.sh'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                sh './deploy.sh'
            }
        }
    }
}
