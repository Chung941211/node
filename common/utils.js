/**
 * utils 公共模块
 */

 exports.response = response = (res, status = 1003, msg = '服务器发生内部错误', data = {}) => {
  res.json({
    status,
    msg,
    data
  })
 }