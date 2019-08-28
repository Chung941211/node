const postingModel = require('../../models/posting').Posing
class Posting {
    constructor () {
    }

    async add (req, res, next) {
        
        const addInfo = {
            
            title: '测试2',
            content: '测试内容2',
            id: 2
        }
        try {
            const article = new postingModel(addInfo)
            const articleSave = await article.save((err, fluffy) => {
                if (err) {
                    console.log(err)
                }
            })
            res.send(articleSave)
        } catch (err) {
            res.send({
                status: 1001,
                msg: err
            })
        }
    }

    async list (req, res, next) {
        const { limit = 20 } = req.query    
        
        let filter = {}, bySort = {}

        console.log(filter)
        res.send(filter)
        const listData = await article
        .find({})
        .sort(bySort)


    }

    async content (req, res, next) {

    }
}
exports.Posting = new Posting()