const express = require('express');
const {ProductsController} = require('./controller')


const router = express.Router()

module.exports.ProductsAPI = (app) =>{
    router
    .get('/', ProductsController.getProducts)
    .get('/report',ProductsController.generateReport)
    .get('/:id', ProductsController.getProductsById)
    .post('/', ProductsController.insertProducts)

    app.use('/api/products',router)
}