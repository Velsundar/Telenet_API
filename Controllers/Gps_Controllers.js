const GPS = require ('../Models/GPS_Page_Models');

exports.getData = async(re,res)=>{
    try{
        const result = await GPS.find();
        res.status(200).json(result);
    }catch(err){
        res.status(500).send(err);
    }
}