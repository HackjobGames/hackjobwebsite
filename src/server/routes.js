import Router from 'koa-router'
import body from 'koa-body'
import path from 'path'
import devlog from './devlog'
import serve from 'koa-static'
const router = new Router()

router.get('/devlog/:page', devlog.get)
router.get('(.*)', async (ctx, next) => {
  if(ctx.request.url !== '/index.js' && ctx.request.url !== '/index.js.map') ctx.request.url = '/'
  await serve(path.resolve('./dist'))(ctx, next)
})

export default router.routes()