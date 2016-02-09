# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure(2) do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://atlas.hashicorp.com/search.
  config.vm.box = "halvards/lubuntu64"

  # Disable automatic box update checking. If you disable this, then
  # boxes will only be checked for updates when the user runs
  # `vagrant box outdated`. This is not recommended.
  # config.vm.box_check_update = false

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  # config.vm.network "forwarded_port", guest: 80, host: 8080

  # forward node http-server port 8080 to virtual machine
  config.vm.network "forwarded_port", guest: 8080, host: 8080

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  # config.vm.network "private_network", ip: "192.168.33.10"

  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
  # config.vm.network "public_network"

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  # config.vm.synced_folder "../data", "/vagrant_data"

  config.vm.synced_folder ".", "/home/vagrant/Desktop/script-wars"

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
  # config.vm.provider "virtualbox" do |vb|
  #   # Display the VirtualBox GUI when booting the machine
  #   vb.gui = true
  #
  #   # Customize the amount of memory on the VM:
  #   vb.memory = "1024"
  # end
  #
  # View the documentation for the provider you are using for more
  # information on available options.

  config.vm.provider "virtualbox" do |vb|
    # Display the VirtualBox GUI when booting the machine
    vb.gui = true

    # Customize the amount of memory on the VM:
	vb.memory = "1024"

    vb.customize ['modifyvm', :id, '--clipboard', 'bidirectional']

  end


  # Define a Vagrant Push strategy for pushing to Atlas. Other push strategies
  # such as FTP and Heroku are also available. See the documentation at
  # https://docs.vagrantup.com/v2/push/atlas.html for more information.
  # config.push.define "atlas" do |push|
  #   push.app = "YOUR_ATLAS_USERNAME/YOUR_APPLICATION_NAME"
  # end

  # Enable provisioning with a shell script. Additional provisioners such as
  # Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the
  # documentation for more information about their specific syntax and use.
  # config.vm.provision "shell", inline: <<-SHELL
  #   sudo apt-get update
  #   sudo apt-get install -y apache2
  # SHELL

  config.vm.provision "shell", privileged: false, inline: <<-SHELL
    echo '@setxkbmap -layout "pt"' | sudo tee -a /etc/xdg/lxsession/Lubuntu/autostart
    sudo setxkbmap -layout "pt"

    sudo update-locale LANG=en_US.UTF-8
    sudo dpkg-reconfigure locales

    # install nodejs
    sudo curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
    sudo apt-get install -y nodejs

    # print npm version
    npm --version

    # install build-essential
    sudo apt-get install -y build-essential

    # install utils pre-requisites
    sudo apt-get install -y make automake libtool curl unzip libgconf2-dev

    # install python 2.x
    sudo apt-get install -y python

    # install git
    sudo apt-get install -y git

    # install bower
    sudo npm install -g bower

	# install eslint + plugin for angular
	sudo npm install -g eslint
	sudo npm install -g eslint-plugin-angular

    # install typings
    sudo npm install -g typings --no-insight

    # install script-wars dependencies
    cd /home/vagrant/Desktop/script-wars
    npm install
    bower install
    typings install

    # change Desktop owner
    sudo chown vagrant:vagrant /home/vagrant/Desktop

    # install VS Code pre-requisites
    sudo apt-get install -y libnss3-dev

    # download Visual Studio Code package
    wget http://go.microsoft.com/fwlink/?LinkID=620884 -O VSCode-linux64.zip > /dev/null 2>&1
    unzip VSCode-linux64.zip -d /home/vagrant/Desktop

    cat >/home/vagrant/Desktop/Code.desktop <<'EOL'
[Desktop Entry]
Type=Application
Name=Visual Studio Code
Comment=Visual Studio Code
Categories=Applications
Exec=/home/vagrant/Desktop/VSCode-linux-x64/Code
StartupNotify=true
Terminal=false
EOL


    rm VSCode-linux64.zip

    echo "-----------------------------------------"
    echo "-----------------------------------------"
    echo "------    SCRIPT WARS DEV BOX     -------"
    echo "------       SETUP IS DONE        -------"
    echo "-----------------------------------------"
    echo "-----------------------------------------"

  SHELL

end