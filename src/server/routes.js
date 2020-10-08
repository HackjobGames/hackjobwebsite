import Router from 'koa-router'
import body from 'koa-body'
import path from 'path'
import api from './api'
import serve from 'koa-static'
const router = new Router()

router.get('/api/devlog/:page', api.devlog.get)
router.put('/api/devlog/save', api.devlog.update)
router.post('/api/devlog/create', api.devlog.create)
router.post('/api/devlog/image/:id', api.devlog.saveImage)
router.put('/api/users/signIn', api.users.signIn)
router.post('/api/users/signUp', api.users.signUp)

router.get('(.*)', async (ctx, next) => {
  if (ctx.request.url.includes('/index.js')) {
    ctx.request.url = '/index.js'
  } else if (ctx.request.url.includes('/index.map.js')) {
    ctx.request.url = '/index.map.js'
  } else if (ctx.request.url.includes('lib')) {
  } else if(ctx.request.url !== '/index.js' && ctx.request.url !== '/index.js.map') {
    ctx.request.url = '/'
  } 
  await serve(path.resolve('./dist'))(ctx, next)
})

export default router.routes()