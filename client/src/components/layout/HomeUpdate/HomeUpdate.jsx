import React, { useState, useEffect } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import axios from "axios";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import GroupsIcon from "@mui/icons-material/Groups";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Slider from "react-slick";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CloseIcon from "@mui/icons-material/Close";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Carousel from "react-multi-carousel";
import "../../../css/market_home.css";
import "../../../css/about.css";
import "../../../css/aboutMobile.css";

import { API_URL2 as api_url2 } from "../../../actions/types";
import { numberWithCommas } from "../../../static";
import { NoDataFoundComponent } from "../Home2/Dashboard/NodataFound/NoDataFoundComponent";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import TravelExploreOutlinedIcon from "@mui/icons-material/TravelExploreOutlined";
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
const responsive1 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1320 },
    items: 4,
  },
  desktop2: {
    breakpoint: { max: 1320, min: 990 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 990, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

const responsive8 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1680 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1680, min: 1420 },
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
const responsive3 = {
  desktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

export const ComputerBody = () => {
  return (
    <div className="trending_category_switch_body">
      <div className="trending_switch_body_area1">
        <div className="trending_switch_body_area1_cont1">
          <div className="trending_switch_body_area1_cont1_img_container">
            <img
              src="https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
              className="trending_switch_body_area1_cont1_img"
            />
            <div className="trending_img_pop_out">
              <a href={"/products/categories/Computer & Accessories"}>
                <button className="shopNow_pop_out_btn">
                  <TravelExploreOutlinedIcon className="shopping_pop_out_cart_icon" />
                  Explore
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="trending_switch_body_area1_cont2">
          <div className="trending_switch_body_area1_cont2_img_container">
            <img
              src="https://cdn.thewirecutter.com/wp-content/media/2020/09/businesslaptops-2048px-9820.jpg"
              alt=""
              className="trending_switch_body_area1_cont2_img"
            />
            <div className="trending_img_pop_out">
              <a href={"/products/categories/Computer & Accessories"}>
                <button className="shopNow_pop_out_btn">
                  <TravelExploreOutlinedIcon className="shopping_pop_out_cart_icon" />
                  Explore
                </button>
              </a>
            </div>
          </div>

          <div className="trending_switch_body_area1_cont2_img_container">
            <img
              src="https://images.news18.com/ibnlive/uploads/2021/08/1628224744_hp-envy-14-laptop-1600x900.jpg"
              alt=""
              className="trending_switch_body_area1_cont2_img"
            />
            <div className="trending_img_pop_out">
              <a href={"/products/categories/Computer & Accessories"}>
                <button className="shopNow_pop_out_btn">
                  <TravelExploreOutlinedIcon className="shopping_pop_out_cart_icon" />
                  Explore
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="trending_switch_body_area2">
        <div className="trending_switch_body_area1_cont1">
          <div className="trending_switch_body_area1_cont1_img_container">
            <img
              src="https://www.mytrendyphone.eu/images/Forever-Music-Soul-BHS-300-Bluetooth-Headphones-with-Microphone-Black-5900495738110-17072019-01-p.jpg"
              alt=""
              className="trending_switch_body_area1_cont1_img"
            />
            <div className="trending_img_pop_out">
              <a href={"/products/categories/Computer & Accessories"}>
                <button className="shopNow_pop_out_btn">
                  <TravelExploreOutlinedIcon className="shopping_pop_out_cart_icon" />
                  Explore
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="trending_switch_body_area1_cont2">
          <div className="trending_switch_body_area1_cont2_img_container">
            <img
              src="https://cdn.mos.cms.futurecdn.net/A4GDK27VMnz6LtFDy9yzk.jpg"
              alt=""
              className="trending_switch_body_area1_cont2_img"
            />
            <div className="trending_img_pop_out">
              <a href={"/products/categories/Computer & Accessories"}>
                <button className="shopNow_pop_out_btn">
                  <TravelExploreOutlinedIcon className="shopping_pop_out_cart_icon" />
                  Explore
                </button>
              </a>
            </div>
          </div>
          <div className="trending_switch_body_area1_cont2_img_container">
            <img
              src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1594317518-hp-officejet-1594317461.jpg"
              alt=""
              className="trending_switch_body_area1_cont2_img"
            />
            <div className="trending_img_pop_out">
              <a href={"/products/categories/Computer & Accessories"}>
                <button className="shopNow_pop_out_btn">
                  <TravelExploreOutlinedIcon className="shopping_pop_out_cart_icon" />
                  Explore
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// ================
// ================
// ================
export const PhonesBody = () => {
  return (
    <div className="trending_category_switch_body">
      <div className="trending_switch_body_area1">
        <div className="trending_switch_body_area1_cont1">
          <div className="trending_switch_body_area1_cont1_img_container">
            <img
              src="https://www.cnet.com/a/img/resize/eabd239642878785575800cb4b1a52ee4ccc1bc9/2020/08/18/b7168aea-9f7e-47bb-9f31-4cb8ad92fbc7/lg-note-20-ultra-5g-iphone-11-se-google-pixel-4a-lg-velvet-6133.jpg?auto=webp&fit=crop&height=630&width=1200"
              alt=""
              className="trending_switch_body_area1_cont1_img"
            />
            <div className="trending_img_pop_out">
              <a href={`/products/categories/Phones & Tablet`}>
                <button className="shopNow_pop_out_btn">
                  <TravelExploreOutlinedIcon className="shopping_pop_out_cart_icon" />
                  Explore
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="trending_switch_body_area1_cont2">
          <div className="trending_switch_body_area1_cont2_img_container">
            <img
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1000,h_600/https://www.globalbrandsmagazine.com/wp-content/uploads/2020/08/Top-10-Mobile-Brands-in-World-1-1.jpg"
              alt=""
              className="trending_switch_body_area1_cont2_img"
            />
            <div className="trending_img_pop_out">
              <a href={`/products/categories/Phones & Tablet`}>
                <button className="shopNow_pop_out_btn">
                  <TravelExploreOutlinedIcon className="shopping_pop_out_cart_icon" />
                  Explore
                </button>
              </a>
            </div>
          </div>

          <div className="trending_switch_body_area1_cont2_img_container">
            <img
              src="https://cdn.pocket-lint.com/r/s/970x/assets/images/153206-tablets-review-samsung-galaxy-tab-s7-plus-review-image9-y9i82fdtyl.jpg"
              alt=""
              className="trending_switch_body_area1_cont2_img"
            />
            <div className="trending_img_pop_out">
              <a href={`/products/categories/Phones & Tablet`}>
                <button className="shopNow_pop_out_btn">
                  <TravelExploreOutlinedIcon className="shopping_pop_out_cart_icon" />
                  Explore
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="trending_switch_body_area2">
        <div className="trending_switch_body_area1_cont1">
          <div className="trending_switch_body_area1_cont1_img_container">
            <img
              src="https://photos5.appleinsider.com/gallery/44523-86813-iPad-on-Stand-Landcsape-xl.jpg"
              alt=""
              className="trending_switch_body_area1_cont1_img"
            />
            <div className="trending_img_pop_out">
              <a href={`/products/categories/Phones & Tablet`}>
                <button className="shopNow_pop_out_btn">
                  <TravelExploreOutlinedIcon className="shopping_pop_out_cart_icon" />
                  Explore
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="trending_switch_body_area1_cont2">
          <div className="trending_switch_body_area1_cont2_img_container">
            <img
              src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Apple_iPad_Air_5_knarzen_verarbeitung.jpg"
              alt=""
              className="trending_switch_body_area1_cont2_img"
            />
            <div className="trending_img_pop_out">
              <a href={`/products/categories/Phones & Tablet`}>
                <button className="shopNow_pop_out_btn">
                  <TravelExploreOutlinedIcon className="shopping_pop_out_cart_icon" />
                  Explore
                </button>
              </a>
            </div>
          </div>
          <div className="trending_switch_body_area1_cont2_img_container">
            <img
              src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/135596-tablets-news-buyer-s-guide-which-apple-ipad-is-best-for-you-ipad-mini-vs-ipad-vs-ipad-air-vs-ipad-pro-image23-esgyofxh50.jpg"
              alt=""
              className="trending_switch_body_area1_cont2_img"
            />
            <div className="trending_img_pop_out">
              <a href={`/products/categories/Phones & Tablet`}>
                <button className="shopNow_pop_out_btn">
                  <TravelExploreOutlinedIcon className="shopping_pop_out_cart_icon" />
                  Explore
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// ================
// ================
// ================
export const ElectronicsBody = () => {
  return (
    <div className="trending_category_switch_body">
      <div className="trending_switch_body_area1">
        <div className="trending_switch_body_area1_cont1">
          <div className="trending_switch_body_area1_cont1_img_container">
            <img
              src="https://www.howtogeek.com/wp-content/uploads/2021/12/home-theater-system-header.jpg?height=200p&trim=2,2,2,2"
              alt=""
              className="trending_switch_body_area1_cont1_img"
            />
            <div className="trending_img_pop_out">
              <a href={`/products/categories/Electronics`}>
                <button className="shopNow_pop_out_btn">
                  <TravelExploreOutlinedIcon className="shopping_pop_out_cart_icon" />
                  Explore
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="trending_switch_body_area1_cont2">
          <div className="trending_switch_body_area1_cont2_img_container">
            <img
              src="https://styla-prod-us.imgix.net/271d9cdd-ab6b-4a7f-9dc2-32c5de213167/1594833677616_6b38a1bc-0d40-4abf-b86b-624cf27e0f7f"
              alt=""
              className="trending_switch_body_area1_cont2_img"
            />
            <div className="trending_img_pop_out">
              <a href={`/products/categories/Electronics`}>
                <button className="shopNow_pop_out_btn">
                  <TravelExploreOutlinedIcon className="shopping_pop_out_cart_icon" />
                  Explore
                </button>
              </a>
            </div>
          </div>

          <div className="trending_switch_body_area1_cont2_img_container">
            <img
              src="https://apartmani-mrvic.com/wp-content/uploads/2010/09/room-air-conditioner.jpg"
              alt=""
              className="trending_switch_body_area1_cont2_img"
            />
            <div className="trending_img_pop_out">
              <a href={`/products/categories/Electronics`}>
                <button className="shopNow_pop_out_btn">
                  <TravelExploreOutlinedIcon className="shopping_pop_out_cart_icon" />
                  Explore
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="trending_switch_body_area2">
        <div className="trending_switch_body_area1_cont1">
          <div className="trending_switch_body_area1_cont1_img_container">
            <img
              src="https://cdn.vox-cdn.com/thumbor/uAiIDhGfzvmvlheq_WrM35PlaaE=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19209344/thumbnail.jpeg"
              alt=""
              className="trending_switch_body_area1_cont1_img"
            />
            <div className="trending_img_pop_out">
              <a href={`/products/categories/Electronics`}>
                <button className="shopNow_pop_out_btn">
                  <TravelExploreOutlinedIcon className="shopping_pop_out_cart_icon" />
                  Explore
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="trending_switch_body_area1_cont2">
          <div className="trending_switch_body_area1_cont2_img_container">
            <img
              src="https://www.cnet.com/a/img/resize/ac702a5cc498665845eabe90722131c1786a5457/2018/04/05/65bb8acb-b662-4e9d-84ea-2e3529c685df/01-elac-debut-2-0-6-2.jpg?auto=webp&fit=crop&height=630&precrop=830,467,x0,y0&width=1200"
              alt=""
              className="trending_switch_body_area1_cont2_img"
            />
            <div className="trending_img_pop_out">
              <a href={`/products/categories/Electronics`}>
                <button className="shopNow_pop_out_btn">
                  <TravelExploreOutlinedIcon className="shopping_pop_out_cart_icon" />
                  Explore
                </button>
              </a>
            </div>
          </div>
          <div className="trending_switch_body_area1_cont2_img_container">
            <img
              src="https://images-prod.healthline.com/hlcmsresource/images/AN_images/broccoli-in-microwave-1296x728.jpg"
              alt=""
              className="trending_switch_body_area1_cont2_img"
            />
            <div className="trending_img_pop_out">
              <a href={`/products/categories/Electronics`}>
                <button className="shopNow_pop_out_btn">
                  <TravelExploreOutlinedIcon className="shopping_pop_out_cart_icon" />
                  Explore
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// ================
// ================
// ================
export const Home_kitchenBody = () => {
  return (
    <div className="trending_category_switch_body">
      <div className="trending_switch_body_area1">
        <div className="trending_switch_body_area1_cont1">
          <div className="trending_switch_body_area1_cont1_img_container">
            <img
              src="https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
              className="trending_switch_body_area1_cont1_img"
            />
            <div className="trending_img_pop_out">
              <a href={`/products/categories/Home Appliances`}>
                <button className="shopNow_pop_out_btn">
                  <TravelExploreOutlinedIcon className="shopping_pop_out_cart_icon" />
                  Explore
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="trending_switch_body_area1_cont2">
          <div className="trending_switch_body_area1_cont2_img_container">
            <img
              src="https://www.cookerspareparts.com/news/image.axd?picture=/gas%20oven.jpg"
              alt=""
              className="trending_switch_body_area1_cont2_img"
            />
            <div className="trending_img_pop_out">
              <a href={`/products/categories/Home Appliances`}>
                <button className="shopNow_pop_out_btn">
                  <TravelExploreOutlinedIcon className="shopping_pop_out_cart_icon" />
                  Explore
                </button>
              </a>
            </div>
          </div>

          <div className="trending_switch_body_area1_cont2_img_container">
            <img
              src="https://cdn.thewirecutter.com/wp-content/media/2021/01/blenders-2048px-1.jpg"
              alt=""
              className="trending_switch_body_area1_cont2_img"
            />
            <div className="trending_img_pop_out">
              <a href={`/products/categories/Home Appliances`}>
                <button className="shopNow_pop_out_btn">
                  <TravelExploreOutlinedIcon className="shopping_pop_out_cart_icon" />
                  Explore
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="trending_switch_body_area2">
        <div className="trending_switch_body_area1_cont1">
          <div className="trending_switch_body_area1_cont1_img_container">
            <img
              src="https://www.cnet.com/a/img/resize/fd163ae8ed1c74513d3ab435449200eca25f6d33/2019/08/20/1a4f30a4-4aae-49cc-a32c-c8642ca8d4c4/sportsman-dual-fuel-generator.jpg?auto=webp&fit=crop&height=675&width=1200"
              alt=""
              className="trending_switch_body_area1_cont1_img"
            />
            <div className="trending_img_pop_out">
              <a href={`/products/categories/Home Appliances`}>
                <button className="shopNow_pop_out_btn">
                  <TravelExploreOutlinedIcon className="shopping_pop_out_cart_icon" />
                  Explore
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="trending_switch_body_area1_cont2">
          <div className="trending_switch_body_area1_cont2_img_container">
            <img
              src="https://www.u-buy.com.ng/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzErRTdtQlpxekwuX0FDX1NMMTUwMF8uanBn.jpg"
              alt=""
              className="trending_switch_body_area1_cont2_img"
            />
            <div className="trending_img_pop_out">
              <a href={`/products/categories/Home Appliances`}>
                <button className="shopNow_pop_out_btn">
                  <TravelExploreOutlinedIcon className="shopping_pop_out_cart_icon" />
                  Explore
                </button>
              </a>
            </div>
          </div>
          <div className="trending_switch_body_area1_cont2_img_container">
            <img
              src="https://latalata.ng/image/cache/catalog/Product%20images/OMAHA/BAA000020S00SU105-700x700.jpg"
              alt=""
              className="trending_switch_body_area1_cont2_img"
            />
            <div className="trending_img_pop_out">
              <a href={`/products/categories/Home Appliances`}>
                <button className="shopNow_pop_out_btn">
                  <TravelExploreOutlinedIcon className="shopping_pop_out_cart_icon" />
                  Explore
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const HomeUpdate = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const [aboutVideoModal, setAboutVideoModal] = useState(false);
  const [term, setTerm] = useState([]);
  const [activeTab, setActiveTab] = useState("computers");
  const toggleAboutVideoModal = () => {
    if (aboutVideoModal === true) {
      setAboutVideoModal(false);
    } else if (aboutVideoModal === false) {
      setAboutVideoModal(true);
    }
  };

  const ToggleActiveTab = (e) => {
    let active = e.currentTarget.id;
    setActiveTab(active);
  };

  const FeaturedLogos = [
    {
      img: "/img/featured_logos/featured1.svg",
    },
    {
      img: "/img/featured_logos/featured2.svg",
    },
    {
      img: "/img/featured_logos/featured3.svg",
    },
    {
      img: "/img/featured_logos/featured4.svg",
    },
    {
      img: "/img/featured_logos/featured5.svg",
    },
    {
      img: "/img/featured_logos/featured6.svg",
    },
    {
      img: "/img/featured_logos/featured7.svg",
    },
  ];
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    arrows: true,
    speed: 1000,
    autoplaySpeed: 10000,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useEffect(() => {
    axios
      .get(api_url2 + "/v1/product/retrieve/approved/products", null, config)
      .then((data) => {
        console.log(data.data, "item detail component ");

        setTerm(data.data.data);

        // setTerm(data.data.data)
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }, []);
  const text = "No Products Found";
  return (
    <div style={{ overflow: "hidden" }}>
      <section className="h_update_hero_section">
        <div className="custom_container z_in">
          <Slider {...settings}>
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            <div className="h_update_hero_area">
              <div className="h_update_hero_area1">
                <div className="h_update_hero_area1_title">
                  New items at the price of used items with one year warranty
                </div>
                <div className="h_update_hero_area1_para">
                  Get renewed items at up to 75% discount compared to new items
                </div>{" "}
                <div className="h_update_hero_area1_para_btns">
                  <a href="/market">
                    <button className="h_update_hero_area1_para_btn1">
                      Buy Now <ArrowRightIcon />
                    </button>
                  </a>
                </div>
              </div>
              <div className="h_update_hero_area2">
                <img
                  src="/img/setofelectronics.png"
                  alt=""
                  className="hero_img_area2_img"
                />
                <img
                  src="/img/hero_img_drop_bg.svg"
                  alt=""
                  className="hero_img_drop_bg"
                />
              </div>
            </div>
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            <div className="h_update_hero_area">
              <div className="h_update_hero_area1">
                <div className="h_update_hero_area1_title">
                  We want your junks whether big or small, work or not.
                </div>
                <div className="h_update_hero_area1_para">
                  Convert your junks to cash. Help the planet.
                </div>{" "}
                <div className="h_update_hero_area1_para_btns">
                  <a href="https://ella.ng">
                    <button className="h_update_hero_area1_para_btn1">
                      Sell Now <ArrowRightIcon />
                    </button>
                  </a>
                </div>
              </div>
              <div className="h_update_hero_area2">
                <img
                  src="/img/used_items.png"
                  alt=""
                  className="hero_img_area2_img"
                />

                <img
                  src="/img/hero_img_drop_bg.svg"
                  alt=""
                  className="hero_img_drop_bg"
                />
              </div>
            </div>
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            <div className="h_update_hero_area">
              <div className="h_update_hero_area1">
                <div className="h_update_hero_area1_title">
                  Better ways to borrow & save money.
                </div>
                <div className="h_update_hero_area1_para">
                  Pledge your assets to access interest-free loans while saving
                  up to get any desired item.
                </div>{" "}
                <div className="h_update_hero_area1_para_btns">
                  <a href="/loan">
                    <button className="h_update_hero_area1_para_btn1">
                      Borrow Now <ArrowRightIcon />
                    </button>
                  </a>
                  <a href="/savings">
                    <button className="h_update_hero_area1_para_btn2">
                      <ArrowRightIcon /> Save Now
                    </button>
                  </a>
                </div>
              </div>
              <div className="h_update_hero_area2">
                <img
                  src="/img/give_loan_img.png"
                  alt=""
                  className="hero_img_area2_img"
                />

                <img
                  src="/img/hero_img_drop_bg.svg"
                  alt=""
                  className="hero_img_drop_bg"
                />
              </div>
            </div>
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
          </Slider>
        </div>
        {/* <img
          src="/img/new_hero_bg_blur.png"
          alt=""
          className="new_hero_bg_blur"
        /> */}
        <img
          src="/img/new_hero_citcle_1.svg"
          alt=""
          className="new_hero_circle1"
        />
        <img
          src="/img/new_hero_circle_2.svg"
          alt=""
          className="new_hero_circle2"
        />
        <img src="/img/hero_bg.svg" alt="" className="hero_bg" />
      </section>
      {/* =========== */}
      {/* =========== */}
      {/* =========== */}
      {/* =========== */}
      {/* =========== */}
      {/* =========== */}
      {/* =========== */}

      <section className="about_video_section">
        <div className="custom_container">
          {aboutVideoModal === true ? (
            <div className="about_video_div">
              <div className="container">
                <CloseIcon
                  className="close_About_video_modal"
                  onClick={toggleAboutVideoModal}
                />

                <div className="about_video_player">
                  <iframe
                    src="https://player.vimeo.com/video/702600317?h=836afd9a85&amp;badge=0&amp;autopause=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479"
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowfullscreen
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                    }}
                    // title="EGORAS TRILLER .MP4"
                  />
                </div>
              </div>
            </div>
          ) : null}

          <div className="aboutVideo_header_cont">
            <div className="about_video_header_title">Egoras Documentary</div>
            <div className="about_video_header_txt">
              Watch our documentary to see the extremely high demand for Egoras
              renewed items.
            </div>
          </div>
          <div className="about_video_thumbnail_cont">
            <div className="about_video_thumbnail_cont_bg">
              <img
                src="/img/logoVideoThumbnail.svg"
                alt=""
                className="thumbnail_img"
              />
              <img
                src="/img/play_thumbnail_btn.svg"
                alt=""
                className="thumbnail_btn"
                onClick={toggleAboutVideoModal}
              />
            </div>
          </div>
          {/* <script src="https://player.vimeo.com/api/player.js"></script> */}
        </div>
        <img
          src="/img/Abstract_lines.svg"
          alt=""
          className="video_abstract_lines"
        />
      </section>

      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}

      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}

      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}

      <section className="productsDisplaySection">
        <div className="custom_container">
          <div className="home_products_display_cont" id="computerAcc">
            <div className="home_products_body_head">
              <a href="/market" className="shop_heading_body">
                <div className="shop_arrow_div">
                  You know you want it!
                  <ArrowForwardIcon className="arrow_alt_forward" />
                </div>

                <span className="shop_heading_para">
                  Explore curated inventory hand-picked by Egoras team.
                </span>
              </a>
            </div>
            <div className="products_display_body_conts_pad">
              {term.length <= 0 ? (
                <NoDataFoundComponent text={text} />
              ) : (
                <>
                  <div className="show_prods_on_mobile">
                    {term.slice(0, 10).map(
                      (asset) => (
                        // if (product_category_desc === asset.product_category_desc) {
                        // return (
                        <a
                          href={`/products/details/${
                            asset.id
                          }/${asset.product_name.replace(/\s+/g, "-")}`}
                        >
                          <li className="carous_list no_marg inventory_cards">
                            <div
                              className="storeTiles_storeTileContainer__HoGEa"
                              style={{
                                backgroundImage: `url(${asset.product_image})`,
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
                              {asset.payment_type == "OUTRIGHT" ? (
                                <div className="out_right_install_tag">
                                  <button
                                    className="out_right_install_tag_btn"
                                    style={{
                                      background: "#3ebc6e",
                                      borderColor: "#3ebc6e",
                                    }}
                                  >
                                    Outright
                                  </button>
                                </div>
                              ) : (
                                <div className="out_right_install_tag">
                                  <button className="out_right_install_tag_btn">
                                    Savings
                                  </button>
                                </div>
                              )}
                              <div className="storeTiles_storeTileBottomContainer__2sWHh">
                                <div className="asset_name">
                                  {asset.product_name}
                                </div>
                                <div class="asset_prices_div">
                                  <div className="asset_title">
                                    {asset.payment_type == "OUTRIGHT" ? (
                                      <span className="init_amount">
                                        ₦{numberWithCommas(asset.amount)}{" "}
                                      </span>
                                    ) : (
                                      <span className="init_amount">
                                        ₦{numberWithCommas(asset.roundedAmount)}{" "}
                                      </span>
                                    )}
                                    {asset.payment_type == "OUTRIGHT" ? (
                                      <span className="slashed_price">
                                        ₦{numberWithCommas(asset.amount * 2)}
                                      </span>
                                    ) : (
                                      <span className="slashed_price">
                                        ₦
                                        {numberWithCommas(
                                          asset.roundedAmount * 2
                                        )}
                                      </span>
                                    )}
                                  </div>
                                  {asset.payment_type == "OUTRIGHT" ? null : (
                                    <div className="amount_per_day_div">
                                      ₦
                                      {numberWithCommas(
                                        (
                                          asset.amount / asset.product_duration
                                        ).toFixed()
                                      )}
                                      <span className="per_day_symbol">
                                        {" "}
                                        / perweek
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </div>
                              {/* </a> */}
                            </div>
                          </li>
                        </a>
                      )
                      // );
                    )}
                  </div>
                  <Carousel
                    responsive={responsive8}
                    className="partnerCards LEFTARROW market_carous"
                    showDots={false}
                    //   infinite={false}
                    autoPlay={false}
                    autoPlaySpeed={6000}
                    transitionDelay={"2s"}
                    infinite={false}
                    draggable={true}
                    // transitionDuration={500}
                    swipeable={true}
                    style={{ height: "25em" }}
                  >
                    {term.slice(0, 15).map((asset) => (
                      <a
                        href={`/products/details/${
                          asset.id
                        }/${asset.product_name.replace(/\s+/g, "-")}`}
                      >
                        <li className="carous_list">
                          <div
                            className="storeTiles_storeTileContainer__HoGEa"
                            style={{
                              backgroundImage: `url(${asset.product_image})`,
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
                            {asset.payment_type == "OUTRIGHT" ? (
                              <div className="out_right_install_tag">
                                <button
                                  className="out_right_install_tag_btn"
                                  style={{
                                    background: "#3ebc6e",
                                    borderColor: "#3ebc6e",
                                  }}
                                >
                                  Outright
                                </button>
                              </div>
                            ) : (
                              <div className="out_right_install_tag">
                                <button className="out_right_install_tag_btn">
                                  Savings
                                </button>
                              </div>
                            )}
                            <div className="storeTiles_storeTileBottomContainer__2sWHh">
                              <div className="asset_name">
                                {asset.product_name}
                              </div>
                              <div class="asset_prices_div">
                                <div className="asset_title">
                                  {asset.payment_type == "OUTRIGHT" ? (
                                    <span className="init_amount">
                                      ₦{numberWithCommas(asset.amount)}{" "}
                                    </span>
                                  ) : (
                                    <span className="init_amount">
                                      ₦{numberWithCommas(asset.roundedAmount)}{" "}
                                    </span>
                                  )}
                                  {asset.payment_type == "OUTRIGHT" ? (
                                    <span className="slashed_price">
                                      ₦{numberWithCommas(asset.amount * 2)}
                                    </span>
                                  ) : (
                                    <span className="slashed_price">
                                      ₦
                                      {numberWithCommas(
                                        asset.roundedAmount * 2
                                      )}
                                    </span>
                                  )}
                                </div>
                                {asset.payment_type == "OUTRIGHT" ? null : (
                                  <div className="amount_per_day_div">
                                    ₦
                                    {numberWithCommas(
                                      (
                                        asset.amount / asset.product_duration
                                      ).toFixed()
                                    )}
                                    <span className="per_day_symbol">
                                      {" "}
                                      / perweek
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                            {/* </a> */}
                          </div>
                        </li>
                      </a>
                    ))}
                  </Carousel>
                </>
              )}
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      <section className="quality_standards_section">
        <div className="custom_container">
          <div className="quality_standards_cont">
            <div className="quality_standards_cont1">
              <div className="quality_standards_cont1Txt">
                Welcome to Egoras, the Liquidity & Recommerce platform.
              </div>
              <button className="qualityStandard_btn">
                Our quality standards
              </button>
            </div>
            <div className="quality_standards_cont2">
              <div className="quality_standards_cont2_card1">
                <LocalOfferIcon className="quality_standards_cont2_card1_icon" />

                <div className="quality_standards_cont2_card1_text_cont">
                  <div className="quality_standards_cont2_card1_text_title">
                    One stop Liquidity.
                  </div>
                  <div className="quality_standards_cont2_card1_text_para">
                    Buy,sell and collateralise all kinds of micro-assets easily.
                  </div>
                </div>
              </div>
              <div className="quality_standards_cont2_card1">
                <WorkspacePremiumIcon className="quality_standards_cont2_card1_icon" />

                <div className="quality_standards_cont2_card1_text_cont">
                  <div className="quality_standards_cont2_card1_text_title">
                    Guaranteed quality.
                  </div>
                  <div className="quality_standards_cont2_card1_text_para">
                    All are refurbished by experts and are continuously
                    monitored
                  </div>
                </div>
              </div>
              <div className="quality_standards_cont2_card1">
                <MiscellaneousServicesIcon className="quality_standards_cont2_card1_icon" />

                <div className="quality_standards_cont2_card1_text_cont">
                  <div className="quality_standards_cont2_card1_text_title">
                    Awesome service
                  </div>
                  <div className="quality_standards_cont2_card1_text_para">
                    Shop online or from our Stores close to you to get the best
                    shopping experience ever.
                  </div>
                </div>
              </div>
              <div className="quality_standards_cont2_card1">
                <ThumbUpAltIcon className="quality_standards_cont2_card1_icon" />

                <div className="quality_standards_cont2_card1_text_cont">
                  <div className="quality_standards_cont2_card1_text_title">
                    Positive impact
                  </div>
                  <div className="quality_standards_cont2_card1_text_para">
                    Shopping refurbished items keeps waste out of landfills.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          src="/img/video-dots.svg"
          alt=""
          className="quality_standards_dots"
        />
      </section>
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      <section className="quality_standards_section">
        <div className="custom_container">
          <div className="trending_section_area">
            <div className="trending_section_txt">
              <div className="trending_section_heading">
                <span className="trending_section_heading_title">Explore </span>{" "}
                trending categories on Egoras
              </div>

              <div className="trending_section_para">
                Check what’s popular on Egoras.
              </div>
            </div>
            <div className="trending_category_switch_tab">
              <div
                className={
                  activeTab == "computers"
                    ? "category_switch_tab1_active"
                    : "category_switch_tab1"
                }
                id="computers"
                onClick={ToggleActiveTab}
              >
                Computers
              </div>

              <div
                className={
                  activeTab == "phones"
                    ? "category_switch_tab1_active"
                    : "category_switch_tab1"
                }
                id="phones"
                onClick={ToggleActiveTab}
              >
                Phones
              </div>
              <div
                className={
                  activeTab == "electronics"
                    ? "category_switch_tab1_active"
                    : "category_switch_tab1"
                }
                id="electronics"
                onClick={ToggleActiveTab}
              >
                Electronics
              </div>
              <div
                className={
                  activeTab == "home_kitchen"
                    ? "category_switch_tab1_active"
                    : "category_switch_tab1"
                }
                id="home_kitchen"
                onClick={ToggleActiveTab}
              >
                Home
              </div>
            </div>

            {activeTab === "computers" ? <ComputerBody /> : null}
            {activeTab === "phones" ? <PhonesBody /> : null}
            {activeTab === "electronics" ? <ElectronicsBody /> : null}
            {activeTab === "home_kitchen" ? <Home_kitchenBody /> : null}
          </div>
        </div>
      </section>
      {/* =======
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      <section className="quality_standards_section">
        <div className="custom_container">
          <div className="quality_standards_cont sell_banners">
            <div className="sell_old_tech_area1">
              <div className="ella_banner_writeUp">
                <div className="quality_standards_cont1Txt">
                  Got old tech? Take our money.{" "}
                </div>
                <div className="">Sell your used item in minutes.</div>
              </div>
              <a href="https://ella.ng" className="ella_link">
                <button className="ella_banner_btn">Sell Now</button>
              </a>
            </div>
            <div className="sell_old_tech_area2">
              <img
                src="/img/sell_old_tech_img.svg"
                alt=""
                className="sell_old_tech_img"
              />
            </div>
            <img
              src="/img/get_old_tech_bg.png"
              alt=""
              className="get_old_tech_bg"
            />
          </div>
        </div>
      </section>
      {/* =======
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}

      {/* ======== */}
      {/* ======== */}
      {/* ======== */}
      {/* ======== */}

      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* <section className="gtexploreSection">
        <div className="custom_container">
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
      </section> */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}

      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      <section className="featured_section">
        <div className="custom_container">
          <div className="featured_logos_area">
            <div className="featured_in_head">Featured In</div>
            {/* Carousel start==============================
==============================================
============================= */}
            <Carousel
              responsive={responsive}
              className="featured_logos"
              showDots={false}
              //   infinite={false}
              autoPlay={true}
              // autoPlaySpeed={10000}
              infinite={true}
              draggable={true}
              swipeable={true}
            >
              {FeaturedLogos.map((data) => (
                <div className="featured_in_logos_cont">
                  {" "}
                  <img src={data.img} alt="" className="featured_logo" />
                </div>
              ))}
            </Carousel>
            <div className="featured_logos_mobile">
              {FeaturedLogos.map((data) => (
                <div className="featured_in_logos_cont">
                  {" "}
                  <img src={data.img} alt="" className="featured_logo" />
                </div>
              ))}
            </div>
            {/* Carousel end==============================
==============================================
============================= */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeUpdate;
