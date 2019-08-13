const models = require('../models/list');
const List = models.list;

exports.home = ((req, res, next) => {
  let tempList = new List({
    title: '测试1',
    content: '测试内容'
  })

  tempList.save().then(data => responseClient(res, 200, 0, '保存成功', data))
  .catch(err => responseClient(err))
  
  res.render('index', {
      title: '首页'
  })
});
