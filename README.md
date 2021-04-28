This is for learning to Devloping a CI/CD pipeline.
==========

 This repo uses python, jenkins, java, vagrant, and kubernetes. The Goal is to have multiple evronments that are variable based deployments. (Test, Development, and Production)

Overview
========

The goal is to use jenkins as the automated workflow mechanism to deploy infrastructure as code. The tool used to deploy environments. The root level jenkins file will pass parameters to the vagrant file to have unique environments. The deploy will use containers to deploy a webserver, a python application, and a java application. 

Repository Directories
======================

This repository contains several directories, and each directory contains a README file that describes what it is for in greater detail.
* `Vagrantfile`
* `Jenkinsfile` 
* `cookbooks/` - Cookbooks you download or create.
* `data_bags/` - Store data bags and items in .json in the repository.
* `roles/` - Store roles in .rb or .json in the repository.
* `environments/` - Store environments in .rb or .json in the repository.

Configuration
=============

The repository contains a knife configuration file.

* .chef/knife.rb

The knife configuration file `.chef/knife.rb` is a repository specific configuration file for knife. If you're using Hosted Chef, you can download one for your organization from the management console. If you're using the Open Source Chef Server, you can generate a new one with `knife configure`. For more information about configuring Knife, see the Knife documentation.

* Jenkinsfile to orchestrate the builds
* Vagrantfile to build items 

Next Steps
==========

Read the README file in each of the subdirectories for more information about what goes in those directories.
