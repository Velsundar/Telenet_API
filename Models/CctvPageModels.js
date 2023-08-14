const mongoose= require('mongoose');
const CCTVSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Pro_id:{
        type:Number,
        required:true
    },
    cam_id:{
        type:Number,
        required:true
    },
    Price:{
        type:Number,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    add:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('CCTV',CCTVSchema);