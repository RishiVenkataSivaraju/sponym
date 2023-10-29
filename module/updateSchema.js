const mongoose = require('mongoose');
const Schema = mongoose.Schema
mongoose.connect('mongodb://127.0.0.1:27017/subjectdb')
    .then(data => {
        // console.log('CONNECTION OPEN')
    })
    .catch(err => {
        console.log(err)
    })
const UpdateSchema = new Schema({
    header: String,
    title: String,
    text: String,
    link: String
}
)
const Update = mongoose.model('Update', UpdateSchema);
module.exports = Update;