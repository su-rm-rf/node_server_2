/**
 * {
 *  code: 200 / 500,
 *  msg: 'xx' / 'yy',
 *  data: [] / {}
 * }
 */
const responseClient = (ctx, code, msg, data?) => {
  ctx.body = {
    code,
    msg,
    data,
  }
}

export default {
  responseClient
}