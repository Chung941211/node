const { mongoose } = require('../common/server');

const posingSchema = new mongoose.Schema({

    title: { type: String, defalut: ''},

    content: { type: String, defalut: ''},

    id: { type: Number }
})

const Posing = mongoose.model('posing', posingSchema)

exports.Posing = Posing