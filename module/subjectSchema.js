const mongoose = require('mongoose');
const  Schema  = mongoose.Schema
mongoose.connect('mongodb://127.0.0.1:27017/subjectdb')
    .then(data => {
        // console.log('CONNECTION OPEN')
    })
    .catch(err => {
        console.log(err)
    })
const SubjectSchema = new Schema({
   subjectName: String,
    subjectCode: String,
    jntuaCode: String}
)
const Subject = mongoose.model('Subject', SubjectSchema);
    // const sub = new Subject({
    //         "subjectName": 'chemistry',
    //        "subjectCode": 'che',
    //        "jntuaCode": '20A51101T'
    //     })
    //     sub.save();
module.exports = Subject;