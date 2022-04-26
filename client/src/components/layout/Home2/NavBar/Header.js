import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles, useTheme } from "@material-ui/core/styles";
// import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import CloseIcon from "@material-ui/icons/Close";
import clsx from "clsx";
import SearchIcon from "@mui/icons-material/Search";
import Drawer from "@material-ui/core/Drawer";
import AppsIcon from "@mui/icons-material/Apps";
import Toolbar from "@material-ui/core/Toolbar";
import Accordion from "@material-ui/core/Accordion";
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl1, setAnchorEl1] = React.useState(null);

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
  const dropDownOpen2 = () => {
    // const dropUpIcon = document.getElementById("ArrowUpIcon2");
    const dropDownIcon = document.getElementById("ArrowDownIcon2");
    const dropMenu = document.getElementById("products-menu2");

    dropDownIcon.classList.add("rotate");
    // dropUpIcon.style.display = "inline-block";

    dropMenu.style.display = "block";
  };
  const dropDownClose2 = () => {
    // const dropUpIcon = document.getElementById("ArrowUpIcon2");
    const dropDownIcon = document.getElementById("ArrowDownIcon2");
    const dropMenu = document.getElementById("products-menu2");

    dropDownIcon.classList.remove("rotate");
    // dropUpIcon.style.display = "none";

    dropMenu.style.display = "none";
  };
  useEffect(() => {
    axios
      .get(
        api_url2 + "/v1/product/retrieve/products/search/" + searchTerm,
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
    car.product_name.toLowerCase().includes(searchTerm.toLowerCase())
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
                    top: "40px",
                    maxHeight: "500px",
                    height: "auto",
                    backgroundColor: "#fff",
                    overflowY: "scroll",
                    borderRadius: "10px",
                    cursor: "pointer",
                    boxShadow: "0px 13px 23px 0px #00000026",
                  }}
                  className="scr"
                >
                  {productNames.length === 0 ? (
                    <span> Search result not found.</span>
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
                            href={`/products/details/${
                              item.id
                            }/${item.product_name.replace(/\s+/g, "-")}`}
                            key={index.toString()}
                            style={{
                              color: "#000",
                              fontSize: "12px",
                              fontWeight: "400",
                            }}
                          >
                            {" "}
                            {item.product_name}
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

              <div
                style={{ cursor: "pointer" }}
                className="company"
                id="company1"
                onMouseOver={dropDownOpen2}
                onMouseOut={dropDownClose2}
              >
                Products
                <img
                  src="/img/arrow-down-icon.svg"
                  alt="..."
                  id="ArrowDownIcon2"
                  className="ArrowDownIcon2"
                />
                {/* <ArrowDropUpIcon id="ArrowUpIcon2" className="ArrowUpIcon2" /> */}
                <div className="products-menu menu2" id="products-menu2">
                  <a
                    href="/loan"
                    id="borrow"
                    className={page1 === "/loan" ? "docs activeLink" : "about"}
                    // onClick={clickMe1}
                  >
                    Loan
                    {page1 === "/loan" ? <span className="Line"></span> : null}
                  </a>
                  <hr />
                  <a
                    href="/savings"
                    className={
                      page1 === "/savings" ? "docs activeLink" : "about"
                    }
                    // onClick={clickMe2}
                    id="savings"
                  >
                    Savings
                    {page1 === "/savings" ? (
                      <span className="Line"></span>
                    ) : null}
                  </a>
                  <hr />
                  <a
                    href="/validator"
                    className={
                      page1 === "/validator" ? "docs activeLink" : "about"
                    }
                    // onClick={clickMe2}
                    id="valid"
                  >
                    Validator
                    {page1 === "/validator" ? (
                      <span className="Line"></span>
                    ) : null}
                  </a>
                  <hr />
                  <a
                    href="/market"
                    className={
                      page1 === "/market" ? "docs activeLink" : "about"
                    }
                    // onClick={clickMe2}
                    id="market"
                  >
                    Buy Now
                    {page1 === "/market" ? (
                      <span className="Line"></span>
                    ) : null}
                  </a>
                </div>
              </div>
              {/* ===================================================
              ===========================
              ========================================== */}

              <vl></vl>
              <div
                style={{ cursor: "pointer" }}
                className="company"
                id="company1"
                onMouseOver={dropDownOpen2}
                onMouseOut={dropDownClose2}
              >
                Company
                <img
                  src="/img/arrow-down-icon.svg"
                  alt="..."
                  id="ArrowDownIcon2"
                  className="ArrowDownIcon2"
                />
                {/* <ArrowDropUpIcon id="ArrowUpIcon2" className="ArrowUpIcon2" /> */}
                <div className="products-menu menu2" id="products-menu2">
                  <a href="/about" className="drop-borrow-link">
                    About Us
                  </a>
                  <hr />
                  <a
                    href="https://egoras.medium.com/"
                    className="drop-borrow-link"
                  >
                    Blog
                  </a>
                  <hr />
                  <a href="/whitepaper" className="drop-borrow-link">
                    White Paper
                  </a>
                </div>
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
