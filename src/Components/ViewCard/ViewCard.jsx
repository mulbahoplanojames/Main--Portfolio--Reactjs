import React from "react";
import Styles from "/src/Components/ViewCard/ViewCard.module.css";

const ViewCard = (props) => {
  const { number, description } = props;
  return (
    <>
      <div className={Styles.view_card}>
        <h1 className={Styles.number}>{number}</h1>
        <p className={Styles.number_description}>{description}</p>
      </div>
    </>
  );
};

export default ViewCard;
