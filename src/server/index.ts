import Koa from 'koa'
import router from './routes'
import https from 'https'
import http from 'http'
import fs from 'fs'

process.chdir(__dirname)

const koaBodyFile = require('koa-body')({multipart: true})

const app = new Koa()

app.use(koaBodyFile); 

app.use(router)

if (!(process.env.ENVIRONMENT === "DEVELOPMENT")) {
  const config = {
    key: fs.readFileSync('C:\\Certbot\\live\\hackjob.games\\privkey.pem', 'utf8'),
    cert: fs.readFileSync('C:\\Certbot\\live\\hackjob.games\\fullchain.pem', 'utf8')
  }

  const unsafe = http.createServer(function(req, res) {  
    res.writeHead(302, {
      'Location': process.env.WEBSITE_URL + req.url
    })
    res.end()
  });

  unsafe.listen(80)

  https.createServer(config, app.callback()).listen(443)
} else {
  http.createServer(app.callback()).listen(4400)
}

console.log('Listening...')