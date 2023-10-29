const mongoose = require('mongoose');
const  Schema  = mongoose.Schema
mongoose.connect('mongodb://127.0.0.1:27017/subjectdb')
    .then(data => {
        // console.log('CONNECTION OPEN')
    })
    .catch(err => {
        console.log(err)
    })
const GoogleUserSchema = new Schema({
Google_id:String,
UserName:String,
picture:String,
})
const GoogleUser = mongoose.model('GoogleUser', GoogleUserSchema);
module.exports = GoogleUser;