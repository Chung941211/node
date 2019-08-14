const { mongoose } = require('../common/server.js');
const schema = mongoose.Schema
const listSchema = new schema({

    title: { type: String, defalut: ''},

    content: { type: String, defalut: ''}
});
module.exports = mongoose.model('List', listSchema)