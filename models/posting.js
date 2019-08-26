const { mongoose } = require('../common/server');

const posingSchema = new mongoose.Schema({
    
    title: { type: String, defalut: ''}, // 文章标题

    author: { type: String, default: '' }, // 作者
    
    content: { type: String, defalut: ''}, // 内容

    id: { type: Number }
})

const Posing = mongoose.model('posing', posingSchema)

exports.Posing = Posing