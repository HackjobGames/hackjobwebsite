import Koa from 'koa'
import serve from 'koa-static'
import path from 'path'
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

app.use(serve(path.resolve('dist')))

app.use(router)

//app.listen(4400)

const http = http.createServer();

http.get('*', function(req, res) {  
  res.redirect('https://' + req.headers.host + req.url)
})

http.listen(80)

https.createServer(config, app.callback()).listen(443)

console.log('Listening...')