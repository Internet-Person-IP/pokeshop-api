const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
    
        PokemonID:{
            type: Number,
            required:true
        },
        Name:{
            type: String,
            required:true
        },
        ATK:{
            type: Number,
            required:true
        },
        DEF:{
            type: Number,
            required:true
        },

        HP:{
            type: Number,
            required:true
        }
})

module.exports = mongoose.model('Pokemon',PokemonSchema);