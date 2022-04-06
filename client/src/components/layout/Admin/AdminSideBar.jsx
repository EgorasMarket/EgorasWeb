// Skip to content
// Search or jump to…
// Pull requests
// Issues
// Marketplace
// Explore

// @samuel-2001
// EgorasMarket
// /
// EgorasNextProject
// Private
// Code
// Issues
// Pull requests
// Actions
// Projects
// Security
// Insights
// EgorasNextProject/client/src/components/layout/Admin/AdminSideBar.jsx /
// @samuel-2001
// samuel-2001 update
// Latest commit 613e35e 19 days ago
//  History
//  3 contributors
// @Buike369@samuel-2001@Ebrinix
// Executable File  655 lines (597 sloc)  21.6 KB

import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import GroupsIcon from "@mui/icons-material/Groups";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import Inventory2Icon from "@mui/icons-material/Inventory2";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import ListIcon from "@mui/icons-material/List";
import ViewListIcon from "@mui/icons-material/ViewList";
import "./AdminStyles/adminUploadProducts.css";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import GroupIcon from "@mui/icons-material/Group";
import { Link } from "react-router-dom";
import axios from "axios";
import { PRODUCT_LOADED, API_URL2 as api_url2 } from "../../../actions/types";
import Logout from "../Home2/Logout/Logout";
import NewOne from "./AdminPages/newOne";
import Transact from "./AdminPages/Transactionbybranch";
const AdminSideBar = ({ auth }) => {
  const dddd = localStorage.getItem("smallSidetoken");

  const [activeBg, setActiveBg] = useState("Home");
  const [catDiv, setCatDiv] = useState("not_home");
  const [smallSide, setSmallSide] = useState(dddd);
  const [cartNum, setCartNum] = useState(5);
  const linksActive = window.location.pathname;

  const [userInfo, setUserInfo] = useState({
    userbranch: "",
    usercreatedAt: "",
    useremail: "",
    userfullname: "",
    usergender: "",
    userid: "",
    usermobile: "",
    userrole: "",
  });

  const {
    userbranch,
    usercreatedAt,
    useremail,
    userfullname,
    usergender,
    userid,
    usermobile,
    userrole,
  } = userInfo;

  useEffect(() => {
    // setCartNum(cart.length)
    // fetchDepositLinks();
    //console.log(auth);
    if (auth.user !== null) {
      // let dataa = 'stackabuse.com';
      // //console.log( new Buffer(dataa));
      var todecoded = auth.user;
      var todecodedn = todecoded.user.userImage;

      // //console.log('====================================');
      //console.log(todecodedn);
      // //console.log('====================================');

      const getName = todecoded.user.fullname;
      const splitName = getName.split(" ");

      setUserInfo({
        userbranch: todecoded.user.branch,
        usercreatedAt: todecoded.user.createdAt,
        useremail: todecoded.user.email,
        userfullname: todecoded.user.fullname,
        usergender: todecoded.user.gender,
        userid: todecoded.user.id,
        usermobile: todecoded.user.mobile,
        userrole: todecoded.user.role,
      });
    }
  }, [auth]);
  const [notEqual, setNotEqual] = useState(true);
  const [notEqual1, setNotEqual1] = useState(true);
  const [notEqual2, setNotEqual2] = useState(false);
  const [notEqual3, setNotEqual3] = useState(false);
  const [notEqual4, setNotEqual4] = useState(false);
  const [notEqual5, setNotEqual5] = useState(false);

  const locate = window.location.pathname;

  const [roles, setRoles] = useState({ role1: "", role2: "", role3: "" });

  const { role1, role2, role3 } = roles;

  const changeBg = (e) => {
    let currentId = e.currentTarget.id;
    setActiveBg(currentId);
  };

  useEffect(() => {
    if (linksActive === "/super_admin/upload_products") {
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
    if (linksActive === "/super_admin/Approved_products") {
      setActiveBg("allProd2");
    }
    if (linksActive === "/super_admin/staffs_data") {
      setActiveBg("allStaff");
    }
    if (linksActive === "/super_admin/all_user") {
      setActiveBg("products");
    }
    if (linksActive === "/super_admin/user_wallet") {
      setActiveBg("wallet");
    }
    if (linksActive === "/super_admin/customers_by_branch") {
      setActiveBg("cust_branch");
    }
    if (linksActive === "/super_admin/register_user") {
      setActiveBg("register");
    }
    if (linksActive === "/super_admin/cus_user_wallet") {
      setActiveBg("wallet5");
    }
    if (linksActive === "/super_admin/customers_by_location") {
      setActiveBg("cust_locate");
    }
    if (linksActive === "/super_admin/product_routes") {
      setActiveBg("product_route");
    }
    if (linksActive === "/super_admin/route/all-products") {
      setActiveBg("allProd3");
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
    axios
      .get(api_url2 + "/v1/admin/info", null, config)
      .then((data) => {
        //console.log(data.data.user, "line_ful");
        setRoles({
          role1: data.data.user.role,
        });
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }, []);

  const triggerPrint = (e) => {
    let today = new Date().toLocaleDateString();

    // const getName = tag.split(" ");
    // console.log(getName);
    // tag.replaceAll(' ', '')
    // var divContents = document.getElementById("mainContent").innerHTML;

    var printWindow = window.open("", "", "height=1200,width=1200");
    printWindow.document.write(
      "<html><head><style>.small-text{font-size: 12px;}table.GeneratedTable {width: 100%;background-color: #ffffff; border-collapse: collapse; border-width: 1px; border-color: #000000; border-style: solid; color: #000000;}table.GeneratedTable td, table.GeneratedTable th { border-width: 1px; border-color: #000000; border-style: solid;}.center-text{text-align: center;} .center-text h4{margin: 4px;}.set-flex {display: flex; justify-content: space-between;}.w-50{width: 45%;margin:5px;}.bbt{border-bottom: 1px solid black;}</style><title>Item Receipt</title></head>"
    );
    printWindow.document.write(
      '<body style="margin-top: 15px;margin-bottom: 45px;height: min-content;font-family: roboto;margin-right: 25px;  border-bottom: 1px solid black;font-weight:400;">'
    );
    // printWindow.document.write('<h2 style="margin-bottom: 5px">Companys Copy:</h2>');
    printWindow.document.write(
      '<div style="border: 1px solid black;padding: 8px;margin-top: 15px;">'
    );
    printWindow.document.write('<div class="small-text">');
    printWindow.document.write('<div class="set-flex">');
    printWindow.document.write('<div class="w-50">');
    printWindow.document.write(
      '<img height="70" src="https://s2.coinmarketcap.com/static/img/coins/200x200/15368.png">'
    );
    printWindow.document.write(
      '<div class="small-text"><span>ADDRESS: </span><span>No 03 Apala Road Off Aba Express Way PH.</span></div>'
    );
    printWindow.document.write(
      '<div class="small-text"><span>PHONE NUMBER: </span><span>07017299153</span></div>'
    );
    printWindow.document.write(
      '<div class="small-text"><span>EMAIL ADDRESS: </span><span>cs@egoras.com</span></div>'
    );
    printWindow.document.write(
      '<div class="small-text"><span>COMPANY WEBSITE: </span><span>https://www.egoras.com</span></div>                   '
    );
    printWindow.document.write("</div>");
    printWindow.document.write('<div class="w-50">');
    printWindow.document.write(
      '<div class="small-text"><h2>INVOICE/SALES RECEIPT</h2></div>'
    );
    printWindow.document.write(
      '<div class="small-text"><span>INVOICE NO: </span><span>002937</span></div>'
    );
    printWindow.document.write(
      '<div class="small-text"><span>DATE: </span><span>12/05/2022</span></div>'
    );
    printWindow.document.write(
      '<div class="small-text"><span>SALES REP: </span><span>MIKE BENSON</span></div>'
    );
    printWindow.document.write("<br>");
    printWindow.document.write(
      '<div class="small-text"><span>SOLD TO:</span></div>'
    );
    printWindow.document.write(
      '<div class="small-text"><span>NAME: </span><span>Jame Adam</span></div>'
    );
    printWindow.document.write(
      '<div class="small-text"><span>ADDRESS: </span><span>No 23B Adamawu Lane Off Aba Road PH</span></div>'
    );
    printWindow.document.write(
      '<div class="small-text"><span>PHONE NUMBER: </span><span>09034753885</span></div>'
    );
    printWindow.document.write(
      '<div class="small-text"><span>PRODUCT ID: </span><span>EG/AGP/SR/00001</span></div>'
    );
    printWindow.document.write("</div>");
    printWindow.document.write("</div>");
    printWindow.document.write("</div>");
    printWindow.document.write('<div class="small-text">');
    printWindow.document.write(
      '<table style="width: 100%;" class="GeneratedTable">'
    );
    printWindow.document.write("<tbody>");
    printWindow.document.write('<tr style="height: 23px;">');
    printWindow.document.write(
      '<td style="width: 52.5547px;height: 23px;">QTY</td>'
    );
    printWindow.document.write(
      '<td style="width: 100.445px; height: 23px;">ITEM</td>'
    );
    printWindow.document.write(
      '<td style="width: 465px; height: 23px;">DESCRIPTION</td>'
    );
    printWindow.document.write(
      '<td style="width: 73px; height: 23px;">UNIT PRICE</td>'
    );
    printWindow.document.write(
      '<td style="width: 71px; height: 23px;">AMOUNT</td>'
    );
    printWindow.document.write("</tr>");
    printWindow.document.write('<tr style="height: 80px;">');
    printWindow.document.write(
      '<td style="width: 52.5547px; height: 80px;">1</td>'
    );
    printWindow.document.write(
      '<td style="width: 100.445px; height: 80px;">Iphone 12 Pro Max</td>'
    );
    printWindow.document.write(
      '<td style="width: 465px; height: 80px;">Farely Used Iphone 12 Pro Max</td>'
    );
    printWindow.document.write(
      '<td style="width: 73px; height: 80px;">#40000</td>'
    );
    printWindow.document.write(
      '<td style="width: 71px; height: 80px;">#40000</td>'
    );
    printWindow.document.write("</tr>");
    printWindow.document.write('<tr style="height: 22px;">');
    printWindow.document.write(
      '<td style="width: 52.5547px; height: 22px;"></td>'
    );
    printWindow.document.write(
      '<td style="width: 100.445px; height: 22px;"></td>'
    );
    printWindow.document.write('<td style="width: 465px; height: 22px;"></td>');
    printWindow.document.write(
      '<td style="width: 73px; height: 22px;">Total</td>'
    );
    printWindow.document.write(
      '<td style="width: 71px; height: 22px;">#40000</td>'
    );
    printWindow.document.write("</tr>");
    printWindow.document.write("</tbody>");
    printWindow.document.write("</table>");
    printWindow.document.write('<div class="small-text">');
    printWindow.document.write('<div class="set-flex">');
    printWindow.document.write('<div class="w-50"></div>');
    printWindow.document.write('<div class="w-50">');
    printWindow.document.write('<div class="set-flex">');
    printWindow.document.write('<div class="w-50"></div>');
    printWindow.document.write('<div class="w-50">');
    printWindow.document.write('<div class="bbt set-flex">');
    printWindow.document.write("<span>Subtotal: </span><span>N500.00</span>");
    printWindow.document.write("</div>");
    printWindow.document.write(
      '<div class="bbt set-flex"><span>VAT (7.5%): </span><span>N97.50</span></div>'
    );
    printWindow.document.write(
      '<div class="bbt set-flex"><span>TOTAL: </span><span>N597.50</span></div>'
    );
    printWindow.document.write("</div>");
    printWindow.document.write("</div>");
    printWindow.document.write("</div>");
    printWindow.document.write("</div>");
    printWindow.document.write("</div>");
    printWindow.document.write("</div>");
    printWindow.document.write(
      '<div class="center-text"><h4>THANKS FOR YOUR PATRONAGE</h4></div>'
    );
    printWindow.document.write("</div>");
    // printWindow.document.write('<h2 style="margin-bottom: 5px; margin-top: 15px">Customers Copy:</h2>');
    printWindow.document.write(
      '<div style="border: 1px solid black;padding: 8px;margin-top: 15px;">'
    );
    printWindow.document.write('<div class="small-text">');
    printWindow.document.write('<div class="set-flex">');
    printWindow.document.write('<div class="w-50">');
    printWindow.document.write(
      '<img height="70" src="https://s2.coinmarketcap.com/static/img/coins/200x200/15368.png">'
    );
    printWindow.document.write(
      '<div class="small-text"><span>ADDRESS: </span><span>No 03 Apala Road Off Aba Express Way PH.</span></div>'
    );
    printWindow.document.write(
      '<div class="small-text"><span>PHONE NUMBER: </span><span>07017299153</span></div>'
    );
    printWindow.document.write(
      '<div class="small-text"><span>EMAIL ADDRESS: </span><span>cs@egoras.com</span></div>'
    );
    printWindow.document.write(
      '<div class="small-text"><span>COMPANY WEBSITE: </span><span>https://www.egoras.com</span></div>'
    );
    printWindow.document.write("</div>");
    printWindow.document.write('<div class="w-50">');
    printWindow.document.write(
      '<div class="small-text"><h2>INVOICE/SALES RECEIPT</h2></div>'
    );
    printWindow.document.write(
      '<div class="small-text"><span>DATE: </span><span>12/05/2022</span></div>'
    );
    printWindow.document.write(
      '<div class="small-text"><span>SALES REP: </span><span>MIKE BENSON</span></div>'
    );
    printWindow.document.write("<br>");
    printWindow.document.write(
      '<div class="small-text"><span>SOLD TO:</span></div>'
    );
    printWindow.document.write(
      '<div class="small-text"><span>NAME: </span><span>Jame Adam</span></div>'
    );
    printWindow.document.write(
      '<div class="small-text"><span>ADDRESS: </span><span>No 23B Adamawu Lane Off Aba Road PH</span></div>'
    );
    printWindow.document.write(
      '<div class="small-text"><span>PHONE NUMBER: </span><span>09034753885</span></div>'
    );
    printWindow.document.write(
      '<div class="small-text"><span>PRODUCT ID: </span><span>EG/AGP/SR/00001</span></div>'
    );
    printWindow.document.write("</div>");
    printWindow.document.write("</div>");
    printWindow.document.write("</div>");
    printWindow.document.write('<div class="small-text">');
    printWindow.document.write(
      '<table style="width: 100%;" class="GeneratedTable">'
    );
    printWindow.document.write("<tbody>");
    printWindow.document.write('<tr style="height: 23px;">');
    printWindow.document.write(
      '<td style="width: 52.5547px;height: 23px;">QTY</td>'
    );
    printWindow.document.write(
      '<td style="width: 100.445px; height: 23px;">ITEM</td>'
    );
    printWindow.document.write(
      '<td style="width: 465px; height: 23px;">DESCRIPTION</td>'
    );
    printWindow.document.write(
      '<td style="width: 73px; height: 23px;">UNIT PRICE</td>'
    );
    printWindow.document.write(
      '<td style="width: 71px; height: 23px;">AMOUNT</td>'
    );
    printWindow.document.write("</tr>");
    printWindow.document.write('<tr style="height: 80px;">');
    printWindow.document.write(
      '<td style="width: 52.5547px; height: 80px;">1</td>'
    );
    printWindow.document.write(
      '<td style="width: 100.445px; height: 80px;">Iphone 12 Pro Max</td>'
    );
    printWindow.document.write(
      '<td style="width: 465px; height: 80px;">Farely Used Iphone 12 Pro Max</td>'
    );
    printWindow.document.write(
      '<td style="width: 73px; height: 80px;">#40000</td>'
    );
    printWindow.document.write(
      '<td style="width: 71px; height: 80px;">#40000</td>'
    );
    printWindow.document.write("</tr>");
    printWindow.document.write('<tr style="height: 22px;">');
    printWindow.document.write(
      '<td style="width: 52.5547px; height: 22px;"></td>'
    );
    printWindow.document.write(
      '<td style="width: 100.445px; height: 22px;"></td>'
    );
    printWindow.document.write('<td style="width: 465px; height: 22px;"></td>');
    printWindow.document.write(
      '<td style="width: 73px; height: 22px;">Total</td>'
    );
    printWindow.document.write(
      '<td style="width: 71px; height: 22px;">#40000</td>'
    );
    printWindow.document.write("</tr>");
    printWindow.document.write("</tbody>");
    printWindow.document.write("</table>");
    printWindow.document.write('<div class="small-text">');
    printWindow.document.write('<div class="set-flex">');
    printWindow.document.write('<div class="w-50"></div>');
    printWindow.document.write('<div class="w-50">');
    printWindow.document.write('<div class="set-flex">');
    printWindow.document.write('<div class="w-50"></div>');
    printWindow.document.write('<div class="w-50">');
    printWindow.document.write('<div class="bbt set-flex">');
    printWindow.document.write(
      "<span>Subtotal: </span><span>N500.00</span></div>"
    );
    printWindow.document.write(
      '<div class="bbt set-flex"><span>VAT (7.5%): </span><span>N97.50</span></div>'
    );
    printWindow.document.write(
      '<div class="bbt set-flex"><span>TOTAL: </span><span>N597.50</span></div>'
    );
    printWindow.document.write("</div>");
    printWindow.document.write("</div>");
    printWindow.document.write("</div>");
    printWindow.document.write("</div>");
    printWindow.document.write("</div>");
    printWindow.document.write("</div>");
    printWindow.document.write('<div class="center-text">');
    printWindow.document.write("<h4>THANKS FOR YOUR PATRONAGE</h4>");
    printWindow.document.write("</div>");
    printWindow.document.write("</div>");
    printWindow.document.write("</body>");
    printWindow.document.write("</html>");
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className={smallSide == "not_small" ? "side" : "small_side"}>
      <section className="DashBoardHeaderSection">
        <div className="container-fluid">
          <div className="dashboard-area">
            <div className="egrLogo2Cont3">
              <a href="" alt=""></a>
            </div>

            {/* <Authenticate isHome="false" /> */}
            <button onClick={triggerPrint}>Print</button>

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
                {/* <span className="userName_name">Admin</span> */}
                <span className="userName_name">
                  {role1 === "BUSINESS_ADMIN" ? (
                    <span className="userName_name">Business Admin</span>
                  ) : role1 === "LOGISTICS" ? (
                    <span className="userName_name">Logistics</span>
                  ) : role1 === "MEDIA" ? (
                    <span className="userName_name">Media</span>
                  ) : role1 === "WAREHOUSE" ? (
                    <span className="userName_name">Warehouse</span>
                  ) : role1 === "CUSTOMER_SERVICE" ? (
                    <span className="userName_name">Sales Rep</span>
                  ) : role1 === "CASHIER" ? (
                    <span className="userName_name">Sales Rep</span>
                  ) : role1 === "HOD_MEDIA" ? (
                    <span className="userName_name">Head Of Media</span>
                  ) : role1 === "TECH" ? (
                    <span className="userName_name">Tech Team</span>
                  ) : role1 === "ACCOUNTANT" ? (
                    <span className="userName_name">Accounts</span>
                  ) : role1 === "MANAGER" ? (
                    <span className="userName_name">Manager</span>
                  ) : null}
                </span>
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
        <div class="small-text"></div>
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

                {role1 === "MEDIA" ? (
                  <>
                    <a
                      href="/super_admin/upload_products"
                      id="Home"
                      className="link"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "Home" && role1 === "MEDIA"
                            ? "sidebarListItem list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <Inventory2Icon className="sidebarIcon" />
                        Add Product
                      </li>
                    </a>
                    <a
                      href="/super_admin/all_products"
                      className="link"
                      id="allProd"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "allProd"
                            ? "sidebarListItem list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <ViewListIcon className="sidebarIcon" />
                        All Products
                      </li>
                    </a>
                  </>
                ) : null}

                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}

                {role1 === "HOD_MEDIA" ? (
                  <>
                    <a
                      href="/super_admin/all_products"
                      className="link"
                      id="allProd"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "allProd"
                            ? "sidebarListItem list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <ViewListIcon className="sidebarIcon" />
                        All Products
                      </li>
                    </a>
                    <a
                      href="/super_admin/Approved_products"
                      className="link"
                      id="allProd2"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "allProd2"
                            ? "sidebarListItem list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <GroupAddIcon className="sidebarIcon" />
                        Approved Products
                      </li>
                    </a>
                  </>
                ) : null}

                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}

                {role1 === "CASHIER" || role1 === "CUSTOMER_SERVICE" ? (
                  <>
                    <a
                      href="/super_admin/register_user"
                      className="link"
                      id="register"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "register"
                            ? "sidebarListItem list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <GroupsIcon className="sidebarIcon" />
                        Register Customer
                      </li>
                    </a>
                    <a
                      href="/super_admin/all_user"
                      className="link"
                      id="products"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "products"
                            ? "sidebarListItem list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <GroupsIcon className="sidebarIcon" />
                        Customers
                      </li>
                    </a>

                    {/* {  locate === "/super_admin/overview" ? */}
                    <a
                      href="/super_admin/user_wallet"
                      className="link"
                      id="wallet"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "wallet"
                            ? "sidebarListItem list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <AccountBalanceWalletIcon className="sidebarIcon" />
                        Wallet
                      </li>
                    </a>
                    {/* :null} */}

                    {/* {  locate === "/super_admin/overview" ? */}
                    {/* <a
                      href="/super_admin/customers_by_branch"
                      className="link"
                      id="trans"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "trans"
                            ? "sidebarListItem list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <AccountBalanceWalletIcon className="sidebarIcon" />
                        Transactions
                      </li>
                    </a> */}
                    {/* :null} */}

                    {/* <a
                      href="/super_admin/customers_by_location"
                      className="link"
                      id="trans"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "trans"
                            ? "sidebarListItem list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <AccountBalanceWalletIcon className="sidebarIcon" />
                        TransactionBranch
                      </li>
                    </a> */}
                    {/* :null} */}
                  </>
                ) : null}

                {role1 === "MANAGER" ? (
                  <>
                    <a
                      href="/super_admin/staffs_data"
                      className="link"
                      id="allStaff"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "allStaff"
                            ? "sidebarListItem list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <GroupAddIcon className="sidebarIcon" />
                        All Staffs
                      </li>
                    </a>
                    <a
                      href="/super_admin/user_wallet"
                      className="link"
                      id="wallet"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "wallet"
                            ? "sidebarListItem list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <AccountBalanceWalletIcon className="sidebarIcon" />
                        My Wallet
                      </li>
                    </a>
                    <a
                      href="/super_admin/Approved_products"
                      className="link"
                      id="allProd2"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "allProd2"
                            ? "sidebarListItem list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <GroupAddIcon className="sidebarIcon" />
                        Approved Products
                      </li>
                    </a>
                    <a
                      href="/super_admin/customers_by_branch"
                      className="link"
                      id="cust_branch"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "cust_branch"
                            ? "sidebarListItem list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <AccountBalanceWalletIcon className="sidebarIcon" />
                        All Transactions
                      </li>
                    </a>
                    <a
                      href="/super_admin/customers_by_location"
                      className="link"
                      id="cust_locate"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "cust_locate"
                            ? "sidebarListItem list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <AccountBalanceWalletIcon className="sidebarIcon" />
                        TransactionBranch
                      </li>
                    </a>
                  </>
                ) : null}

                {role1 === "ACCOUNTANT" ? (
                  <>
                    <a
                      href="/super_admin/staffs_data"
                      className="link"
                      id="allProd"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "allProd" && role1 === "HOD_MEDIA"
                            ? "sidebarListItem list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <GroupAddIcon className="sidebarIcon" />
                        All Staffs
                      </li>
                    </a>
                    <a
                      href="/super_admin/user_wallet"
                      className="link"
                      id="wallet"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "wallet"
                            ? "sidebarListItem list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <AccountBalanceWalletIcon className="sidebarIcon" />
                        My Wallet
                      </li>
                    </a>
                    {/* <a
                      href="/super_admin/Approved_products"
                      className="link"
                      id="allProd"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "allProd" && role1 === "HOD_MEDIA"
                            ? "sidebarListItem list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <GroupAddIcon className="sidebarIcon" />
                        Approved Products
                      </li>
                    </a> */}
                    <a
                      href="/super_admin/customers_by_branch"
                      className="link"
                      id="trans"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "trans"
                            ? "sidebarListItem list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <AccountBalanceWalletIcon className="sidebarIcon" />
                        All Transactions
                      </li>
                    </a>
                    <a
                      href="/super_admin/customers_by_location"
                      className="link"
                      id="trans"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "trans"
                            ? "sidebarListItem list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <AccountBalanceWalletIcon className="sidebarIcon" />
                        TransactionBranch
                      </li>
                    </a>
                  </>
                ) : null}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}

                {role1 === "BUSINESS_ADMIN" ? (
                  <>
                    <a
                      href="/super_admin/register_user"
                      className="link"
                      id="register"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "register" && role1 === "BUSINESS_ADMIN"
                            ? "sidebarListItem list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <GroupAddIcon className="sidebarIcon" />
                        {/* { role1} */}
                        Register
                      </li>
                    </a>
                    <a
                      href="/super_admin/product_routes"
                      className="link"
                      id="product_route"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "product_route" &&
                          role1 === "BUSINESS_ADMIN"
                            ? "sidebarListItem list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <ViewListIcon className="sidebarIcon" />
                        {/* { role1} */}
                        print
                      </li>
                    </a>
                  </>
                ) : // jfhfkf

                null}

                {role1 === "LOGISTICS" ? (
                  <>
                    <a
                      href="/super_admin/Approved_products"
                      className="link"
                      id="allProd2"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "allProd2"
                            ? "sidebarListItem list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <GroupAddIcon className="sidebarIcon" />
                        Approved Products
                      </li>
                    </a>
                    <a
                      href="/super_admin/route/all-products"
                      className="link"
                      id="allProd3"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "allProd3"
                            ? "sidebarListItem list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <Inventory2Icon className="sidebarIcon" />
                        Products Routes
                      </li>
                    </a>
                  </>
                ) : null}

                {role1 === "WAREHOUSE" ? (
                  <>
                    <a
                      href="/super_admin/Approved_products"
                      className="link"
                      id="allProd2"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "allProd2"
                            ? "sidebarListItem list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <GroupAddIcon className="sidebarIcon" />
                        Approved Products
                      </li>
                    </a>
                    <a
                      href="/super_admin/route/all-products"
                      className="link"
                      id="allProd3"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "allProd3"
                            ? "sidebarListItem list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <GroupAddIcon className="sidebarIcon" />
                        Products Routes
                      </li>
                    </a>
                  </>
                ) : null}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}

                {/* 
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
                : null} */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}

                {role1 === "CASHIER" ? (
                  <>
                    <a
                      href="#"
                      className="link"
                      id="accounts"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "accounts" && role1 === "CASHIER"
                            ? "sidebarListItem list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <AccountCircleIcon className="sidebarIcon" />
                        Accounts
                      </li>
                    </a>

                    {locate === "/super_admin/overview" ||
                    locate === "/super_admin/cus_user_wallet" ? (
                      <a
                        href="/super_admin/cus_user_wallet"
                        className="link"
                        id="wallet5"
                        onClick={changeBg}
                      >
                        <li
                          className={
                            activeBg == "wallet5"
                              ? "sidebarListItem list-item-active"
                              : "sidebarListItem"
                          }
                        >
                          <AccountBalanceWalletIcon className="sidebarIcon" />
                          Customer Wallet
                        </li>
                      </a>
                    ) : null}
                  </>
                ) : null}

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

                {role1 === "MEDIA" ? (
                  <>
                    <a
                      href="/super_admin/upload_products"
                      id="Home"
                      className="link"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "Home" && role1 === "MEDIA"
                            ? "sidebarListItem small_list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <Inventory2Icon className="sidebarIcon" />
                        Add Product
                      </li>
                    </a>
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
                        All Products
                      </li>
                    </a>
                  </>
                ) : null}

                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}

                {role1 === "HOD_MEDIA" ? (
                  <>
                    <a
                      href="/super_admin/all_products"
                      className="link"
                      id="allProd1"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "allProd1"
                            ? "sidebarListItem small_list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <ViewListIcon className="sidebarIcon" />
                        All Products
                      </li>
                    </a>
                    <a
                      href="/super_admin/Approved_products"
                      className="link"
                      id="allProd2"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "allProd2"
                            ? "sidebarListItem small_list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <GroupAddIcon className="sidebarIcon" />
                        Approved Products
                      </li>
                    </a>
                  </>
                ) : null}

                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}

                {role1 === "CASHIER" || role1 === "CUSTOMER_SERVICE" ? (
                  <>
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
                        <GroupsIcon className="sidebarIcon" />
                        Register Customer
                      </li>
                    </a>
                    <a
                      href="/super_admin/all_user"
                      className="link"
                      id="products"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "products"
                            ? "sidebarListItem small_list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <GroupsIcon className="sidebarIcon" />
                        Customer
                      </li>
                    </a>

                    {/* {  locate === "/super_admin/overview" ? */}
                    <a
                      href="/super_admin/user_wallet"
                      className="link"
                      id="wallet"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "wallet"
                            ? "sidebarListItem small_list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <AccountBalanceWalletIcon className="sidebarIcon" />
                        Wallet
                      </li>
                    </a>
                    {/* :null} */}

                    {/* {  locate === "/super_admin/overview" ? */}
                    {/* <a
                      href="/super_admin/customers_by_branch"
                      className="link"
                      id="trans"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "trans"
                            ? "sidebarListItem list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <AccountBalanceWalletIcon className="sidebarIcon" />
                        Transactions
                      </li>
                    </a> */}
                    {/* :null} */}

                    {/* <a
                      href="/super_admin/customers_by_location"
                      className="link"
                      id="trans"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "trans"
                            ? "sidebarListItem list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <AccountBalanceWalletIcon className="sidebarIcon" />
                        TransactionBranch
                      </li>
                    </a> */}
                    {/* :null} */}
                  </>
                ) : null}

                {role1 === "MANAGER" ? (
                  <>
                    <a
                      href="/super_admin/staffs_data"
                      className="link"
                      id="allStaff"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "allStaff"
                            ? "sidebarListItem small_list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <GroupAddIcon className="sidebarIcon" />
                        All Staffs
                      </li>
                    </a>
                    <a
                      href="/super_admin/user_wallet"
                      className="link"
                      id="wallet"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "wallet"
                            ? "sidebarListItem small_list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <AccountBalanceWalletIcon className="sidebarIcon" />
                        My Wallet
                      </li>
                    </a>
                    <a
                      href="/super_admin/Approved_products"
                      className="link"
                      id="allProd2"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "allProd2"
                            ? "sidebarListItem small_list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <GroupAddIcon className="sidebarIcon" />
                        Approved Products
                      </li>
                    </a>
                    <a
                      href="/super_admin/customers_by_branch"
                      className="link"
                      id="cust_branch"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "cust_branch"
                            ? "sidebarListItem small_list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <AccountBalanceWalletIcon className="sidebarIcon" />
                        All Transactions
                      </li>
                    </a>
                    <a
                      href="/super_admin/customers_by_location"
                      className="link"
                      id="cust_locate"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "cust_locate"
                            ? "sidebarListItem small_list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <AccountBalanceWalletIcon className="sidebarIcon" />
                        TransactionBranch
                      </li>
                    </a>
                  </>
                ) : null}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}

                {role1 === "BUSINESS_ADMIN" ? (
                  <>
                    <a
                      href="/super_admin/register_user"
                      className="link"
                      id="register"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "register" && role1 === "BUSINESS_ADMIN"
                            ? "sidebarListItem small_list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <GroupAddIcon className="sidebarIcon" />
                        {/* { role1} */}
                        Register
                      </li>
                    </a>
                    <a
                      href="/super_admin/product_routes"
                      className="link"
                      id="product_route"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "product_route" &&
                          role1 === "BUSINESS_ADMIN"
                            ? "sidebarListItem small_list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <ViewListIcon className="sidebarIcon" />
                        {/* { role1} */}
                        print
                      </li>
                    </a>
                  </>
                ) : // jfhfkf

                null}

                {role1 === "LOGISTICS" ? (
                  <>
                    <a
                      href="/super_admin/Approved_products"
                      className="link"
                      id="allProd2"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "allProd2"
                            ? "sidebarListItem small_list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <GroupAddIcon className="sidebarIcon" />
                        Approved Products
                      </li>
                    </a>
                    <a
                      href="/super_admin/route/all-products"
                      className="link"
                      id="allProd3"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "allProd3"
                            ? "sidebarListItem small_list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <Inventory2Icon className="sidebarIcon" />
                        Products Routes
                      </li>
                    </a>
                  </>
                ) : null}

                {role1 === "WAREHOUSE" ? (
                  <>
                    <a
                      href="/super_admin/Approved_products"
                      className="link"
                      id="allProd2"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "allProd2"
                            ? "sidebarListItem small_list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <GroupAddIcon className="sidebarIcon" />
                        Approved Products
                      </li>
                    </a>
                    <a
                      href="/super_admin/route/all-products"
                      className="link"
                      id="allProd3"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "allProd3"
                            ? "sidebarListItem small_list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <GroupAddIcon className="sidebarIcon" />
                        Products Routes
                      </li>
                    </a>
                  </>
                ) : null}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}

                {/* 
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
                : null} */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}

                {role1 === "CASHIER" ? (
                  <>
                    <a
                      href="#"
                      className="link"
                      id="accounts"
                      onClick={changeBg}
                    >
                      <li
                        className={
                          activeBg == "accounts" && role1 === "CASHIER"
                            ? "sidebarListItem small_list-item-active"
                            : "sidebarListItem"
                        }
                      >
                        <AccountCircleIcon className="sidebarIcon" />
                        Accounts
                      </li>
                    </a>

                    {locate === "/super_admin/overview" ||
                    locate === "/super_admin/cus_user_wallet" ? (
                      <a
                        href="/super_admin/cus_user_wallet"
                        className="link"
                        id="wallet5"
                        onClick={changeBg}
                      >
                        <li
                          className={
                            activeBg == "wallet5"
                              ? "sidebarListItem small_list-item-active"
                              : "sidebarListItem"
                          }
                        >
                          <AccountBalanceWalletIcon className="sidebarIcon" />
                          Customer Wallet
                        </li>
                      </a>
                    ) : null}
                  </>
                ) : null}

                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
              </ul>
            )}

            <hr className="hrr" />
            <ul className="social_icons">
              {/* <div
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
              </div> */}
              <Logout />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default AdminSideBar;

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  cart: state.shop.cart,
});

// export default DashboardSidebar;

export default connect(mapStateToProps, {})(AdminSideBar);
