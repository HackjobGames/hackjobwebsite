import { query } from '../query'

const regex = /[\d\w\s\.?!\"\']/g

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
    const valid = (await query(`select * from public.active where username = '${ctx.username}' and id = '${ctx.token}'`))
    if (valid && !username.match(/\'/)) {
      ctx.body = (await query(`insert into public.feedback (name, content)
      values ('${ctx.request.username}', '${ctx.request.content.match(regex).join('').replace(/'/g, '\'\'')}') returning *`))[0]
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