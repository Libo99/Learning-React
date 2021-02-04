const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    text:{
        type: String,
        required: true
    },
    created: Date

});


module.exports = Post = mongoose.model('post', PostSchema);
