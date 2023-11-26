import React from "react";
import "/src/Components/About/ViewCard.css";

const ViewCard = (props) => {
  const { number, description } = props;
  return (
    <>
      <div className="view_card">
        <h1 className="number">{number}</h1>
        <p className="number_description">{description}</p>
      </div>
    </>
  );
};

export default ViewCard;
