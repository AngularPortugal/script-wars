# Script Wars :: hands-on introduction to Angular.js
--------------------------
Ao longo de 2 horas vamos aprender sobre controladores, modelos, serviços, templates para fazermos uma app de votação no teu filme favorito do Star Wars em [Angular.JS 1.4](https://angularjs.org/).

1.4? Sim, a força ainda não é suficientemente forte com o 2.0!


## Pré-requisitos:
--------------------------
- Conhecimentos de JavaScript, HTML5, CSS3

Para podes acompanhar o desenvolvimento, necessitas de ter instalado:
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- [Bower](http://bower.io/)
- O teu code editor favorito

Podes instalar no teu sistema ou em alternativa, criar uma máquina virtual com o Vagrant.


## Instruções para instalação dos pré-requisitos no teu computador:
--------------------------
- faz download e instala o [Git](https://git-scm.com/downloads) para o teu sistema
- faz download do pacote de instalação do Node.js para o teu sistema em https://nodejs.org/en/
- depois de teres o Node.js instalado, executa 'npm install -g bower' na linha de comandos


## Instruções para criação da máquina virtual com o Vagrant:
--------------------------
AngularPortugal

Instruções para criação da máquina virtual com o Vagrant em ambientes Microsoft Windows 

Primeiro é necessário instalar o seguinte software:

1 - Instalar o Oracle Virtual Box (https://www.virtualbox.org/wiki/Downloads)
2 - Instalar o Vangrad Universal  (https://www.vagrantup.com/downloads.html)



Apos a instalação incei o navegador de internet e introduza o seguinte endereço: https://github.com/AngularPortugal/script-wars/tree/workshop-steps .
Faça download para o local que pretende trabalhar por exemplo 'c:\temp2'.
Com o download completo extraia o ficheiro zip.

Inicie uma janela de linha de comandos e navegue para a pasta onde extraiu o zip. Ex. 'cd \temp2\script-wars-workshop-steps'.

Para criar automaticamente a máquina virtual digite o seguinte comando 'vagrant up' a máquina virtual vai iniciar automaticamente.
Os dados de acesso são:

 Utilizadr: vagrant
 Palavra passe: vagrant


Com a máquina virtual inciada é necessário instalar o seguinte:
 
GIT, firefox , bowere e nodejs insira os seguintes comandos não insira o '$': 
$ sudo apt-get update
$ sudo apt-get install git firefox 
$ sudo apt-get install libgconf-2-4 libnss3 libnss3-dev
$ sudo apt-get install node nodejs
$ sudo apt-get install wget unzip



Iniciar o workshop num local temporário

$ cd /tmp
$ wget https://github.com/AngularPortugal/script-wars/archive/workshop-steps.zip
$ unzip workshop-steps.zip
$ cd  cd script-wars-workshop-steps
$ sudo npm install -g bower
$ bower install jquery
$ bower install angular-bootstrap
$ bower install angular-animate
$ bower install lodash
$ sudo npm install angular
$ sudo npm install angular-animate
$ sudo npm install angular-bootstrap
$ sudo npm install nodejs
$ sudo npm install bootstrap


$ sudo npm-install
$ sudo npm start

Inicie o firefox e introduza o seguinte endereço: http://127.0.0.1:8080/

