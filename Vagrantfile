
Vagrant.configure('2') do |config|

  config.vm.box = 'generic/centos8'
  config.vm.provision :chef_client do |chef| 
	chef.provisioning_path = "/etc/chef"
	chef.chef_server_url = "https://api.chef.io/organizations/diazdj"
	chef.validation_key_path = ".chef/diazdj.pem"
	chef.validation_client_name = "diazdj"
	chef.node_name = "Webserver01"
	chef.arguments = "--chef-license accept"
	chef.add_recipe "httpd_test::default"
  config.vm.synced_folder('.', '/vagrant', type: 'nfs', disabled: true)

  config.vm.provider :vmware_esxi do |esxi|
    #  REQUIRED!  ESXi hostname/IP
    esxi.esxi_hostname = '192.168.0.166' 
    #  ESXi username
    esxi.esxi_username = 'root'
    esxi.esxi_password = 'GOdofwar103@@'
    #  SSH port.
    esxi.esxi_hostport = 22
    esxi.guest_name = 'test-node01'
   end
  end
  config.vm.box = 'generic/centos8'
  config.vm.provision :chef_client do |chef| 
	chef.provisioning_path = "/etc/chef"
	chef.chef_server_url = "https://api.chef.io/organizations/diazdj"
	chef.validation_key_path = ".chef/diazdj.pem"
	chef.validation_client_name = "diazdj"
	chef.node_name = "Webserver02"
	chef.arguments = "--chef-license accept"
	chef.add_recipe "httpd_test::default"
  config.vm.synced_folder('.', '/vagrant', type: 'nfs', disabled: true)

  config.vm.provider :vmware_esxi do |esxi|
    #  REQUIRED!  ESXi hostname/IP
    esxi.esxi_hostname = '192.168.0.166' 
    #  ESXi username
    esxi.esxi_username = 'root'
    esxi.esxi_password = 'GOdofwar103@@'
    #  SSH port.
    esxi.esxi_hostport = 22
    esxi.guest_name = 'test-node02'
   end
  end
end
