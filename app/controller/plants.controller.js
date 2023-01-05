const plantModel = require("../../db/models/plants.model")
const myHelper = require("../../app/helper")
const fs = require("fs")

class Plants{
  static addPlants = async(req,res) => {
        try{
            // console.log(req.body)
            const plantsName = new plantModel(req.body)
            await plantsName.save()
            myHelper.resHandler(res, 200, true, plantsName, "plants added successfully")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
  static deletePlant=async(req,res)=>{

    try {
        const plantData = await plantModel.deleteOne({ _id: req.params.id })
  
        myHelper.resHandler(res,200,true,plantData,"plant is delete successfully" );
      } catch (e) {
        myHelper.resHandler(res, 500, false, e, e.message);
      }

  }


  static editPlants=async(req,res)=>{
    try{
      
         const plant = await plantModel.updateOne({_id:req.params.id},req.body)
       
        console.log(req.body)
        myHelper.resHandler(res, 200, true,plant,"this plant is edited ")
    }
    catch(e){
        myHelper.resHandler(res, 500, false, e, e.message)

    }
}

}
    
module.exports = Plants