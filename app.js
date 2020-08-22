const mongoose= require('mongoose');
const Pokemon = require('./PokemonModel');
mongoose.connect(process.env.DB_ENDPOINT,{useNewUrlParser:true,  useUnifiedTopology: true });
const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan')
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.get('/', function (req, res) {
  console.log("Hello World");
  try{
    Pokemon.find().sort({PokemonID:1}).then((data)=>{
        res.json(data);
    })
    .catch((err) => {
        res.status(500).json({message: err.message})
    })
  }catch(err){
      res.status(500).json({message: err.message});
  }
})

app.use((err, req, res) => {
  console.error(err);
  res.status(500).send('Internal Serverless Error');
});

module.exports = app;

