const mongoose = require("mongoose")

const shopSchema = mongoose.Schema({
   shopName:{
      type:String, 
      trim:true,
      minLength: 5,
      required:true
   },
   location:[
        {
            addressType:{
            type:String, 
            trim:true,
            required:true
            },
        }
    ], 
    plantID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"plants"
    },

})
const shops = mongoose.model("shops", shopSchema)
module.exports=shops
