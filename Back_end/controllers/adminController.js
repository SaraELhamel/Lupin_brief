const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
const {adminValidations} = require('./validation/validatController')
module.exports = {
    async addAdmin (req,res) {
        const { error } = adminValidations(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        const admin = new Admin({
            full_name: req.body.full_name,
            phone:req.body.phone,
            password: req.body.password,
        });
        try{
            const saveAdmin = await admin.save();
            res.json(saveAdmin);
        }catch (err){
    res.json({message:err});
        }
    },

    async signInadmin (req,res) {
       
        const findAdmin = await Admin.findOne({phone:req.body.phone})
        if(findAdmin){

            if(findAdmin.password==req.body.password){
                const token = jwt.sign({_id:findAdmin._id },'Key')
                res.status(200).send({
                    admin :findAdmin,
                    token : token
                })
              }else{
                  res.status(401).send('email or pass incorrect')
              }
        }else{
            req.send('go to signup page')
        }
    
       
      
    },
    async  getAdmin  (req,res){
        try{
            const admin = await Admin.find();
            res.status(200).json(admin);
        }catch
            (err){
                res.json({message:err});
        }
    },
}
