import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles, useTheme } from "@material-ui/core/styles";
// import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import CloseIcon from "@material-ui/icons/Close";
import clsx from "clsx";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Drawer from "@material-ui/core/Drawer";
import SellIcon from "@mui/icons-material/Sell";
import PaidIcon from "@mui/icons-material/Paid";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Toolbar from "@material-ui/core/Toolbar";
import ArticleIcon from "@mui/icons-material/Article";
import SavingsIcon from "@mui/icons-material/Savings";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import Accordion from "@material-ui/core/Accordion";
import GroupsIcon from "@mui/icons-material/Groups";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { API_URL2 as api_url2 } from "../../../../actions/types";

// =======================
import List from "@material-ui/core/List";

import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import Login from "../Login/Login";
import axios from "axios";

// styles
import "../../../../css/header.css";
import "../../../../css/headerMobile.css";
import { Authenticate } from "../../../auth/Authenticate";
import zIndex from "@material-ui/core/styles/zIndex";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  // dropdown: {
  //   position: "absolute",
  //   top: 28,
  //   right: 0,
  //   left: 0,
  //   zIndex: 1,
  //   border: "1px solid",
  //   padding: theme.spacing(1),
  //   backgroundColor: theme.palette.background.paper,
  // },
}));

const useStyles2 = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

// const useStyles = makeStyles((theme) => ({
//   root: {
//     position: "relative",
//   },

// }));

