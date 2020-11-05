import Koa from 'koa'
import router from './routes'
import https from 'https'
import http from 'http'
import fs from 'fs'
const koaBodyFile = require('koa-body')({multipart: true})

const app = new Koa()

console.log(process.cwd())

const config = {
  key: fs.readFileSync('./ssl/server.key', 'utf8'),
  cert: fs.readFileSync('./ssl/server.crt', 'utf8'),
  ca: fs.readFileSync('./ssl/server.ca-bundle', 'utf8')
}

app.use(koaBodyFile);

app.use(router)

const unsafe = http.createServer(function(req, res) {  
  res.writeHead(302, {
    'Location': 'https://hackjob.games' + req.url
  })
  res.end()
});

unsafe.listen(80)

https.createServer(config, app.callback()).listen(443)

console.log('Listening...')