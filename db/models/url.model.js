
const mongoose = require("mongoose")
const urlSchema=mongoose.Schema({

                link:{
                    type:String,
                    required:true
                },
                methods:{
                    type:String,
                },
                params:{
                    type:Array,
                },
                query:{
                    type:Array,
                },
                 Roles:[
                {
                   roleId:{ type:mongoose.Schema.Types.ObjectId,
                   ref:"Role"
                   }           
                }
            ]

})        
            

const URL = mongoose.model("URL", urlSchema)
module.exports=URL
