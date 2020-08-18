import Router from 'koa-router'
import body from 'koa-body'
import devlog from './devlog'

const router = new Router()

router.get('/devlog/:page', devlog.get)


export default router.routes()