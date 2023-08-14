const Cameras = require('../Models/CctvPageModels')

exports.getData = async(re,res)=>{
    try{
        const result = await Cameras.find();
        res.status(200).json(result);
    }catch(err){
        res.status(500).send(err);
    }
}