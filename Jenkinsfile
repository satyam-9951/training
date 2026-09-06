pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Check Node.js') {
            steps {
                sh '''
                    echo "Checking Node.js..."
                    which node || true
                    node --version || true
                    npm --version || true
                '''
            }
        }

        stage('Run test.js') {
            steps {
                sh 'node test.js'
            }
        }
    }

    post {
        success {
            echo 'test.js executed successfully.'
        }

        failure {
            echo 'test.js execution failed.'
        }
    }
}
