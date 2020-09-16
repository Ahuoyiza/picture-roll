import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="container card-container">
      <div className="row">
        <div className="col">
          <img
            alt="vector-humans"
            src={`https://robohash.org/${props.images.id}?set=set5&size=180x180`}
          />
          <h2>{props.images.name}</h2>
          <p>{props.images.email}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
