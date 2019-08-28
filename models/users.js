const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocal = require('passport-local-mongoose');



const User = new Schema({
    birthdate: {
        type: String,
        required: true
    },
});
User.plugin(passportLocal);

module.exports = mongoose.model('User', User);
