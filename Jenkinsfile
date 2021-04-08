pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
		sh 'vagrant plugin install vagrant-vmware-esxi'
                sh 'vagrant plugin install vagrant-winrm-syncedfolders'
                sh 'vagrant plugin install vagrant-reload'
                sh 'vagrant up' 
            }
        }
    }
}
