import { query } from '../../util'
import fs from 'fs'
import { v4 } from 'uuid'

export const get = async (ctx: KoaContext) => {
  try {
    ctx.body = await query(`SELECT * FROM public.Devlog
                            order by created desc`)
    ctx.response.status = 200
  } catch (e) {
    console.log(e)
    ctx.body = e
    ctx.response.status = 500
  }
}

export const update = async (ctx: DevlogContext) => {
  try {
    if (!await(ctx.user.admin)) {
      ctx.response.status = 401
      return
    }
    await query(`update public.Devlog set 
                  markdown = '${ctx.request.body.markdown.replace(/'/g, '')}',
                  title = '${ctx.request.body.title.replace(/'/g, '')}'
                  where id = '${ctx.request.body.id.replace(/'/g, '')}'`)
    ctx.body = ctx.request.body
    ctx.response.status = 200
  } catch (e) {
    console.log(e)
    ctx.response.status = 500
  }
}

export const create = async (ctx: DevlogContext) => {
  try {
    if (!ctx.user.admin) {
      ctx.response.status = 401
      return
    }
    ctx.body = (await query(`insert into public.Devlog (id, title, markdown)
                 values ('${ctx.request.body.id}', '${ctx.request.body.title.replace(/'/g, '')}', '${ctx.request.body.markdown.replace(/'/g, '')}') returning *`))[0]
    if (!fs.existsSync('./dist/images/devlog/' + ctx.body.id)) {
      fs.mkdirSync('./dist/images/devlog/' + ctx.body.id)
    }
    ctx.response.status = 200
  } catch (e) {
    console.log(e)
    ctx.response.status = 500
  }
}

export const saveImage = async (ctx: DevlogContext) => {
  if (!ctx.user.admin) {
    ctx.response.status = 401
    return
  }
  if (!fs.existsSync('./dist/images/devlog/' + ctx.request.body.id)) {
    fs.mkdirSync('./dist/images/devlog/' + ctx.request.body.id)
  }
  const path = './dist/images/devlog/' + ctx.request.body.id + '/' + v4() + '.png'
  require("fs").writeFileSync(path, fs.readFileSync(ctx.request.files.file.path))
  ctx.body = path.replace('./dist', '')
  ctx.response.status = 200
}
