import React from "react";
import "/src/Components/Service_Card/ServiceCard.css";

const ServiceCard = (props) => {
  const { icon, service_title, service_description } = props;
  return (
    <>
      <div className="service_card_wripper">
        <div className="service_icon_wripper">{icon}</div>
        <h2 className="service_title">{service_title}</h2>
        <p className="services_decsription">{service_description}</p>
      </div>
    </>
  );
};

export default ServiceCard;
