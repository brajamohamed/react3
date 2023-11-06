import React from "react";
import "bootstrap/dist/css/bootstrap.css";
const Card = ({ data }) => {
  return (
    <div className="col-lg-3 col-md-6">
      <img src={data.thumbnailUrl} alt="datapic" className="my-2" />
    </div>
  );
};

export default Card;
