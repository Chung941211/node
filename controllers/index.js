const consola  = require('consola')
const List = require('../models/list');

exports.home = ((req, res, next) => {
  let tempList = new List({
    title: '测试1',
    content: '测试内容'
  })
  tempList
  .save((err, fluffy) => {
    if (err) {
      return console.log(err);
    }
    consola.ready('保存成功')
  })
  
  res.render('index', {
      title: '首页'
  })
});
