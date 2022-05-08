import React, { useState, useEffect } from "react";

import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SavingsIcon from "@mui/icons-material/Savings";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PaidIcon from "@mui/icons-material/Paid";
import ApartmentIcon from "@mui/icons-material/Apartment";
// import { FunctionButton } from "../Buttons/Button";
import "./HeaderMenu.css";
const HeaderMenu = ({ onClick }) => {
  return (
    <div className="headerMenuDiv">
      <div className="headerMenu_area">
        <div className="headerMenu_area_heading">
          <CloseIcon
            className="header_area_menu_icon_close"
            onClick={onClick}
          />
        </div>
        <div className="headerMenu_area_cont1">
          <a href="https://egoras.com/loan" className="header_area_menu_link">
            <div className="header_area_link_button">
              <span className="header_area_menu_icon">
                <PaidIcon className="header_area_menu_icon_svg" />
              </span>
              Loan
            </div>

            <span className="header_area_menu_icon">
              <ArrowForwardIosIcon className="header_area_menu_icon_arrow" />
            </span>
          </a>
          <a
            href="https://egoras.com/savings"
            className="header_area_menu_link"
          >
            <div className="header_area_link_button">
              <span className="header_area_menu_icon">
                <ShoppingCartIcon className="header_area_menu_icon_svg" />
              </span>
              Buy Now
            </div>

            <span className="header_area_menu_icon">
              <ArrowForwardIosIcon className="header_area_menu_icon_arrow" />
            </span>
          </a>
          <a
            href="https://egoras.com/savings"
            className="header_area_menu_link"
          >
            <div className="header_area_link_button">
              <span className="header_area_menu_icon">
                <SavingsIcon className="header_area_menu_icon_svg" />
              </span>
              Savings
            </div>
            <span className="header_area_menu_icon">
              <ArrowForwardIosIcon className="header_area_menu_icon_arrow" />
            </span>
          </a>
          <a href="https://egoras.com/about" className="header_area_menu_link">
            <div className="header_area_link_button">
              <span className="header_area_menu_icon">
                <ApartmentIcon className="header_area_menu_icon_svg" />
              </span>
              Company
            </div>
            <span className="header_area_menu_icon">
              <ArrowForwardIosIcon className="header_area_menu_icon_arrow" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
