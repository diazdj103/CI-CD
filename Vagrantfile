

#### Development deploys here
Vagrant.configure('2') do |config|

  config.vm.define "development-vm1" do |config|
    config.vm.box = 'generic/centos8'
    config.vm.synced_folder('.', '/vagrant', type: 'nfs', disabled: true)
    config.vm.provider :vmware_esxi do |esxi|
    esxi.esxi_hostname = '192.168.0.166' 
    esxi.esxi_username = 'root'
    esxi.esxi_password = 'GOtohell103@@'
    esxi.esxi_hostport = 22
    esxi.guest_name = "development-vm1"
end
end
  config.vm.define "development-vm2" do |subconfig|
    subconfig.vm.box = 'generic/centos8'
    subconfig.vm.synced_folder('.', '/vagrant', type: 'nfs', disabled: true)
    subconfig.vm.provider :vmware_esxi do |esxi|
    esxi.esxi_hostname = '192.168.0.166' 
    esxi.esxi_username = 'root'
    esxi.esxi_password = 'GOtohell103@@'
    esxi.esxi_hostport = 22
    esxi.guest_name = "development-vm2"
end
end
### Main starts here
config.vm.define "main-vm1" do |config|
  config.vm.box = 'generic/centos8'
  config.vm.synced_folder('.', '/vagrant', type: 'nfs', disabled: true)
  config.vm.provider :vmware_esxi do |esxi|
  esxi.esxi_hostname = '192.168.0.166' 
  esxi.esxi_username = 'root'
  esxi.esxi_password = 'GOtohell103@@'
  esxi.esxi_hostport = 22
  esxi.guest_name = "main-vm1"

end
end
config.vm.define "main-vm2" do |subconfig|
  subconfig.vm.box = 'generic/centos8'
  subconfig.vm.synced_folder('.', '/vagrant', type: 'nfs', disabled: true)
  subconfig.vm.provider :vmware_esxi do |esxi|
  esxi.esxi_hostname = '192.168.0.166' 
  esxi.esxi_username = 'root'
  esxi.esxi_password = 'GOtohell103@@'
  esxi.esxi_hostport = 22
  esxi.guest_name = "main-vm2"
end
end
####Production starts here
config.vm.define "production-vm1" do |config|
  config.vm.box = 'generic/centos8'
  config.vm.synced_folder('.', '/vagrant', type: 'nfs', disabled: true)
  config.vm.provider :vmware_esxi do |esxi|
  esxi.esxi_hostname = '192.168.0.166' 
  esxi.esxi_username = 'root'
  esxi.esxi_password = 'GOtohell103@@'
  esxi.esxi_hostport = 22
  esxi.guest_name = "production-vm1"
end
end
config.vm.define "production-vm2" do |subconfig|
  subconfig.vm.box = 'generic/centos8'
  subconfig.vm.synced_folder('.', '/vagrant', type: 'nfs', disabled: true)
  subconfig.vm.provider :vmware_esxi do |esxi|
  esxi.esxi_hostname = '192.168.0.166' 
  esxi.esxi_username = 'root'
  esxi.esxi_password = 'GOtohell103@@'
  esxi.esxi_hostport = 22
  esxi.guest_name = "production-vm2"
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