import React from "react";
import "../styles/adduser.css";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { Axios } from "axios";
import pharm from "../assets/pharm.png"


function EspaceUser() {
  const [Name_LastName, setNamelastname] = useState("")
  const [Login, setLogin] = useState("")
  const [Pwd, setPwd] = useState("")
  const [Tel, setTel] = useState(0)
  const [Mail, setMail] = useState("")
  const [Adress, setAdress] = useState("")
  const [Grade, setGrade] = useState("")
  const [Typeprofil, setTypeprofil] = useState("")

  const addnewUser = () => {
    Axios.post("http://localhost:3001/insetUser", {
      Name_LastName: Name_LastName,
      Login: Login,
      Pwd: Pwd,
      Tel: Tel,
      Mail: Mail,
      Adress: Adress,
      Grade: Grade,
      Typeprofil: Typeprofil
    })
    alert("utilisateur ajouté avec succée");
  }

  return (
    <div className="contact">
        <br></br>
      <div className="leftSide" style={{ backgroundImage: `url(${pharm})` }}>

      </div>
      <div className="rightSide">
        <h1> Ajouter votre nouveau utilisateur</h1>
        <form id="contact-form">
          <label htmlFor="name">UserName</label>
          <input name="name" placeholder="Enter full name..." type="text" onChange={(event) => { setNamelastname(event.target.value) }} />
          <label htmlFor="email" >Login</label>
          <input name="Login" placeholder="Enter Login..." type="text" onChange={(event) => { setLogin(event.target.value) }} />
          <label htmlFor="email" >Password</label>
          <input name="Password" placeholder="Enter Password..." type="text" onChange={(event) => { setPwd(event.target.value) }} />
          <label htmlFor="email">Phonenumber</label>
          <input name="Phonenumber" placeholder="Enter Phonenumber..." type="number" onChange={(event) => { setTel(event.target.value) }} />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="text" onChange={(event) => { setMail(event.target.value) }} />
          <label htmlFor="email">Adress</label>
          <input name="Adress" placeholder="Enter Adress..." type="text" onChange={(event) => { setAdress(event.target.value) }} />
          <label htmlFor="email">Grade</label>
          <select name="Grade" id="" onChange={(event) => { setGrade(event.target.value) }}>
            <option value="professeur hospitalo">professeur hospitalo</option>
            <option value="maître de conférences ">maître de conférences </option>
            <option value="assistant hospitalo-.">assistant hospitalo</option>
          </select>
          <label htmlFor="Profiletype">Profil type</label>
         
          <input name="type" placeholder="Enter type..." type="text" onChange={(event) => { setTypeprofil(event.target.value) }} />

          <button onClick={addnewUser}> Ajouter Utilisateur</button> <Link to={"ListUsers"}><button> voir tous les Utilisateur </button></Link>
        </form>
      </div>
    </div>
  );
}

export default EspaceUser;