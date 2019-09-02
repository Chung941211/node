const postingModel = require('../../models/posting').Posing
const response = require('../../common/utils').response
class Posting {
    constructor () {
    }

    async add (req, res, next) {
        
        const addInfo = {

        }
        const posting = new postingModel(addInfo)
        try {
            const postingSave = await posting.save()
            response(res, 1000, '新增成功')
        } catch (error) {
            response(res, 1001, error)
        }
    }

    async list (req, res, next) {
        const { limit = 20 } = req.query    
        
        let filter = {}
        let options = {
            limit,
            sort: {}
        }
        // let fields = {
        //     title: 1
        // }
        postingModel.find(filter, 'title', options, (error, result) => {
            if (error) {
                response(res, 1001, error)
            } else {
                response(res, 1000, 'ok', result)
            }
        })

    }

    async content (req, res, next) {

    }
}
exports.Posting = new Posting()