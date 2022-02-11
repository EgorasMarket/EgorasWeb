import React, { useState, useEffect } from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Carousel from "react-multi-carousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { connect, useDispatch } from "react-redux";
import axios from "axios";
import {
  PRODUCT_LOADED,
  API_URL2 as api_url2,
} from "../../../../actions/types";
import NumberFormat from "react-number-format";
import "../../../../css/savings.css";

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

const Savings = () => {
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
  const [item,setItem]=useState([]);




  const [furniture,setFurniture] =useState("Furnitures");
  const [ComputerAccessories,setComputerAccessories] =useState("Computer & Accessories");
  const [homeAppliances,setHomeAppliances] =useState("Home Appliances");
  const [electronics,setElectronics] =useState("Electronics");
  const [nfts,setNfts] =useState("Nfts");
  const [phonesTablets,setPhoneTablets] =useState("Phones & Tablet");
  const [musicalEquipment,setMusicalEquipment] =useState("Musical Equipments");
  const [industrialEquipments,setIndustrialEquipments]= useState("Industral Equipments")

  useEffect(() => {
    axios
      .get(api_url2 + "/v1/product/retrieve/products", null, config)
      .then((data) => {
        console.log(data.data.data, "phlip");

        setItemGalleryShow(data.data.data);
      })
      .catch((err) => {
        console.log(err); // "oh, no!"
      });
  }, []);

  useEffect(() => {
    axios
      .get(api_url2 + "/v1/product/retrieve/outright/products", null, config)
      .then((data) => {
        console.log(data.data.data, "phlip222");

        setOutrightProducts(data.data.data);
      })
      .catch((err) => {
        console.log(err); // "oh, no!"
      });
  }, []);


  useEffect(() => {
  
    axios.get(
        api_url2 + "/v1/product/retrieve/products",
        null,
        config
    ).then((data) => {
       
        console.log(data.data.data, "powerful");
     
       
        setItem(data.data.data)
        // setWrap({
        //   code:data.data.data.product_category_code
        // }
        // )

      })
      .catch((err) => {
        console.log(err); // "oh, no!"
      });

    
  }, []);


  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <div>
      <section className="savings_section">
        <div className="container">
          <div className="savings_area">
            <div className="savings_area1">
              <div className="savings_area1_title">Target Savings</div>
              <div className="savings_area1_para">
                Reach all your unique savings goals, individually or as a group.
                Earn up to 13% p.a.
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
      </section>
      {/* ============ */}
      {/* ============ */}
      {/* ============ */}
      {/* ============ */}
      <section className="savings_section2">
        <div className="container">
          <div className="savings_section2_area">
            <div className="savings_section2_area_txts">
              <div className="savings_section2_area_title">
                Save towards multiple goals
              </div>
              <div className="savings_section2_area_para">
                Target Savings helps you get there faster. You can even team up
                with others to reach a collective target.
              </div>
            </div>
            <div className="savings_section2_area_conts">
              <div
                className="savings_section2_area_box1"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <AccountBalanceWalletIcon className="conts1_box1_contents_icon" />
                <div className="build_savings_area2_conts1_box1_contents">
                  {" "}
                  <div className="build_savings_area2_conts1_box1_title">
                    Get what you need right now.
                  </div>
                  <div className="build_savings_area2_conts1_box1_para">
                    Make your first savings today and the rest over 6 weeks. It
                    is that simple to acquire any household items.
                  </div>
                </div>
              </div>
              {/* ====== */}
              {/* ====== */}
              {/* ====== */}
              <div
                className="savings_section2_area_box1"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <AccountBalanceWalletIcon className="conts1_box1_contents_icon" />
                <div className="build_savings_area2_conts1_box1_contents">
                  {" "}
                  <div className="build_savings_area2_conts1_box1_title">
                    Get what you need right now.
                  </div>
                  <div className="build_savings_area2_conts1_box1_para">
                    Make your first savings today and the rest over 6 weeks. It
                    is that simple to acquire any household items.
                  </div>
                </div>
              </div>
              {/* ====== */}
              {/* ====== */}
              {/* ====== */}
              <div
                className="savings_section2_area_box1"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <AccountBalanceWalletIcon className="conts1_box1_contents_icon" />
                <div className="build_savings_area2_conts1_box1_contents">
                  {" "}
                  <div className="build_savings_area2_conts1_box1_title">
                    Get what you need right now.
                  </div>
                  <div className="build_savings_area2_conts1_box1_para">
                    Make your first savings today and the rest over 6 weeks. It
                    is that simple to acquire any household items.
                  </div>
                </div>
              </div>
              {/* ====== */}
              {/* ====== */}
              {/* ====== */}
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
      <section className="projectsSection" id="projects">
        <div className="container">
          <div
            className="projectsArea item_card_area"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="projectsTitleContentsa bg_a">
              <div className="projectTitle">
                <h1 className="gttitle TITE">
                  Top Deals{" "}
                  <span className="ouright_sell">/ Outright sell-off.</span>
                </h1>
              </div>
              <a href={`/dashboard/products/categories/Outright `}  className="see_all_cat">
                See all <ArrowForwardIosIcon className="forward_icons" />
              </a>
            </div>

            {/* Carousel start==============================
==============================================
============================= */}

            <Carousel
              responsive={responsive6}
              className="partnerCards LEFTARROW"
              showDots={false}
              //   infinite={false}
              autoPlay={true}
              autoPlaySpeed={6000}
              transitionDelay={"2s"}
              infinite={true}
              draggable={true}
              // transitionDuration={500}
              swipeable={true}
              style={{ height: "25em" }}
            >
              {outrightProducts.map((asset) => (
                <a href={`/products/details/${asset.id}`}>
                  <li className="carous_list no_marg">
                    <div
                      className="storeTiles_storeTileContainer__HoGEa"
                      style={{
                        backgroundImage: `url(${
                          api_url2 + "/" + asset.product_image
                        })`,
                        //           height: "200px",
                        //           width: "100%",
                        //           backgroundRepeat: "no-repeat",
                        //           backgroundSize: "cover",
                        //           borderRadius: "8px",
                        //           borderBottomLeftRadius: "0px",
                        //           borderBottomRightRadius: "0px",
                        //   backgroundPositionY: "center",
                      }}
                    >
                      <div className="storeTiles_storeTileOffersContainer__3v8lC">
                        <button className="items_remaining_btn">
                          {asset.payment_type == "OUTRIGHT" ? (
                            <p className="no_margg"> Buy now</p>
                          ) : (
                            <p className="no_margg"> Save now</p>
                          )}
                        </button>

                        {asset.payment_type == "OUTRIGHT" ? (
                          <div></div>
                        ) : (
                          <button className="items_remaining_btn2">
                            {" "}
                            40% locked
                          </button>
                        )}
                      </div>
                      <div className="storeTiles_storeTileBottomContainer__2sWHh">
                        <div className="asset_name">{asset.product_name}</div>
                        <div className="asset_title">
                          ₦{numberWithCommas(asset.amount)}{" "}
                          <span className="slashed_price">
                            ₦{numberWithCommas(asset.amount * 2)}
                          </span>
                        </div>
                      </div>
                      {/* </a> */}
                    </div>
                  </li>
                </a>
              ))}
            </Carousel>
            {/* Carousel end==============================
==============================================
============================= */}
          </div>
        </div>
      </section>












     






        
      
     






          
      





      











      {/*  Projects Section end*/}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/*  Projects Section start*/}
      <section className="projectsSection" id="projects">
        <div className="container">
          <div
            className="projectsArea item_card_area"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="projectsTitleContentsa bg_a">
              <div className="projectTitle">
                <h1 className="gttitle TITE">
                  Phone & Tablets <span className="ouright_sell">/ Esusu.</span>
                </h1>
              </div>
              <a href={`/dashboard/products/categories/Phones & Tablet`} className="see_all_cat">
                See all <ArrowForwardIosIcon className="forward_icons" />
              </a>
            </div>

            {/* Carousel start==============================
==============================================
============================= */}

            <Carousel
              responsive={responsive6}
              className="partnerCards LEFTARROW"
              showDots={false}
              //   infinite={false}
              autoPlay={true}
              autoPlaySpeed={6000}
              transitionDelay={"2s"}
              infinite={true}
              draggable={true}
              // transitionDuration={500}
              swipeable={true}
              style={{ height: "25em" }}
            >
              {item.map((asset) => {if (phonesTablets === asset.product_category_desc){ return(
                <a href={`/products/details/${asset.id}`}>
                  <li className="carous_list no_marg">
                    <div
                      className="storeTiles_storeTileContainer__HoGEa"
                      style={{
                        backgroundImage: `url(${
                          api_url2 + "/" + asset.product_image
                        })`,
                        //           height: "200px",
                        //           width: "100%",
                        //           backgroundRepeat: "no-repeat",
                        //           backgroundSize: "cover",
                        //           borderRadius: "8px",
                        //           borderBottomLeftRadius: "0px",
                        //           borderBottomRightRadius: "0px",
                        //   backgroundPositionY: "center",
                      }}
                    >
                      <div className="storeTiles_storeTileOffersContainer__3v8lC">
                        <button className="items_remaining_btn">
                          {asset.payment_type == "OUTRIGHT" ? (
                            <p className="no_margg"> Buy now</p>
                          ) : (
                            <p className="no_margg"> Save now</p>
                          )}
                        </button>

                        {asset.payment_type == "OUTRIGHT" ? (
                          <div></div>
                        ) : (
                          <button className="items_remaining_btn2">
                            {" "}
                            {asset.percentage}% locked
                          </button>
                        )}
                      </div>
                      <div className="storeTiles_storeTileBottomContainer__2sWHh">
                        <div className="asset_name">{asset.product_name}</div>
                        <div className="asset_prices_div">
                          <div className="asset_title">
                            ₦{numberWithCommas(asset.amount)}{" "}
                            <span className="slashed_price">
                              ₦{numberWithCommas(asset.amount * 2)}
                            </span>
                          </div>
                          <div className="amount_per_day_div">
                            ₦
                            {numberWithCommas(
                              (asset.amount / asset.product_duration).toFixed()
                            )}
                            <span className="per_day_symbol"> / perday</span>
                          </div>
                        </div>
                      </div>
                      {/* </a> */}
                    </div>
                  </li>
                </a>
              )}} )}
            </Carousel>


         

            {/* Carousel end==============================
==============================================
============================= */}
          </div>
        </div>
      </section>







      {/*  Projects Section end*/}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/*  Projects Section start*/}
      <section className="projectsSection" id="projects">
        <div className="container">
          <div
            className="projectsArea item_card_area"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="projectsTitleContentsa bg_a">
              <div className="projectTitle">
                <h1 className="gttitle TITE">
                  Electronics <span className="ouright_sell">/ Esusu.</span>
                </h1>
              </div>
              <a href={`/dashboard/products/categories/Electronics`} className="see_all_cat">
                See all <ArrowForwardIosIcon className="forward_icons" />
              </a>
            </div>

            {/* Carousel start==============================
==============================================
============================= */}

            <Carousel
              responsive={responsive6}
              className="partnerCards LEFTARROW"
              showDots={false}
              //   infinite={false}
              autoPlay={true}
              autoPlaySpeed={6000}
              transitionDelay={"2s"}
              infinite={true}
              draggable={true}
              // transitionDuration={500}
              swipeable={true}
              style={{ height: "25em" }}
            >
                {item.map((asset) => {if (electronics === asset.product_category_desc){ return(
                <a href={`/products/details/${asset.id}`}>
                  <li className="carous_list no_marg">
                    <div
                      className="storeTiles_storeTileContainer__HoGEa"
                      style={{
                        backgroundImage: `url(${
                          api_url2 + "/" + asset.product_image
                        })`,
                        //           height: "200px",
                        //           width: "100%",
                        //           backgroundRepeat: "no-repeat",
                        //           backgroundSize: "cover",
                        //           borderRadius: "8px",
                        //           borderBottomLeftRadius: "0px",
                        //           borderBottomRightRadius: "0px",
                        //   backgroundPositionY: "center",
                      }}
                    >
                      <div className="storeTiles_storeTileOffersContainer__3v8lC">
                        <button className="items_remaining_btn">
                          {asset.payment_type == "OUTRIGHT" ? (
                            <p className="no_margg"> Buy now</p>
                          ) : (
                            <p className="no_margg"> Save now</p>
                          )}
                        </button>

                        {asset.payment_type == "OUTRIGHT" ? (
                          <div></div>
                        ) : (
                          <button className="items_remaining_btn2">
                            {" "}
                            {asset.percentage}% locked
                          </button>
                        )}
                      </div>
                      <div className="storeTiles_storeTileBottomContainer__2sWHh">
                        <div className="asset_name">{asset.product_name}</div>
                        <div className="asset_prices_div">
                          <div className="asset_title">
                            ₦{numberWithCommas(asset.amount)}{" "}
                            <span className="slashed_price">
                              ₦{numberWithCommas(asset.amount * 2)}
                            </span>
                          </div>
                          <div className="amount_per_day_div">
                            ₦
                            {numberWithCommas(
                              (asset.amount / asset.product_duration).toFixed()
                            )}
                            <span className="per_day_symbol"> / perday</span>
                          </div>
                        </div>
                      </div>
                      {/* </a> */}
                    </div>
                  </li>
                </a>
               )}} )}
            </Carousel>


         

            {/* Carousel end==============================
==============================================
============================= */}
          </div>
        </div>
      </section>






      {/*  Projects Section end*/}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/*  Projects Section start*/}
      <section className="projectsSection" id="projects">
        <div className="container">
          <div
            className="projectsArea item_card_area"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="projectsTitleContentsa bg_a">
              <div className="projectTitle">
                <h1 className="gttitle TITE">
                  Musical Equipments <span className="ouright_sell">/ Esusu.</span>
                </h1>
              </div>
              <a href={`/dashboard/products/categories/Musical Equipments`} className="see_all_cat">
                See all <ArrowForwardIosIcon className="forward_icons" />
              </a>
            </div>

            {/* Carousel start==============================
==============================================
============================= */}

            <Carousel
              responsive={responsive6}
              className="partnerCards LEFTARROW"
              showDots={false}
              //   infinite={false}
              autoPlay={true}
              autoPlaySpeed={6000}
              transitionDelay={"2s"}
              infinite={true}
              draggable={true}
              // transitionDuration={500}
              swipeable={true}
              style={{ height: "25em" }}
            >
            {item.map((asset) => {if (musicalEquipment === asset.product_category_desc){ return(
                <a href={`/products/details/${asset.id}`}>
                  <li className="carous_list no_marg">
                    <div
                      className="storeTiles_storeTileContainer__HoGEa"
                      style={{
                        backgroundImage: `url(${
                          api_url2 + "/" + asset.product_image
                        })`,
                        //           height: "200px",
                        //           width: "100%",
                        //           backgroundRepeat: "no-repeat",
                        //           backgroundSize: "cover",
                        //           borderRadius: "8px",
                        //           borderBottomLeftRadius: "0px",
                        //           borderBottomRightRadius: "0px",
                        //   backgroundPositionY: "center",
                      }}
                    >
                      <div className="storeTiles_storeTileOffersContainer__3v8lC">
                        <button className="items_remaining_btn">
                          {asset.payment_type == "OUTRIGHT" ? (
                            <p className="no_margg"> Buy now</p>
                          ) : (
                            <p className="no_margg"> Save now</p>
                          )}
                        </button>

                        {asset.payment_type == "OUTRIGHT" ? (
                          <div></div>
                        ) : (
                          <button className="items_remaining_btn2">
                            {" "}
                            {asset.percentage}% locked
                          </button>
                        )}
                      </div>
                      <div className="storeTiles_storeTileBottomContainer__2sWHh">
                        <div className="asset_name">{asset.product_name}</div>
                        <div className="asset_prices_div">
                          <div className="asset_title">
                            ₦{numberWithCommas(asset.amount)}{" "}
                            <span className="slashed_price">
                              ₦{numberWithCommas(asset.amount * 2)}
                            </span>
                          </div>
                          <div className="amount_per_day_div">
                            ₦
                            {numberWithCommas(
                              (asset.amount / asset.product_duration).toFixed()
                            )}
                            <span className="per_day_symbol"> / perday</span>
                          </div>
                        </div>
                      </div>
                      {/* </a> */}
                    </div>
                  </li>
                </a>
                   )}} )}
            </Carousel>


         

            {/* Carousel end==============================
==============================================
============================= */}
          </div>
        </div>
      </section>






          
       {/* =================================================================================================================================================================================================================================================================== */}
      {/*  Projects Section start*/}
      <section className="projectsSection" id="projects">
        <div className="container">
          <div
            className="projectsArea item_card_area"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="projectsTitleContentsa bg_a">
              <div className="projectTitle">
                <h1 className="gttitle TITE">
                  Computer &  Accessories <span className="ouright_sell">/ Esusu.</span>
                </h1>
              </div>
              <a href={`/dashboard/products/categories/Computer & Accessories`} className="see_all_cat">
                See all <ArrowForwardIosIcon className="forward_icons" />
              </a>
            </div>

            {/* Carousel start==============================
==============================================
============================= */}

            <Carousel
              responsive={responsive6}
              className="partnerCards LEFTARROW"
              showDots={false}
              //   infinite={false}
              autoPlay={true}
              autoPlaySpeed={6000}
              transitionDelay={"2s"}
              infinite={true}
              draggable={true}
              // transitionDuration={500}
              swipeable={true}
              style={{ height: "25em" }}
            >
              {item.map((asset) => {if (ComputerAccessories === asset.product_category_desc){ return(
                <a href={`/products/details/${asset.id}`}>
                  <li className="carous_list no_marg">
                    <div
                      className="storeTiles_storeTileContainer__HoGEa"
                      style={{
                        backgroundImage: `url(${
                          api_url2 + "/" + asset.product_image
                        })`,
                        //           height: "200px",
                        //           width: "100%",
                        //           backgroundRepeat: "no-repeat",
                        //           backgroundSize: "cover",
                        //           borderRadius: "8px",
                        //           borderBottomLeftRadius: "0px",
                        //           borderBottomRightRadius: "0px",
                        //   backgroundPositionY: "center",
                      }}
                    >
                      <div className="storeTiles_storeTileOffersContainer__3v8lC">
                        <button className="items_remaining_btn">
                          {asset.payment_type == "OUTRIGHT" ? (
                            <p className="no_margg"> Buy now</p>
                          ) : (
                            <p className="no_margg"> Save now</p>
                          )}
                        </button>

                        {asset.payment_type == "OUTRIGHT" ? (
                          <div></div>
                        ) : (
                          <button className="items_remaining_btn2">
                            {" "}
                            {asset.percentage}% locked
                          </button>
                        )}
                      </div>
                      <div className="storeTiles_storeTileBottomContainer__2sWHh">
                        <div className="asset_name">{asset.product_name}</div>
                        <div className="asset_prices_div">
                          <div className="asset_title">
                            ₦{numberWithCommas(asset.amount)}{" "}
                            <span className="slashed_price">
                              ₦{numberWithCommas(asset.amount * 2)}
                            </span>
                          </div>
                          <div className="amount_per_day_div">
                            ₦
                            {numberWithCommas(
                              (asset.amount / asset.product_duration).toFixed()
                            )}
                            <span className="per_day_symbol"> / perday</span>
                          </div>
                        </div>
                      </div>
                      {/* </a> */}
                    </div>
                  </li>
                </a>
             )}} )}
            </Carousel>


         

            {/* Carousel end==============================
==============================================
============================= */}
          </div>
        </div>
      </section>





     {/*  Projects Section start*/}
     <section className="projectsSection" id="projects">
        <div className="container">
          <div
            className="projectsArea item_card_area"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="projectsTitleContentsa bg_a">
              <div className="projectTitle">
                <h1 className="gttitle TITE">
                  Furniture <span className="ouright_sell">/ Esusu.</span>
                </h1>
              </div>
              <a href={`/dashboard/products/categories/Furnitures`}  className="see_all_cat">
                See all <ArrowForwardIosIcon className="forward_icons" />
              </a>
            </div>

            {/* Carousel start==============================
==============================================
============================= */}

            <Carousel
              responsive={responsive6}
              className="partnerCards LEFTARROW"
              showDots={false}
              //   infinite={false}
              autoPlay={true}
              autoPlaySpeed={6000}
              transitionDelay={"2s"}
              infinite={true}
              draggable={true}
              // transitionDuration={500}
              swipeable={true}
              style={{ height: "25em" }}
            >
               {item.map((asset) => {if (furniture === asset.product_category_desc){ return(
                <a href={`/products/details/${asset.id}`}>
                  <li className="carous_list no_marg">
                    <div
                      className="storeTiles_storeTileContainer__HoGEa"
                      style={{
                        backgroundImage: `url(${
                          api_url2 + "/" + asset.product_image
                        })`,
                        //           height: "200px",
                        //           width: "100%",
                        //           backgroundRepeat: "no-repeat",
                        //           backgroundSize: "cover",
                        //           borderRadius: "8px",
                        //           borderBottomLeftRadius: "0px",
                        //           borderBottomRightRadius: "0px",
                        //   backgroundPositionY: "center",
                      }}
                    >
                      <div className="storeTiles_storeTileOffersContainer__3v8lC">
                        <button className="items_remaining_btn">
                          {asset.payment_type == "OUTRIGHT" ? (
                            <p className="no_margg"> Buy now</p>
                          ) : (
                            <p className="no_margg"> Save now</p>
                          )}
                        </button>

                        {asset.payment_type == "OUTRIGHT" ? (
                          <div></div>
                        ) : (
                          <button className="items_remaining_btn2">
                            {" "}
                            {asset.percentage}% locked
                          </button>
                        )}
                      </div>
                      <div className="storeTiles_storeTileBottomContainer__2sWHh">
                        <div className="asset_name">{asset.product_name}</div>
                        <div className="asset_prices_div">
                          <div className="asset_title">
                            ₦{numberWithCommas(asset.amount)}{" "}
                            <span className="slashed_price">
                              ₦{numberWithCommas(asset.amount * 2)}
                            </span>
                          </div>
                          <div className="amount_per_day_div">
                            ₦
                            {numberWithCommas(
                              (asset.amount / asset.product_duration).toFixed()
                            )}
                            <span className="per_day_symbol"> / perday</span>
                          </div>
                        </div>
                      </div>
                      {/* </a> */}
                    </div>
                  </li>
                </a>
             )}} )}
            </Carousel>


         

            {/* Carousel end==============================
==============================================
============================= */}
          </div>
        </div>
      </section>
     



      {/*  Projects Section end*/}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/*  Projects Section start*/}
      <section className="projectsSection" id="projects">
        <div className="container">
          <div
            className="projectsArea item_card_area"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="projectsTitleContentsa bg_a">
              <div className="projectTitle">
                <h1 className="gttitle TITE">
                  Groceries <span className="ouright_sell">/ Esusu.</span>
                </h1>
              </div>
              <a href={`/dashboard/products/categories/Home Appliances`}  className="see_all_cat">
                See all <ArrowForwardIosIcon className="forward_icons" />
              </a>
            </div>

            {/* Carousel start==============================
==============================================
============================= */}

            <Carousel
              responsive={responsive6}
              className="partnerCards LEFTARROW"
              showDots={false}
              //   infinite={false}
              autoPlay={true}
              autoPlaySpeed={6000}
              transitionDelay={"2s"}
              infinite={true}
              draggable={true}
              // transitionDuration={500}
              swipeable={true}
              style={{ height: "25em" }}
            >
              {itemGalleryShow.map((asset) => (
                <a href={`/products/details/${asset.id}`}>
                  <li className="carous_list no_marg">
                    <div
                      className="storeTiles_storeTileContainer__HoGEa"
                      style={{
                        backgroundImage: `url(${
                          api_url2 + "/" + asset.product_image
                        })`,
                        //           height: "200px",
                        //           width: "100%",
                        //           backgroundRepeat: "no-repeat",
                        //           backgroundSize: "cover",
                        //           borderRadius: "8px",
                        //           borderBottomLeftRadius: "0px",
                        //           borderBottomRightRadius: "0px",
                        //   backgroundPositionY: "center",
                      }}
                    >
                      <div className="storeTiles_storeTileOffersContainer__3v8lC">
                        <button className="items_remaining_btn">
                          {asset.payment_type == "OUTRIGHT" ? (
                            <p className="no_margg"> Buy now</p>
                          ) : (
                            <p className="no_margg"> Save now</p>
                          )}
                        </button>

                        {asset.payment_type == "OUTRIGHT" ? (
                          <div></div>
                        ) : (
                          <button className="items_remaining_btn2">
                            {" "}
                            {asset.percentage}% locked
                          </button>
                        )}
                      </div>
                      <div className="storeTiles_storeTileBottomContainer__2sWHh">
                        <div className="asset_name">{asset.product_name}</div>
                        <div className="asset_prices_div">
                          <div className="asset_title">
                            ₦{numberWithCommas(asset.amount)}{" "}
                            <span className="slashed_price">
                              ₦{numberWithCommas(asset.amount * 2)}
                            </span>
                          </div>
                          <div className="amount_per_day_div">
                            ₦
                            {numberWithCommas(
                              (asset.amount / asset.product_duration).toFixed()
                            )}
                            <span className="per_day_symbol"> / perday</span>
                          </div>
                        </div>
                      </div>
                      {/* </a> */}
                    </div>
                  </li>
                </a>
              ))}
            </Carousel>
            {/* Carousel end==============================
==============================================
============================= */}
          </div>
        </div>
      </section>
      {/*  Projects Section end*/}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/*  Projects Section start*/}
      <section className="projectsSection" id="projects">
        <div className="container">
          <div
            className="projectsArea item_card_area"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="projectsTitleContentsa bg_a">
              <div className="projectTitle">
                <h1 className="gttitle TITE">
                  Home Appliances <span className="ouright_sell">/ Esusu.</span>
                </h1>
              </div>
              <a href={`/dashboard/products/categories/Home Appliances`}  className="see_all_cat">
                See all <ArrowForwardIosIcon className="forward_icons" />
              </a>
            </div>

            {/* Carousel start==============================
==============================================
============================= */}

            <Carousel
              responsive={responsive6}
              className="partnerCards LEFTARROW"
              showDots={false}
              //   infinite={false}
              autoPlay={true}
              autoPlaySpeed={6000}
              transitionDelay={"2s"}
              infinite={true}
              draggable={true}
              // transitionDuration={500}
              swipeable={true}
              style={{ height: "25em" }}
            >
           {item.map((asset) => {if (homeAppliances === asset.product_category_desc){ return(
                <a href={`/products/details/${asset.id}`}>
                  <li className="carous_list no_marg">
                    <div
                      className="storeTiles_storeTileContainer__HoGEa"
                      style={{
                        backgroundImage: `url(${
                          api_url2 + "/" + asset.product_image
                        })`,
                        //           height: "200px",
                        //           width: "100%",
                        //           backgroundRepeat: "no-repeat",
                        //           backgroundSize: "cover",
                        //           borderRadius: "8px",
                        //           borderBottomLeftRadius: "0px",
                        //           borderBottomRightRadius: "0px",
                        //   backgroundPositionY: "center",
                      }}
                    >
                      <div className="storeTiles_storeTileOffersContainer__3v8lC">
                        <button className="items_remaining_btn">
                          {asset.payment_type == "OUTRIGHT" ? (
                            <p className="no_margg"> Buy now</p>
                          ) : (
                            <p className="no_margg"> Save now</p>
                          )}
                        </button>

                        {asset.payment_type == "OUTRIGHT" ? (
                          <div></div>
                        ) : (
                          <button className="items_remaining_btn2">
                            {" "}
                            {asset.percentage}% locked
                          </button>
                        )}
                      </div>
                      <div className="storeTiles_storeTileBottomContainer__2sWHh">
                        <div className="asset_name">{asset.product_name}</div>
                        <div className="asset_prices_div">
                          <div className="asset_title">
                            ₦{numberWithCommas(asset.amount)}{" "}
                            <span className="slashed_price">
                              ₦{numberWithCommas(asset.amount * 2)}
                            </span>
                          </div>
                          <div className="amount_per_day_div">
                            ₦
                            {numberWithCommas(
                              (asset.amount / asset.product_duration).toFixed()
                            )}
                            <span className="per_day_symbol"> / perday</span>
                          </div>
                        </div>
                      </div>
                      {/* </a> */}
                    </div>
                  </li>
                </a>
               )}} )}
            </Carousel>
            {/* Carousel end==============================
==============================================
============================= */}
          </div>
        </div>
      </section>




   
      {/*  Projects Section start*/}
      <section className="projectsSection" id="projects">
        <div className="container">
          <div
            className="projectsArea item_card_area"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="projectsTitleContentsa bg_a">
              <div className="projectTitle">
                <h1 className="gttitle TITE">
                  Nfts <span className="ouright_sell">/ Esusu.</span>
                </h1>
              </div>
              <a href={`/dashboard/products/categories/Nfts`} className="see_all_cat">
                See all <ArrowForwardIosIcon className="forward_icons" />
              </a>
            </div>

            {/* Carousel start==============================
==============================================
============================= */}

            <Carousel
              responsive={responsive6}
              className="partnerCards LEFTARROW"
              showDots={false}
              //   infinite={false}
              autoPlay={true}
              autoPlaySpeed={6000}
              transitionDelay={"2s"}
              infinite={true}
              draggable={true}
              // transitionDuration={500}
              swipeable={true}
              style={{ height: "25em" }}
            >
               {item.map((asset) => {if (nfts === asset.product_category_desc){ return(
                <a href={`/products/details/${asset.id}`}>
                  <li className="carous_list no_marg">
                    <div
                      className="storeTiles_storeTileContainer__HoGEa"
                      style={{
                        backgroundImage: `url(${
                          api_url2 + "/" + asset.product_image
                        })`,
                        //           height: "200px",
                        //           width: "100%",
                        //           backgroundRepeat: "no-repeat",
                        //           backgroundSize: "cover",
                        //           borderRadius: "8px",
                        //           borderBottomLeftRadius: "0px",
                        //           borderBottomRightRadius: "0px",
                        //   backgroundPositionY: "center",
                      }}
                    >
                      <div className="storeTiles_storeTileOffersContainer__3v8lC">
                        <button className="items_remaining_btn">
                          {asset.payment_type == "OUTRIGHT" ? (
                            <p className="no_margg"> Buy now</p>
                          ) : (
                            <p className="no_margg"> Save now</p>
                          )}
                        </button>

                        {asset.payment_type == "OUTRIGHT" ? (
                          <div></div>
                        ) : (
                          <button className="items_remaining_btn2">
                            {" "}
                            {asset.percentage}% locked
                          </button>
                        )}
                      </div>
                      <div className="storeTiles_storeTileBottomContainer__2sWHh">
                        <div className="asset_name">{asset.product_name}</div>
                        <div className="asset_prices_div">
                          <div className="asset_title">
                            ₦{numberWithCommas(asset.amount)}{" "}
                            <span className="slashed_price">
                              ₦{numberWithCommas(asset.amount * 2)}
                            </span>
                          </div>
                          <div className="amount_per_day_div">
                            ₦
                            {numberWithCommas(
                              (asset.amount / asset.product_duration).toFixed()
                            )}
                            <span className="per_day_symbol"> / perday</span>
                          </div>
                        </div>
                      </div>
                      {/* </a> */}
                    </div>
                  </li>
                </a>
                )}} )}
            </Carousel>
            {/* Carousel end==============================
==============================================
============================= */}
          </div>
        </div>
      </section>






  
      {/*  Projects Section start*/}
      <section className="projectsSection" id="projects">
        <div className="container">
          <div
            className="projectsArea item_card_area"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="projectsTitleContentsa bg_a">
              <div className="projectTitle">
                <h1 className="gttitle TITE">
                  Industrial Equipments <span className="ouright_sell">/ Esusu.</span>
                </h1>
              </div>
              <a  href={`/dashboard/products/categories/Industral Equipments`} className="see_all_cat">
                See all <ArrowForwardIosIcon className="forward_icons" />
              </a>
            </div>

            {/* Carousel start==============================
==============================================
============================= */}

            <Carousel
              responsive={responsive6}
              className="partnerCards LEFTARROW"
              showDots={false}
              //   infinite={false}
              autoPlay={true}
              autoPlaySpeed={6000}
              transitionDelay={"2s"}
              infinite={true}
              draggable={true}
              // transitionDuration={500}
              swipeable={true}
              style={{ height: "25em" }}
            >
             {item.map((asset) => {if (industrialEquipments === asset.product_category_desc){ return(
                <a href={`/products/details/${asset.id}`}>
                  <li className="carous_list no_marg">
                    <div
                      className="storeTiles_storeTileContainer__HoGEa"
                      style={{
                        backgroundImage: `url(${
                          api_url2 + "/" + asset.product_image
                        })`,
                        //           height: "200px",
                        //           width: "100%",
                        //           backgroundRepeat: "no-repeat",
                        //           backgroundSize: "cover",
                        //           borderRadius: "8px",
                        //           borderBottomLeftRadius: "0px",
                        //           borderBottomRightRadius: "0px",
                        //   backgroundPositionY: "center",
                      }}
                    >
                      <div className="storeTiles_storeTileOffersContainer__3v8lC">
                        <button className="items_remaining_btn">
                          {asset.payment_type == "OUTRIGHT" ? (
                            <p className="no_margg"> Buy now</p>
                          ) : (
                            <p className="no_margg"> Save now</p>
                          )}
                        </button>

                        {asset.payment_type == "OUTRIGHT" ? (
                          <div></div>
                        ) : (
                          <button className="items_remaining_btn2">
                            {" "}
                            {asset.percentage}% locked
                          </button>
                        )}
                      </div>
                      <div className="storeTiles_storeTileBottomContainer__2sWHh">
                        <div className="asset_name">{asset.product_name}</div>
                        <div className="asset_prices_div">
                          <div className="asset_title">
                            ₦{numberWithCommas(asset.amount)}{" "}
                            <span className="slashed_price">
                              ₦{numberWithCommas(asset.amount * 2)}
                            </span>
                          </div>
                          <div className="amount_per_day_div">
                            ₦
                            {numberWithCommas(
                              (asset.amount / asset.product_duration).toFixed()
                            )}
                            <span className="per_day_symbol"> / perday</span>
                          </div>
                        </div>
                      </div>
                      {/* </a> */}
                    </div>
                  </li>
                </a>
                 )}} )}
            </Carousel>
            {/* Carousel end==============================
==============================================
============================= */}
          </div>
        </div>
      </section>



      {/*  Projects Section end*/}
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
          <div className="users_compliment_area">
            <div className="users_compliment_box">
              <div class="testimonials">
                <div height="857" class="sc-bdfBQB element" id="element">
                  <div class="box">
                    <small style={{ color: "#239e54" }}>
                      Friday, 27th of August 2021 by 20:39 PM
                    </small>
                    <div class="mt-20 clear-right">
                      <div>
                        <h6>Helen S</h6>
                        <p className="compliment_para">
                          Wow! Where has Piggyvest been all my adult life?.... I
                          wish I knew about Piggyvest in my early days, I knew
                          about it in a group chat on Whatsapp, at first I "said
                          to myself this can't be real", but once I sign in, I
                          got impressed and challenged myself. I am able to save
                          money monthly. I love it!" "Piggyvest helped me to
                          save better especially for rainy days. It's hard
                          saving on your own and very tempting but with
                          Piggyvest, I get to save with discipline." I love to
                          share this with my friends.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="box">
                    <small style={{ color: "#239e54" }}>
                      Wednesday, 25th of August 2021 by 21:33 PM
                    </small>
                    <div class=" mt-20 clear-right">
                      <div>
                        <h6>Kenechukwu E</h6>
                        <p className="compliment_para">
                          I used to have a problem of spending money on the go.
                          When my brother told me about Piggyvest I was
                          reluctant. But I am happy he persuaded me. Piggyvest
                          has helped me to instill discipline financially.
                          Piggyvest is a sure way to prepare for the future.
                          Trust piggyvest they got your back👍
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="box">
                    <small style={{ color: "#239e54" }}>
                      Tuesday, 24th of August 2021 by 18:09 PM
                    </small>
                    <div class=" mt-20 clear-right">
                      <div>
                        <h6>Cynthia C</h6>
                        <p className="compliment_para">
                          PiggyVest has helped my life truly in many ways. I was
                          kinda restless, helpless, but PiggyVest gave me the
                          courage to stand. I couldn't save nor make a profit. I
                          found PiggyVest it changed my life. It gave me a
                          turnaround. I made a huge amount from it, which have
                          helped me Soo much in my everyday life especially my
                          Education, finance, etc This is not the opportunity
                          you should miss, have a plan B, think better for the
                          future.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="users_compliment_number">
              <div className="compliment_number_title">
                Over 2billion naira in loans.
              </div>
              <div className="compliment_number_para">
                Since launching in 2020, over 3,000,000 people have used
                PiggyVest to manage their money better, avoid over-spending and
                be more accountable.
              </div>
              <a href="/signup">
                <button className="compliment_btn">
                  Create a free account
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      <section className="featured_section">
        <div className="container">
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
    </div>
  );
};

export default Savings;
