import React from "react";
import "/src/Components/Service/Services.css";

export const Services_Card = (props) => {
  return (
    <>
      <div className="service_card">
        <p className="service_number">{props.service_num}</p>
        <div className="service_icon">{props.service_icon}</div>
        <h1 className="service-content-title">{props.service_content_title}</h1>
        <p className="services-content-description">
          {props.service_description}
        </p>
        <a href="#" className="read-more">
          Read more &nbsp;&rarr;
        </a>
      </div>
    </>
  );
};

export default Services_Card;
