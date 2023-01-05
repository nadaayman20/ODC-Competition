const reviewModel = require("../../db/models/review.model")
const myHelper = require("../../app/helper")
const fs = require("fs")

class Review{

static addReview = async(req,res) => {
    try{
        const userReview = new reviewModel(req.body)
        await userReview.save()
        myHelper.resHandler(res, 200, true, userReview, "Review added successfully")
    }
    catch(e){
        myHelper.resHandler(res, 500, false, e, e.message)
    }
}


  static deleteReview=async(req,res)=>{

    try {
        const userReview = await reviewModel.deleteOne({ _id: req.params.id })
  
        myHelper.resHandler(res,200,true,userReview,"Review is delete successfully" );
      } catch (e) {
        myHelper.resHandler(res, 500, false, e, e.message);
      }

  }

  static editReview=async(req,res)=>{
    try{
      
         const userReview = await reviewModel.updateOne({_id:req.params.id},req.body)
       
        myHelper.resHandler(res, 200, true,userReview,"this Review is edited ")
    }
    catch(e){
        myHelper.resHandler(res, 500, false, e, e.message)

    }
}
}
module.exports = Review