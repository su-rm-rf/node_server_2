import 'reflect-metadata'
import 'dotenv/config'

import { AppDataSource } from './data-source'

import Koa from 'koa'
import cors from 'koa2-cors'
import KoaBody from 'koa-body'
import { koaSwagger } from 'koa2-swagger-ui'

import router from './router'

AppDataSource.initialize().then(() => {
  const server = new Koa()
  
  server.use(koaSwagger({
    routePrefix: '/swagger',
    swaggerOptions: {
      url: '/swagger.json'
    }
  }))
  
  server.use(cors())
  
  server.use(KoaBody({
    multipart: true
  }))
  
  server.use(router.routes())
  .use(router.allowedMethods({
    // throw: true, // 抛出错误，代替设置响应头状态
    // notImplemented: () => '不支持当前请求所需要的功能',
    // methodNotAllowed: () => '不支持的请求方式'
  }))
  
  const PORT:Number = Number(process.env.PORT)
  server.listen(PORT, () => {
    console.log(`server started at ${PORT}`)
  })
})
.catch(err => console.log(err))