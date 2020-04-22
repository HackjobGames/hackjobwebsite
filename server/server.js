// import Koa from 'koa'
// import cors from '@koa/cors'
// import query from './query'
// const app = new Koa()

// const requests = {
//     devlogMain: () => {return query('SELECT * FROM devlog')}
// }

// app.use(cors())

// app.use(async (ctx, next) => {
//     console.log(ctx.headers)
//     if(ctx.headers.request){
//         ctx.response.body = JSON.stringify(await requests[ctx.headers.request]())
//     } else {
//         ctx.response.body = 'No Request'
//     }
    
// })

// app.listen(4400)

