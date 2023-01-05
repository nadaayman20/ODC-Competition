const router = require("express").Router()
const URL = require('../app/controller/url.controller')
// const {auth,authUrl} = require("../app/middleware/auth.middleware")

router.post("/addUrl", URL.addUrl)





module.exports = router