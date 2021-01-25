const mongoose = require('mongoose');
const userSchema = require('../database/schemas/userSchema');

const UserModel = mongoose.model('User', userSchema, "Users");

module.exports = UserModel;