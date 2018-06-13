Vagrant.configure(2) do |config|
    config.vm.box = "ubuntu/trusty64"
    config.vm.network :forwarded_port, guest: 80, host: 8080
    config.vm.network :private_network, ip: "192.168.68.8"
end