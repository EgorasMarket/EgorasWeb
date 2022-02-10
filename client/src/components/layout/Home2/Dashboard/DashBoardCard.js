import React, { useState, useEffect } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
const DashBoardCard = ({ title , balance, background}) => {
  return (
    <div className="card_cont1" >
      <div className="card_cont_txtxs">
        <div className="save_card_cont_txt1">
          <span className="savings_caption">{title}</span>
          <div className="card_cont_txt_tittle">₦{balance}</div>
        </div>
        <div className="to_save_btn">
          <LogoutIcon className="to_save_area_icon" /> Start saving
        </div>
      </div>
      <img src={background} alt="" className="savings_card" />
    </div>
  );
};

export default DashBoardCard;
