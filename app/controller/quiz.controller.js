const quizModel = require("../../db/models/quiz.model");
const myHelper = require("../../app/helper");
class quiz {
  static addquiz = async (req, res) => {
    try {
      const quizdata = new quizModel(req.body);
      await quizdata.save();
      myHelper.resHandler(res,200,true,quizdata, "quizdata added successfully");
    } 
    catch (e) {
      myHelper.resHandler(res, 500, false, e, e.message);
    }
  };
  static deletequiz = async (req, res) => {
    try {
      const quizData = await quizModel.deleteOne({ _id: req.params.id,});

      myHelper.resHandler( res,200,true,quizData," delete quiz successfully");
    } 
    catch (e) {
      myHelper.resHandler(res, 500, false, e, e.message);
    }
  };
  static editquiz = async (req, res) => {
    try {
      const quiz = await quizModel.updateOne({ _id: req.params.id },req.body);

      console.log(req.body);
      myHelper.resHandler(res, 200, true, quiz, " quiz is edited ");
    } 
    catch (e) {
      myHelper.resHandler(res, 500, false, e, e.message);
    }
  };

  static quizuser = async (req, res) => {
    try {
      const quiz = await quizModel.find();

      myHelper.resHandler(res, 200, true, quiz, "user quiz successfully");
    } catch (e) {
      myHelper.resHandler(res, 500, false, e, e.message);
    }
  };
}
module.exports = quiz;