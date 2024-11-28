const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    dob: Date,
    email: { type: String, unique: true },
    password: String
});

module.exports = mongoose.model('User', UserSchema);