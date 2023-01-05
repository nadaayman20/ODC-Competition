const userModel = require("../../db/models/user.model")
const urlModel =require("../../db/models/url.model")
const quizModel =require("../../db/models/quiz.model")
const myHelper = require("../../app/helper")
const jwt = require("jsonwebtoken")

const auth = async(req, res, next) => {
    try{
        const token = req.header("Authorization").replace("Bearer ", "")
        const decodedToken = jwt.verify(token, process.env.tokenPass)
        const userData = await userModel.findOne({
            _id: decodedToken._id,
            "tokens.token": token
        })
        if(!userData) throw new Error("invalid token")
        req.user = userData
        req.token = token
        next()
    }
    catch(e){
        myHelper.resHandler(res, 500, false, e.message, "unauthorized")
    }
    
}
const authUrl = async(req, res, next) => {
 try{
    // console.log(req.url)
    // console.log(req.params)
    // console.log(req.user.roleId)
    const urlHeader= req.url.slice(req.url.indexOf('/'),req.url.lastIndexOf('/')+1)
    // console.log(urlHeader)
    const URL = await urlModel.findOne({
        link: urlHeader,
        method:req.method,
        "Roles.roleId":req.user.roleId

     })
     console.log(URL)
     if (!URL) throw new Error("not admin")
     next()

 }catch(e){
    myHelper.resHandler(res, 500, false, e.message, "unauthorized not admin")
}

}

const authParams = async(req, res, next) => {
 try{
    console.log(req.params)

    const params = await urlModel.findOne({
        paramValues:Object.values(req.params),

     })
    //  console.log(params)
     if (!params) throw new Error("false")
     next()

 }catch(e){
    myHelper.resHandler(res, 500, false, e.message, "unauthorized not admin")
}

}

const authquiz = async (req, res, next) => {
  try {
    const quiz = await quizModel.findOne({
      quizLevel: req.user.Qualification,
    });

    console.log(quiz);
    if (!quiz) throw new Error("not qualified");
    next();
  } catch (e) {
    myHelper.resHandler(res, 500, false, e.message, "not qualified");
  }
};

module.exports = {auth,authUrl,authParams,authquiz}