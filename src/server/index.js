import Koa from 'koa'
import query from './query'
import serve from 'koa-static'
import path from 'path'
import ssl from 'koa-sslify'
import https from 'https'
import fs from 'fs'
const app = new Koa()

const requests = {
    devlogMain: () => {return query('SELECT * FROM devlog')}
}

app.use(ssl({
  port: 4400
}))

app.use(serve(path.resolve('dist')))


app.use(async (ctx) => {
  console.log(ctx)
})

const options = {
  key: fs.readFileSync('private.key'),
  cert: fs.readFileSync('certificate.crt')
}

https.createServer(options, app.callback()).listen(4400)
console.log('Listening...')