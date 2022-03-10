import React, { useState, useEffect } from "react";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import CategoryIcon from "@mui/icons-material/Category";
import WidgetsIcon from "@mui/icons-material/Widgets";
import ListIcon from "@mui/icons-material/List";
import Slider from "react-slick";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Carousel from "react-multi-carousel";
import DvrIcon from "@mui/icons-material/Dvr";
import "../DashboardStyles/dashboard_side.css";
import "../DashboardStyles/dashboard_products.css";
import { connect } from "react-redux";
// import {Link} from 'react-router-dom';
import "../DashboardStyles/dashboard_side.css";
import "../DashboardStyles/dashboard_header.css";
// import { Link, animateScroll as scroll } from "react-scroll";

import axios from "axios";
import setAuthToken from "../../../../../utils/setAuthToken";
import {
  PRODUCT_LOADED,
  API_URL2 as api_url2,
} from "../../../../../actions/types";

import { numberWithCommas } from "../../../../../static";
import { NoDataFoundComponent } from "../NodataFound/NoDataFoundComponent";

const responsive7 = {
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
const responsive8 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1620 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1620, min: 1420 },
    items: 5,
  },
  tabletMedium: {
    breakpoint: { max: 1420, min: 1024 },
    items: 4,
  },
  tabletSmall: {
    breakpoint: { max: 1024, min: 810 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 810, min: 590 },
    items: 3,
  },
  mobileSmall: {
    breakpoint: { max: 590, min: 400 },
    items: 2,
  },
  mobileSmaller: {
    breakpoint: { max: 400, min: 0 },
    items: 2,
  },
};

