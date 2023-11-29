import React from "react";
import "/src/Components/RecentWorkCard/RecentWorkCard.css";
import { BsPlusCircle } from "react-icons/bs";

const RecentWorkCard = (props) => {
  const { img, project_title } = props;
  return (
    <>
      <div className="recent_work_card_wripper">
        <div className="work_image">{img}</div>
        <div className="work_description_wripper">
          <div className="description_wripper">
            <div className="peoject_title">{project_title}</div>
            <div className="project_info">
              <span className="web_title">Web design</span>/ 18 sep.2023
            </div>
          </div>
          <div className="plus_icon_wripper">
            <BsPlusCircle className="plus_icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentWorkCard;