const Header = ({ isAuthenticated, auth }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const [showHeader, setshowHeader] = useState("/");
  const [isAuth, setIsAuth] = useState(false);
  // const [showHeader, setshowHeader] = useState("/");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchDiv, setSearchDiv] = useState(false);
  const [productNames, setProductNames] = useState([]);

  const currentPage = window.location.pathname;

  useEffect(() => {
    //   if(Hides === '/login'){
    //       document.getElementById('racing').style.display = 'none'
    //     }
    if (currentPage === "/dashboard/") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/dashboard/accounts/accounts") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/dashboard/accounts/kin") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/dashboard/accounts/security") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/dashboard") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/dashboard/wallet") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/dashboard/wallet/withdrawal") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/super_admin/signup") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/super_admin/user_overview") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/signup/super_admin") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/login/super_admin") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/super_admin/all_user") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/super_admin/login") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/login") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/signup") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/dashboard/savings") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/dashboard/products/categories/id-phone") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/dashboard/products") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/dashboard/accounts") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/dashboard/orders") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/dashboard/egr-") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/whitepaper") {
      setshowHeader(() => {
        document.getElementById("headerSection").style.position = "relative";
      });
    }
    // if (currentPage === "/market") {
    //   setshowHeader(() => {
    //     document.getElementById("hide_menu").style.display = "none";
    //   });
    // }
    // if (currentPage === "/market") {
    //   setshowHeader(() => {
    //     document.getElementById("company1").style.display = "none";
    //   });
    // }
    // if (currentPage === "/market") {
    //   setshowHeader(() => {
    //     document.getElementById("product1").style.display = "none";
    //   });
    // }
    // if (currentPage === "/market") {
    //   setshowHeader(() => {
    //     document.getElementById("valid").style.display = "none";
    //   });
    // }
    // if (currentPage === "/market") {
    //   setshowHeader(() => {
    //     document.getElementById("app_icon").style.display = "block";
    //   });
    // }
    // if (currentPage === "/market") {
    //   document.getElementById("borrow").style.display = "none";
    // }
    // document.getElementById("hide_menu").style.display = "none";
    // document.getElementById("show-header-links2").style.display = "none";
    // document.getElementById("app_icon").style.display = "none";
  });

  // //console.log(auth);

  // page hide element

  // class change on click functions
  const [page1, setPage1] = useState("/");

  useEffect(() => {
    if (currentPage === "/loan") {
      setPage1("/loan");
    } else if (currentPage === "/validator") {
      setPage1("/validator");
    } else if (currentPage === "/savings") {
      setPage1("/savings");
    } else if (currentPage === "/market") {
      setPage1("/market");
    }
  });

  useEffect(() => {
    if (isAuthenticated === true) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  });

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // =============

  const [dropDown1, setDropDown1] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);

  const [open12, setOpen12] = React.useState(false);
  const anchorRef12 = React.useRef(null);

  // return focus to the button when we transitioned from !open12 -> open12
  const prevOpen12 = React.useRef(open12);
  React.useEffect(() => {
    if (prevOpen12.current === true && open12 === false) {
      anchorRef12.current.focus();
    }

    prevOpen12.current = open12;
  }, [open12]);

  const [open13, setOpen13] = React.useState(false);
  const anchorRef13 = React.useRef(null);

  // return focus to the button when we transitioned from !open13 -> open13
  const prevOpen13 = React.useRef(open13);
  React.useEffect(() => {
    if (prevOpen13.current === true && open13 === false) {
      anchorRef13.current.focus();
    }

    prevOpen13.current = open13;
  }, [open13]);

  // open dropdown menu
  const dropDownOpen1 = () => {
    setDropDown1(true);
    setDropDown2(false);
  };
  const dropDownOpen2 = () => {
    setDropDown2(true);
    setDropDown1(false);
  };
  const toggleDrop = () => {
    if (dropDown1 == true) {
      setDropDown1(false);
    } else if (dropDown1 == false) {
      setDropDown1(true);
    }
  };
  const dropDownClose1 = () => {
    setDropDown1(false);
    setDropDown2(false);
  };
  const dropDownClose2 = () => {
    setDropDown2(false);
    setDropDown1(false);
  };

  useEffect(() => {
    axios
      .get(
        api_url2 + "/v1/product/retrieve/products/tag/search/" + searchTerm,
        null,
        config
      )
      .then((data) => {
        console.log(data.data.data);
        setProductNames(data.data.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, [searchTerm]);
  const handler = (event) => {
    setSearchTerm(event.target.value);
  };
  const results = productNames.filter((car) =>
    car.tag.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="Header">
      <section className="headerSection" id="headerSection">
        <div className="container-fluid header">
          <div className="header-area">
            <a href="/">
              {" "}
              <img src="/img/egoras-logo.svg" alt="..." className="egr-logo" />
            </a>
            <a href="#" className="egrLogo2Cont">
              <img src="/img/egoras-logo.svg" alt="..." className="egr-logo2" />
            </a>
            <div className="header_search">
              <input
                type="search"
                value={searchTerm}
                name="search"
                id="search"
                className="header_search_bar"
                placeholder="Search products, brands and categories"
                onChange={handler}
                autocomplete="off"

                // onMouseOut={() => {
                //   setSearchDiv(false);
                // }}
              />
              <SearchIcon className="header_search_icon" />
              {searchTerm.length === 0 ? null : (
                <div
                  id="fodo"
                  style={{
                    position: "absolute",
                    zIndex: "500",
                    width: "100%",
                    top: "46px",
                    maxHeight: "500px",
                    height: "auto",
                    backgroundColor: "#fff",
                    overflowY: "scroll",
                    borderRadius: "10px",
                    borderTopLeftRadius: "0px",
                    borderTopRightRadius: "0px",
                    cursor: "pointer",
                    boxShadow: "#0000000f 0px 20px 20px 0px",
                  }}
                  className="scr"
                >
                  {productNames.length === 0 ? (
                    <span className="search_result_not_found">
                      {" "}
                      Search result not found.
                    </span>
                  ) : (
                    <ul style={{ margin: "0" }}>
                      {results.map((item, index) => (
                        <li
                          className="hover_div"
                          style={{
                            padding: "1em 2em",
                          }}
                        >
                          <a
                            href={`/products/tag/${item.tag.replace(
                              /\s+/g,
                              " "
                            )}`}
                            key={index.toString()}
                            style={{
                              color: "#000",
                              fontSize: "12px",
                              fontWeight: "400",
                            }}
                          >
                            {" "}
                            {item.tag}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
            <ul className="headerButtons">
              {/* ========== */}
              {/* ========== */}

              <div div className="company">
                <div
                  style={{
                    cursor: "pointer",
                    position: "relative",
                    zIndex: "2",
                    margin: "0px",
                  }}
                  className="company"
                  id="company1"
                  onMouseOver={dropDownOpen1}
                  // onMouseOut={dropDownClose1}
                >
                  Products
                  <img
                    src="/img/arrow-down-icon.svg"
                    alt="..."
                    id="ArrowDownIcon2"
                    className="ArrowDownIcon2"
                  />
                </div>
                {dropDown1 === true ? (
                  <>
                    <div
                      className="close_drop_div"
                      onMouseOver={dropDownClose1}
                    ></div>
                    <div
                      className="products-menu menu2"
                      // onMouseOver={dropDownOpen1}
                      // onMouseOut={dropDownClose1}
                    >
                      <a
                        href="/loan"
                        id="borrow"
                        className={
                          page1 === "/loan" ? "docs activeLink" : "about"
                        }
                        // onClick={clickMe1}
                      >
                        <div className="header_drop_txt_div">
                          <PaidIcon className="header_drop_icons" />
                          Loan
                        </div>
                        <ArrowForwardIosIcon className="header_drop_arrow_icon" />

                        {page1 === "/loan" ? (
                          <span className="Line"></span>
                        ) : null}
                      </a>
                      {/* <hr /> */}
                      <a
                        href="/savings"
                        className={
                          page1 === "/savings" ? "docs activeLink" : "about"
                        }
                        // onClick={clickMe2}
                        id="savings"
                      >
                        <div className="header_drop_txt_div">
                          <SavingsIcon className="header_drop_icons" />
                          Savings
                        </div>
                        <ArrowForwardIosIcon className="header_drop_arrow_icon" />

                        {page1 === "/savings" ? (
                          <span className="Line"></span>
                        ) : null}
                      </a>
                      {/* <hr /> */}
                      <a
                        href="/validator"
                        className={
                          page1 === "/validator" ? "docs activeLink" : "about"
                        }
                        // onClick={clickMe2}
                        id="valid"
                      >
                        <div className="header_drop_txt_div">
                          <HowToRegIcon className="header_drop_icons" />
                          Validator
                        </div>
                        <ArrowForwardIosIcon className="header_drop_arrow_icon" />

                        {page1 === "/validator" ? (
                          <span className="Line"></span>
                        ) : null}
                      </a>
                      {/* <hr /> */}
                      <a
                        href="/market"
                        className={
                          page1 === "/market" ? "docs activeLink" : "about"
                        }
                        // onClick={clickMe2}
                        id="market"
                      >
                        <div className="header_drop_txt_div">
                          <ShoppingCartIcon className="header_drop_icons" />
                          Buy Now
                        </div>
                        <ArrowForwardIosIcon className="header_drop_arrow_icon" />
                        {page1 === "/market" ? (
                          <span className="Line"></span>
                        ) : null}
                      </a>
                      <a href="https://sell.egoras.com/" className="about">
                        <div className="header_drop_txt_div">
                          <SellIcon className="header_drop_icons" />
                          Sell Now
                        </div>
                        <ArrowForwardIosIcon className="header_drop_arrow_icon" />
                      </a>
                    </div>
                  </>
                ) : null}
              </div>

              {/* ========== */}
              {/* ========== */}
              {/* ========== */}
              {/* ========== */}

              {/* ===================================================
              ===========================
              ========================================== */}

              <vl></vl>
              <div div className="company">
                <div
                  style={{
                    cursor: "pointer",
                    position: "relative",
                    zIndex: "2",
                    margin: "0px",
                  }}
                  className="company"
                  id="company1"
                  onMouseOver={dropDownOpen2}
                  // onMouseOut={dropDownClose1}
                >
                  Company
                  <img
                    src="/img/arrow-down-icon.svg"
                    alt="..."
                    id="ArrowDownIcon2"
                    className="ArrowDownIcon2"
                  />
                </div>
                {dropDown2 === true ? (
                  <>
                    <div
                      className="close_drop_div"
                      onMouseOver={dropDownClose2}
                    ></div>
                    <div
                      className="products-menu menu2"
                      // onMouseOver={dropDownOpen1}
                      // onMouseOut={dropDownClose1}
                    >
                      <a
                        href="/about"
                        className={
                          page1 === "/about" ? "docs activeLink" : "about"
                        }
                        // onClick={clickMe2}
                        id="aboutUs"
                      >
                        <div className="header_drop_txt_div">
                          <GroupsIcon className="header_drop_icons" />
                          About Us
                        </div>
                        <ArrowForwardIosIcon className="header_drop_arrow_icon" />

                        {page1 === "/about" ? (
                          <span className="Line"></span>
                        ) : null}
                      </a>
                      {/* <hr /> */}
                      <a href="https://egoras.medium.com/" className="about">
                        <div className="header_drop_txt_div">
                          <RssFeedIcon className="header_drop_icons" />
                          Blog
                        </div>
                        <ArrowForwardIosIcon className="header_drop_arrow_icon" />
                      </a>
                      {/* <hr /> */}
                      <a
                        href="/whitepaper"
                        id="whitepaper"
                        className={
                          page1 === "/whitepaper" ? "docs activeLink" : "about"
                        }
                        // onClick={clickMe1}
                      >
                        <div className="header_drop_txt_div">
                          <ArticleIcon className="header_drop_icons" />
                          WhitePaper
                        </div>
                        <ArrowForwardIosIcon className="header_drop_arrow_icon" />

                        {page1 === "/whitepaper" ? (
                          <span className="Line"></span>
                        ) : null}
                      </a>
                      {/* <hr /> */}
                    </div>
                  </>
                ) : null}
              </div>
              {/* <a href="/appointment" className="connect">
                {" "}
                Apply for loan
              </a> */}

              {currentPage == "/" ? (
                <div style={{ display: "flex" }}>
                  <a href="/login" className="getLoan">
                    {" "}
                    Login
                  </a>
                  <a href="#" className="connectb">
                    Signup
                  </a>
                </div>
              ) : null}
              {currentPage == "/loan" ? (
                <div style={{ display: "flex" }}>
                  <a href="https://egoras.ng/appointment" className="connectb">
                    {" "}
                    Get the loan
                  </a>
                </div>
              ) : null}
              {currentPage == "/validator" ? (
                <div style={{ display: "flex" }}>
                  <a href="#" className="connect">
                    <Authenticate />
                  </a>
                </div>
              ) : null}
              {currentPage == "/savings" && isAuth === true ? (
                <div style={{ display: "flex" }}>
                  <a href="/dashboard" className="connectb">
                    Dashboard
                  </a>
                </div>
              ) : currentPage == "/savings" && isAuth === false ? (
                <div style={{ display: "flex" }}>
                  <a href="/login" className="getLoan">
                    {" "}
                    Login
                  </a>
                  <a href="#" className="connectb">
                    Signup
                  </a>
                </div>
              ) : null}
            </ul>
            {/* <img
              src="/img/hamburger-open.svg"
              alt=""
              className="hamburgerOpen"
            /> */}
            <div className="onMobile">
              <Toolbar className="hideNow">
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerOpen}
                  className={clsx(open && classes.hide)}
                  id="HideAgain"
                >
                  <MenuIcon className="menu_open_mui_icon" />
                </IconButton>
              </Toolbar>
              <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                <div className={classes.drawerHeader}>
                  <IconButton onClick={handleDrawerClose}>
                    {theme.direction === "rtl" ? <CloseIcon /> : <CloseIcon />}
                  </IconButton>
                </div>
                <Divider />
                <List>
                  <ListItem>
                    <a href="/loan" className="about">
                      Loan
                    </a>
                  </ListItem>
                </List>
                <Divider />

                <List>
                  <ListItem>
                    <a href="/savings" className="about">
                      Savings
                    </a>
                  </ListItem>
                </List>
                <Divider />

                <List>
                  <ListItem>
                    <a href="/validator" className="about">
                      Validator
                    </a>
                  </ListItem>
                </List>
                <Divider />
                <List>
                  <ListItem>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.heading}>
                          Company
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="footerLinks">
                          <a href="/about" className="c1link1 a">
                            About Us
                          </a>
                          <a
                            href="https://egoras.medium.com/"
                            className="c1link1"
                            target="_blank"
                          >
                            Blog
                          </a>
                          <a
                            href="/whitepaper"
                            className="c1link1"
                            target="_blank"
                          >
                            White Paper
                          </a>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                    {/* <a href="about" className="company">
                      Company
                    </a> */}
                  </ListItem>
                </List>
                <Divider />
                <List>
                  <ListItem>
                    <a href="https://t.me/egorasmarket" className="about">
                      Support
                    </a>
                  </ListItem>
                </List>
                <Divider />
                {currentPage == "/" ? (
                  <div>
                    <List>
                      <ListItem>
                        <div className="Flex_btns_div">
                          <a href="/login" className="getLoan">
                            {" "}
                            Login
                          </a>

                          <a href="#" className="connectb">
                            Signup
                          </a>
                        </div>
                      </ListItem>
                    </List>
                  </div>
                ) : null}
                {currentPage == "/loan" ? (
                  <div>
                    <List>
                      <ListItem>
                        <a
                          href="https://egoras.ng/appointment"
                          className="connectb"
                        >
                          {" "}
                          Get the loan
                        </a>
                      </ListItem>
                    </List>
                  </div>
                ) : null}
                {currentPage == "/validator" ? (
                  <div>
                    <List>
                      <ListItem>
                        <a href="#" className="connect">
                          <Authenticate />
                        </a>
                      </ListItem>
                    </List>
                  </div>
                ) : null}
                {currentPage == "/savings" && isAuth === true ? (
                  <div>
                    <List>
                      <ListItem>
                        <a href="/dashboard" className="connectb">
                          Dashboard
                        </a>
                      </ListItem>
                    </List>
                  </div>
                ) : currentPage == "/savings" && isAuth === false ? (
                  <div>
                    <List>
                      <ListItem>
                        <div className="Flex_btns_div">
                          {" "}
                          <a href="/login" className="getLoan">
                            {" "}
                            Login
                          </a>
                          <a href="#" className="connectb">
                            Signup
                          </a>
                        </div>
                      </ListItem>
                    </List>
                    <Divider />
                    <List>
                      <ListItem></ListItem>
                    </List>
                  </div>
                ) : null}
              </Drawer>
            </div>
          </div>
        </div>
        {/* <hr className="header_hr" /> */}
        <div className="header_category_area">
          <div className="container-fluid header">
            <div className="header_categories">
              <a href="#" className="header_cat_link">
                Computers and Accessories
              </a>
              <a href="#" className="header_cat_link">
                Phones and Tablets
              </a>
              <a href="#" className="header_cat_link">
                Electronics
              </a>
              <a href="#" className="header_cat_link">
                Fashion
              </a>
              <a href="#" className="header_cat_link">
                Home and Kitchen
              </a>
              <a href="#" className="header_cat_link">
                Musical Equipment
              </a>
              <a href="#" className="header_cat_link">
                Gaming
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// export default Header;

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(Header);
