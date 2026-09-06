pipeline {
    agent any

    stages {
        stage('Install Node.js and npm') {
            steps {
                sh '''
                    sudo apt-get update
                    sudo apt-get install -y nodejs npm

                    node --version
                    npm --version
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Test') {
            steps {
                sh 'node test.js'
            }
        }
    }
}
