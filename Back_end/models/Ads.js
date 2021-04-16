const mongoose = require('mongoose');

const AdsSchema = mongoose.Schema({
    image:{
        type:String,
        
    },
    description:{
        type:String,
        
    },
    titre:{
        type:String,
        
    },
   
    
    
});

module.exports = mongoose.model('Ads',AdsSchema);