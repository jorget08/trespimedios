const { Router } = require("express");
const router = Router();

const UserService = require('../services/user.service');
const RoleService = require('../services/role.service');
const service = new UserService();
const serviceRole = new RoleService();

router.get('/', async (req, res, next) => {
    try {
        res.status(200).json(await service.find);
    } catch (error) {
        next(error);
    }
})

router.post('/', async (req, res, next) => {
    try {
        const body = req.body;
        res.status(201).json(await service.create(body));
    } catch (error) {
        next(error);
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        res.status(200).json(await service.delete(id))
    } catch (error) {
        next(error)
    }
})

router.put('/:id', async (req,res, next) => {
    try {
        const { id, idRole } = req.params;
        const user = await service.findOne(id);
        await user.setRole(idRole);
        return user;
    } catch (error) {
        next(error)
    }
})

router.post('/role', async (req,res,next) => {
    try {
        const body = req.body;
        res.status(201).json(await serviceRole.create(body))
    } catch (error) {
        next(error)
    }
})

module.exports = router;