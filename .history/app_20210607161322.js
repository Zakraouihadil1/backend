const express = require('express');

const app = express();
app.use((req, res) => {
  res.json({ message: 'Votre requête a bien été reçue !' }); 
});
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
const bodyParser = require('body-parser');


//   app.use(bodyParser.json());
//   app.post('/api/actv', (req, res, next) => {
//     console.log(req.body);
//     res.status(201).json({
//       message: 'Objet créé !'
//     });
//   });

app.use('/api/actv', (req, res, next) => {
    const actv = [
      {
        _id: 'oeihfzeoi',
        title: 'Mon premier objet',
        description: 'Les infos de mon premier objet',
        imageUrl: '',
      },
      
    ];
    res.status(200).json(actv);
  });

  module.exports = app;