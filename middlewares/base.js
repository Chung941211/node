/**
 * base 主类
 */

class base {
  
  constructor () {
  }

  responseClient (res, code = 500, status = 1000, message = '服务端异常，请与管理员联系', data = {}) {
    res.status{code}.json({
      code,
      message,
      data
    })
  }
}

export default base