import mongoose from 'mongoose'
const Schema = mongoose.Scheam;


const posingScheam = new Scheam({

    title: { type: String, defalut: ''},

    content: { type: String, defalut: ''},

    id: { type: Number }
})

const Posing = mongoose.model('posing', posingScheam)

export default Posing