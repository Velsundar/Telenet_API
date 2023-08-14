const mongoose= require('mongoose');
const GPS_Schema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Pro_id:{
        type:Number,
        required:true
    },
    gps_id:{
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
    desc:{
        type:String,
        required:true
    },
    add:{
        type:String,
        required:true
    },
});
module.exports = mongoose.model('Gps',GPS_Schema);
