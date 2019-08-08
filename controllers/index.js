exports.home = ((req, res, next) => {
  res.render('index', {
      title: '首页'
  })
});