import React, { useState, useEffect } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
const DashBoardCard = ({ val, key }) => {



  return (
    <div className="card_cont1" key={key}>
      <div className="card_cont_txtxs">
        <div className="save_card_cont_txt1">
          <span className="savings_caption">{val.title}</span>
          <div className="card_cont_txt_tittle">₦{val.Balance}</div>
        </div>
        <div className="to_save_btn">
          <LogoutIcon className="to_save_area_icon" /> Start saving
        </div>
      </div>
      <img src={val.img} alt="" className="savings_card" />
    </div>
  );
};

export default DashBoardCard;
