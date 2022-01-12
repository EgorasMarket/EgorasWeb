import React, { useState, useEffect } from "react";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import CategoryIcon from "@mui/icons-material/Category";
import Slider from "react-slick";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Carousel from "react-multi-carousel";
import DvrIcon from "@mui/icons-material/Dvr";
import "../DashboardStyles/dashboard_products.css";

const Category = [
  {
    cat: "Electronics",
  },
  {
    cat: "Electronics",
  },
  {
    cat: "Electronics",
  },
  {
    cat: "Electronics",
  },
  {
    cat: "Electronics",
  },
  {
    cat: "Electronics",
  },
  {
    cat: "Electronics",
  },
  {
    cat: "Electronics",
  },
  {
    cat: "Electronics",
  },
];
const itemDetails = [
  {
    id: 1,
    img: "/img/BAG.jpeg",
    name: "Samsung smart tv series",
    items_remainings: "16 items left.",
    Save_button: "Save now",

    percentage: "100%",
    // ratio: "175%",
  },
  {
    id: 2,
    img: "/img/samsung_tv_555.jpeg",
    name: "Lg smart tv series",
    items_remainings: "16 items left.",
    Save_button: "Save now",
    percentage: "100%",
  },
  {
    id: 3,
    img: "/img/BAG.jpeg",
    name: "Iphone 12pro max",
    items_remainings: "16 items left.",
    Save_button: "Save now",
    percentage: "100%",
  },
  {
    id: 4,
    img: "/img/BAG.jpeg",
    name: "Samsung galaxy s9+",
    items_remainings: "16 items left.",
    Save_button: "Save now",
    percentage: "100%",
  },
  {
    id: 5,
    img: "/img/BAG.jpeg",
    name: "Samsung galaxy s9+",
    items_remainings: "16 items left.",
    Save_button: "Save now",

    percentage: "100%",
  },
  {
    id: 6,
    img: "/img/BAG.jpeg",
    name: "Samsung galaxy s9+",
    items_remainings: "16 items left.",
    Save_button: "Save now",
    percentage: "100%",
  },
  {
    id: 7,
    img: "/img/BAG.jpeg",
    name: "Samsung galaxy s9+",
    items_remainings: "16 items left.",
    Save_button: "Save now",
    percentage: "100%",
  },
  {
    id: 8,
    img: "/img/BAG.jpeg",
    name: "Samsung galaxy s9+",
    items_remainings: "16 items left.",
    Save_button: "Save now",
    percentage: "100%",
  },
];

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
function DashboardInvestPage() {
  const [prodBody, setProdBody] = useState("not_product_body");
  const [dropBtn, setDropBtn] = useState("dropHead");
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
  return (
    <div className="other2">
      <div className="cat_div">
        <div className="cat_body_toggle">
          <div className="cat_body_toggle1">
            All Categories
            <CategoryIcon className="cat_icon" />
          </div>
          <div className="cat_body_toggle1">Computers and Accessories</div>
          <div className="cat_body_toggle1">Phones and Tablets</div>
          <div className="cat_body_toggle1">Electronics</div>
          <div className="cat_body_toggle1">Konga Fashion</div>
          <div className="cat_body_toggle1">Home and Kitchen</div>
          <div className="cat_body_toggle1">Other Categories</div>
        </div>
      </div>
      {/* ========== */}
      {/* ========== */}
      {/* ========== */}
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
            <div className="brand_cont1">Samsung</div>
          </div>

          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}

          <div className="products_display_body">
            <div className="products_display_body_conts">
              {itemDetails.map((asset) => (
                <a href={`/products/details/${asset.id}/${asset.name}`}>
                  <li className="carous_list no_marg">
                    <div
                      className="storeTiles_storeTileContainer__HoGEa"
                      style={{
                        backgroundImage: `url(${asset.img})`,
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
                          {asset.Save_button}
                        </button>
                        <button className="items_remaining_btn2">
                          {asset.percentage} off
                        </button>
                      </div>
                      <div className="storeTiles_storeTileBottomContainer__2sWHh">
                        <div className="asset_name">{asset.name}</div>
                        <div className="asset_title">
                          {asset.items_remainings}
                        </div>
                      </div>
                      {/* </a> */}
                    </div>
                  </li>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DashboardInvestPage;
