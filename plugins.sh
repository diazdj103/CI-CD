#!/bin/bash
echo "Installing Vagrant Plugins"
vagrant plugin install vagrant-vmware-esxi
vagrant plugin install vagrant-winrm-syncedfolders
vagrant plugin install vagrant-reload
echo "Finished installing plugins"
