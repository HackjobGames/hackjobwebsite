import Koa from 'koa'
import cors from '@koa/cors'
import query from './query'
const app = new Koa()

const clense = (string) => {
    string = string.replace(/--/, '')
    string = string.replace(/'/, '')
    return string
}

const requests = {
    devlogMain: () => {return query('SELECT * FROM devlog')},
    updateDevlog: (devlog) => {
        return query(`UPDATE TABLE devlog
                      SET summary = ${clense(JSON.stringify(devlog.summary))}
                      SET html = ${clense(JSON.stringify(devlog.html))}
                      WHERE ID = ${clense(JSON.stringify(ID))}`)
    }
}

app.use(cors())

app.use(async (ctx) => {
    console.log(ctx.headers)
    if(ctx.headers.request){
        ctx.response.body = JSON.stringify(await requests[ctx.headers.request]())
    } else {
        ctx.response.body = 'No Request'
    }
    
})

app.listen(3000)

