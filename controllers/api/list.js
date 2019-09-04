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
            await posting.save()
            response(res, 1000, '新增成功')
        }
        catch (error) {
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
        let fields = {
            title: 1
        }
        try { 
            const result = await postingModel.find(filter, {}, options)
            response(res, 1000, 'ok', result)
        }
        catch (error) {
            response(res, 1001, error)
        }

    }

    async deletePosting (req, res, next) {
        const { id } = req.body
        if (id === '') {
            response(res, 1001, '文字id为空')
            return
        }
        try { 
            const result = postingModel.deleteMany({id: id})
            if (result.n === 1) {
                response(res, 1001, '找不到相关id')
            } else {
                response(res, 1000, '删除成功')
            }
        }
        catch (error) {
            response(res, 1001, error)
        }
        
    }
    async content (req, res, next) {

    }
}
exports.Posting = new Posting()