pipeline {
    agent {
        docker {
            image 'node:22'
        }
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
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
