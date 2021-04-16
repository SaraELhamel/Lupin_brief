
const Acheteur = require('../models/Acheteur');
module.exports = {
    async addachet (req,res) {
        const acheteur = new Acheteur({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email:req.body.email,
            CIN:req.body.CIN,
            phone:req.body.phone,
            password: req.body.password,
        });
        try{
            const saveAcheteur = await acheteur.save();
            
            res.json(saveAcheteur);
        }catch (err){
    res.json({message:err});
        }
    },
    async signInbuyer(req,res) {
       
        const findAcheteur = await Acheteur.findOne({phone:req.body.phone})
        if(findAcheteur){

            if(findAcheteur.password==req.body.password){
                const token = jwt.sign({_id:findAcheteur._id },'Key')
                res.status(200).send({
                    acheteur :findAcheteur,
                    token : token
                })
              }else{
                  res.status(401).send('email or pass incorrect')
              }
        }else{
            req.send('go to signup page')
        }
    
       
      
    },
}