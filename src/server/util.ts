import { Pool } from 'pg'
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  host: process.env.INSTANCE_UNIX_SOCKET
})

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


