const mongoose= require('mongoose');
const Pokemon = require('./PokemonModel');
mongoose.connect(process.env.DB_ENDPOINT,{useNewUrlParser:true,  useUnifiedTopology: true });
const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', function (req, res) {
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
module.exports.handler = serverless(app);

