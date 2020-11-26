#
# Cookbook:: httpd_test
# Recipe:: default
#
# Copyright:: 2020, The Authors, All Rights Reserved.
template '/etc/chef' do
	source 'client.rb'
	owner 'root'
        group 'root'
        mode  '0666'
end
directory "/etc/chef" do
	owner 'root'
	group 'root'
	mode  '0666'
	recursive 'true'
end

package 'httpd' do

     action :install
end

service 'httpd' do
        action [ :enable, :start]

end

template '/var/www/html/index.html' do
	source 'index.html.erb'
end

