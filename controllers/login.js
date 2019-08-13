exports.login = ((req, res, next) => {
  res.render('login', {
      title: '登录'
  })
});