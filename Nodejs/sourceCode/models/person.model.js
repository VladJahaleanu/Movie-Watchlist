let mongoose = require('mongoose')


let PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: Number,
    email: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Person', PersonSchema)