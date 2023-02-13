import Koa from 'koa'

const server = new Koa()
const port = 8602

server.use(async ctx => {
  ctx.body = 'hello koa'
})

server.listen(port, () => {
  console.log(`server started at ${port}`)
})