const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({

    name: {
        type: String,
        required: [true, 'Name is required']
    },

    text:{
        type: String,
        required: [true, 'Text is required']
    },
    created: Date

});


module.exports = Post = mongoose.model('post', PostSchema);
