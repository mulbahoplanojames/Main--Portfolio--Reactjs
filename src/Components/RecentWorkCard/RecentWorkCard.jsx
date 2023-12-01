import React from "react";
import Styles from "/src/Components/RecentWorkCard/RecentWorkCard.module.css";
import { BsPlusCircle } from "react-icons/bs";

const RecentWorkCard = (props) => {
  const { img, project_title } = props;
  return (
    <>
      <div className={Styles.recent_work_card_wripper}>
        <div className={Styles.work_image}>{img}</div>
        <div className={Styles.work_description_wripper}>
          <div className={Styles.description_wripper}>
            <div className={Styles.peoject_title}>{project_title}</div>
            <div className={Styles.project_info}>
              <span className={Styles.web_title}>Web design</span>/ 18 sep.2023
            </div>
          </div>
          <div className={Styles.plus_icon_wripper}>
            <a href="#contact_info">
              <BsPlusCircle className={Styles.plus_icon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentWorkCard;
