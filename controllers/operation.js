const postingModel = require('../models/posting').Posing

exports.add = (async (req, res, next) => {
  const { id } = req.query
  let data = null
  if (id && id !== '') {
    data = await postingModel.findOne({id}, function(error, result) {
      if (error) {
        return next(error)
      }
      if (result) {
        return result
      }
    })
  }
  res.render('detail', {
      title: '增加文章',
      data
  })
});