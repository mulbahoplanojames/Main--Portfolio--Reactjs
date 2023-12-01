import React from "react";
import Styles from "/src/Components/Service_Card/ServiceCard.module.css";

const ServiceCard = (props) => {
  const { icon, service_title, service_description } = props;
  return (
    <>
      <div className={Styles.service_card_wripper}>
        <div className={Styles.service_icon_wripper}>{icon}</div>
        <h2 className={Styles.service_title}>{service_title}</h2>
        <p className={Styles.services_decsription}>{service_description}</p>
      </div>
    </>
  );
};

export default ServiceCard;
