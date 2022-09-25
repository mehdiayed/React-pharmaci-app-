import React from "react";
import "../styles/adduser.css";
import { Link } from 'react-router-dom'
import { useState } from "react";
import { Axios } from "axios";
function AddUser() {
//states for new user
  const[namelastName,setNamelastname]=useState("")
  const[login,setLogin]=useState("")
  const[pwd,setPwd]=useState("")
  const[tel,setTel]=useState(0)
  const[mail,setMail]=useState("")
  const[adress,setAdress]=useState("")
  const[grade,setGrade]=useState("")
  const[typeprofil,setTypeprofil]=useState("")

  const addnewUser=()=>{
  Axios.post('http://localhost:3001/addnewUser',{
    Name_LastName:namelastName,
    Login:login,
    Pwd:pwd,
    Tel:tel,
    Mail:mail,
    Adress:adress,
    Grade:grade,
    Typeprofil:typeprofil
     })}













    return (
      <div className="contact">
        <div className="leftSide" >
        <Link to={"ListUser"}>
                    <li>Liste Utilisateurs</li>
                </Link>
        </div>
        <div className="rightSide">
          <h1> Ajouter votre nouveau utilisateur</h1>
          <form id="contact-form" method="POST" >
            <label htmlFor="name">UserName</label>
            <input name="name" placeholder="Enter full name..." type="text" onChange={(event)=>{
        setNamelastname(event.target.value);
      }}/>
            <label htmlFor="email" >Login</label>
            <input name="Login" placeholder="Enter Login..." type="text"  onChange={(event)=>{
        setLogin(event.target.value);
      }}/>
            <label htmlFor="email" >Password</label>
            <input name="Password" placeholder="Enter Password..." type="password" onChange={(event)=>{
        setPwd(event.target.value);
      }} />
            <label htmlFor="email">Phonenumber</label>
            <input name="Phonenumber" placeholder="Enter Phonenumber..." type="number" onChange={(event)=>{
        setTel(event.target.value);
      }}/>
            <label htmlFor="email">Email</label>
            <input name="email" placeholder="Enter email..." type="email" onChange={(event)=>{
        setMail(event.target.value);
      }}/>
            <label htmlFor="email">Adress</label>
            <input name="Adress" placeholder="Enter Adress..." type="text" onChange={(event)=>{
        setAdress(event.target.value);
      }}/>
            <label htmlFor="email">Grade</label>
            <select name="Grade" id="" onChange={(event)=>{
        setGrade(event.target.value);
      }}>
                <option value="professeur hospitalo-universitaire en pharmacie">professeur hospitalo-universitaire en pharmacie</option>
                <option value="maître de conférences agrégé hospitalo-universitaire en pharmacie">maître de conférences agrégé hospitalo-universitaire en pharmacie</option>
                <option value="assistant hospitalo-universitaire en pharmacie.">assistant hospitalo-universitaire en pharmacie.</option>

            </select>
            <label htmlFor="Profiletype">Profil type</label>
            <input name="type" placeholder="Enter type..." type="text" onChange={(event)=>{
        setTypeprofil(event.target.value);
      }}/>
            
            <button type="submit" onClick={addnewUser}> Ajouter User</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default AddUser;