pipeline {
    agent any
    parameters {
    choice(name: 'Environment', choices: ['development', 'main', 'production'],defaultValue: 'development', description: 'Pick the environment branch')
  }
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'bash plugins.sh'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploying Webserver1') {
            steps {
                echo 'Deploying....Webserver1'
                sh "vagrant up " + environment
            }
        }
        stage('Deploying webserver2') {
            steps {
                echo 'Deploying..'
                dir("webserver") {
             sh "vagrant up"
              }
            }
        }
    }
}
