const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        
    },
    price:{
        type:String,
        
    },
    owner:{
        type:String,
        
    },
    image:{
        type:String,
        
    },
    description:{
        type:String,
        
    },
    
    
});

module.exports = mongoose.model('Product', ProductSchema);