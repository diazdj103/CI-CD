# See http://docs.chef.io/config_rb.html for more information on knife configuration options

current_dir = File.dirname(__FILE__)
log_level                :info
log_location             STDOUT
node_name                "diazdj"
client_key               "#{current_dir}/diazdj.pem"
chef_server_url          "https://api.chef.io/organizations/diazdj"
cookbook_path            ["#{current_dir}/../cookbooks"]
validation_client_name "chef-validator"
validation_key "#{ENV["HOME"]}/.chef/validation.pem"
