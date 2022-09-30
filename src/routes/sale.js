const { Router } = require("express");
const router = Router();

const SaleService = require('../services/sale.service');
const service = new SaleService();
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
    checkRoles(['admin', 'employee']),    
    async (req, res, next) => {
    try {
        const body = req.body;
        res.status(201).json(await service.create(body));
    } catch (error) {
        next(error);
    }
})

router.delete('/:id', 
    passport.authenticate('jwt', {session: false}),
    checkRoles(['admin']),
    async (req, res, next) => {
    try {
        const { id } = req.params;
        res.status(200).json(await service.delete(id))
    } catch (error) {
        next(error)
    }
})

router.patch('/:id',
    passport.authenticate('jwt', {session: false}),
    checkRoles(['admin']),
    async (req,res, next) => {
    try {
        const { id } = req.params;
        const body = req.body;
        res.status(201).json(await sale.update(id, body));
    } catch (error) {
        next(error)
    }
})


module.exports = router;