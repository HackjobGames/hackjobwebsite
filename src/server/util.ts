import { Pool } from 'pg'
const pool = new Pool()

pool.connect()
 
export const query = async (sql: string) => { 
  const rows = (await pool.query(sql)).rows
  return rows
}

export const errorHandle = async(ctx, next) => {
  try {
    ctx.status = null
    await next(ctx)
  } catch (e) {
    console.log(e)
    if (!ctx.status) {
      ctx.status = 500
    }
  }
}


