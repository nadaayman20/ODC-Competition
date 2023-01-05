const mongoose = require("mongoose");
const quizSchema = mongoose.Schema({
  quizLevel: {
     type: String,
     enum: ["beginner", "advanced","professional"]
    },
  questions: Array,
  points: { 
    typr: Number 
}
});
const Quiz = mongoose.model("quiz", quizSchema);
module.exports = Quiz;