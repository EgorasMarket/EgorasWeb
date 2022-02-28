import React, { useState, useEffect } from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Carousel from "react-multi-carousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { connect, useDispatch } from "react-redux";
import axios from "axios";
import ReactCardCarousel from "react-card-carousel";
import TwitterIcon from "@mui/icons-material/Twitter";
import { getProductByCat } from "../../../../actions/Products";
import {
  PRODUCT_LOADED,
  API_URL2 as api_url2,
} from "../../../../actions/types";
import NumberFormat from "react-number-format";
import "../../../../css/savings.css";
import "../../../../css/market_home.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};
const responsive6 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
  },
};

const Savings = ({ getProductByCat }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //   var elementoo = document.getElementById("element");
  // //   const paused = elementoo.style.animationPlayState === "paused";

  //   const running = elementoo.style.animationPlayState === "running";

  const [itemGalleryShow, setItemGalleryShow] = useState([]);
  const [outrightProducts, setOutrightProducts] = useState([]);
  const [item, setItem] = useState([]);
  // const [electronics, setElectronics] = useState([]);

  // const [electronics, setElectronics] = useState("Electronics1");
  const [phonesTablets, setPhoneTablets] = useState([]);
  const [nfts, setNfts] = useState([]);
  const [furniture, setFurniture] = useState([]);
  const [electronics, setElectronics] = useState([]);
  const [musicalEquipment, setMusicalEquipment] = useState([]);
  const [industrialEquipments, setIndustrialEquipments] = useState([]);
  const [homeAppliances, setHomeAppliances] = useState([]);
  const [ComputerAccessories, setComputerAccessories] = useState([]);
  const [activeBg, setActiveBg] = useState("Target");

  const [wrap, setWrap1] = useState({ code2: "" });

  const [caping, setCaping] = useState({ code3: "" });
  const { code2 } = wrap;
  const { code3 } = caping;

  useEffect(async () => {
    let res = await getProductByCat("Phones & Tablet");
    let res2 = await getProductByCat("Nfts");
    let res3 = await getProductByCat("Furnitures");
    let res4 = await getProductByCat("Electronics");
    let res5 = await getProductByCat("Musical Equipments");
    let res6 = await getProductByCat("Industral Equipments");
    let res7 = await getProductByCat("Home Appliances");
    let res8 = await getProductByCat("Computer & Accessories");

    //console.log(
    //   res.data,
    //   res2.data,
    //   res3.data,
    //   res4.data,
    //   res5.data,
    //   res6.data,
    //   res7.data,
    //   res8.data
    // );
    //console.log(res.data.data);

    if (res.data.success === true) {
      setPhoneTablets(res.data.data);
      //console.log("okay Good Server");
    } else {
      //console.log("data no dey ooo");
    }

    if (res2.data.success === true) {
      setNfts(res2.data.data);
      //console.log(res2.data.data.length);
    } else {
      //console.log("data no dey ooo");
    }
    if (res3.data.success === true) {
      setFurniture(res3.data.data);
      //console.log(res3.data.data.length);
    } else {
      //console.log("data no dey ooo");
    }
    if (res4.data.success === true) {
      setElectronics(res4.data.data);
      //console.log(res4.data.data.length);
    } else {
      //console.log("data no dey ooo");
    }
    if (res5.data.success === true) {
      setMusicalEquipment(res5.data.data);
      //console.log(res5.data.data.length);
    } else {
      //console.log("data no dey ooo");
    }
    if (res6.data.success === true) {
      setIndustrialEquipments(res6.data.data);
      //console.log(res6.data.data.length);
    } else {
      //console.log("data no dey ooo");
    }
    if (res7.data.success === true) {
      setHomeAppliances(res7.data.data);
      //console.log(res7.data.data.length);
    } else {
      //console.log("data no dey ooo");
    }
    if (res8.data.success === true) {
      setComputerAccessories(res8.data.data);
      //console.log(res8.data.data.length);
    } else {
      //console.log("data no dey ooo");
    }
  }, []);
  useEffect(() => {
    axios
      .get(api_url2 + "/v1/product/retrieve/products", null, config)
      .then((data) => {
        //console.log(data.data.data, "powerful");

        // setItem(data.data.data);
        setWrap1({
          code2: data.data.data.product_category_code,
        });
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }, []);

  useEffect(() => {
    axios
      .get(api_url2 + "/v1/product/retrieve/products", null, config)
      .then((data) => {
        //console.log(data.data.data, "phlip");

        setItemGalleryShow(data.data.data);
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }, []);

  useEffect(() => {
    axios
      .get(api_url2 + "/v1/product/retrieve/outright/products", null, config)
      .then((data) => {
        //console.log(data.data.data, "phlip22278");

        setOutrightProducts(data.data.data);
        setCaping({
          code3: data.data.data.product_category_desc,
        });
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }, []);

  useEffect(() => {
    axios
      .get(api_url2 + "/v1/product/retrieve/products", null, config)
      .then((data) => {
        //console.log(data.data.data, "powerful");

        setItem(data.data.data);
        // setWrap({
        //   code:data.data.data.product_category_code
        // }
        // )
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }, []);
  const changeBg = (e) => {
    let currentId = e.currentTarget.id;
    setActiveBg(currentId);
  };
  const LoopMe = () => {
    var myStringArray = ["Target", "Instant", "Payment", "Global"];
    var arrayLength = myStringArray.length;
    for (var i = 0; i < arrayLength; i++) {
      console.log(myStringArray[i]);
      // setActiveBg(myStringArray[i]);
      //Do something
    }
  };
  useEffect(() => {
    // var myStringArray = ["Target", "Instant", "Payment", "Global"];
    // var arrayLength = myStringArray.length;
    // for (var i = 0; i < arrayLength; i++) {
    //   console.log(myStringArray[i]);
    //   // setActiveBg(myStringArray[i]);
    //   //Do something
    // }
    // var displayNextName = function () {
    //   console.log(myStringArray[i]);
    //   setActiveBg(myStringArray[i]);

    //   i = (i + 1) % myStringArray;
    //   setTimeout(displayNextName, 5000);
    // };

    // displayNextName();
    // var users = ["Target", "Instant", "Payment", "Global"];

    // //Build an array of users from the users object
    // var arr = ["Target", "Instant", "Payment", "Global"];
    // var index = 0;
    // setTimeout(function () {
    //   console.log(arr[index++ % arr.length]);
    //   setActiveBg(arr[index++ % arr.length]);
    // }, 3000);
    var myArr = ["Target", "Instant", "Payment", "Global"];
    var arr = ["Target", "Instant", "Payment", "Global"];
    var index = 0;
    setInterval(function () {
      var looped = arr[index++ % arr.length];
      // console.log(looped);
      setActiveBg(looped);
    }, 5000);
    // function* iterateOverArray(arr) {
    //   var i = 0;
    //   while (i < arr.length) {
    //     yield arr[i++];
    //   }
    // }

    // var generator = iterateOverArray(myArr);

    // var interval = setInterval(function () {
    //   var nxt = generator.next();
    //   // if (!nxt || nxt.done) {
    //   //   clearTimeout(interval);
    //   // } else {
    //   //   console.log(nxt.value);
    //   // }
    // }, 1000);
    // for (var i = 0; i < 3; i++) {
    //   (function (index) {
    //     setTimeout(function () {
    //       alert(index);
    //     }, index * 5000);
    //   })(i);
    // }
  }, []);
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };
  const CARD_STYLE = [
    {
      height: "300px",
      width: "300px",
      padding: "2em",
      paddingTop: "7em",
      textAlign: "left",
      background: "#fff",
      color: "#000",
      fontSize: "12px",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      position: "relative",
      border: "solid",
      borderWidth: "3px",
      borderColor: "#6e957b",
    },
  ];

  const reviews = [
    {
      word: " Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      image: "/img/profilepic.jpg",
      name: "John Doe",
    },
    {
      word: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nihil officiis inventore consequuntur minus doloribus nostrum exercitationem ad.",
      image: "/img/profilepic.jpg",
      name: "Sarah Banks",
    },
    {
      word: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/img/profilepic.jpg",
      name: "Kelvin Doe",
    },
    {
      word: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nihil officiis inventore consequuntur minus doloribus nostrum exercitationem ad.",
      image: "/img/profilepic.jpg",
      name: "Henry Doe",
    },
    {
      word: " Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      image: "/img/profilepic.jpg",
      name: "Stella Doe",
    },
    {
      word: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nihil officiis inventore consequuntur minus doloribus nostrum exercitationem ad.",
      image: "/img/profilepic.jpg",
      name: "Clinton Doe",
    },
  ];
  return (
    <div>
      <section className="savings_section">
        <div className="container">
          <div className="savings_area">
            <div className="savings_area1">
              <div className="savings_area1_title">SMART SAVINGS.</div>
              <div className="savings_area1_para">
                Get to acquire your desired items with ease through our smart
                savings plan.
              </div>
              <a href="/login">
                <button className="savings_area_btn">Start saving</button>
              </a>
            </div>
            <div className="savings_area2">
              <img
                src="/img/save_app_phones.png"
                alt=""
                className="save_app_phone"
              />
            </div>
          </div>
        </div>
        <img
          src="/img/left_savings_lines.svg"
          alt=""
          className="left_savings_icon"
        />
      </section>
      {/* ============ */}
      {/* ============ */}
      {/* ============ */}
      {/* ============ */}
      <section className="section_writeup_gallery">
        <div className="container">
          <div
            className="gttitleLine"
            data-aos="fade-up"
            data-aos-duration="3000"
          ></div>
          <div
            className="gthowItWorksTitle"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h1 className="gttitle" data-aos="fade-up" data-aos-duration="3000">
              Smart Savings Features.
            </h1>
            <p className="smart_savings_txt">
              Egoras smart savings provides every tool you need to optimize your
              savings potential.
            </p>
          </div>
          <div className="section_writeup_divs">
            <div className="section_writeup_div_controls">
              <span
                id="Target"
                className={
                  activeBg == "Target"
                    ? "change_section change_section_active"
                    : "change_section"
                }
                onClick={changeBg}
              >
                Targeted savings
              </span>
              <span
                id="Instant"
                className={
                  activeBg == "Instant"
                    ? "change_section change_section_active"
                    : "change_section"
                }
                onClick={changeBg}
              >
                Instant buy off
              </span>
              <span
                id="Payment"
                className={
                  activeBg == "Payment"
                    ? "change_section change_section_active"
                    : "change_section"
                }
                onClick={changeBg}
              >
                Payment Plan
              </span>
              <span
                id="Global"
                className={
                  activeBg == "Global"
                    ? "change_section change_section_active"
                    : "change_section"
                }
                onClick={changeBg}
              >
                Global access
              </span>
            </div>
            <div className="section_writeup_div_body">
              {" "}
              {activeBg == "Target" ? (
                <div
                  className="new_home_attributes_area reverse"
                  id="loop_me"
                  data-aos="fade-down"
                >
                  <div className="new_home_attributes_area1 anima1">
                    <div className="new_home_attributes_area1_txt">
                      {" "}
                      <h4 className="new_home_attributes_area1_txt_head bigger_head">
                        Targeted savings
                      </h4>
                      <p className="new_home_attributes_area1_txt_para">
                        Save up over a given period of time to acquire desired
                        items.
                      </p>
                    </div>
                  </div>{" "}
                  <div className="new_home_attributes_area2 anima">
                    <img
                      src="/img/validated_img.svg"
                      alt=""
                      className="take_loan_img5 bigger_img"
                    />
                  </div>
                </div>
              ) : activeBg == "Instant" ? (
                <div
                  className="new_home_attributes_area reverse"
                  id="loop_me"
                  data-aos="fade-down"
                >
                  <div className="new_home_attributes_area1 anima1">
                    <div className="new_home_attributes_area1_txt">
                      {" "}
                      <h4 className="new_home_attributes_area1_txt_head bigger_head">
                        Instant buy off
                      </h4>
                      <p className="new_home_attributes_area1_txt_para">
                        Make a one-time payment and get your desired item.
                      </p>
                    </div>
                  </div>{" "}
                  <div className="new_home_attributes_area2 anima">
                    <img
                      src="/img/block-chain.svg"
                      alt=""
                      className="take_loan_img5 bigger_img"
                    />
                  </div>
                </div>
              ) : activeBg == "Payment" ? (
                <div
                  className="new_home_attributes_area reverse"
                  id="loop_me"
                  data-aos="fade-down"
                >
                  <div className="new_home_attributes_area1 anima1">
                    <div className="new_home_attributes_area1_txt">
                      {" "}
                      <h4 className="new_home_attributes_area1_txt_head bigger_head">
                        Payment Plan
                      </h4>
                      <p className="new_home_attributes_area1_txt_para">
                        Make payments online or visit any Egoras branch close to
                        you.
                      </p>
                    </div>
                  </div>{" "}
                  <div className="new_home_attributes_area2 anima">
                    <img
                      src="/img/weigh-tokens.svg"
                      alt=""
                      className="take_loan_img5 bigger_img"
                    />
                  </div>
                </div>
              ) : activeBg == "Global" ? (
                <div
                  className="new_home_attributes_area reverse"
                  id="loop_me"
                  data-aos="fade-down"
                >
                  <div className="new_home_attributes_area1 anima1">
                    <div className="new_home_attributes_area1_txt">
                      {" "}
                      <h4 className="new_home_attributes_area1_txt_head bigger_head">
                        Global access
                      </h4>
                      <p className="new_home_attributes_area1_txt_para">
                        Save up to acquire items and get it delivered it to you
                        regardless of your location.
                      </p>
                    </div>
                  </div>{" "}
                  <div className="new_home_attributes_area2 anima">
                    <img
                      src="/img/sorry-image.svg"
                      alt=""
                      className="take_loan_img5 bigger_img"
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}

      {/* =================================================================================================================================================================================================================================================================== */}
      {/*  Projects Section start*/}

      {/*  Projects Section end*/}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* =================================================================================================================================================================================================================================================================== */}

      {/*  Projects Section start*/}

      {/*  Projects Section end*/}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/*  Projects Section start*/}
      {/*  Projects Section end*/}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* ===== */}
      {/* ===== */}
      {/* ===== */}
      {/* ===== */}
      {/* ===== */}
      <section className="users_compliment_section">
        <div className="container">
          <div
            className="gttitleLine"
            data-aos="fade-up"
            data-aos-duration="3000"
          ></div>
          <div
            className="gthowItWorksTitle"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h1 className="gttitle" data-aos="fade-up" data-aos-duration="3000">
              Customer Reviews.
            </h1>
          </div>
          <div className="users_compliment_area">
            <div className="innnn">
              <ReactCardCarousel
                position={"relative"}
                autoplay={true}
                autoplay_speed={10000}
                className="relate_div"
              >
                {/* <div className="wrap_them"> */}
                {reviews.map((rev) => (
                  <div style={CARD_STYLE[0]}>
                    <div className="reviewer_img">
                      <TwitterIcon className="twitter_social_icon" />
                    </div>
                    <div className="review_name">{rev.name}</div>

                    <div className="review_txt">{rev.word}</div>
                  </div>
                ))}
                {/* <div style={CARD_STYLE[0]}>First Card</div>
                <div style={CARD_STYLE[0]}>Second Card</div>
                <div style={CARD_STYLE[0]}>Third Card</div>
                <div style={CARD_STYLE[0]}>Fourth Card</div>
                <div style={CARD_STYLE[0]}>Fifth Card</div> */}
                {/* </div> */}
              </ReactCardCarousel>
            </div>

            <div className="users_compliment_number">
              <div className="compliment_number_title">
                Over 2billion naira in loans.
              </div>
              <div className="compliment_number_para">
                Since launching in 2020, over 3,000,000 people have used Egoras
                to manage their money better, avoid over-spending and be more
                accountable.
              </div>
              <a href="/signup">
                <button className="compliment_btn">
                  Create a free account
                </button>
              </a>
            </div>
          </div>
        </div>
        <img src="/img/right_savings_line_icon.svg" alt="" className="right_savings_icon" />
      </section>
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      <section className="featured_section">
        <div className="container">
          <div
            className="gttitleLine"
            data-aos="fade-up"
            data-aos-duration="3000"
          ></div>
          <div
            className="gthowItWorksTitle"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h1 className="gttitle" data-aos="fade-up" data-aos-duration="3000">
              Our Partners.
            </h1>
          </div>
          <div className="gtstoriesArea">
            {/* Carousel start==============================
==============================================
============================= */}
            <Carousel
              responsive={responsive}
              className="partnerCards"
              showDots={false}
              //   infinite={false}
              autoPlay={true}
              autoPlaySpeed={3000}
              infinite={true}
              draggable={true}
              swipeable={true}
            >
              <div className="partnerLogo1">
                <a href="https://cointelegraph.com/" className="partnerLink">
                  {" "}
                  <img
                    src="/img/coin-telegraph.svg"
                    alt=""
                    className="partnerlog"
                  />
                </a>
              </div>
              <div className="partnerLogo1">
                <a href="https://finance.yahoo.com/" className="partnerLink">
                  {" "}
                  <img
                    src="/img/YAHOOFINANCE.svg"
                    alt=""
                    className="partnerlog"
                  />
                </a>
              </div>
              <div className="partnerLogo1">
                <a href="https://www.newsbtc.com/" className="partnerLink">
                  {" "}
                  <img src="/img/NEWSBTC.svg" alt="" className="partnerlog" />
                </a>
              </div>
              <div className="partnerLogo1">
                <a href="https://apnews.com/" className="partnerLink">
                  {" "}
                  <img src="/img/APNEWS.svg" alt="" className="partnerlog" />
                </a>
              </div>
              <div className="partnerLogo1">
                <a href="https://independent.ng/" className="partnerLink">
                  {" "}
                  <img
                    src="/img/INDEPENDENT.svg"
                    alt=""
                    className="partnerlog"
                  />
                </a>
              </div>
              <div className="partnerLogo1">
                <a href="https://guardian.ng/" className="partnerLink">
                  {" "}
                  <img
                    src="/img/THEGUARDIAN.svg"
                    alt=""
                    className="partnerlog"
                  />
                </a>
              </div>
              <div className="partnerLogo1">
                <a href="https://nairametrics.com/" className="partnerLink">
                  {" "}
                  <img
                    src="/img/NAIRAMETRICS.svg"
                    alt=""
                    className="partnerlog"
                  />
                </a>
              </div>
            </Carousel>
            {/* Carousel end==============================
==============================================
============================= */}
          </div>
        </div>
      </section>
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      <section className="gtexploreSection">
        <div className="container">
          <div
            className="gtexploreArea"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="gtexploretxts">
              <h1
                className="gtgood"
                data-aos="fade-down"
                data-aos-duration="3000"
              >
                Sounds good?
              </h1>
              <div className="gtexploreLink">
                <a href="/dashboard" className="gtexploreLoansbtn">
                  Start Saving
                </a>
              </div>
            </div>

            <img src="/img/explore-dots.svg" alt="" className="gtexploreDots" />
            <img
              src="/img/explore-shape.svg"
              alt=""
              className="gtexploreShape"
            />
          </div>
        </div>
      </section>
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
    </div>
  );
};

// export default Savings;

export default connect(null, { getProductByCat })(Savings);
