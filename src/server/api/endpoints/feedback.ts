import { query } from '../../util'

const cleanse = (string) => {
  const regex = /[\d\w\s\-\.?!\"\']/g
  return string.match(regex).join('').replace(/'/g, '\'\'')
}

export const get = async (ctx: KoaContext) => {
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

export const create = async (ctx: FeedbackContext) => {
  try {
    ctx.body = (await query(`insert into public.feedback (username, content)
    values ('${ctx.user.username}', '${cleanse(ctx.request.body.content)}') returning *`))[0]
    ctx.response.status = 200
  } catch (e) {
    console.log(e)
    ctx.response.status = 500
  }
}