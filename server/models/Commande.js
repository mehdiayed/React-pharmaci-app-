const mongoose = require('mongoose');


const CmdSchema = new mongoose.Schema({
    DateCmd : {
        type: String,
        required:true,
    },
    Montant:{
        type: Number,
        required:true,
    },
    Fournisseur:{
        type: String,
        required:true,
    },
    DateLivraison:{
        type: String,
        required:true,
    },
    Etat:{
        type: String,
        required:true,
    }
});

const commande =mongoose.model("commande",CmdSchema);
module.exports = commande;