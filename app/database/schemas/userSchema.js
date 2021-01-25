const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    role: String,
    createdBy: String,
    createdAt: { type: Date, default: Date.now },
    status: String
});

module.exports = userSchema;