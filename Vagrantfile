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


#### Development deploys here
Vagrant.configure('2') do |config|
    config.vm.define "development-vm1" do |config|
    config.vm.box = 'generic/centos8'
    config.vm.synced_folder('.', '/vagrant', type: 'nfs', disabled: true)
    config.vm.provider :vmware_esxi do |esxi|
    esxi.esxi_hostname = '192.168.0.166' 
    esxi.esxi_username = 'root'
    esxi.esxi_password = 'GOdofwar103@@'
    esxi.esxi_hostport = 22
    esxi.guest_name = "development-vm1"
    config.chef.provisioning_path = "/etc/chef"
	  config.chef.chef_server_url = "https://api.chef.io/organizations/diazdj"
	  config.chef.validation_key_path = ".chef/diazdj.pem"
	  config.chef.validation_client_name = "diazdj"
	  config.chef.node_name = "Webserver01"
	  config.chef.arguments = "--chef-license accept"
	  config.chef.add_recipe "httpd_test::default"
end
end


  config.vm.define "development-vm2" do |subconfig|
    subconfig.vm.box = 'generic/centos8'
    subconfig.vm.synced_folder('.', '/vagrant', type: 'nfs', disabled: true)
    subconfig.vm.provider :vmware_esxi do |esxi|
    esxi.esxi_hostname = '192.168.0.166' 
    esxi.esxi_username = 'root'
    esxi.esxi_password = 'GOdofwar103@@'
    esxi.esxi_hostport = 22
    esxi.guest_name = "development-vm2"
    subconfig.chef.provisioning_path = "/etc/chef"
	  subconfig.chef.chef_server_url = "https://api.chef.io/organizations/diazdj"
	  subconfig.chef.validation_key_path = ".chef/diazdj.pem"
	  subconfig.chef.validation_client_name = "diazdj"
	  subconfig.chef.node_name = "Webserver01"
	  subconfig.chef.arguments = "--chef-license accept"
	  subconfig.chef.add_recipe "httpd_test::default"
end
end

  #config.vm.provision :chef_client do |chef| 
	 # chef.provisioning_path = "/etc/chef"
	  #chef.chef_server_url = "https://api.chef.io/organizations/diazdj"
	  #chef.validation_key_path = ".chef/diazdj.pem"
	  #chef.validation_client_name = "diazdj"
	  #chef.node_name = "Webserver01"
	  #chef.arguments = "--chef-license accept"
	  #chef.add_recipe "httpd_test::default"
#end
end