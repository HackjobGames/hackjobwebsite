import Koa from 'koa'
import cors from '@koa/cors'
import query from './query'
import bcrypt from 'bcrypt'
const app = new Koa()

const cleanse = (string) => {
    string = string.replace(/--/, '')
    string = string.replace(/'/, '')
    return string
}

const requests = {
    devlogMain: (args) => {return query('SELECT * FROM devlog')},
    updateDevlog: (args) => {
        return query(`UPDATE TABLE devlog
                      SET summary = '${cleanse(JSON.stringify(args.summary))}'
                      SET html = '${cleanse(JSON.stringify(args.html))}'
                      WHERE ID = '${cleanse(JSON.stringify(ID))}'`)
    },
    login: async (args) => {
        let results = await query(`SELECT * FROM users
                                   WHERE USERNAME = '${cleanse(args.username)}'`)
        return bcrypt.compareSync(args.password, results[0].passhash)
        return (results.length === 1 && bcrypt.compareSync(args.password, results[0].passhash))
    }
}

app.use(cors())

app.use(async (ctx) => {
    console.log(ctx.headers)
    if(ctx.headers.request){
        try{
            ctx.response.body = JSON.stringify(await requests[ctx.headers.request]((ctx.headers.args) ? JSON.parse(ctx.headers.args): ''))
        } catch (e){
            ctx.response.body = e.message
        }
    } else {
        ctx.response.body = 'No Request'
    }
    
})

app.listen(3000)

