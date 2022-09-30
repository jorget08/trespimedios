const {Sale} = require('../db');
const { Op } = require("sequelize");
const {startOfDay, endOfDay, startOfMonth, endOfMonth} = require('date-fns')

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

    async salesDay(date){
        const sales = await Sale.findAll({
            Where: {
                createAt: {
                    [Op.gte]: startOfDay(date),
                    [Op.lte]: endOfDay(date)
                }
            }
        })
        return sales
    }

    async salesMonth(date){
        const sales = await Sale.findAll({
            Where: {
                createAt: {
                    [Op.gte]: startOfMonth(date),
                    [Op.lte]: endOfMonth(date)
                }
            }
        })
        return sales
    }
}

module.exports = SaleService;