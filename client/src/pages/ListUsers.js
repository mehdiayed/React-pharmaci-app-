import React from 'react';
import { useState, useEffect } from "react";
import "../styles/adduser.css";
import Axios from 'axios';
import "../styles/Menu.css";
import 'bootstrap/dist/css/bootstrap.min.css';





function ListUsers() {

    const [UsersList, setUsersList] = useState([]);


    const [NewUserName, setNewUserName] = useState("");
    const [NewUserLogin, setNewUserLogin] = useState("");
    const [NewUserPwd, setNewUserPwd] = useState("");
    const [NewUserTel, setNewUserTel] = useState(0);
    const [NewUserMail, setNewUserMail] = useState("");
    const [NewUserAdress, setNewUserAdress] = useState("");
    const [NewUserGrade, setNewGrade] = useState("")
    const [NewTypeprofil, setNewTypeprofil] = useState("")


    // ---------------------- READ DATA FUNCTION ------------------

    useEffect(() => {
        Axios.get("http://localhost:3001/readUsers").then((response) => {
            setUsersList(response.data);
        }, [])
    })


    // ---------------------- UPDATE DATA FUNCTION ------------------
    const updateUsers = (id) => {
        Axios.put("http://localhost:3001/updateUser", {
            id: id,
            NewUserName: NewUserName,
            NewUserLogin: NewUserLogin,
            NewUserPwd: NewUserPwd,
            NewUserTel: NewUserTel,
            NewUserMail: NewUserMail,
            NewUserAdress: NewUserAdress,
            NewUserGrade: NewUserGrade,
            NewTypeprofil: NewTypeprofil,

        })
    }

    // ---------------------- DELETE DATA FUNCTION ------------------   
    const DeleteUsers = (id) => {
        Axios.delete(`http://localhost:3001/deleteUser/${id}`, {
        })
    }




    return (
        <div className="menu">
            <h3 className="menuTitle">La liste des Utilisateurs</h3>
            <table class="styled-table">

                {UsersList.map((val, key) => {
                    return (
                        <div key={key}>
                            
                            <thead>
                                <tr>
                                    <th >name - LastName</th><th>Login</th><th>Password</th><th>Phone Number</th><th>Email</th><th>Adress</th><th>Grade</th><th>Type de profil</th><th>update</th><th>delete</th>                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><center> {val.Name_LastName}</center></td>
                                    <td><center> {val.Login}        </center></td>
                                    <td><center> {val.Pwd}          </center></td>
                                    <td><center> {val.Tel}          </center></td>
                                    <td><center> {val.Mail}         </center></td>
                                    <td><center> {val.Adress}       </center></td>
                                    <td><center> {val.Grade}        </center></td>
                                    <td><center> {val.Typeprofil}   </center></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><input class="input_afficheuser" type="text" defaultValue={val.Name_LastName} onChange={(event) => { setNewUserName(event.target.value) }} /></td>
                                    <td><input class="input_afficheuser" type="text" onChange={(event) => { setNewUserLogin(event.target.value) }} /></td>
                                    <td><input class="input_afficheuser" type="text" onChange={(event) => { setNewUserPwd(event.target.value) }} /></td>
                                    <td><input class="input_afficheuser" type="number" onChange={(event) => { setNewUserTel(event.target.value) }} /></td>
                                    <td><input class="input_afficheuser" type="text" onChange={(event) => { setNewUserMail(event.target.value) }} /></td>
                                    <td><input class="input_afficheuser" type="text" onChange={(event) => { setNewUserAdress(event.target.value) }} /></td>
                                    <td><select name="Grade" id="" onChange={(event) => { setNewGrade(event.target.value) }}>
                                        <option value="professeur hospitalo">professeur hospitalo</option>
                                        <option value="maître de conférences ">maître de conférences </option>
                                        <option value="assistant hospitalo-.">assistant hospitalo</option>
                                    </select></td>
                                    <td><input class="input_afficheuser" type="text" onChange={(event) => { setNewTypeprofil(event.target.value) }} /></td>
                                    <td><button onClick={() => updateUsers(val._id)} class="btn btn-warning"> Update </button></td>
                                    <th> <button class="btn btn-danger" onClick={() => {if(window.confirm('voulez vous effacer cet Utilisateur ?')){DeleteUsers(val._id)}}}>Delete</button></th>
                                </tr>
                            </tbody>
                            
                        </div>
                    );
                })
                }
            </table>
        </div>
    );
}
export default ListUsers;