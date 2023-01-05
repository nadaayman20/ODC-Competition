const router = require("express").Router()
const shop = require('../app/controller/shops.controller')


router.post("/addShop", shop.addShop)
router.delete("/deleteShop/:id", shop.deleteShop)
router.patch("/editShop/:id", shop.editShope)




module.exports = router