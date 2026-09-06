pipeline {
    agent any

    stages {
        stage('Install Node.js and npm') {
            steps {
                sh '''
                    apt-get update
                    apt-get install -y nodejs npm

                    node --version
                    npm --version
                '''
            }
        }

        stage('Run Test') {
            steps {
                sh '''
                    npm install
                    node test.js
                '''
            }
        }
    }
}
