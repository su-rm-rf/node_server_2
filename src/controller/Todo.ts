import db from '../db'
import constants from '../constants'
import utils from '../utils'

import { AppDataSource } from '../data-source'
import Todo from '../entity/Todo'

export default class TodoController {

  private todoRepository = AppDataSource.getRepository(Todo)

  async todo_list(ctx) {
    const { completed } = ctx.query
    let res = {}
    if (completed === '0' || completed === '1') {
      res = await AppDataSource.getRepository(Todo).findBy({ completed })
    } else {
      res = await AppDataSource.getRepository(Todo).find()
    }
    utils.responseClient(ctx, constants.reqSuccess, '获取列表成功', res)
  }
  
  async todo_detail(ctx) {
    const { id } = ctx.params
    let res = await AppDataSource.getRepository(Todo).findOneBy({ id })
    if (res) {
      utils.responseClient(ctx, constants.reqSuccess, '获取详情成功', res)
    } else {
      utils.responseClient(ctx, constants.dataFail, '获取详情失败', res)
    }
  }
  
  async todo_add(ctx) {
    const { text, completed } = ctx.request.body
    const sql = 'insert into todo set ?'
    const res:any = await db.sqlconnect(sql, {
      text,
      completed,
    })
    if (res.affectedRows === 1) {
      utils.responseClient(ctx, constants.reqSuccess, '保存成功')
    } else {
      utils.responseClient(ctx, constants.dataFail, '保存失败')
    }
  }
  
  async todo_update(ctx) {
    const { id, text, completed } = ctx.request.body
    const rp = AppDataSource.getRepository(Todo)
    let todo: any = await rp.findOneBy({ id })
    todo.text = text
    todo.completed = completed
    todo = await rp.save(todo)
    utils.responseClient(ctx, constants.reqSuccess, '更新成功', todo)
  }
  
  async todo_delete(ctx) {
    const { id } = ctx.request.body
    const res = await AppDataSource.getRepository(Todo).delete({ id })
    utils.responseClient(ctx, constants.reqSuccess, '删除成功', res)
  }
  
  async todo_clear(ctx) {
    const sql = 'delete from todo'
    const res:any = await db.sqlconnect(sql)
    utils.responseClient(ctx, constants.reqSuccess, '删除成功')
  }
}