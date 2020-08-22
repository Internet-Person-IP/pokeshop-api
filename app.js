const mongoose= require('mongoose');
const Pokemon = require('./PokemonModel');
mongoose.connect(process.env.DB_ENDPOINT,{useNewUrlParser:true,  useUnifiedTopology: true });
const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan')
app.use(cors());
app.use(express.json());
//app.use(morgan('dev'));
app.get('/', function (req, res) {
  const  {page=1, itemsperpage=151, q="", sort="PokemonID", direction="asc"} = req.query;
  const SortingOptions = {}
  SortingOptions[sort] = direction === 'desc' ? -1 : 1;
  try{
    Pokemon.find({
      Name: new RegExp(`${q}`,'i')
    })
    .sort(SortingOptions)
    .skip((page-1)*itemsperpage)
    .limit(Number(itemsperpage))
    .then((data)=>{
        res.json(data);
    })
    .catch((err) => {
        res.status(500).json({message: err.message})
    })
  }catch(err){
      res.status(500).json({message: err.message});
  }
})

app.use((err, res) => {
  console.error(err);
  res.status(500).send('Internal Serverless Error');
});

module.exports = app;

