const roleModel = require("../../db/models/roles.model")
const myHelper = require("../../app/helper")
const fs = require("fs")

class Role{
  static addRole = async(req,res) => {
        try{
            // console.log(req.body)
            const roleName = new roleModel(req.body)
            await roleName.save()
            myHelper.resHandler(res, 200, true, roleName, "roleName added successfully")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }

}
    
module.exports = Role