import postingModel from '../../models/posting'
import base from '../../middlewares/base';
console.log(postingModel)
class posting extends base {

    constructor () {
        super();
    }

    async add (req, res, next) {
        
        const addInfo = {
            
            title: '测试',
            content: '测试内容',
            id: 1
        }

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