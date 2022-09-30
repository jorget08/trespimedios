const { Router } = require("express");
const router = Router();

const UserService = require('../services/user.service');
const RoleService = require('../services/role.service');
const service = new UserService();
const serviceRole = new RoleService();
const {checkRoles} = require('../middlewares/auth.handler');
const passport = require('passport');

router.get('/', 
    passport.authenticate('jwt', {session: false}),
    checkRoles(['admin']),
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

router.put('/:id', 
    passport.authenticate('jwt', {session: false}),
    checkRoles(['admin']),
    async (req,res, next) => {
    try {
        const { id, idRole } = req.params;
        const user = await service.findOne(id);
        const role = await serviceRole.find(idRole);
        await user.setRole(role);
        res.json(user);
    } catch (error) {
        next(error)
    }
})

router.post('/role', 
    passport.authenticate('jwt', {session: false}),
    checkRoles(['admin']),
    async (req,res,next) => {
    try {
        const body = req.body;
        res.status(201).json(await serviceRole.create(body))
    } catch (error) {
        next(error)
    }
})

module.exports = router;