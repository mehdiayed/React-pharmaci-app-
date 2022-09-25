import React from 'react';
import { useState ,useEffect} from "react";
import "../styles/adduser.css";
import Axios from 'axios';
import "../styles/Menu.css";




function ListCmd() {

  const [ComdList, setCmdList] = useState([]);


  const [NewDateCmd, setNewDateCmd] = useState("");
  const [NewMontant, setNewMontant] = useState("");
  const [NewFournisseur, setNewFournisseur] = useState("");
  const [NewDateLivraison, setNewDateLivraison] = useState("");
  const [NewEtat, setNewEtat] = useState("");
  
  // ---------------------- READ DATA FUNCTION ------------------
  useEffect(() => {
   Axios.get("http://localhost:3001/readCmd").then((response) => {
     setCmdList(response.data);
   }, [])
   });

 // ---------------------- UPDATE DATA FUNCTION ------------------
   const updateCmd = (id) => {
    Axios.put("http://localhost:3001/updateCmd", {
     id : id,
     NewDateCmd:NewDateCmd, 
     NewMontant:NewMontant,
     NewFournisseur:NewFournisseur,
     NewDateLivraison:NewDateLivraison,
     NewEtat:NewEtat,
  })
}

  // ---------------------- DELETE DATA FUNCTION ------------------
  const DeleteCmd = (id) => {
    Axios.delete(`http://localhost:3001/deleteCmd/${id}`, {
    })
}

  return (
      <div className="menu">
      <h3 className="menuTitle">La liste des commandes</h3>
        <table class="styled-table">
        
          {ComdList.map((val, key) => {
            return (
              <div key={key}>
                {" "}
                <thead>
                <tr>
                  <th >Date de commande</th><th>Montant</th><th>Fournisseur</th><th>Date de Livraison</th><th>Etat</th><th>update</th><th>delete</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td><center> {val.DateCmd}        </center></td>
                  <td><center> {val.Montant}        </center></td>
                  <td><center> {val.Fournisseur}    </center></td>
                  <td><center> {val.DateLivraison}  </center></td>
                  <td><center> {val.Etat}           </center></td>
                </tr>
                <tr>
                  <td><input type="text"  onChange={(event) =>{setNewDateCmd(event.target.value)}}/></td>
                  <td><input type="text"  onChange={(event) =>{setNewMontant(event.target.value)}}/></td>
                  <td><input type="text"  onChange={(event) =>{setNewFournisseur(event.target.value)}}/></td>
                  <td><input type="text"  onChange={(event) =>{setNewDateLivraison(event.target.value)}} /></td>
                  <td><input type="text"  onChange={(event) =>{setNewEtat(event.target.value)}}/></td>
                  <td><button onClick={() => updateCmd(val._id) } class="btn btn-warning"> Update </button></td>
                  <th> <button class="btn btn-danger" onClick={() => {if(window.confirm('voulez vous effacer cette commande?')){DeleteCmd(val._id)}}}>Delete</button></th>
                </tr>
                </tbody>
                {" "}
              </div>
            );
          })
          }
        </table>
    </div>
  );
}
export default ListCmd;