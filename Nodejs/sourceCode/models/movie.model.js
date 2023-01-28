let mongoose = require('mongoose')


let MovieSchema = new mongoose.Schema({
    id: {
        type: Number,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    duration: {
        type: Number,
        require: true
    },
    directorName: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Movie', MovieSchema)