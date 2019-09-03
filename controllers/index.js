const postingModel = require('../models/posting').Posing

exports.home = ((req, res, next) => {

  let data = {}
  const { limit = 20 } = req.query    
  
  let filter = {}
  let options = {
      limit,
      sort: {}
  }

  postingModel.find(filter, 'title', options, (error, result) => {
      if (!error) {
        data = result
      }
  })
  res.render('index', {
      title: '首页',
      data
  })
});
