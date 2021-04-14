pipeline {
    agent any
     properties([parameters([choice(choices: ['development', 'main', 'production'], description: 'These options will tell the build file which environment to build', name: 'Branch Builds')])])
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
                sh "vagrant up " + DEPLOY_ENV
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
