const router = require("express").Router()
const Plant = require('../app/controller/plants.controller')
// const {auth,authUrl} = require("../app/middleware/auth.middleware")

router.post("/addPlants", Plant.addPlants)
router.delete("/deletePlant/:id", Plant.deletePlant)
router.patch("/editPlants/:id", Plant.editPlants)





module.exports = router