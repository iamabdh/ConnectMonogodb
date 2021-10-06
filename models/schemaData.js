const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dataSchema = new Schema ({
    name : {type: String, require: true},
    text : {type: String, require: true}
    },
    {timestamps: true})

const MyDataSchema = mongoose.model('data', dataSchema)
module.exports = MyDataSchema
