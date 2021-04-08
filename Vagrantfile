
Vagrant.configure('2') do |config|
  config.vm.define "VM1" do |subconfig|
    subconfig.vm.box = 'generic/centos8'
    subconfig.vm.provision :chef_client do |chef| 
	    chef.provisioning_path = "/etc/chef"
	    chef.chef_server_url = "https://api.chef.io/organizations/diazdj"
	    chef.validation_key_path = ".chef/diazdj.pem"
	    chef.validation_client_name = "diazdj"
	    chef.node_name = "Webserver01"
	    chef.arguments = "--chef-license accept"
	    chef.add_recipe "httpd_test::default"
    subconfig.vm.synced_folder('.', '/vagrant', type: 'nfs', disabled: true)
    subconfig.vm.provider :vmware_esxi do |esxi|
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
end
 
config.vm.define "VM2" do |subconfig1|
  subconfig1.vm.box = 'generic/centos8'
  subconfig1.vm.provision :chef_client do |chef| 
	  chef.provisioning_path = "/etc/chef"
	  chef.chef_server_url = "https://api.chef.io/organizations/diazdj"
	  chef.validation_key_path = ".chef/diazdj.pem"
	  chef.validation_client_name = "diazdj"
	  chef.node_name = "Webserver01"
	  chef.arguments = "--chef-license accept"
	  chef.add_recipe "httpd_test::default"
  subconfig1.vm.synced_folder('.', '/vagrant', type: 'nfs', disabled: true)
  subconfig1.vm.provider :vmware_esxi do |esxi|
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
end
