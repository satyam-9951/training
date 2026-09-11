pipeline {
    agent any

    environment {
        NODE_VERSION = '20.19.0'
        NODE_HOME = "${WORKSPACE}/node"
        PATH = "${WORKSPACE}/node/bin:${env.PATH}"
    }

    stages {
        stage('Install Node.js') {
            steps {
                sh '''
                    set -e

                    echo "Installing Node.js ${NODE_VERSION}..."

                    rm -rf "$NODE_HOME"
                    mkdir -p "$NODE_HOME"

                    curl -fsSL \
                      "https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-x64.tar.gz" \
                      -o node.tar.gz

                    tar -xzf node.tar.gz \
                      --strip-components=1 \
                      -C "$NODE_HOME"

                    rm -f node.tar.gz

                    echo "Node version:"
                    node --version

                    echo "npm version:"
                    npm --version
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                    if [ -f package.json ]; then
                        npm install
                    fi
                '''
            }
        }

        stage('Run Test') {
            steps {
                sh 'node test.js'
            }
        }
    }
}
