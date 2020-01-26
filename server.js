const Koa = require('koa')
const serve  = require('koa-static')
const fs = require('fs')
const path = require('path')
const app = new Koa()

app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log('%s %s - %s', ctx.method, ctx.url, ms)
})


app.use(serve(path.resolve('./')))

app.listen(3000)