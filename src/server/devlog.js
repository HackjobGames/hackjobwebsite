import { query } from './query'

const get = async (ctx) => {
  try {
    ctx.body = await query('SELECT * FROM Devlog')
    ctx.response.status = 200
  } catch (e) {
    console.log(e)
    ctx.body = e
    ctx.response.status = 500
  }
}

export default { get }