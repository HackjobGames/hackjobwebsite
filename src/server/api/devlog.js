import { query } from '../query'
import fs from 'fs'

const isAdmin = async (token) => {
  token = token.replace(/'/g, '')
  const username = (await query(`select * from dbo.active where id = '${token}'`))[0].username
  return (await query(`select * from dbo.users where username = '${username}'`))[0].admin
}

export const get = async (ctx) => {
  try {
    ctx.body = await query(`SELECT * FROM api.Devlog
                            order by created desc`)
    ctx.response.status = 200
  } catch (e) {
    console.log(e)
    ctx.body = e
    ctx.response.status = 500
  }
}

export const update = async (ctx) => {
  try {
    if (!await(isAdmin(ctx.request.body.token))) {
      ctx.response.status = 401
      return
    }
    await query(`update api.devlog set 
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

export const create = async (ctx) => {
  try {
    if (!await(isAdmin(ctx.request.body.token))) {
      ctx.response.status = 401
      return
    }
    ctx.body = (await query(`insert into api.devlog (title, markdown)
                 values ('${ctx.request.body.title.replace(/'/g, '')}', '${ctx.request.body.markdown.replace(/'/g, '')}') returning *`))[0]
    ctx.response.status = 200
  } catch (e) {
    console.log(e)
    ctx.response.status = 500
  }
}

export const saveImage = async (ctx) => {
  // console.log(ctx.request.files.file)
  // require("fs").writeFileSync("out.png", fs.readFileSync(ctx.request.files.file.path))
  // ctx.response.status = 200
}
