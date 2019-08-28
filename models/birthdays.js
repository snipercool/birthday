const mongoose = require('mongoose');
const schema = mongoose.Schema;
const birthdaySchema = new schema({
    text: {
        type: String,
        required: true
    },
    user: String,
    completed: Boolean
});

const Birthday = mongoose.model('Birthdays', birthdaySchema);

module.exports = Birthday;