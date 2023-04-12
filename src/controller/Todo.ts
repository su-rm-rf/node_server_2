import constants from '../constants'
import utils from '../utils'

import { AppDataSource } from '../data-source'
import Todo from '../entity/Todo'

const todoRep = AppDataSource.getRepository(Todo)

export default class TodoController {

  async todo_list(ctx) {
    const { completed } = ctx.query
    let res = {}
    if (completed === '0' || completed === '1') {
      res = await todoRep.findBy({ completed })
    } else {
      res = await todoRep.find()
    }
    utils.responseClient(ctx, constants.reqSuccess, '获取列表成功', res)
  }
  
  async todo_detail(ctx) {
    const { id } = ctx.params
    const todo: Todo | null = await todoRep.findOneBy({ id })
    if (todo) {
      utils.responseClient(ctx, constants.reqSuccess, '获取详情成功', todo)
    } else {
      utils.responseClient(ctx, constants.dataFail, '获取详情失败', todo)
    }
  }
  
  async todo_add(ctx) {
    const { text, completed } = ctx.request.body
    const todo = new Todo()
    todo.text = text
    todo.completed = completed
    const res = await todoRep.save(todo)
    if (res) {
      utils.responseClient(ctx, constants.reqSuccess, '保存成功')
    } else {
      utils.responseClient(ctx, constants.dataFail, '保存失败')
    }
  }
  
  async todo_update(ctx) {
    const { id, text, completed } = ctx.request.body
    let todo: Todo | null = await todoRep.findOneBy({ id })
    if (todo) {
      todo.text = text
      todo.completed = completed
      todo = await todoRep.save(todo)
      utils.responseClient(ctx, constants.reqSuccess, '更新成功', todo)
    } else {
      utils.responseClient(ctx, constants.dataFail, '更新失败', todo)
    }
  }
  
  async todo_delete(ctx) {
    const { id } = ctx.request.body
    const res = await todoRep.delete({ id })
    utils.responseClient(ctx, constants.reqSuccess, '删除成功', res)
  }
  
  async todo_clear(ctx) {
    const sql = 'delete from todo'
    const res = await todoRep.clear()
    utils.responseClient(ctx, constants.reqSuccess, '删除成功')
  }
}