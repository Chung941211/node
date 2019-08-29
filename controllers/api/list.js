const postingModel = require('../../models/posting').Posing
class Posting extends base {
    constructor () {
        super()
    }

    async add (req, res, next) {
        
        const addInfo = {
            
            title: '测试2',
            content: '测试内容2',
            id: 2
        }
        try {
            const posting = new postingModel(addInfo)
            const postingSave = await posting.save((err, fluffy) => {
                if (err) {
                    console.log(err)
                }
            })
            res.send(postingSave)
        } catch (err) {
            res.send({
                status: 1001,
                msg: err
            })
        }
    }

    async list (req, res, next) {
        const { limit = 20 } = req.query    
        
        let filter = {}
        let options = {
            limit,
            sort: {}
        }
        let fields = {
            title: ''
        }
        postingModel.find(filter, fields, options, (error, result) => {
            try {
                if (error) {

                }
            } catch {

            }
        })

    }

    async content (req, res, next) {

    }
}
exports.Posting = new Posting()