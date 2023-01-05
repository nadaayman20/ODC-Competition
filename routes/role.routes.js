const router = require("express").Router()
const Role = require('../app/controller/role.controller')


router.post("/addRole", Role.addRole)




module.exports = router