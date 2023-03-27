import Router from 'koa-router'
import path from 'path'
import swaggerJsdoc from 'swagger-jsdoc'

const router = new Router()

const options = {
  failOnErrors: true,
  definition: {
    openapi: '3.0.2',
    info: {
      title: 'node_server服务API',
      version: '1.0.0',
      // description: 'node_server服务API文档'
    },
    host: 'localhost:8602',
    basePath: '/'
  },
  apis: [path.join(__dirname, '../router/*.ts')]
}

const swaggerSpec = swaggerJsdoc(options)

router.get('/swagger.json', async (ctx) => {
  ctx.set('Content-Type', 'application/json')
  ctx.body = swaggerSpec
})

export default router