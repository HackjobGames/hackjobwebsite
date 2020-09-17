const Service = require('node-windows').Service

var svc = new Service({
  name:'HackjobGamesWebService',
  description: 'Root Service for all HackjobGames Websites',
  script: './src/index.js',
  nodeOptions: [
    '--harmony',
  ]
});

svc.on('install',function(){
  svc.start();
});

svc.install();