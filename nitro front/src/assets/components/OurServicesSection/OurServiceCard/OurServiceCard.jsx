import React from "react";
import "./OurServiceCard.scss";
function OurServiceCard({  icon, title, desc, deleteCard }) {
  return (
    <div className="card_container">
      <div className="card">
        <div className="icon">
          <i className={icon}></i>
        </div>
        <div className="title">{title}</div>
        <div className="desc">{desc}</div>
        <i onClick={deleteCard} class="fa-solid fa-trash-can"></i>
      </div>
    </div>
  );
}

export default OurServiceCard;
