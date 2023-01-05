const mongoose = require("mongoose")

const plantSchema = mongoose.Schema({
   
   plantName:{
      type:String,
      required:true
   },
   plantID:{
      type:Number, 
      required:true
   },
   price:{
      type:Number,
      required:true
   },
      blogs:{
      type:String,
      required:true
   }

       


})
const plants = mongoose.model("plants", plantSchema)
module.exports=plants