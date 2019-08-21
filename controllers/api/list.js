const postingModel = require('../../models/posting')
// import base from '../../middlewares/base';
class Posting {
    constructor () {
        // super();
    }

    async add (req, res, next) {
        
        const addInfo = {
            
            title: '测试',
            content: '测试内容',
            id: 1
        }
        console.log(addInfo)
        try {
            const article = new postingModel(addInfo)
            const articleSave = await article.save()
            res.send(articleSave)
        } catch (err) {
            res.send({
                status: 0
            })
        }
    }
}
exports.Posting = new Posting()