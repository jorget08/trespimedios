const { Router } = require('express');

const userRouter = require('./user')
const productRouter = require('./user')
const saleRouter = require('./user')
const authRouter = require('./auth')
const adminRouter = require('./admin')

const router = Router();

router.use('/user', userRouter)
router.use('/product', productRouter)
router.use('/sale', saleRouter)
router.use('/auth', authRouter)
router.use('/admin', adminRouter)

module.exports = router;
