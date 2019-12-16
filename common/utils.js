/**
 * utils 公共模块
 */
const moment = require('moment')
exports.response = response = (res, status = 1003, msg = '服务器发生内部错误', data = {}) => {
  res.json({
    status,
    msg,
    data
  })
}

 exports.handleTime = time => moment(time).format('YYYY-MM-DD HH:mm')