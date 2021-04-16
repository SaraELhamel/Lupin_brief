const mongoose = require('mongoose');

const CommandeSchema = mongoose.Schema({
    product_id:{
        type :mongoose.Schema.Types.ObjectId,
        ref : 'Product'
    },
    category_id:{
        type :mongoose.Schema.Types.ObjectId,
        ref : 'Category'
    },
    vendeur_id:{
        type :mongoose.Schema.Types.ObjectId,
        ref : 'Vendeur'
    },
    acheteur_id:{
        type :mongoose.Schema.Types.ObjectId,
        ref : 'Acheteur'
    },
    date_commande:{
        type:Date,
        
    },
    is_livred:{
        type:Boolean,
        
    },
    
});

module.exports = mongoose.model('Commande', CommandeSchema);