const { mongoose, autoIncrement, Schema } = require('../common/server');

const userSchema = new Schema({
    
    name: { type: String, required: true, defalut: ''}, // 姓名

    username: { type: String, required: true, default: '' }, // 账号

    password: { type: String, required: true, default: '' }, // 密码
    
    photo: { type: String, defalut: ''}, // 头像

    create_time: { type: Date, default: Date.now }, // 注册时间

    login_time: { type: Date, defalut: Date.now } // 最后一次登录时间
})

userSchema.plugin(autoIncrement.plugin, {
    model: 'user',
    field: 'id',
	startAt: 1,
	incrementBy: 1
});


exports.User = mongoose.model('user', userSchema)