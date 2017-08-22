/**
 * Created by kamalnrf
 */

'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoris = new Schema({
    category: {type: String, required: true},
    productID: {type: String, required: true}
});

module.exports = mongoose.model('Categories', categoris);