function DashboardInvestPage({ auth }) {
  // const [item,setItem]=useState({})

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //  const names =["phones $ Tablet","grocery","Home & Kitchen","electronics","computer & electronics"]

  const [item, setItem] = useState([]);

  const [furniture, setFurniture] = useState("Furnitures");
  const [ComputerAccessories, setComputerAccessories] = useState("Computer & Accessories");
  const [ComputerAccessoriesData, setComputerAccessoriesData] = useState([]);
  const [homeAppliances, setHomeAppliances] = useState("Home Appliances");
  const [homeAppliancesData, setHomeAppliancesData] = useState([]);
  const [electronics, setElectronics] = useState("Electronics");
  const [electronicsData, setElectronicsData] = useState([]);
  const [phonesTablets, setPhoneTablets] = useState("Phones & Tablet");
  const [phonesTabletsData, setPhoneTabletsData] = useState([]);
  const [musicalEquipment, setMusicalEquipment] = useState("Musical Equipments");
  const [musicalEquipmentData, setMusicalEquipmentData] = useState([]);
  const [industrialEquipments, setIndustrialEquipments] = useState("Industral Equipments");
  const [industrialEquipmentsData, setIndustrialEquipmentsData] = useState([]);

  const [wrap, setWrap] = useState({ code: "" });
  const { code } = wrap;

  // const [cItem,setCItem] =useState([])

  const [img, setImg] = useState();
  const [category, setCategory] = useState([]);


  useEffect(() => {
    axios
      .get(api_url2 + "/v1/product/retrieve/search/new/products", null, config)
      .then((data) => {
        // console.log(data.data.data, "powerful");

        setItem(data.data.data);
        setWrap({
          code: data.data.data.product_category_code,
        });
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }, []);

  useEffect(() => {
    axios
      .get(api_url2 + "/v1/product/retrieve/products/byId/"+phonesTablets, null, config)
      .then((data) => {
        // console.log(data.data.data, "powerful");

        setPhoneTabletsData(data.data.data);
       
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
    axios
      .get(api_url2 + "/v1/product/retrieve/products/byId/"+homeAppliances, null, config)
      .then((data) => {
        // console.log(data.data.data, "powerful");

        setHomeAppliancesData(data.data.data);
        
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
    axios
      .get(api_url2 + "/v1/product/retrieve/products/byId/"+electronics, null, config)
      .then((data) => {
        // console.log(data.data.data, "powerful");

        setElectronicsData(data.data.data);
        
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
    axios
      .get(api_url2 + "/v1/product/retrieve/products/byId/"+ComputerAccessories, null, config)
      .then((data) => {
        // console.log(data.data.data, "powerful");

        setComputerAccessoriesData(data.data.data);
        
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
    axios
      .get(api_url2 + "/v1/product/retrieve/products/byId/"+musicalEquipment, null, config)
      .then((data) => {
        // console.log(data.data.data, "powerful");

        musicalEquipmentData(data.data.data);
        
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
    axios
      .get(api_url2 + "/v1/product/retrieve/products/byId/"+industrialEquipments, null, config)
      .then((data) => {
        // console.log(data.data.data, "powerful");

        industrialEquipmentsData(data.data.data);
        
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }, []);

 
  // const industrialsEquipment,MusicalEquipment,phoneTablet,Electronics,Furniture,ComputerAccessories,HomeApplinces;

  useEffect(() => {
    phoneTab();
  }, []);

  function phoneTab() {
    axios
      .get(api_url2 + "/v1/product/retrieve/category", null, config)
      .then((data) => {
        //console.log(data.data.data, "king");
        setCategory(data.data.data);
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }

  const [prodBody, setProdBody] = useState("not_product_body");
  const [dropBtn, setDropBtn] = useState("dropHead");
  const [height20, setHeight20] = useState("0px");
  const [rap, setRap] = useState("#electronics");

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplaySpeed: 10000,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const dropDown = () => {
    setProdBody("product_body");
    setDropBtn("not_dropHead");
  };
  const closeDropDown = () => {
    setProdBody("not_product_body");
    setDropBtn("dropHead");
  };

  //  const moveto =()=>{

  //    scroll.scrollToTop(100);
  //  }

  const height = {
    position: "absolute",
    top: "1000px",
  };

  const wash = () => {
    setHeight20(height);
    setRap("#HomeKitchen");
  };

  const text = "No item Locked yet";

  // const numberWithCommas = (x) => {
  //   return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  // };

  return (
    <div className="other2">
      <div className="cat_div" id="cat_div">
        <div className="cat_body_toggle">
          <a href="computerAcc">
            <div className="cat_body_toggle1">Computers and Accessories</div>
          </a>
          <a href="#phonesTab">
            <div className="cat_body_toggle1">Phones and Tablets</div>
          </a>
          <a href="#Electronics">
            <div className="cat_body_toggle1">Electronics</div>
          </a>
          <div className="cat_body_toggle1">Konga Fashion</div>
          <a href="#HomeKitchen">
            <div className="cat_body_toggle1">Home and Kitchen</div>
          </a>
          <a href="#MusicEquip">
            <div className="cat_body_toggle1">Musical Equipment</div>
          </a>
        </div>
      </div>

      <section className="no-bg">
        <div className="container">
          <div className="products_hero_area">
            <div className="products_area1">
              <Slider {...settings}>
                <img
                  src="/img/fake_assets/fake_assets_img.jpeg"
                  alt=""
                  className="products_hero_img"
                />
                <img
                  src="/img/fake_assets/fake_assets_img2.jpeg"
                  alt=""
                  className="products_hero_img"
                />
                <img
                  src="/img/fake_assets/fake_assets_img3.jpeg"
                  alt=""
                  className="products_hero_img"
                />
                <img
                  src="/img/fake_assets/fake_assets_img4.jpeg"
                  alt=""
                  className="products_hero_img"
                />
              </Slider>
            </div>
            <div className="products_area2">
              <div className="products_area2_cont1">
                <img
                  src="/img/fake_assets/best_buys.gif"
                  alt=""
                  className="products_hero_img"
                />
              </div>
              <div className="products_area2_cont1">
                <img
                  src="/img/fake_assets/best_buys.gif"
                  alt=""
                  className="products_hero_img"
                />
              </div>
              <div className="products_area2_cont1">
                <img
                  src="/img/fake_assets/best_buys.gif"
                  alt=""
                  className="products_hero_img"
                />
              </div>
              <div className="products_area2_cont1">
                <img
                  src="/img/fake_assets/best_buys.gif"
                  alt=""
                  className="products_hero_img"
                />
              </div>
            </div>
          </div>

          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}

          <div className="brands_area">
            <div className="brand_cont1">
              <img
                src="/img/brand_images/brand_img1.svg"
                alt=""
                className="brand_imgs"
              />
            </div>
            <div className="brand_cont1">
              <img
                src="/img/brand_images/brand_img2.svg"
                alt=""
                className="brand_imgs"
              />
            </div>
            <div className="brand_cont1">
              <img
                src="/img/brand_images/brand_img3.svg"
                alt=""
                className="brand_imgs"
              />
            </div>
            <div className="brand_cont1">
              <img
                src="/img/brand_images/brand_img4.svg"
                alt=""
                className="brand_imgs"
              />
            </div>
            <div className="brand_cont1">
              <img
                src="/img/brand_images/brand_img5.svg"
                alt=""
                className="brand_imgs"
              />
            </div>
            <div className="brand_cont1">
              <img
                src="/img/brand_images/brand_img6.svg"
                alt=""
                className="brand_imgs"
              />
            </div>

            <div className="brand_cont1">
              <img
                src="/img/brand_images/brand_img7.svg"
                alt=""
                className="brand_imgs"
              />
            </div>
          </div>

          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}

          <div className="products_display_body">
            <div className="products_display_body_heading">
              Outright Buy{" "}
              <a
                href={`/dashboard/products/categories/${code}`}
                className="se_all_btnn"
              >
                SEE ALL
                <ChevronRightIcon />
              </a>
            </div>
            <div className="products_display_body_conts">
              {item.slice(0, 12).map((asset, index) => {
                if (asset.payment_type == 'OUTRIGHT') 
                  return (
                    <a
                      href={`/dashboard/products/details/${
                        asset.id
                      }/${asset.product_name.replace(/\s+/g, "-")}`}
                      // href={`/dashboard/products/details/${asset.id}/${asset.product_name.replace( '','-')}`}
                      key={index.toString()}
                    >
                      <li className="carous_list no_marg">
                        <div
                          className="storeTiles_storeTileContainer__HoGEa"
                          style={{
                            backgroundImage: `url(${
                              api_url2 + "/" + asset.product_image
                            })`,
                       
                          }}
                        >
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
                  )
                
              })}
            </div>
          </div>

          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}

          <div className="prod_banner_advert_div">
            <img
              src="/img/fake_assets/prod_banner_ad.jpeg"
              alt=""
              className="prod_banner_ad"
            />
          </div>
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}

          <div className="products_display_body no_pad" id="phonesTab">
            <div className="products_display_body_heading heading_color_2">
              {phonesTablets}
              <a
                href={`/dashboard/products/categories/Phones & Tablet`}
                className="se_all_btnn se_all_color2"
              >
                SEE ALL
                <ChevronRightIcon />
              </a>
            </div>
            <div className="products_display_body_conts_banner">
              <div className="products_display_body_conts_banner_cont">
                <img
                  src="/img/fake_assets/unlimited.gif"
                  alt=""
                  className="asset_cat_image_display"
                />
              </div>
              <div className="products_display_body_conts2">
                {
                  phonesTabletsData.length <= 0 ? (
                      <NoDataFoundComponent text={text} />
                  ) : (
                    phonesTabletsData.map((asset) => {
                      return (
                        <a
                          href={`/dashboard/products/details/${
                            asset.id
                          }/${asset.product_name.replace(/\s+/g, "-")}`}
                          // key={index.toString()}
                        >
                          <li className="carous_list no_marg">
                            <div
                              className="storeTiles_storeTileContainer__HoGEa"
                              style={{
                                backgroundImage: `url(${
                                  api_url2 + "/" + asset.product_image
                                })`,
                              
                              }}
                            >
                              <div className="storeTiles_storeTileBottomContainer__2sWHh">
                                <div className="asset_name">
                                  {asset.product_name}
                                </div>
                                <div class="asset_prices_div">
                                  <div className="asset_title">
                                    ₦{numberWithCommas(asset.roundedAmount)}{" "}
                                    <span className="slashed_price">
                                      ₦{numberWithCommas(asset.roundedAmount * 2)}
                                    </span>
                                  </div>
                                  <div className="amount_per_day_div">
                                    ₦
                                    {numberWithCommas(
                                      (
                                        asset.amount / asset.product_duration
                                      ).toFixed()
                                    )}
                                    <span className="per_day_symbol">
                                      {" "}
                                      / perday
                                    </span>
                                  </div>
                                </div>
                              </div>

                              {/* </a> */}
                            </div>
                          </li>
                        </a>
                      );
                    
                  })
                  )
                }
              </div>
            </div>
          </div>

          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}

          <div className="products_display_body" id="HomeKitchen">
            <div className="products_display_body_heading">
              {homeAppliances}
              <a
                href={`/dashboard/products/categories/Home Appliances`}
                className="se_all_btnn"
              >
                SEE ALL
                <ChevronRightIcon />
              </a>
            </div>
            <div className="products_display_body_conts">
              {
                homeAppliancesData.length <= 0 ? (
                  <NoDataFoundComponent text={text} />
                ) : (
                  homeAppliancesData.map((asset, index) => {
                    return (
                      <a
                        href={`/dashboard/products/details/${
                          asset.id
                        }/${asset.product_name.replace(/\s+/g, "-")}`}
                        key={index.toString()}
                      >
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
                            <div className="storeTiles_storeTileBottomContainer__2sWHh">
                              <div className="asset_name">
                                {asset.product_name}
                              </div>
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
                                    (
                                      asset.amount / asset.product_duration
                                    ).toFixed()
                                  )}
                                  <span className="per_day_symbol">
                                    {" "}
                                    / perday
                                  </span>
                                </div>
                              </div>
                            </div>
                            {/* </a> */}
                          </div>
                        </li>
                      </a>
                    );
                })
                )
                  
              }
            </div>
          </div>

          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}

          <div className="prod_banner_advert_div">
            <img
              src="/img/fake_assets/prod_banner_ad.jpeg"
              alt=""
              className="prod_banner_ad"
            />
          </div>
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}

          <div className="products_display_body no_pad" id="Electronics">
            <div className="products_display_body_heading heading_color_2">
              {electronics}
              <a
                href={`/dashboard/products/categories/Electronics`}
                className="se_all_btnn se_all_color2"
              >
                SEE ALL
                <ChevronRightIcon />
              </a>
            </div>
            <div className="products_display_body_conts_banner">
              <div className="products_display_body_conts_banner_cont">
                <img
                  src="/img/fake_assets/unlimited.gif"
                  alt=""
                  className="asset_cat_image_display"
                />
              </div>
              <div className="products_display_body_conts2">
                {
                  electronicsData.length <= 0 ? (
                    <NoDataFoundComponent text={text} />
                  ) : (
                      electronicsData.map((asset, index4) => {
                        return (
                          <a
                            href={`/dashboard/products/details/${
                              asset.id
                            }/${asset.product_name.replace(/\s+/g, "-")}`}
                            key={index4.toString()}
                          >
                            <li className="carous_list no_marg">
                              <div
                                className="storeTiles_storeTileContainer__HoGEa"
                                style={{
                                  backgroundImage: `url(${
                                    api_url2 + "/" + asset.product_image
                                  })`,
                             
                                }}
                              >
                                <div className="storeTiles_storeTileBottomContainer__2sWHh">
                                  <div className="asset_name">
                                    {asset.product_name}
                                  </div>
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
                                        (
                                          asset.amount / asset.product_duration
                                        ).toFixed()
                                      )}
                                      <span className="per_day_symbol">
                                        {" "}
                                        / perday
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                {/* </a> */}
                              </div>
                            </li>
                          </a>
                        );
                    })
                  )
 
                }
              </div>
            </div>
          </div>
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}

          <div className="products_display_body" id="computerAcc">
            <div className="products_display_body_heading">
              {ComputerAccessories}
              <a
                href={`/dashboard/products/categories/Computer & Accessories`}
                className="se_all_btnn"
              >
                SEE ALL
                <ChevronRightIcon />
              </a>
            </div>
            <div className="products_display_body_conts">
              {
                ComputerAccessoriesData.length <= 0 ? (
                  <NoDataFoundComponent text={text} />
                ) : (
                  ComputerAccessoriesData.slice(0, 10).map((asset, index5) => {
              
                    return (
                      <a
                        href={`/dashboard/products/details/${
                          asset.id
                        }/${asset.product_name.replace(/\s+/g, "-")}`}
                        key={index5.toString()}
                      >
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
                            <div className="storeTiles_storeTileBottomContainer__2sWHh">
                              <div className="asset_name">
                                {asset.product_name}
                              </div>
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
                                    (
                                      asset.amount / asset.product_duration
                                    ).toFixed()
                                  )}
                                  <span className="per_day_symbol">
                                    {" "}
                                    / perday
                                  </span>
                                </div>
                              </div>
                            </div>
                            {/* </a> */}
                          </div>
                        </li>
                      </a>
                    );
                  
                })
                )
                
              }
            </div>
          </div>

          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}

          <div className="prod_banner_advert_div">
            <img
              src="/img/fake_assets/prod_banner_ad.jpeg"
              alt=""
              className="prod_banner_ad"
            />
          </div>
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}

          <div className="products_display_body no_pad" id="MusicEquip">
            <div className="products_display_body_heading heading_color_2">
              {musicalEquipment}
              <a
                href={`/dashboard/products/categories/Musical Equipments`}
                className="se_all_btnn se_all_color2"
              >
                SEE ALL
                <ChevronRightIcon />
              </a>
            </div>
            <div className="products_display_body_conts_banner">
              <div className="products_display_body_conts_banner_cont">
                <img
                  src="/img/fake_assets/unlimited.gif"
                  alt=""
                  className="asset_cat_image_display"
                />
              </div>
              <div className="products_display_body_conts2">
                {
                  musicalEquipmentData.length <= 0 ? (
                    <NoDataFoundComponent text={text} />
                  ) : (
                      musicalEquipmentData.slice(0, 12).map((asset, index7) => {
                        return (
                          <a
                            href={`/dashboard/products/details/${
                              asset.id
                            }/${asset.product_name.replace(/\s+/g, "-")}`}
                            key={index7.toString()}
                          >
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
                                <div className="storeTiles_storeTileBottomContainer__2sWHh">
                                  <div className="asset_name">
                                    {asset.product_name}
                                  </div>
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
                                        (
                                          asset.amount / asset.product_duration
                                        ).toFixed()
                                      )}
                                      <span className="per_day_symbol">
                                        {" "}
                                        / perday
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                {/* </a> */}
                              </div>
                            </li>
                          </a>
                        );
                    })
                  )
                  
                }
              </div>
            </div>
          </div>

          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}

          <div className="products_display_body" id="computersAccessories">
            <div className="products_display_body_heading">
              {industrialEquipments}
              <a
                href={`/dashboard/products/categories/Industral Equipments`}
                className="se_all_btnn"
              >
                SEE ALL
                <ChevronRightIcon />
              </a>
            </div>
            <div className="products_display_body_conts">
              {
                industrialEquipmentsData.length <= 0 ? (
                  <NoDataFoundComponent text={text} />
                ) : (
                  industrialEquipmentsData.slice(0, 12).map((asset, index8) => {
                    return (
                      <a
                        href={`/dashboard/products/details/${
                          asset.id
                        }/${asset.product_name.replace(/\s+/g, "-")}`}
                        key={index8.toString()}
                      >
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
                            <div className="storeTiles_storeTileBottomContainer__2sWHh">
                              <div className="asset_name">
                                {asset.product_name}
                              </div>
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
                                    (
                                      asset.amount / asset.product_duration
                                    ).toFixed()
                                  )}
                                  <span className="per_day_symbol">
                                    {" "}
                                    / perday
                                  </span>
                                </div>
                              </div>
                            </div>
                            {/* </a> */}
                          </div>
                        </li>
                      </a>
                    );
                })
                )
                
              }
            </div>
          </div>

          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}

          {/* <div className="prod_banner_advert_div">
            <img
              src="/img/fake_assets/prod_banner_ad.jpeg"
              alt=""
              className="prod_banner_ad"
            />
          </div> */}
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}

     
        </div>

        {/* 
        <div>
          {names.filter(name => name.includes('p')).map(filteredName => (
           <li>
            {filteredName}
          </li>
          ))}
         </div> */}

        <div className="fixed_pop">
          <img
            src="/img/fake_assets/pop_pic.gif"
            alt=""
            className="fixed_pop_img"
          />
        </div>
      </section>
    </div>
  );
}

const mapStateToProps1 = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps1)(DashboardInvestPage);
