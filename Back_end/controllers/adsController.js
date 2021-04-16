const Ads = require('../models/Ads');
module.exports = {
    async addpublici (req,res) {
        const ads = new Ads({
            titre: req.body.titre,
            description: req.body.description,
            image: req.body.image,
           
        });
        try{
            const saveAds = await ads.save();
            
            res.json(saveAds);
        }catch (err){
    res.json({message:err});
        }
    },
}