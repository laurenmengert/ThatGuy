const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    avatar: String,
    googleId: String //don't pass to client/browser
},
{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);