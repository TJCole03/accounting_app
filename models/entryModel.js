const mongoose = require('mongoose')
const Schema = require('mongoose').Schema

const entrySchema = new Schema(
    {
        date: Date, 
        service: String, 
        price: {type: Number, required: true, default: 0 }
    },
    {timestamps: true}
)

const Entry = mongoose.model('Entry', entrySchema)

module.exports = Entry