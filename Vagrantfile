Vagrant.configure(2) do |config|
    config.vm.box = "ubuntu/trusty64"
    config.vm.network :forwarded_port, guest: 80, host: 8080
    config.vm.network :forwarded_port, guest: 80, host: 9000
    config.vm.network :forwarded_port, guest: 3306, host: 3306
    config.vm.network :private_network, ip: "192.168.68.8"
end