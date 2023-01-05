const mongoose = require("mongoose")

const reviewSchema = mongoose.Schema({
   
   userName:{
      type:String,
      required:true
   },
   comment:{
      type:String, 
      required:true,
      minLength: 50,
   },
   rate:{
      type:Number,
      required:true
   }

})
const review = mongoose.model("review", reviewSchema)
module.exports=review