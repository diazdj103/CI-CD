#Testing for required plugins
unless Vagrant.has_plugin?("vagrant-vmware-esxi")
  raise <<-eos
Error! Required 'vagrant-vmware-esxi' plugin is not installed.
Please run 'vagrant plugin install vagrant-dns'
eos
end
unless Vagrant.has_plugin?("vagrant-winrm-syncedfolders")
  raise <<-eos
Error! Required 'vagrant-winrm-syncedfolders' plugin is not installed.
Please run 'vagrant plugin install vagrant-dns'
eos
end
unless Vagrant.has_plugin?("vagrant-reload")
  raise <<-eos
Error! Required 'vagrant-reload' plugin is not installed.
Please run 'vagrant plugin install vagrant-dns'
eos
end
#####Testing Vagrant file complete


branch = `git rev-parse --abbrev-ref HEAD` 



Vagrant.configure('2') do |config|
  config.vm.define branch"-VM1" do |subconfig|
    subconfig.vm.box = 'generic/centos8'
    subconfig.vm.synced_folder('.', '/vagrant', type: 'nfs', disabled: true)
    subconfig.vm.provider :vmware_esxi do |esxi|
    #  REQUIRED!  ESXi hostname/IP
    esxi.esxi_hostname = '192.168.0.39' 
    #  ESXi username
    esxi.esxi_username = 'provision'
    esxi.esxi_password = 'P@sswordP@ssword'
    #  SSH port.
    esxi.esxi_hostport = 22
    esxi.guest_name = branch"-node01'
 end
end
 
  config.vm.provision :chef_client do |chef| 
	  chef.provisioning_path = "/etc/chef"
	  chef.chef_server_url = "https://api.chef.io/organizations/diazdj"
	  chef.validation_key_path = ".chef/diazdj.pem"
	  chef.validation_client_name = "diazdj"
	  chef.node_name = "Webserver01"
	  chef.arguments = "--chef-license accept"
	  chef.add_recipe "httpd_test::default"
 end
end
