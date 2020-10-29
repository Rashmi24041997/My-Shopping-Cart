const mongoose = require('./db');

let addcustomerSchema = new Schema({
    firstName :{
        type : String,
        required : `This field is required${true}` ,
    },
    lastName :{
        type : String,
        //required : `This field is required${true}` ,
    },
    phone :{
        type : String,
        required : `This field is required${true}` ,
    },
    email :{
        type : String,
        required : `This field is required${true}` ,
    },
    address1:{
        type : String,
        required : `This field is required${true}` ,
    },
    country :{
        type : String,
        required : `This field is required${true}` ,
    },
    state :{
        type : String,
        required : `This field is required${true}` ,
    }
})
exports = mongooose.model("customer",addcustomerSchema);