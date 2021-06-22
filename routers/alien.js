const express = require('express')
const thing = require('../model/thing')
const router =  express.Router()

 router.get('/',(req,res) => {
     thing.find((err,docs) =>  {
         if (!err) {res.send(docs);}
         else{console.log('erreur:'+JSON.stringify(err,undefined,2));}
     });
    
 });
 module.exports = router
 
