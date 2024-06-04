
const mongoose=require('mongoose');
//Define the person schema
const personSchema=new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    age:{
        type:String
    },
    work:{
        type:String,
        enum: ['chef','manager','waiter'],//it will accept only these values now
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        required:true
    }
})
//create Person Model
const Person=mongoose.model('Person',personSchema);
module.exports=Person;