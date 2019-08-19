import mongoose from 'mongoose'
const Schema = mongoose.Scheam;

const defalut = {

}

const posingScheam = new Scheam({

    title: { type: String, defalut: ''},

    content: { type: String, defalut: ''},

    id: { type: Number }
})

module.export = mongoose.model('posing', posingScheam)