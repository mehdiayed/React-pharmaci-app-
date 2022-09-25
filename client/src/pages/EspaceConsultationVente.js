import React from 'react';
import { useState, useEffect } from "react";
import "../styles/adduser.css";
import Axios from 'axios';
import "../styles/Menu.css";




function EspaceConsultationVente() {

    const [NumV, setNumV] = useState()
    const [DateV, setDateV] = useState("")
    const [MontantV, setMontantV] = useState()
    const [Remise, setRemise] = useState()
    const [A_payer, seA_payer] = useState()
    

    const [VenteList, setVenteList] = useState([]);


    // ---------------------- READ DATA FUNCTION ------------------
    useEffect(() => {
        Axios.get("http://localhost:3001/readVente").then((response) => {
            setVenteList(response.data);
        }, [])
    });



    return (
        <div className="menu">
            <h3 className="menuTitle">La liste des Ventes</h3>
            <table class="styled-table">

                {VenteList.map((val, key) => {
                    return (
                        <div key={key}>
                            {" "}
                            <thead>
                                <tr>
                                    <th >numero du vente</th><th>Date vente</th><th>Montant</th><th>Remise</th><th>A payer</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><center> {val.NumV}        </center></td>
                                    <td><center> {val.DateV}        </center></td>
                                    <td><center> {val.MontantV}    </center></td>
                                    <td><center> {val.Remise}  </center></td>
                                    <td><center> {val.A_payer}           </center></td>
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
export default EspaceConsultationVente;