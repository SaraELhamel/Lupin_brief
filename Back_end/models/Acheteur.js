const mongoose = require('mongoose');

const AcheteurSchema = mongoose.Schema({
    first_name:{
        type:String,
        
    },
    last_name:{
        type:String,
        
    },
    email:{
        type:String,
        
    },
    phone:{
        type:Number,
        
    },
    CIN:{
        type:Number,
        
    },
    password:{
        type:String,
    },
    
});

module.exports = mongoose.model('Acheteur', AcheteurSchema);