const router = require("express").Router()
const Review = require('../app/controller/review.controller')


router.post("/addReview", Review.addReview)
router.delete("/deleteReview/:id", Review.deleteReview)
router.patch("/editReview/:id", Review.editReview)


module.exports = router