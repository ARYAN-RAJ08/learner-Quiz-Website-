const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullName: {
        type: String
    },
    email: {
        type: String
    },
    pNumber: {
        type: String
    },
    password: {
        type: String
    }
})

module.exports = mongoose.model("userSchema", userSchema)