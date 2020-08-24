import Koa from 'koa'
import router from './routes'
import https from 'https'
import http from 'http'
import fs from 'fs'
const app = new Koa()

const config = {
  key: fs.readFileSync('./ssl/private.key', 'utf8'),
  cert: fs.readFileSync('./ssl/hackjob_games.crt', 'utf8'),
  ca: fs.readFileSync('./ssl/hackjob_games.ca-bundle', 'utf8')
}

app.use(router)

app.listen(4401)

// const unsafe = http.createServer(function(req, res) {  
//   res.writeHead(302, {
//     'Location': 'https://' + req.headers.host + req.url
//   })
//   res.end()
  
// });

// unsafe.listen(80)

// https.createServer(config, app.callback()).listen(443)

console.log('Listening...')