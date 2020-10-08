const Service = require('node-windows').Service

const svc = new Service({
  name:'HackjobGamesWebService',
  description: 'Root Service for all HackjobGames Websites',
  script: './src/index.js',
  nodeOptions: [
    '--harmony',
  ]
})

svc.logOnAs.account = process.env.USERNAME
svc.logOnAs.password = process.env.PGPASSWORD

svc.on('install',function(){
  svc.start()
})

svc[process.argv[2]]()