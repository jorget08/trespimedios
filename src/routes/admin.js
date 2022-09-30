const { Router } = require("express");
const router = Router();


const SaleService = require('../services/sale.service');
const service = new SaleService();
const {checkRoles} = require('../middlewares/auth.handler');
const passport = require('passport');

router.get('/day', 
    passport.authenticate('jwt', {session: false}),
    checkRoles(['admin']),
    async (req, res, next) => {
    try {
        res.status(200).json(await service.salesDay(req.date));
    } catch (error) {
        next(error);
    }
})

router.get('/month', 
    passport.authenticate('jwt', {session: false}),
    checkRoles(['admin']),
    async (req, res, next) => {
    try {
        let total = 0
        const sales = await service.salesMonth(req.date);
        sales.forEach(e => {
            total += e.quantity
        })
        res.status(200).json({total})
    } catch (error) {
        next(error);
    }
})


module.exports = router;