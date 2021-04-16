const sendEmail = require('../email');
const Vendeur = require('../models/Vendeur');
const jwt = require('jsonwebtoken')

module.exports = {
    async addvend (req,res) {
        const vendeur = new Vendeur({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email:req.body.email,
            CIN:req.body.CIN,
            phone:req.body.phone,
            password: req.body.password,
        });
        try{
            const saveVendeur = await vendeur.save();
            await sendEmail();
            res.json(saveVendeur);
        }catch (err){
    res.json({message:err});
        }
    },
    async signInvendeur (req,res) {
       
        const findVendeur = await Vendeur.findOne({phone:req.body.phone})
        if(findVendeur){

            if(findVendeur.password==req.body.password){
                const token = jwt.sign({_id:findVendeur._id },'Key')
                res.status(200).send({
                    vendeur :findVendeur,
                    token : token
                })
              }else{
                  res.status(401).send('email or password incorrect')
              }
        }else{
            res.send('go to signup page')
        }
    
       
      
    },
}