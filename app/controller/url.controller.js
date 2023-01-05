const urlModel = require("../../db/models/url.model")
const myHelper = require("../../app/helper")
const fs = require("fs")

class Url{
    static addUrl = async(req,res) => {
        try{
            const userData = new urlModel(req.body)
            await userData.save()
            myHelper.resHandler(res, 200, true, userData, "URL added successfully")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
}
    
module.exports = Url