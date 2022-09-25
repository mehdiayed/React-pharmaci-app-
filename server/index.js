const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()
const MedicModel=require('./models/Medic')
const CommandeModel = require('./models/Commande');
const UsersModel = require('./models/Users');
const VenteModel=require('./models/Vente')
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://mehdi_ayed:123456789safwen@cluster0.yin7q.mongodb.net/pharmacie?retryWrites=true&w=majority",{
    useNewUrlParser: true,
})






// ---------------------- INSERT MEDIC DATA INTO DATABASE ------------------
app.post('/ajouterMedic',async(req,res)=>{
    const designation=req.body.designation;
    const codeM=req.body.codeM;
    const categorie=req.body.categorie;
    const prix=req.body.prix;
    const qteStock=req.body.qteStock;
    const description=req.body.description;
    const avecOrdonnance=req.body.avecOrdonnance;

    const medic=new MedicModel({
        designation:designation,
        codeM:codeM,
        categorie:categorie,
        prix:prix,
        qteStock:qteStock,
        description:description,
        avecOrdonnance:avecOrdonnance,
    });

    try{
        await medic.save();
        res.send('Data INSERTED SUCCESFULLY').status(200)
    }catch(err){
        console.log(err)
    }
    

})
// ---------------------- LIST MEDIC DATA FROM DATABASE ------------------

app.get('/listerMedic',async(req,res)=>{
    MedicModel.find(
        {},
        (err,result)=>{
            if (err){
                res.send(err);
            }
            res.send(result);
            }
        
    )
})
// ---------------------- UPDATE MEDIC DATA INTO DATABASE ------------------

app.put('/update',async(req,res)=>{
    const newD=req.body.newDesign;
    const id=req.body.id;
    const newP=req.body.newPrix;
    const newQ=req.body.newQteStock;
    

    try{
      await  MedicModel.findById(id,(error,updatedMedic)=>{
            updatedMedic.designation=newD,
            updatedMedic.prix=newP,
            updatedMedic.qteStock=newQ,
            updatedMedic.save()
            res.send('Update')
        })
    }catch(err){
        console.log(err)
    }
    

})
// ---------------------- DELETE MEDIC DATA FROM DATABASE ------------------

app.delete('/delete/:id',async(req,res)=>{
    const id=req.params.id;
    await MedicModel.findByIdAndRemove(id).exec();
    res.send('Deleted');
})







// ---------------------------------------------- COMMANDE -----------------------
// ---------------------- INSERT DATA INTO DATABASE ------------------

app.post("/insertCmd", async (req, res) => {

    DateCmd = req.body.DateCmd,
        Montant = req.body.Montant,
        Fournisseur = req.body.Fournisseur,
        DateLivraison = req.body.DateLivraison,
        Etat = req.body.Etat

    const commande = new CommandeModel({ DateCmd: DateCmd, Montant: Montant, Fournisseur: Fournisseur, DateLivraison: DateLivraison, Etat: Etat, });

    try {
        await commande.save();
        console.log("l'insertion d'une commande est terminé");

    } catch (err) {
        console.log(err);
    }

});
// ---------------------- DELETE COMMANDE FROM DATABASE ------------------
app.delete("/deleteCmd/:id", async (req, res) => {
    const id = req.params.id;

    await CommandeModel.findByIdAndRemove(id).exec();
    res.send('delete');
});

// ---------------------- READ COMMANDE FROM DATABASE ------------------
app.get("/readCmd", async (req, res) => {

    CommandeModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result);
    });


});

// ---------------------- UPDATE COMMANDE FROM DATABASE ------------------
app.put("/updateCmd", async (req, res) => {
    const id = req.body.id;

    const NewDateCmd = req.body.NewUserName;
    const NewMontant = req.body.NewMontant;
    const NewFournisseur = req.body.NewFournisseur;
    const NewDateLivraison = req.body.NewDateLivraison;
    const NewEtat = req.body.NewEtat;

    try {
        await CommandeModel.findById(id, (ereur, x) => {
            x.NewDateCmd = NewDateCmd;
            x.NewMontant = NewMontant;
            x.NewFournisseur = NewFournisseur;
            x.NewDateLivraison = NewDateLivraison;
            x.NewEtat = NewEtat;
            x.save()
            res.send("updateUser");
        })
    } catch (err) {
        console.log(err);
    }
});

// -----------------------------------------------  FIN COMMANDE -----------------------
// ----------------------------------------------- USER -------------------------------------

app.post("/insetUser", async (req, res) => {

    Name_LastName = req.body.Name_LastName;
    Login = req.body.Login;
    Pwd = req.body.Pwd;
    Tel = req.body.Tel;
    Mail = req.body.Mail;
    Adress = req.body.Adress;
    Grade = req.body.Grade;
    Typeprofil = req.body.Typeprofil

    const user = new UsersModel({ Name_LastName: Name_LastName, Login: Login, Pwd: Pwd, Tel: Tel, Mail: Mail, Adress: Adress, Grade: Grade, Typeprofil: Typeprofil })
    try {
        await user.save();
        console.log("insertion User terminer");
    } catch (err) {
        console.log(err);
    }
});

//------------------------------------------------------ READ ALL USERS ----------------------------
app.get("/readUsers", async (req, res) => {

    UsersModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result);
    });
});

// ---------------------- UPDATE USERS FROM DATABASE ------------------
app.put("/updateUser", async (req,res) =>{
    const id = req.body.id;
    const NewUserName=req.body.NewUserName;
    const NewUserLogin=req.body.NewUserLogin;
    const NewUserPwd=req.body.NewUserPwd;
    const NewUserTel=req.body.NewUserTel;
    const NewUserMail=req.body.NewUserMail;
    const NewUserAdress=req.body.NewUserAdress;
    const NewUserGrade=req.body.NewUserGrade;
    const NewTypeprofil=req.body.NewTypeprofil;
    try{
        await UsersModel.findById(id,(ereur,x)=>{
            x.NewUserName = NewUserName;
            x.NewUserLogin = NewUserLogin;
            x.NewUserPwd = NewUserPwd;
            x.NewUserTel = NewUserTel;
            x.NewUserMail = NewUserMail;
            x.NewUserAdress = NewUserAdress;
            x.NewUserGrade = NewUserGrade;
            x.NewTypeprofil = NewTypeprofil;
            x.save();
            res.send("updateUser");
        })
    }catch(err){
        console.log(err);
    }
});


// ---------------------- DELETE DATA FROM DATABASE ------------------
app.delete("/deleteUser/:id",async (req,res) =>{
    const id = req.params.id;
    
    await UsersModel.findByIdAndRemove(id).exec();
    res.send('delete');
});



// -----------------------------------------------  FIN USER -----------------------
// ----------------------------------------------- VENTE -----------------------------------

app.post("/insertVente", async (req, res) => {
    const v = new VenteModel({ NumV: 1, DateV: "25-03-2022",MontantV: 12200, Remise: 0, A_payer:12200 });
    try {
        await v.save();
        res.send("l'insertion d'une vente est terminé");
    } catch (err) {
        console.log(err);
    }
});



app.get("/readVente", async (req, res) => {

    VenteModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result);
    });
});

app.listen("3001",() =>{
    console.log("server is running on port 3001 . . . ");
})