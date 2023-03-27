// import Router from 'koa-router'
import router from '../utils/swagger'

import TodoController from '../controllers/Todo'

const { 
  todo_list, todo_detail, todo_add, todo_update, todo_delete, todo_clear
} = new TodoController()

// const router = new Router({
//   prefix: ''
// })

/**
 * @openapi
 * /:
 *  get:
 *    description: welcome to / page
 *    responses:
 *      200:
 *        description: success
 */
router.get('/', async ctx => {
  ctx.body = '-'
})

/**
 * @openapi
 * /todo/list:
 *  get:
 *    description: get todo list
 *    responses:
 *      200:
 *        description: success.
 */
.get('/todo/list', todo_list)

.get('/todo/:id', todo_detail)

.post('/todo/add', todo_add)

.post('/todo/update', todo_update)

.post('/todo/delete/:id', todo_delete)

.post('/todo/clear', todo_clear)

export default router