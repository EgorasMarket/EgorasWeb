import React, { useState, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { API_URL2 as api_url2 } from "../../../../actions/types";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
// import SecurityIcon from "@mui/icons-material/Security";
import BarChartIcon from "@mui/icons-material/BarChart";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import ListIcon from "@mui/icons-material/List";
import { connect } from "react-redux";
// import ImportExportIcon from "@mui/icons-material/ImportExport";
import DescriptionIcon from "@mui/icons-material/Description";
import StoreIcon from "@mui/icons-material/Store";
import SavingsIcon from "@mui/icons-material/Savings";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GitHubIcon from "@mui/icons-material/GitHub";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
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
import "./DashboardStyles/dashboard_side.css";
import "./DashboardStyles/dashboard_header.css";
import { retrieveCart } from "../../../../actions/shop";
const DashboardSidebar = ({ auth, cart, retrieveCart }) => {
  const dddd = localStorage.getItem("smallSidetoken");

  const [activeBg, setActiveBg] = useState("Home");
  const [catDiv, setCatDiv] = useState("not_home");
  const [smallSide, setSmallSide] = useState(dddd);
  const [cartNum, setCartNum] = useState("");
  const [image, setImage] = useState("");
  const linksActive = window.location.pathname;

  const [userInfo, setUserInfo] = useState({
    Userfirstname: "",
    Userlastname: "",
    Useremail: "",
    UserphoneNumber: "",
    UseruserImage: "",
    Userrelationship: "",
    Usergender: "",
    Userbvn: "",
    UserdateOfBirth: "",
  });

  const {
    Userfirstname,
    Userlastname,
    Useremail,
    Usergender,
    Userrelationship,
    UseruserImage,
    UserphoneNumber,
    Userbvn,
    UserdateOfBirth,
  } = userInfo;

  useEffect(() => {
    // setCartNum(cart.length)
    // fetchDepositLinks();
    console.log(auth);
    if (auth.user !== null) {
      // let dataa = 'stackabuse.com';
      // console.log( new Buffer(dataa));
      var todecoded = auth.user;
      var todecodedn = todecoded.user.userImage;

      // console.log('====================================');
      console.log(todecodedn);
      // console.log('====================================');

      const getName = todecoded.user.fullname;
      const splitName = getName.split(" ");

      retrieveCart(todecoded.user.id);
      setUserInfo({
        Userfirstname: splitName[0],
        Userlastname: splitName[1],
        Useremail: todecoded.user.email,
        UseruserImage: todecoded.user.userImage,
        UserphoneNumber: todecoded.user.phoneNumber,
        Userrelationship: todecoded.user.relationship,
        Usergender: todecoded.user.gender,
        Userbvn: todecoded.user.BVN,
        UserdateOfBirth: todecoded.user.dateOfBirth,
      });

      if (todecoded.user.userImage !== null) {
        setImage(api_url2 + "/" + todecoded.user.userImage);
      } else {
        setImage("../../img/profile_img.jpeg");
      }
    }
  }, [auth]);

  useEffect(() => {
    setCartNum(cart.length);
  }, [cart]);

  // console.log(dddd);
  const changeBg = (e) => {
    let currentId = e.currentTarget.id;
    setActiveBg(currentId);
    if (linksActive === "/dashboard/products") {
      setCatDiv("home");
    }
    if (linksActive === "/dashboard/products/categories/id-phone") {
      setActiveBg("products");
      setCatDiv("home");
    }
  };

  useEffect(() => {
    if (linksActive === "/dashboard") {
      setActiveBg("Home");
      setCatDiv("not_home");
    }
    if (linksActive === "/dashboard/") {
      setActiveBg("Home");
      setCatDiv("not_home");
    }
    if (linksActive === "/dashboard/savings") {
      setActiveBg("savings");
      setCatDiv("not_home");
    }
    if (linksActive === "/dashboard/cart") {
      setActiveBg("cart");
      setCatDiv("not_home");
    }
    if (linksActive === "/dashboard/products") {
      setActiveBg("products");
      setCatDiv("home");
    }
    if (linksActive === "/dashboard/products/categories/id-phone") {
      setActiveBg("products");
      setCatDiv("home");
    }
    if (linksActive === "/dashboard/accounts") {
      setActiveBg("accounts");
      setCatDiv("not_home");
    }
    if (linksActive === "/dashboard/wallet") {
      setActiveBg("wallet");
      setCatDiv("not_home");
    }
    if (linksActive === "/dashboard/wallet/withdrawal") {
      setActiveBg("wallet");
      setCatDiv("not_home");
    }

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
              <div className="together">
                <div className="save_numb_div">
                  <ShoppingCartIcon className="cart_icon" />
                  <div className="cart_num">{cartNum}</div>
                </div>
                <div className="account_numb_div">
                  <FileCopyIcon className="copy_icon" /> 29887728631612
                </div>

                {/* <div
                  className="logout_div"
                  // className={
                  //   logoutDiv == "not_logout_div"
                  //     ? "not_logout_div"
                  //     : "logout_div"
                  // }
                >
                  <button
                    className="logout_sec_btn"
                    //   onClick={triggerLogout}
                  >
                    Logout
                  </button>
                </div> */}
                <div className="immmgg">
                  <img src={image} alt="" className="user_profile" />
                  {/* <img
                    src="/img/profile_icon2.svg"
                    alt=""
                    className="user_profile2"
                  /> */}
                </div>
              </div>

              <div className="welcome_user">
                Welcome
                <span className="userName_name">{Userlastname}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =============''''''''' */}
      {/* =============''''''''' */}
      {/* =============''''''''' */}
      {/* {catDiv == "home" ? (
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
      )} */}

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
              <a href="/" alt="">
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
                <a
                  href="/dashboard"
                  id="Home"
                  className="link"
                  onClick={changeBg}
                >
                  <li
                    className={
                      activeBg == "Home"
                        ? "sidebarListItem list-item-active"
                        : "sidebarListItem"
                    }
                  >
                    <HomeIcon className="sidebarIcon" />
                    Home
                  </li>
                </a>
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}

                <a
                  href="/dashboard/products"
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
                    <StoreIcon className="sidebarIcon" />
                    Market
                  </li>
                </a>

                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* 
                <a
                  href="/dashboard/cart"
                  className="link"
                  id="cart"
                  onClick={changeBg}
                >
                  <li
                    className={
                      activeBg == "cart"
                        ? "sidebarListItem list-item-active"
                        : "sidebarListItem"
                    }
                  >
                    <ShoppingCartIcon className="sidebarIcon" />
                    My Cart
                  </li>
                </a> */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                <a
                  href="/dashboard/savings"
                  className="link"
                  id="savings"
                  onClick={changeBg}
                >
                  <li
                    className={
                      activeBg == "savings"
                        ? "sidebarListItem list-item-active"
                        : "sidebarListItem"
                    }
                  >
                    <SavingsIcon className="sidebarIcon" />
                    Savings
                  </li>
                </a>
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}

                <a
                  href="/dashboard/wallet"
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
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}

                <a
                  href="/dashboard/accounts"
                  className="link"
                  id="accounts"
                  onClick={changeBg}
                >
                  <li
                    className={
                      activeBg == "accounts"
                        ? "sidebarListItem list-item-active"
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
            ) : (
              <ul className="sidebarList">
                {/* =================== */}
                {/* =================== */}
                {/* =================== */}
                {/* =================== */}
                <a
                  href="/dashboard"
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
                    <HomeIcon className="sidebarIcon" />
                    Home
                  </li>
                </a>
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}

                <a
                  href="/dashboard/products"
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
                    <StoreIcon className="sidebarIcon" />
                    {/* <GroupIcon className="sidebarIcon" /> */}
                    Market
                  </li>
                </a>

                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}

                {/* <a
                  href="/dashboard/cart"
                  className="link"
                  id="cart"
                  onClick={changeBg}
                >
                  <li
                    className={
                      activeBg == "cart"
                        ? "sidebarListItem small_list-item-active"
                        : "sidebarListItem"
                    }
                  >
                    <ShoppingCartIcon className="sidebarIcon" />
                    My Cart
                  </li>
                </a> */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}

                <a
                  href="/dashboard/savings"
                  className="link"
                  id="savings"
                  onClick={changeBg}
                >
                  <li
                    className={
                      activeBg == "savings"
                        ? "sidebarListItem small_list-item-active"
                        : "sidebarListItem"
                    }
                  >
                    <SavingsIcon className="sidebarIcon" />
                    Savings
                  </li>
                </a>
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}

                <a
                  href="/dashboard/wallet"
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
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}

                <a
                  href="/dashboard/accounts"
                  className="link"
                  id="accounts"
                  onClick={changeBg}
                >
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

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  cart: state.shop.cart,
});

// export default DashboardSidebar;

export default connect(mapStateToProps, { retrieveCart })(DashboardSidebar);
