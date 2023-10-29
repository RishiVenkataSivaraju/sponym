const mongoose = require('mongoose');
const  Schema  = mongoose.Schema
mongoose.connect('mongodb://127.0.0.1:27017/subjectdb')
    .then(data => {
        // console.log('CONNECTION OPEN')
    })
    .catch(err => {
        console.log(err)
    })
const UserSchema = new Schema({
  email:{
        type:String,
        required:true,
        unique:true
    }}
)

const passportLocalMongoose= require("passport-local-mongoose")
// const passport= require("passport")

// const userSchema= new Schema({
//     email:{
//         type:String,
//         required:true,
//         unique:true
//     }
// })
UserSchema.plugin(passportLocalMongoose)
const User = mongoose.model('User', UserSchema);

module.exports = User;
