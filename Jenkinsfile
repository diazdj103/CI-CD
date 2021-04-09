pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'vagrant plugin install vagrant-vmware-esxi'
                sh 'vagrant plugin install vagrant-winrm-syncedfolders'
                sh 'vagrant plugin install vagrant-reload'
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
                sh 'vagrant up' 
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
