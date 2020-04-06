const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { dbURLTwoApp } = require('../utils/db');
console.log("db", dbURLTwoApp)
const app_DB = mongoose.createConnection(dbURLTwoApp, { useNewUrlParser: true, useUnifiedTopology: true });

const customerSchema = new Schema({
    customerName: String,
    body: String,
    name: { type: Schema.Types.ObjectId, ref: 'User' },
    date: { type: Date, default: Date.now },
});


module.exports = app_DB.model('Customer', customerSchema);