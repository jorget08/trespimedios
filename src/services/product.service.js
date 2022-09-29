const {Product} = require('../db');

class ProductService{
    constructor(){
    
    }
    async find(){
        const products = await Product.findAll();
        return products;
    }

    async create(data){
        const newProduct = await Product.create(data);
        return newProduct;
    }
}

module.exports = ProductService;