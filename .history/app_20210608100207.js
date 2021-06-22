const express = require('express');
const mongoose =require('mongoose');
const router =  express.Router();

const url ='mongodb://localhost/activité'
const app = express();

mongoose.connect(url,{useNewUrlParser:true})
const con= mongoose.connection 

con.on('open',function(){
   console.log('connected...')
})

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.post('/api/actv', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'Objet créé !'
  });
});

app.use('/api/actv', (req, res, next) => {
    const actv = [
      {
        _id: '1',
        title: 'yoga',
        description: 'Les infos de mon premier objet',
        imageUrl: '',
      },
      
    ];
    res.status(200).json(actv);
  });
  app.post('/api/actv', (req, res, next) => {
    delete req.body._id;
    const thing = new thing({
      ...req.body
    });
    thing.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  });
  app.use('/api/actv', (req, res, next) => {
    thing.find()
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(400).json({ error }));
  });
  const alienRouter=require('./routers/alien');
const thing = require('./model/thing');
  app.use('/alien',alienRouter)

app.listen(3000,function(){
  console.log('server started')
})

router.put(':_id',(req,res )=> {
  // check the id is valid or not 
  
      if(!ObjectId.isValid(req.params._id))
      return res.status(400).send('No record with given id : ${req.params.id}');
      var actv = {
              _id:req.body.id,
              title:req.body.title,
              description:req.body.description,
              imageUrl:req.body.imageUrl,
          }
          thing.findByIdAndUpdate(req.params.id,{$set:actv},{new:true},(err,doc) => {
              if(!err){res.send(doc);}
              else{console.log('Error in reactive activity : '+JSON.stringify(err,undefined,2));}
          });
});

router.delete('/:_id',(req,res)=>{
    
  if(!ObjectId.isValid(req.params._id))
  return res.status(400).send('No record with given id : ${req.params._id}');
  thing.findByIdAndRemove(req.params._id,(err,doc)=>{
      if(!err){res.send(doc);}
      else{console.log('Error in reactive activity : '+JSON.stringify(err,undefined,2));}

  })
})

  module.exports = app;

