import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
// import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import CloseIcon from "@material-ui/icons/Close";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import AppsIcon from "@mui/icons-material/Apps";
import Toolbar from "@material-ui/core/Toolbar";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// =======================
import List from "@material-ui/core/List";

import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import Login from "../Login/Login"

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

const Header = () => {
  const [showHeader, setshowHeader] = useState("/");
  // const [showHeader, setshowHeader] = useState("/");

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

  // page hide element

  // class change on click functions
  const [page1, setPage1] = useState("/");

  // const [weed,setWeed]= useState( false);

  // const pad =()=>{
  //   setWeed(!weed)
  // }

  useEffect(() => {
    if (currentPage === "/loan") {
      setPage1("/loan");
    } else if (currentPage === "/validator") {
      setPage1("/validator");
    } else if (currentPage === "/savings") {
      setPage1("/savings");
    }
  });
  // {
  //   page === "change" ? (
  //   ) : ()}

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
  const open1 = Boolean(anchorEl);
  const open2 = Boolean(anchorEl1);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const [open12, setOpen12] = React.useState(false);
  const anchorRef12 = React.useRef(null);

  const handleToggle12 = () => {
    setOpen12((prevOpen12) => !prevOpen12);
  };

  const handleClose12 = (event) => {
    if (anchorRef12.current && anchorRef12.current.contains(event.target)) {
      return;
    }

    setOpen12(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen12(false);
    }
  }

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

  const handleToggle13 = () => {
    setOpen13((prevOpen13) => !prevOpen13);
  };

  const handleClose13 = (event) => {
    if (anchorRef13.current && anchorRef13.current.contains(event.target)) {
      return;
    }

    setOpen13(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen13(false);
    }
  }

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
    // const dropUpIcon = document.getElementById("ArrowUpIcon");
    const dropDownIcon = document.getElementById("ArrowDownIcon");
    const dropMenu = document.getElementById("products-menu");

    dropDownIcon.classList.add("rotate");
    // dropUpIcon.style.display = "inline-block";

    dropMenu.style.display = "block";
  };
  const dropDownClose1 = () => {
    // const dropUpIcon = document.getElementById("ArrowUpIcon");
    const dropDownIcon = document.getElementById("ArrowDownIcon");
    const dropMenu = document.getElementById("products-menu");

    dropDownIcon.classList.remove("rotate");
    // dropUpIcon.style.display = "none";

    dropMenu.style.display = "none";
  };
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

            {/* <ul className="headerLinks2">
            <a href="/documents" className="docs">
              Products
            </a>
            <a href="about" className="about">
              Company
              <ArrowDropDownIcon />
            </a>
          </ul> */}

            <ul className="headerButtons">
              {/* <AppsIcon className="app_icon" id="app_icon" /> */}

              {/* <div className="hide_menu" id="hide_menu"> */}
              {/* <a
                  href="/validator"
                  className={
                    page1 === "/validator" ? "docs activeLink" : "about"
                  }
                  // onClick={clickMe2}
                >
                  Validator
                  {page1 === "/validator" ? (
                    <span className="Line"></span>
                  ) : null}
                </a>
                <div
                  style={{ cursor: "pointer" }}
                  onMouseOver={dropDownOpen1}
                  onMouseOut={dropDownClose1}
                  className="product"
                  id="product"
                >
                  Products
                  <img
                    src="/img/arrow-down-icon.svg"
                    alt="..."
                    id="ArrowDownIcon"
                    className="ArrowDownIcon"
                  />
                  <div className="products-menu " id="products-menu">
                    <h6 className="drop-borrow">Borrower</h6>
                    <a
                      href="https://egoras.ng/appointment"
                      className="drop-borrow-link"
                    >
                      Get loan
                    </a>
                    <hr />
                    <h6 className="drop-borrow">Validator</h6>
                    <a href="/explore_collaterals" className="drop-borrow-link">
                      Explore Collaterals
                    </a>
                  </div>
                </div> */}

              {/* <div
                  style={{ cursor: "pointer" }}
                  className="company"
                  id="company"
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
              {/* <div className="products-menu menu2" id="products-menu2">
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
                </div> */}
              {/* </div> */}
              {/* ========== */}
              {/* ========== */}
              {/* ========== */}
              {/* ========== */}
              <ul className="headerLinks">
                <div className="boroowww" id="borrow">
                  <a
                    href="/loan"
                    id="borrow"
                    className={page1 === "/loan" ? "docs activeLink" : "about"}
                    // onClick={clickMe1}
                  >
                    Loan
                    {page1 === "/loan" ? <span className="Line"></span> : null}
                  </a>
                </div>

                <a
                  href="/savings"
                  className={page1 === "/market" ? "docs activeLink" : "about"}
                  // onClick={clickMe2}
                >
                  Savings
                  {page1 === "/savings" ? <span className="Line"></span> : null}
                </a>
              </ul>
              <a
                href="/validator"
                className={page1 === "/validator" ? "docs activeLink" : "about"}
                // onClick={clickMe2}
                id="valid"
              >
                Validator
                {page1 === "/validator" ? <span className="Line"></span> : null}
              </a>
              {/* <div
                style={{ cursor: "pointer" }}
                onMouseOver={dropDownOpen1}
                onMouseOut={dropDownClose1}
                className="product"
                id="product1"
              >
                Products
                <img
                  src="/img/arrow-down-icon.svg"
                  alt="..."
                  id="ArrowDownIcon"
                  className="ArrowDownIcon"
                />
                <div className="products-menu " id="products-menu">
                  <h6 className="drop-borrow">Borrower</h6>
                  <a
                    href="https://egoras.ng/appointment"
                    className="drop-borrow-link"
                  >
                    Get loan
                  </a>
                  <hr />
                  <h6 className="drop-borrow">Validator</h6>
                  <a href="/explore_collaterals" className="drop-borrow-link">
                    Explore Collaterals
                  </a>
                </div>
              </div> */}

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

              {/* ===================================================
              ===========================
              ========================================== */}

              <vl></vl>
              <a href="https://t.me/egorasmarket" className="about">
                Support
              </a>
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
                  <a href="/signup" className="connectb">
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
              {currentPage == "/savings" ? (
                <div style={{ display: "flex" }}>
                  <a href="/dashboard" className="connectb">
                    Dashboard
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
                  <MenuIcon />
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
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.heading}>
                          Products
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="footerLinks">
                          <a
                            href="https://egoras.ng/appointment"
                            className="c1link1 a"
                          >
                            Get loan
                          </a>
                          <a
                            href="/explore_collaterals"
                            className="c1link1"
                            target="_blank"
                          >
                            Explore Collaterals
                          </a>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                    {/* <a href="/documents" className="product">
                      Products
                    </a> */}
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
                <List>
                  <ListItem>
                    <a href="https://egoras.ng/appointment" className="getLoan">
                      {" "}
                      Get the loan
                    </a>
                  </ListItem>
                </List>
                <Divider />
                <List>
                  <ListItem>
                    <a href="#" className="connect">
                      <Authenticate />
                      <div className="connectHover"></div>
                    </a>
                  </ListItem>
                </List>
              </Drawer>
            </div>
          </div>
        </div>
      </section>
 
      
    </div>
  );
};

export default Header;