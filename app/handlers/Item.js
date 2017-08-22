/**
 * Created by kamalnrf.
 */
'use strict';

const mori = require('mori');
const ItemModel = require('../model/Item');
const CategoryModel = require('../model/category');

const item = {

    addProduct: async (product) => {
        const category = CategoryModel({
            category: product.category,
            productID: product.productID,
        });

        const Item = ItemModel({
            category: product.category,
            productID: product.productID,
            title: product.title,
            price: product.price,
            quantity: product.quantity,
            buyerID: product.buyerID,
            options: product.options
        });

        await category.save(err => {
            if (err) throw err;

            console.log('Saved successfully!');
        });

        await Item.save(err => {
            if (err) throw err;

            console.log('Saved successfully!');
        });

        return true;

    },

    findProduct: (params) => {
         return new Promise ((resolve, reject) => {
             ItemModel.find({
                category: params.category,
                title: params.title,
                price: params.price,
                quatity: params.quantity
            }, (err, productIDs) => {
                 if (err) throw err;

                 resolve(productIDs);
            });
        })
    },

    deleteProduct: async (prouctID) => {
        await ItemModel.findOneAndRemove({productID: prouctID}, (err) => {
            console.log('Item deleted');
        });

        return true;
    }
};

module.exports = item;