
import React, { useState,useEffect} from 'react'
import Axios from 'axios'
import "../styles/ListMedic.css";
import 'bootstrap/dist/css/bootstrap.min.css';



function ListMedic(){
    const[design,setDesign]=useState("")
  const[codeM,setCodeM]=useState(0)
  const[cat,setCat]=useState("")
  const[prix,setPrix]=useState(0)
  const[qteStock,setQteStock]=useState(0)
  const[des,setDes]=useState("")
  const[avecOrd,setAvecOrd]=useState(true)
  const[qteAch,setQteAch]=useState(0)
  const [MedicList,setMedicList]=useState([])
  //New for update
 const [newDesign,setNewDesign]=useState("")
 const [newPrix,setNewPrix]=useState(0)
 const [newQteStock,setNewQteStock]=useState(0)

 useEffect(() => {
    Axios.get('http://localhost:3001/listerMedic').then((response)=>{
      setMedicList(response.data);
      
  });
},[]);
 
 
 const deleteMedic=(id)=>{
     
  

    Axios.delete('http://localhost:3001/delete/'+id);
    
 

 };
 
 const updateMedic=(id)=>{
    Axios.put("http://localhost:3001/update",{
       id:id,
       newPrix:newPrix,
       newQteStock:newQteStock,
       newDesign:newDesign!==""?newDesign:design
 
 });
 alert('Your data is Updated!')
 };
    return(
        <table class="content-table">
        {MedicList.map((val,key)=>{
         
            if(val.avecOrdonnance===true){
                return<center>
                 <tr id={key}>
             
                <thead>
                    <tr>
                    <th><center> Designation</center></th>
                <th> <center>Code </center></th>
                <th> <center>Categorie</center></th>
                <th> <center>Prix </center></th>
                <th> <center>Description </center></th>
                <th> <center>Qté </center></th>
                <th> <center>Ordonnance</center></th>
                <th><center>Update Area</center></th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                <th>{val.designation}</th>
                <th>{val.codeM}</th>
                <th>{val.categorie}</th>
                <th>{val.prix}</th>
                <th>{val.description}</th>
                <th>{val.qteStock}</th>
                <th>Avec Ordonnance</th>
                
                Designation:
          <input type="text"   name="design" defaultValue={val.designation} onChange={(event)=>{
        setNewDesign(event.target.value);
      }}></input>
      <br></br>
      <br></br>

      Prix    :
      <input type="number" width="10" name="prix"  defaultValue={val.prix} onChange={(event)=>{
        setNewPrix(event.target.value);
      }}></input>
            <br></br>
            <br></br>


      Qté Stock     : 
      <input type="number" name="qteStock"  defaultValue={val.qteStock} placeholder='Modifier Qté stock...' onChange={(event)=>{
          setNewQteStock(event.target.value);
        }} ></input>
        </tr>
         <th></th>
         <th></th>  <th></th> <th></th>
         <center>
                <th> <button class="btn btn-danger" onClick={() => {if(window.confirm('voulez vous effacer cet Medicament ?')){deleteMedic(val._id)}}}>Delete</button></th>
            <th><button class="btn btn-warning" onClick={()=>updateMedic(val._id)}>Update</button></th>
            </center>
                     
                </tbody>


               




            </tr>  
            <tr>
                
            </tr>
            </center>         }
            else {
                return<center>
                 <tr id={key}>
             
                <thead>
                    <tr>
                <th><center> Designation</center></th>
                <th> <center>Code </center></th>
                <th> <center>Categorie</center></th>
                <th> <center>Prix </center></th>
                <th> <center>Description </center></th>
                <th> <center>Qté </center></th>
                <th> <center>Ordonnance</center></th>
                <th><center>Update Area</center></th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                <th>{val.designation}</th>
                <th>{val.codeM}</th>
                <th>{val.categorie}</th>
                <th>{val.prix}</th>
                <th>{val.description}</th>
                <th>{val.qteStock}</th>
                <th>Aucune Ordonnance</th>
                
                Designation:
          <input type="text"   name="design" defaultValue={val.designation} onChange={(event)=>{
        setNewDesign(event.target.value);
      }}></input>
      <br></br>
      <br></br>

      Prix    :
      <input type="number" width="10" name="prix"  defaultValue={val.prix} onChange={(event)=>{
        setNewPrix(event.target.value);
      }}></input>
            <br></br>
            <br></br>


      Qté Stock     : 
      <input type="number" name="qteStock"  defaultValue={val.qteStock} placeholder='Modifier Qté stock...' onChange={(event)=>{
          setNewQteStock(event.target.value);
        }} ></input>
        </tr>
         <th></th>
         <th></th>  <th></th> <th></th>
         <center>
         <th> <button class="btn btn-danger" onClick={() => {if(window.confirm('voulez vous effacer cet Medicament ?')){deleteMedic(val._id)}}}>Delete</button></th>
            <th><button class="btn btn-warning" onClick={()=>updateMedic(val._id)}>Update</button></th>
            </center>
                     
                </tbody>


               




            </tr>  
            <tr>
                
            </tr>
            </center>        
    
            }
            
    
          }
          )}
         
          </table>
    );
}

export default ListMedic;