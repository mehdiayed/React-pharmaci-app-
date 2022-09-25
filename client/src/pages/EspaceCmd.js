import React from 'react';
import { useState, useEffect } from "react";
import "../styles/adduser.css";
import Axios from 'axios';
import { Link } from 'react-router-dom';
import "../styles/Menu.css";
import medics from "../assets/medics.gif"



function EspaceCmd() {

  const [DateCmd, setDateCmd] = useState("");
  const [Montant, setMontant] = useState("");
  const [Fournisseur, setFournisseur] = useState("");
  const [DateLivraison, setDateLivraison] = useState("");
  const [Etat, setEtat] = useState("");


  // ---------------------- INSERT DATA FUNCTION ------------------

  const addToList = () => {
    Axios.post("http://localhost:3001/insertCmd", {
      DateCmd: DateCmd,
      Montant: Montant,
      Fournisseur: Fournisseur,
      DateLivraison: DateLivraison,
      Etat: Etat,
    })
    alert("commande ajouté avec succées");
  }
  return (
    <div className="contact">
      <div className="leftSide" style={{ backgroundImage: `url(${medics})` }}>
        <div className="menu" >
      
        </div>
      </div>
      <div className="rightSide">
        <h1> Ajouter votre nouvelle Commande </h1>
        <form id="contact-form">
          <label htmlFor="date" type="date">Date Commmande</label>
          <input name="DateCmd" placeholder="Enter full name..." type="text" onChange={(event) => { setDateCmd(event.target.value) }} />
          <label htmlFor="email">Montant</label>
          <input name="Montant" placeholder="Enter Montant..." type="text" onChange={(event) => { setMontant(event.target.value) }} />
          <label htmlFor="email">Fournisseur</label>
          <input name="Fournisseur" placeholder="Enter Fournisseur..." type="text" onChange={(event) => { setFournisseur(event.target.value) }} />
          <label htmlFor="email">Date Livraison</label>
          <input name="DateLivraison" placeholder="Enter Date Livraison..." type="text" onChange={(event) => { setDateLivraison(event.target.value) }} />
          <label htmlFor="email">Etat</label>
          <input name="Etat" placeholder="Enter Etat..." type="text" onChange={(event) => { setEtat(event.target.value) }} />
          <button onClick={addToList}> ajouter votre commande </button>
          <Link to={"ListCmd"}><button> voir tous les commandes </button></Link>
          
        </form>
      </div>
    </div>
  );
}

export default EspaceCmd;