/**
 * 权限中间件
 */
const response = require('../common/utils').response

exports.userChcek = (req, res, next) => {
  console.log(req.session)
  if (!req.session) {
    return response(res, 1003, '没有权限')
  }
  next()
}