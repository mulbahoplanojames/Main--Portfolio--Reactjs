import Styles from "/src/Components/Service/Service.module.css";
import Styles2 from "/src/Components/Service_Card/ServiceCard.module.css";
import ServiceCard from "../Service_Card/ServiceCard";
import { BsCardChecklist, BsBriefcase } from "react-icons/bs";
import { MdOutlinePhonelink } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";

const Service = () => {
  return (
    <>
      <section id={Styles.services}>
        <h1 className={Styles.service_main_title}>Services</h1>
        <p className={Styles.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil sunt
          placeat ducimus perspiciatis, facere nobis facilis similique
          cupiditate accusamus consequatur?
        </p>

        <div className={Styles.services_wripper}>
          <ServiceCard
            icon={<BsBriefcase className={Styles2.icon} />}
            service_title={"Web Design"}
            service_description={
              " Web development is the process of developing, programming, code and maintaining website and web application. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, adipisci."
            }
          />
          <ServiceCard
            icon={<BsCardChecklist className={Styles2.icon} />}
            service_title={"Web Development"}
            service_description={
              "lorem  Web development is the process of developing, programming, code and maintaining website and web application. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, adipisci."
            }
          />
          <ServiceCard
            icon={<MdOutlinePhonelink className={Styles2.icon} />}
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
