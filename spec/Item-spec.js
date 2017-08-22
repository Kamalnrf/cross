/**
 * Created by kamalnrf
 */
'use strict';

const item = require('../app/handlers/Item');
const mori = require('mori');
const mongoDb = require('../services/mongodb');

describe('Testing ', () => {
    // Load Environment variables from .env file
    require('dotenv').load();

    mongoDb(process.env.NODE_MONGODB);

    const product = {
        productID: 123,
        category: 'house',
        title: 'Something',
        price: 20,
        quatity: 12,
        buyerID: 1234,
        options: {}
    };

    it ('add product', (done) => {
        item.addProduct(product)
            .then(added => {
                expect(added).toBe(true);
                done();
            })
    });

    it ('find product', (done) => {
        const product = {
            category: 'house',
            title: 'Something',
            price: 20,
            quatity: 12,
        };
        item.findProduct(product)
            .then(found => {
                done();
            })
    });

    it ('delete product', (done) => {
        const productID = 123;

        item.deleteProduct(productID)
            .then(deleted => {
                expect(deleted).toBe(true);
                done();
            })
    });
});