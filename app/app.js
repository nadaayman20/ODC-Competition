const express = require("express")
const path = require("path")

const app = express()

require("../db/connect")
app.use(express.json())
app.use(express.static(path.join(__dirname, "../uploads")))
const userRoutes = require("../routes/user.routes")
const roleRoutes = require("../routes/role.routes")
const urlRoutes = require("../routes/url.routes")
const shopRoutes = require("../routes/shops.routes")
const plantRoutes = require("../routes/plants.routes")
const reviewRoutes = require("../routes/review.routes")
const quizRoutes = require("../routes/quiz.routes")
app.use("/api/user/",  userRoutes)
app.use("/api/role/",  roleRoutes)
app.use("/api/url/",  urlRoutes)
app.use("/api/shop/",  shopRoutes)
app.use("/api/plant/",  plantRoutes)
app.use("/api/review/",  reviewRoutes)
app.use("/api/quiz/",  quizRoutes)

app.all("*", (req, res)=> {
    res.status(404).send({
        apisStatus:false,
        message:"Invalid URL",
        data: {}
    })
})
module.exports=app