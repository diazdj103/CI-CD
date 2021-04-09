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
        stage('Deploy') {
            steps {
                echo 'Deploying....Webserver1'
                sh 'vagrant up' 
                echo 'Deploying webserver2'
        dir("webserver") {
             sh "vangrant up"
              }
            }
        }
    }
}
