import React, { useEffect, useState } from "react";
import "/src/Components/Service/Service.css";
import ServiceCard from "../Service_Card/ServiceCard";
import { BsCardChecklist, BsBriefcase } from "react-icons/bs";
import { MdOutlinePhonelink } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";

const Service = () => {
  return (
    <>
      <section id="services">
        <h1 className="service_main_title">Services</h1>
        <p className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil sunt
          placeat ducimus perspiciatis, facere nobis facilis similique
          cupiditate accusamus consequatur?
        </p>

        <div className="services_wripper">
          <ServiceCard
            icon={<BsBriefcase className="icon" />}
            service_title={"Web Design"}
            service_description={
              " Web development is the process of developing, programming, code and maintaining website and web application. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, adipisci."
            }
          />
          <ServiceCard
            icon={<BsCardChecklist className="icon" />}
            service_title={"Web Development"}
            service_description={
              "lorem  Web development is the process of developing, programming, code and maintaining website and web application. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, adipisci."
            }
          />
          <ServiceCard
            icon={<MdOutlinePhonelink className="icon" />}
            service_title={"Responsive Design"}
            service_description={
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet libero odit eius laborum iste consequuntur esse. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, adipisci."
            }
          />
          {/* <ServiceCard
            icon={<FaLaptopCode className="icon" />}
            service_title={"Free lancing"}
            service_description={
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet libero odit eius laborum iste consequuntur esse. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, adipisci."
            }
          /> */}
        </div>
      </section>
    </>
  );
};

export default Service;
