import Router from 'koa-router'
import serve from 'koa-static'
import * as api from './api'

const router = new Router()

router.use()


router.post('/signIn', api.auth.signIn)
router.post('/signUp', api.auth.signUp)
router.post('/signOut', api.auth.signOut)

router.get('/api/devlog', api.devlog.get)

router.get('(.*)', async (ctx, next) => {
  if (ctx.request.url.includes('/index.js')) {
    ctx.request.url = '/index.js'
  } else if (ctx.request.url.includes('/index.map.js')) {
    ctx.request.url = '/index.map.js'
  } else if (ctx.request.url.includes('lib') || ctx.request.url.includes('images') || ctx.request.url.includes('resources')) {
  } else if(ctx.request.url !== '/index.js' && ctx.request.url !== '/index.js.map') {
    ctx.request.url = '/'
  } 
  await serve('../client')(ctx, next)
})

export default router.routes()