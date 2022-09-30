const { Router } = require("express");
const router = Router();

const ProductService = require('../services/product.service');
const service = new ProductService();
const {checkRoles} = require('../middlewares/auth.handler');
const passport = require('passport');

router.get('/',
    passport.authenticate('jwt', {session: false}),
    checkRoles(['admin', 'employee']), 
    async (req, res, next) => {
    try {
        res.status(200).json(await service.find);
    } catch (error) {
        next(error);
    }
})

router.post('/',
    passport.authenticate('jwt', {session: false}),
    checkRoles(['admin']), 
    async (req, res, next) => {
    try {
        const body = req.body;
        res.status(201).json(await service.create(body));
    } catch (error) {
        next(error);
    }
})

module.exports = router;