const postingModel = require('../models/posting').Posing
const time = require('../common/utils').handleTime

exports.add = (async (req, res, next) => {
  const { id } = req.query

  let reply = null
  let data  = null


  if (id && id !== '') {
    reply = await postingModel.findOne({ id }).exec();
  }


  res.render('detail', {
      title: '增加文章',
      data: {
        title: reply['title'] || '',
        time: time(reply['create_time']) || '',
        description: reply['description'] || '',
        content: reply['content'] || ''
      }
  })
});