const postingModel = require('../../models/posting').Posing
const response = require('../../common/utils').response
class Posting {
    constructor () {
    }

    async add (req, res, next) {
        const { title, content, description } = req.body
        const addInfo = {
            content,
            title,
            description,
            author: 'Chung'
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
            const result = await postingModel.find(filter, {}, options).exec();
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
            const result = await postingModel.deleteMany({id: id}).exec();
            if (result.n === 1) {
                response(res, 1000, '删除成功')
            } else {
                response(res, 1001, '找不到相关id')
            }
        }
        catch (error) {
            response(res, 1001, error)
        }
        
    }
    async updatePosting (req, res, next) {
        const { title, content, description, id } = req.body
        const addInfo = {
            content,
            title,
            description
        }

        if (id === '') {
            response(res, 1001, '找不到文章id')
            return
        }
        try {
            await postingModel.findOneAndUpdate({id : id}, addInfo);
            response(res, 1000, '更新成功')
        }
        catch (error) {
            response(res, 1001, error)
        }
    }

    test (req, res, next) {
        res.send({
            items: [
                {
                id: 42,
                title: 'Confusion about Flux and Relay'
                },
                {
                id: 500,
                title: 'Creating a Simple Application Using React JS and Flux Architecture'
                }
            ],
            selectedsubreddit: 'frontend',
            postsBySubreddit: {
              frontend: {
                isFetching: true,
                didInvalidate: false,
                items: []
              },
              reactjs: {
                isFetching: false,
                didInvalidate: false,
                lastUpdated: 1439478405547,
                items: [
                  {
                    id: 42,
                    title: 'Confusion about Flux and Relay'
                  },
                  {
                    id: 500,
                    title: 'Creating a Simple Application Using React JS and Flux Architecture'
                  }
                ]
              }
            }
          })
    }
}
exports.Posting = new Posting()