const mongoose = require('mongoose');


const VenteSchema = new mongoose.Schema({
    NumV : {
        type: Number,
        required:true,
    },
    DateV:{
        type: String,
        required:true,
    },
    MontantV:{
        type: Number,
        required:true,
    },
    Remise:{
        type: Number,
        required:true,
    },
    A_payer:{
        type: Number,
        required:true,
    }
});

const Ventes =mongoose.model("Vente",VenteSchema);
module.exports = Ventes;