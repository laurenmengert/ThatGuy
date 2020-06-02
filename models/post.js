const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema ({
    content: String,
    imageUrl: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    } 
},
{
    timestamps: true
})


module.exports = mongoose.model('Post', postSchema);