const mongoose = require("mongoose");
const roomSchema = mongoose.Schema({
id:{
    type:String,
    required: true,
    trim:true,
    unique:true
},
name:{
    type:String,
    required: true
},
description:{
    type:String,
    required: true
},
adults:{
    type:Number,
    required:true
},
children:{
    type:Number,
    required:true
},
price:{
    type:Number,
    required:true
},
image:{
    type:String,
    required:true
},
available:{
    type:Boolean,
    required:true
}
});

module.exports = mongoose.model('Room', roomSchema);