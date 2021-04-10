pipeline {
    agent any

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
                sh "branch="env.BRANCH_NAME; "vagrant up $branch" 
            }
        }
        stage('Deploying webserver2') {
            steps {
                echo 'Deploying..'
                dir("webserver") {
             sh "branch=" + env.BRANCH_NAME; "vagrant up $branch"
              }
            }
        }
    }
}
