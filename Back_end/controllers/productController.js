const Product = require('../models/Product');
module.exports = {
    async addproduct (req,res) {
        const product = new Product({
            name: req.body.first_name,
            price: req.body.price,
            image: req.body.image,
            owner:req.body.owner,
            description:req.body.description,
        });
        try{
            const saveProduct = await product.save();
            
            res.json(saveProduct);
        }catch (err){
    res.json({message:err});
        }
    },
    async  getProducts  (req,res){
        try{
            const products = await Product.find();
            res.status(200).json(products);
        }catch
            (err){
                res.json({message:err});
        }
    },
    async  getOneproduct  (req,res){
        try{
            const product = await Product.findById({_id : req.params.id});
            res.status(200).json(product);
        }catch
            (err){
                res.json({message:err});
        }
    },
}