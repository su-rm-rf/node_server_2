import db from '../db'
import constants from '../constants'
import utils from '../utils'

const todo_list = async ctx => {
  const { completed } = ctx.request.query
  let sql = 'select * from todo'
  if (completed === '0' || completed === '1') {
    sql += ' where completed = ?'
  }
  const res:any = await db.sqlconnect(sql, [completed])
  utils.responseClient(ctx, constants.reqSuccess, '获取列表成功', res)
}

const todo_detail = async ctx => {

}

const todo_add = async ctx => {
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

const todo_update = async ctx => {
  const { id, completed } = ctx.request.body
  const sql = 'update todo set completed = ? where id = ?'
  const res:any = await db.sqlconnect(sql, [completed, id])
  if (res.affectedRows === 1) {
    utils.responseClient(ctx, constants.reqSuccess, '更新成功')
  } else {
    utils.responseClient(ctx, constants.dataFail, '更新失败')
  }
}

const todo_delete = async ctx => {

}

const todo_clear = async ctx => {
  const sql = 'delete from todo'
  const res:any = await db.sqlconnect(sql)
  utils.responseClient(ctx, constants.reqSuccess, '删除成功')
}

export default {
  todo_list, todo_detail, todo_add, todo_update, todo_delete, todo_clear
}