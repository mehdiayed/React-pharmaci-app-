const mongoose=require('mongoose');

const MedicSchema=new mongoose.Schema({
    designation:{
        type:String,
       
    },
    codeM:{
        type     : Number,
        required : true,
        unique   : true,
        validate : {
          validator : Number.isInteger,
          message   : '{VALUE} is not an integer value'
        }
    },
    categorie:{
        type:String,
        required:true
    },
    prix:{
        type:Number,
        required:true
    },
    qteStock:{
        type     : Number,
        required : true,

        validate : {
          validator : Number.isInteger,
          message   : '{VALUE} is not an integer value'
        }
    },
    description:{
        type:String, 
    },
    avecOrdonnance:{
        type:Boolean,
        required:true
    },
    qnte:{
        type     : Number,
        
       
        validate : {
          validator : Number.isInteger,
          message   : '{VALUE} is not an integer value'
        }
    },


});

const Medic=mongoose.model('Medic',MedicSchema)
module.exports=Medic