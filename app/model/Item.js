/**
 * Created by kamalnf
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Items = new Schema({
    category: {type: String, required: true},
    productID: {type: String, required: true},
    title: {type: String, required: true},
    price: {type: String, required: true},
    quantity: {type: Number},
    buyerID: {type: String},
    options: {type: Object}
});

module.exports = mongoose.model('Items', Items);