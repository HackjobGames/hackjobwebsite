import Koa from 'koa'
import router from './routes'
import https from 'https'
import http from 'http'
import fs from 'fs'
const koaBodyFile = require('koa-body')({multipart: true})

const app = new Koa()

// const config = {
//   key: fs.readFileSync('./ssl/private.key', 'utf8'),
//   cert: fs.readFileSync('./ssl/hackjob_games.crt', 'utf8'),
//   ca: fs.readFileSync('./ssl/hackjob_games.ca-bundle', 'utf8')
// }
app.use(koaBodyFile);

app.use(router)

// app.listen(4400)

const unsafe = http.createServer(function(req, res) {  
  res.writeHead(302, {
    'Location': 'https://hackjob.games' + req.url
  })
  res.end()
});

unsafe.listen(3000)

app.listen(3001)

console.log('Listening...')