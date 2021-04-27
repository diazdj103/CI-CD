pipeline {
    agent any
    parameters {
    choice(name: 'environment', choices: ['development', 'main', 'production'], description: 'Pick the environment branch')
  }
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'TEST_FLAG=true python3 plugins.py'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                dir("tests") {
             sh "python3 -m unittest discover"
              }   
            }
        }
        stage('Deploying Subsystem 1') {
            steps {
                echo 'Deploying....Webserver1'
                sh "echo This is from the \$environment"
                sh "python3 management.py \$environment" 
            }
        }
        stage('Deploying webserver2') {
            steps {
                echo 'Deploying..'
                dir("webserver") {
             sh "echo step"
              }
            }
        }
    }
}
