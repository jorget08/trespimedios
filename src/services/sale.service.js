const {Sale} = require('../db');

class SaleService{
    constructor(){
    
    }
    async find(){
        const sales = await Sale.findAll();
        return sales;
    }

    async create(data){
        const newSale = await Sale.create(data);
        return newSale;
    }

    async delete(id){
        const sale = await Sale.findOne(id);
        await sale.destroy();
        return {response: true};
    }

    async findOne(id){
        const sale = await Sale.findOne(id);
        return sale
    }

    async update(id, data){
        const sale = await Sale.findOne(id);
        const response = await sale.update(data);
        return response
    }
}

module.exports = SaleService;