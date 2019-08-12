exports.home = ((req, res, next) => {
  res.render('index', {
      title: '首页'
  })
});

exports.list = ((req, res, next) => {
  res.render('list', {
      title: '列表'
  })
});