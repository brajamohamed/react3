import React from "react";
import Card from "../Card/Card";
import "bootstrap/dist/css/bootstrap.css";
const CardContainer = ({ data }) => {
  return (
    <div className="row">
      {data.map((data) => {
        return <Card data={data} />;
      })}
    </div>
  );
};

export default CardContainer;
