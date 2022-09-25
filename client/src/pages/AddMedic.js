
import React, { useState,useEffect} from 'react'
import Axios from 'axios'
import "../styles/Contact.css";
import { Link } from 'react-router-dom';
import medics from "../assets/medics.gif"
function AddMedic(){
    const[design,setDesign]=useState("")
  const[codeM,setCodeM]=useState(0)
  const[cat,setCat]=useState("")
  const[prix,setPrix]=useState(0)
  const[qteStock,setQteStock]=useState(0)
  const[des,setDes]=useState("")
  const[avecOrd,setAvecOrd]=useState(true)
  const [MedicList,setMedicList]=useState([])
  //New for update
 const [newDesign,setNewDesign]=useState("")
 const [newPrix,setNewPrix]=useState(0)
 const [newQteStock,setNewQteStock]=useState(0)
  
 
  const ajouterMedic=()=>{
  Axios.post('http://localhost:3001/ajouterMedic',{
      designation:design,
      codeM:codeM,
      categorie:cat,
      prix:prix,
      qteStock:qteStock,
      description:des,
      avecOrdonnance:avecOrd,
    })
    alert("Added successfully")
  }
    return(

<div className="contact">
<div className="leftSide" style={{ backgroundImage: `url(${medics})` }}>
  <div ></div>
<br /><br /><br />
           
                
        </div>  
        <div className="rightSide">    
  <form id="contact-form" >
        <label htmlFor="name">Medicament designation:</label>
        <input type="text"  placeholder="Nom medicament..." onChange={(event)=>{
          setDesign(event.target.value);
        }}></input>
  
  
        <label>Medicament code:</label>
        <input type="number" placeholder="Code medicament..." onChange={(event)=>{
          setCodeM(event.target.value);
        }}></input>
        
        
        <label>Categorie:</label>
        <br>
        </br>
        <select name="categorie" onChange={(event)=>{
          setCat(event.target.value);
        }}>
        <option>Choisir une categorie</option>
        <option value="Paracetamol">Paracetamol</option>
        <option value="Antibiotique">Antibiotique</option>
        <option value="Anti-inflammatoires">Anti-inflammatoires</option>
        <option value="Antibactériens">Antibactériens</option>
        <option value="Antiviraux">Antiviraux</option>
        <option value="Cardiologie">Cardiologie</option>
        <option value="Diététique et Nutrition">Diététique et Nutrition</option>
       </select>
  
  <br>
  </br>
       <label>Prix:</label>
        <input type="number"  placeholder='Prix en DT...' onChange={(event)=>{
          setPrix(event.target.value);
        }}></input>
  
  
        <label>Quantité en stock:</label>
        <input type="number" placeholder='Qte dispo...' onChange={(event)=>{
          setQteStock(event.target.value);
        }}></input>
  
  
        <label>Description:</label>
        <textarea   rows="13" cols="25" placeholder="Description de medicament..." onChange={(event)=>{
          setDes(event.target.value);
        }}></textarea>
  <br></br>
  
        <label>Cet Medicament necessite une ordonnance? </label>
        <br></br>
        <select name="avecOrdonnance" type="boolean" onChange={(event)=>{
          setAvecOrd(event.target.value);
        }}>
          <option>.  .  .</option>
          <option value="true" >Oui</option>
          <option value="false">Non</option>
        </select>
  
  <br></br>
        
        <button onClick={ajouterMedic}>Ajouter</button>
        <Link to={"ListMedic"}>
                    <button>Liste Medicaments</button>
                </Link>
       
        
        
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        </form>
  </div>
  </div>
    )
}

export default AddMedic;