import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import PreLoading from "../assets/preloading.gif";

import "../styles/Footerfooter.css"

import "../styles/Home.css";

function Home() {
  return (
    <div className="blackbg">
    <div className="home" style={{ backgroundImage: `url(${PreLoading})` }}>
    
    
      <div className="headerContainer">
        <h1> PharmacyApp </h1><br></br>
        <p> THE BEST TO DO THE JOB</p>
        <br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <Link to="/menu">
          <button> MANAGE NOW </button>
        </Link>
        <br></br><br></br><br></br>
    </div>
    </div>
    </div>);
}

export default Home;
