const mongoose = require('mongoose')

// creating schema
const todoSchema = new mongoose.Schema({
    title: String,
    description: String
},{
    timestamps: true
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo