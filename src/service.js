const Service = require('node-windows').Service

const svc = new Service({
  name:'HackjobGamesWebService',
  description: 'Root Service for all HackjobGames Websites',
  script: './src/service/index.js',
  nodeOptions: [
    '--harmony',
  ]
})

svc.on('install',function(){
  svc.start()
})

svc[process.argv[2]]()