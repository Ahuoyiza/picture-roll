import React from "react";
import Card from "../card/Card";
import "./card-list.css";

const CardList = (props) => {
  return (
    <div className="container card-list">
      {props.images.map((images) => (
        <Card key={images.id} images={images} />
      ))}
    </div>
  );
};
export default CardList;
