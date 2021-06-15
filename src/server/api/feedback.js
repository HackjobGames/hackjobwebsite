import { query } from '../query'

const cleanse = (string) => {
  const regex = /[\d\w\s\-\.?!\"\']/g
  return string.match(regex).join('').replace(/'/g, '\'\'')
}

export const get = async (ctx) => {
  try {
    ctx.body = await query(`SELECT * FROM public.feedback
                            order by created desc`)
    ctx.response.status = 200
  } catch (e) {
    console.log(e)
    ctx.body = e
    ctx.response.status = 500
  }
}

export const create = async (ctx) => {
  try {
    const valid = await query(`select username from public.active where id = '${cleanse(ctx.request.body.token)}'`)
    if (valid.length > 0) {
      ctx.body = (await query(`insert into public.feedback (username, content)
      values ('${valid[0].username}', '${cleanse(ctx.request.body.content)}') returning *`))[0]
      ctx.response.status = 200
    } else {
      ctx.body = 'Invalid Request'
      ctx.response.status = 500
    }
  } catch (e) {
    console.log(e)
    ctx.response.status = 500
  }
}