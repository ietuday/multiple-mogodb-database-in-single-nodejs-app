const mongoose = require('mongoose');
const { dbURLOneApp } = require('../utils/db');

console.log("db", dbURLOneApp)
const app_DB = mongoose.createConnection(dbURLOneApp, { useNewUrlParser: true, useUnifiedTopology: true });

const UserSchema = mongoose.Schema({
    title: String, // String is shorthand for {type: String}
    author: String,
    body: String,
    date: { type: Date, default: Date.now },
});

module.exports = app_DB.model('User', UserSchema);