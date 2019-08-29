/**
 * utils 公共模块
 */

 exports.response = response = (res, http = 500, status = 1003, msg = '服务器发生内部错误', data = {}) => {
  res.status(http).json({
    status,
    msg,
    data
  })
 }