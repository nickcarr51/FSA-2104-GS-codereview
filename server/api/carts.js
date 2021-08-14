
const router = require('express').Router()
const { models: { Cart, User, Order}} = require('../db')
module.exports = router

//shows all carts. need to make admin route to edit carts 
router.get('/', async (req, res, next) => {
  try {
    const carts = await Cart.findAll({
        include: [User, Order]
    })
    res.json(carts)
  } catch (err) {
    next(err)
  }
})

//shows the user their cart
router.get('/:id', async (req, res, next) => {
    try {
        const data = (await User.findAll({
          where: {username: req.params.id}
        }))[0].dataValues
        const userCart = await Cart.findAll({
            where: {
                userId: data.id,
                isPending: true
            },
            include: [Order]
        })
        res.json(userCart)
    } catch (error) {
        next(error)
    }
})