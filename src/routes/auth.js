const { Router } = require("express");
const router = Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');

const {config} = require('../config/config')


router.post('/login',
passport.authenticate('local', {session: false}),
async (req, res, next) => {
    try {
        const user = req.user;
        const payload = {
            id: user.id,
            role: user.role.name
        }
        const token = jwt.sign(payload, config.jwtSecret);
        res.status(200).json({user, token})
    } catch (error) {
        next(error)
    }
})

module.exports = router;
