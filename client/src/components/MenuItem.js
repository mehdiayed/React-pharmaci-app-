import React from "react";

function MenuItem({ image, name, link }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p>  <a href={link} style={{ textDecoration: `none` }}> allez vers la page</a> </p>
    </div>
  );
}

export default MenuItem;
