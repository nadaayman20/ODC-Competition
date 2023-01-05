const router = require("express").Router();
const Quiz = require("../app/controller/quiz.controller");

router.post("/addQuiz", Quiz.addquiz);
router.delete("/deleteQuiz/:id", Quiz.deletequiz);
router.patch("/editQuiz/:id", Quiz.editquiz);

module.exports = router;