const { Router } = require('express');

const userRouter = require('./user')
const productRouter = require('./user')
const saleRouter = require('./user')
const authRouter = require('./auth')

const router = Router();

router.use('/user', userRouter)
router.use('/product', productRouter)
router.use('/sale', saleRouter)
router.use('/auth', authRouter)

module.exports = router;
