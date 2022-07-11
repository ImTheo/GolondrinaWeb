const mongoose = require("mongoose");
const activitySchema = mongoose.Schema({
id:{
    type:String,
    required: true

},
name:{
    type:String,
    required: true
},
description:{
    type:String,
    required: true
},
sumary:{
    type:String,
    required:true
},
image:{
    type:String,
    required:true
}
});

module.exports = mongoose.model('Activity', activitySchema);