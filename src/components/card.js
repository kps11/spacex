import React from "react";
import '../App.css';


function Card(props) {
    const {mission_id,mission_name  ,launch_year,launch_success,imgUrl} = props
  return (
    <div className="card">
      <div className="image-container">
        <img src={imgUrl} className="image-style" />
      </div>
      <div className="body">
        <p className="mission_name"> {mission_name}</p>
        <p>
          <b> Mission Ids : </b>
          <p>{mission_id}</p>
        </p>
        <p>
          <b>Lunch Year: </b>
          {launch_year}
        </p>
        <p>
          <b> Sucessfull Lunch: </b>
          <span>{launch_success.toString()}</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
