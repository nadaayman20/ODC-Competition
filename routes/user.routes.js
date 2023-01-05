const router = require("express").Router()
const User = require('../app/controller/user.controller')
const {auth,authUrl,authParams,authquiz} = require("../app/middleware/auth.middleware")
const Quiz = require("../app/controller/quiz.controller");


router.post("/signUp", User.signUp)
router.post("/login", User.login)
router.get('/profile/:id',auth, authUrl,authParams, User.userProfile )
router.delete('/logOut/:id',auth, User.logOut )
router.get('/allUser',auth,authUrl, User.allusers )
router.patch("/editProfile/:id",auth,User.editProfile)

router.get("/getQuiz", auth, authquiz, Quiz.quizuser);

module.exports = router