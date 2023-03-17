import Router from 'koa-router'

const router = new Router({
  prefix: ''
})

router.get('/', (ctx, next) => {
  ctx.body = 'hello koa'
})
.post('/', (ctx, next) => {
  console.log(ctx.request.body)
  ctx.body = 'post result'
})

export default router