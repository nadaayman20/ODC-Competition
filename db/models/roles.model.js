const mongoose = require("mongoose")


const roleSchema = mongoose.Schema({
    userType:{
        type:String,
        required:true
    }
})
   
const Role = mongoose.model("Role", roleSchema)
module.exports=Role
