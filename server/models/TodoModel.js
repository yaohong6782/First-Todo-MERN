const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    text: { type : String, required: true}
})


module.exports = mongoose.model('Todo', TodoSchema);