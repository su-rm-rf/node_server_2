import 'reflect-metadata'

import Koa from 'koa'
import koaBody from 'koa-body'
import cors from 'koa2-cors'
import { koaSwagger } from 'koa2-swagger-ui'

import router from './router'

const port = 8602
const server = new Koa()

server.use(koaSwagger({
  routePrefix: '/swagger',
  swaggerOptions: {
    url: '/swagger.json'
  }
}))

server.use(cors())

server.use(koaBody({
  multipart: true
}))

server.use(router.routes())
.use(router.allowedMethods({
  // throw: true, // 抛出错误，代替设置响应头状态
  // notImplemented: () => '不支持当前请求所需要的功能',
  // methodNotAllowed: () => '不支持的请求方式'
}))

server.listen(port, () => {
  console.log(`server started at ${port}`)
})

