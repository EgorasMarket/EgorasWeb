import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import GroupsIcon from "@mui/icons-material/Groups";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import Inventory2Icon from "@mui/icons-material/Inventory2";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
// import SecurityIcon from "@mui/icons-material/Security";
import BarChartIcon from "@mui/icons-material/BarChart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import ListIcon from "@mui/icons-material/List";
import ViewListIcon from "@mui/icons-material/ViewList";
import "./AdminStyles/adminUploadProducts.css";
// import ImportExportIcon from "@mui/icons-material/ImportExport";
import DescriptionIcon from "@mui/icons-material/Description";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import SwapHorizontalCircleIcon from "@mui/icons-material/SwapHorizontalCircle";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import PlaylistAddRoundedIcon from "@mui/icons-material/PlaylistAddRounded";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import GroupIcon from "@mui/icons-material/Group";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  PRODUCT_LOADED,
  API_URL2 as api_url2,
} from "../../../actions/types";

const AdminSideBar = () => {
  const dddd = localStorage.getItem("smallSidetoken");

  const [activeBg, setActiveBg] = useState("Home");
  const [catDiv, setCatDiv] = useState("not_home");
  const [smallSide, setSmallSide] = useState(dddd);
  const [cartNum, setCartNum] = useState(5);
  const linksActive = window.location.pathname;

  const [notEqual,setNotEqual] = useState(true);
  const [notEqual1,setNotEqual1] = useState(true);
  const [notEqual2,setNotEqual2] = useState(false);
  const [notEqual3,setNotEqual3] = useState(false);
  const [notEqual4,setNotEqual4] = useState(false);
  const [notEqual5,setNotEqual5] = useState(false);

  const [roles,setRoles]=useState({role1:"",role2
:"",role3:""});


const {role1,role2,role3}= roles;

  const changeBg = (e) => {
    let currentId = e.currentTarget.id;
    setActiveBg(currentId);
  };

  useEffect(() => {
    if (linksActive === "/super_admin") {
      setActiveBg("Home");
    }
    if (linksActive === "/super_admin/user_overview") {
      setActiveBg("cusAcct");
    }
    if (linksActive === "/super_admin/") {
      setActiveBg("Home");
    }
    if (linksActive === "/super_admin/all_products") {
      setActiveBg("allProd");
    }
    if (linksActive === "/super_admin/all_user") {
      setActiveBg("products");
    }
    if (linksActive === "/super_admin/register_user") {
      setActiveBg("register");
    }

    // if (linksActive === "/dashboard/referrals") {
    //   setActiveBg("swap");
    // }
    // if (linksActive === "/dashboard/tasks") {
    //   setActiveBg("tasks");
    // }
    // if (linksActive === "/dashboard/whitepaper") {
    //   setActiveBg("whitepaper");
    // }
    //  setCatDiv("not_home");
    if (smallSide == "not_small") {
      localStorage.setItem("smallSidetoken", "not_small");
    } else {
      localStorage.setItem("smallSidetoken", "smallSide");
    }
  }, []);


  const shrinkAction = () => {
    if (smallSide == "not_small") {
      setSmallSide("smallSide");
      localStorage.setItem("smallSidetoken", "smallSide");
    } else {
      setSmallSide("not_small");
      localStorage.setItem("smallSidetoken", "not_small");
    }
  };


  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };



  useEffect(() => {
  
    axios.get(
        api_url2 + "/v1/admin/info",
        null,
        config
    ).then((data) => {
       
        console.log(data.data.user, "line_ful");
        setRoles({
          role1:data.data.user.role,
        })
       
    
      })
      .catch((err) => {
        console.log(err); // "oh, no!"
      }); 
  }, []);

  return (
    <div className={smallSide == "not_small" ? "side" : "small_side"}>
      <section className="DashBoardHeaderSection">
        <div className="container-fluid">
          <div className="dashboard-area">
            <div className="egrLogo2Cont3">
              <a href="" alt=""></a>
            </div>

            {/* <Authenticate isHome="false" /> */}

            <div
              className={
                smallSide == "not_small"
                  ? "user_profile_icon_cont"
                  : "small_user_profile_icon_cont"
              }
              //   onMouseOver={openLogoutDiv}
              //   onMouseOut={closeLogoutDiv}
            >
              <div className="welcome_user" style={{ alignItems: "flex-end" }}>
                Welcome
                <span className="userName_name">Admin</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =============''''''''' */}
      {/* =============''''''''' */}
      {/* =============''''''''' */}
      {catDiv == "home" ? (
        <div className="cat_div" id="cat_div">
          <div className="cat_body_toggle">
            <div className="cat_body_toggle1">
              All Categories
              <ListIcon className="cat_icon" />
            </div>
            <div className="cat_body_toggle1">Computers and Accessories</div>
            <div className="cat_body_toggle1">Phones and Tablets</div>
            <div className="cat_body_toggle1">Electronics</div>
            <div className="cat_body_toggle1">Konga Fashion</div>
            <div className="cat_body_toggle1">Home and Kitchen</div>
            <div className="cat_body_toggle1">Other Categories</div>
          </div>
        </div>
      ) : (
        <div></div>
      )}

      {/* ========== */}
      {/* ========== */}
      {/* ========== */}

      <div
        className="sidebar"
        // className={side == "sidebar" ? "not-sidebar" : "sidebar"}
        id="side_bar"
      >
        <div
          className="sidebarWrapper"
          // className={
          //   sideWrap == "sidebarWrapper"
          //     ? "not-sidebarWrapper"
          //     : "sidebarWrapper"
          // }
          id="side_bar_wrapper"
        >
          <div className="sidebarMenu">
            <div
              className={
                smallSide == "not_small"
                  ? "side_bar_head"
                  : "small_side_bar_head"
              }
            >
              {/* {smallSide == "not_small" ? (
                <MenuIcon className="menu_icon_toggle" onClick={shrinkSide} />
              ) : (
                <MenuIcon className="menu_icon_toggle" onClick={UnShrinkSide} />
              )}{" "} */}
              <MenuIcon className="menu_icon_toggle" onClick={shrinkAction} />
              <a href="#" alt="">
                <img
                  src="/img/egoras-logo.svg"
                  alt="..."
                  className="egr-logo3cc"
                />
              </a>
            </div>

            {/* <h3 className="sidebarTitle">Dashboard</h3> */}

            {smallSide == "not_small" ? (
              <ul className="sidebarList">
                {/* =================== */}
                {/* =================== */}
                {/* =================== */}
                {/* =================== */}

                 
                {role1 === "MEDIA"?
                <a
                  href="/super_admin"
                  id="Home"
                  className="link"
                  onClick={changeBg}
                >
                  <li
                    className={
                      ((activeBg == "Home") && (role1 === "MEDIA"))
                        ? "sidebarListItem list-item-active"
                        : "sidebarListItem"
                    }
                  >
                    <Inventory2Icon className="sidebarIcon" />
                    Products
                  </li>
                </a>: null}

                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
               
                {role1 === "HOD_MEDIA" ?
                <a
                  href="/super_admin/all_products"
                  className="link"
                  id="allProd"
                  onClick={changeBg}
                >
                  <li
                    className={
                      ((activeBg == "allProd") && (role1 === "HOD_MEDIA"))
                        ? "sidebarListItem list-item-active"
                        : "sidebarListItem"
                    }
                  >
                    <ViewListIcon className="sidebarIcon" />
                    All Prod
                  </li>
                </a>: null}

                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
             

                {((role1 === "CASHIER") || (role1 === "CUSTOMER_SERVICE" ))?
                <a
                  href="/super_admin/all_user"
                  className="link"
                  id="products"
                  onClick={changeBg}
                >
                  <li
                    className={
                      activeBg == (("products") && ((role1 === "CASHIER" )|| ( role1 ==="CUSTOMER_SERVICE" )))
                        ? "sidebarListItem list-item-active"
                        : "sidebarListItem"
                    }
                  >
                    <GroupsIcon className="sidebarIcon" />
                    Customer
                  </li>
                </a> 
                : null}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}


                { role1 === "BUSINESS_ADMIN" ?
                <a
                  href="/super_admin/register_user"
                  className="link"
                  id="register"
                  onClick={changeBg}
                >
                  <li
                    className={
                      ((activeBg == "register") && (role1 === "BUSINESS_ADMIN"))
                        ? "sidebarListItem list-item-active"
                        : "sidebarListItem"
                    }
                  >
                    <GroupAddIcon className="sidebarIcon" />
                    {/* { role1} */}
                    Register
                  </li>
                </a> : null}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                

                {role1 === "BUSINESS_ADMIN"  ?
                <a
                  href="/super_admin/user_overview"
                  className="link"
                  id="cusAcct"
                  onClick={changeBg}
                >
                  <li
                    className={
                      ((activeBg == "cusAcct") && (role1 === "BUSINESS_ADMIN"))
                        ? "sidebarListItem list-item-active"
                        : "sidebarListItem"
                    }
                  >
                    <AccountCircleIcon className="sidebarIcon" />
                    Cust Acct
                  </li>
                </a>
                : null}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}

                {role1 === "CASHIER" ?

                <a href="#" className="link" id="accounts" onClick={changeBg}>
                  <li
                    className={
                      ((activeBg == "accounts") && (role1 === "CASHIER"))
                        ? "sidebarListItem list-item-active"
                        : "sidebarListItem"
                    }
                  >
                    <AccountCircleIcon className="sidebarIcon" />
                    Accounts
                  </li>
                </a>

                : null}              

                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
              </ul>
            ) : (
              <ul className="sidebarList">
                {/* =================== */}
                {/* =================== */}
                {/* =================== */}
                {/* =================== */}
                <a
                  href="/super_admin"
                  id="Home"
                  className="link"
                  onClick={changeBg}
                >
                  <li
                    className={
                      activeBg == "Home"
                        ? "sidebarListItem small_list-item-active"
                        : "sidebarListItem"
                    }
                  >
                    <Inventory2Icon className="sidebarIcon" />
                    Products
                  </li>
                </a>
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}

                <a
                  href="/super_admin/all_products"
                  className="link"
                  id="allProd"
                  onClick={changeBg}
                >
                  <li
                    className={
                      activeBg == "allProd"
                        ? "sidebarListItem small_list-item-active"
                        : "sidebarListItem"
                    }
                  >
                    <ViewListIcon className="sidebarIcon" />
                    {/* <GroupIcon className="sidebarIcon" /> */}
                    All Prod
                  </li>
                </a>
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}

                <a href="#" className="link" id="products" onClick={changeBg}>
                  <li
                    className={
                      activeBg == "products"
                        ? "sidebarListItem small_list-item-active"
                        : "sidebarListItem"
                    }
                  >
                    <GroupsIcon className="sidebarIcon" />
                    {/* <GroupIcon className="sidebarIcon" /> */}
                    Customer
                  </li>
                </a>
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}

                <a
                  href="/super_admin/register_user"
                  className="link"
                  id="register"
                  onClick={changeBg}
                >
                  <li
                    className={
                      activeBg == "register"
                        ? "sidebarListItem small_list-item-active"
                        : "sidebarListItem"
                    }
                  >
                    <GroupAddIcon className="sidebarIcon" />
                    {/* <GroupIcon className="sidebarIcon" /> */}

                     {/* { role1} */}

                    Register
                  </li>
                </a>

                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}

                <a href="#" className="link" id="accounts" onClick={changeBg}>
                  <li
                    className={
                      activeBg == "accounts"
                        ? "sidebarListItem small_list-item-active"
                        : "sidebarListItem"
                    }
                  >
                    <AccountCircleIcon className="sidebarIcon" />
                    Accounts
                  </li>
                </a>

                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
              </ul>
            )}

            <hr className="hrr" />
            <ul className="social_icons">
              <div
                to="/dashboard/accounts"
                className="link"
                id="logout"
                // onClick={}
              >
                <span
                  className="link_color"
                  //   className={
                  //     activeBg == "logout"
                  //       ? "sidebarListItem list-item-active"
                  //       : "sidebarListItem"
                  //   }
                  //   onClick={trigger}
                >
                  <PowerSettingsNewIcon className="sidebarIcon" />
                  Logout
                </span>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSideBar;
