import Koa from 'koa'
import query from './query'
import serve from 'koa-static'
import path from 'path'
const app = new Koa()

const requests = {
    devlogMain: () => {return query('SELECT * FROM devlog')}
}

app.use(serve(path.resolve('dist')))


app.use(async (ctx) => {
  console.log(ctx)
})

app.listen(3000)
console.log('Listening...')