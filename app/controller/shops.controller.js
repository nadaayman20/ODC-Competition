const shopModel = require("../../db/models/shops.model")
const myHelper = require("../../app/helper")
const fs = require("fs")

class Shops{
  static addShop = async(req,res) => {
        try{
            // console.log(req.body)
            const shopName = new shopModel(req.body)
            await shopName.save()
            myHelper.resHandler(res, 200, true, shopName, "Shop added successfully")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
 static deleteShop=async(req,res)=>{

    try {
        const shop = await shopModel.deleteOne({ _id: req.params.id })
  
        myHelper.resHandler(res,200,true,shop,"shop is delete successfully" );
      } catch (e) {
        myHelper.resHandler(res, 500, false, e, e.message);
      }

  }

  static editShope=async(req,res)=>{
    try{
      
         const shop = await shopModel.updateOne({_id:req.params.id},req.body)
       
        console.log(req.body)
        myHelper.resHandler(res, 200, true,shop,"this shop is edited ")
    }
    catch(e){
        myHelper.resHandler(res, 500, false, e, e.message)

    }
}

}
    
module.exports = Shops