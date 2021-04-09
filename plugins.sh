#!/bin/bash
echo "Installing Vagrant Plugins"
vagrant plugin install vagrant-vmware-esxi
vagrant plugin install vagrant-winrm-syncedfolders

echo "Finished installing plugins"
