const mongoose = require("mongoose");
const reservationSchema = mongoose.Schema({
id:{
    type:String,
    required: true

},
name:{
    type:String,
    required: true
},
email:{
    type:String,
    required: true
},
recreations:{
    type:String,
    required:true
},
room:{
    type:String,
    required:true
},
cellphone:{
    type:String,
    required:true
}
,
checkin:{
    type:Boolean,
    required:true
},
checkout:{
    type:Boolean,
    required:true
}
});

module.exports = mongoose.model('Reservation', reservationSchema);