const mongoose = require('mongoose');

const VendeurSchema = mongoose.Schema({
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
    profit:{
        type:Number,
    },
    
});

module.exports = mongoose.model('Vendeur', VendeurSchema);