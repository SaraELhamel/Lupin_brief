const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')

app.use(cors())
require('dotenv/config');
app.use(express.urlencoded({extended:true}))
app.use(express.json());
const adminRoute = require('./routes/admin');
app.use('/admin', adminRoute);
const vendeurRoute = require('./routes/vendeur');
app.use('/vendeur', vendeurRoute);
const adsRoute = require('./routes/ads');
app.use('/ads', adsRoute);
const productRoute = require('./routes/product');
app.use('/product', productRoute);

mongoose.connect('mongodb://localhost/lupin', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
.then(console.log('connected'))
.catch(err=>{
  console.log(err);
})

app.listen(5000);