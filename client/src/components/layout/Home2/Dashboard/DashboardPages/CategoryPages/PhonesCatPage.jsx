import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import WidgetsIcon from "@mui/icons-material/Widgets";
import SearchIcon from "@mui/icons-material/Search";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import "../../DashboardStyles/category.css";
import axios from "axios";
import { connect } from "react-redux";
import {
  API_URL2 as api_url2,
} from "../../../../../../actions/types";
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
const assetBrand = [
  {
    id: "apple",
    name: "Apple",
  },
  {
    id: "samsung",
    name: "Samsung",
  },
  {
    id: "oppo",
    name: "Oppo",
  },
  {
    id: "huawei",
    name: "HUAWEI",
  },
  {
    id: "tecno",
    name: "TECNO",
  },
  {
    id: "infinix",
    name: "Infinix",
  },
  {
    id: "nokia",
    name: "Nokia",
  },
  {
    id: "gionee",
    name: "Gionee",
  },
  {
    id: "itel",
    name: "Itel",
  },
  {
    id: "lenovo",
    name: "Lenovo",
  },
  {
    id: "vivo",
    name: "Vivo",
  },
  {
    id: "xiaomi",
    name: "Xiaomi",
  },
];
const itemDetails2 = [
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
  {
    id: 8,
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
  {
    id: 8,
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
  {
    id: 8,
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
  {
    id: 8,
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
  {
    id: 8,
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
  {
    id: 8,
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
  {
    id: 8,
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
  {
    id: 8,
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
  {
    id: 8,
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
  {
    id: 8,
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
  {
    id: 8,
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
  {
    id: 8,
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
  {
    id: 8,
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
  {
    id: 8,
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
  {
    id: 8,
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
  {
    id: 8,
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

const PhonesCatPage = () => {
  const [totalProducts, setTotalProducts] = useState("200 ");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const [goods,setGoods]=useState([]);
  const [phones,setPhone]=useState([]);
  


  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
  
    axios.get(
        api_url2 + "/v1/product/retrieve/category",
        null,
        config
    ).then((data) => {
       
        console.log(data.data.data, "king");
     
       
        setGoods(data.data.data)

     
      })
      .catch((err) => {
        console.log(err); // "oh, no!"
      });

    
  }, []);

  useEffect(() => {
    const results = assetBrand.filter((BrandName) =>
      BrandName.name.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);



  useEffect(() => {
  
    axios.get(
        api_url2 + "/v1/product/retrieve/products",
        null,
        config
    ).then((data) => {
       
        console.log(data.data.data, "phlip");
     
       
        setPhone(data.data.data)

       
      })
      .catch((err) => {
        console.log(err); // "oh, no!"
      });

    
  }, []);
  return (
    <div className="other2">
      <section className="no-bg">
        <div className="container">
          <div className="categories_page_area">
            <div className="cat_banner_heading">
              Connect Your World
              <img
                src="/img/fake_assets/refurb_img.jpeg"
                alt=""
                className="refurb_img_bann"
              />
            </div>
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* Carousel start==============================
==============================================
============================= */}

            <div className="products_display_body pad_bot">
              <div className="products_display_body_heading">
                Apple Phones
                <dispatchEvent></dispatchEvent>
              </div>
              <div className="cat_carous">
                <Carousel
                  responsive={responsive6}
                  className="partnerCards LEFTARROW"
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
                  {phones.map((asset) => (
                    <a href={`/dashboard/products/dels/${asset.id}/${asset.product_name}`}>
                      <li className="carous_list">
                        <div
                          className="storeTiles_storeTileContainer__HoGEa"
                          style={{
                            backgroundImage: `url(${api_url2 + '/'+ asset.product_image})`,
                          }}
                        >
                          <div className="storeTiles_storeTileOffersContainer__3v8lC">
                            <button className="items_remaining_btn">
                              save now
                            </button>
                            <button className="items_remaining_btn2">
                              25% off
                            </button>
                          </div>
                          <div className="storeTiles_storeTileBottomContainer__2sWHh">
                            <div className="asset_name">{asset.product_name}</div>
                            <div className="asset_title">
                              {asset.unitCount}{asset.unitCount ===1? "item left": asset.unitCount <= 1? "no item left":asset.unitCount > 1? "items left": null }
                            </div>
                          </div>
                          {/* </a> */}
                        </div>
                      </li>
                    </a>
                  ))}
                </Carousel>
              </div>
            </div>
            {/* Carousel end==============================
==============================================
============================= */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* Carousel start==============================
==============================================
============================= */}

            <div className="products_display_body pad_bot">
              <div className="products_display_body_heading">
                Android Phones
                <dispatchEvent></dispatchEvent>
              </div>
              <div className="cat_carous">
                <Carousel
                  responsive={responsive6}
                  className="partnerCards LEFTARROW"
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
                  {phones.map((asset) => (
                    <a href={`/dashboard/products/dels/${asset.id}/${asset.product_name}`}>
                      <li className="carous_list">
                        <div
                          className="storeTiles_storeTileContainer__HoGEa"
                          style={{
                            backgroundImage: `url(${api_url2 + '/'+ asset.product_image})`,
                          }}
                        >
                          <div className="storeTiles_storeTileOffersContainer__3v8lC">
                            <button className="items_remaining_btn">
                              save now
                            </button>
                            <button className="items_remaining_btn2">
                              40% off
                            </button>
                          </div>
                          <div className="storeTiles_storeTileBottomContainer__2sWHh">
                            <div className="asset_name">{asset.product_name}</div>
                            <div className="asset_title">
                            {asset.unitCount}{asset.unitCount ===1? "item left": asset.unitCount <= 1? "no item left":asset.unitCount > 1? "items left": null }
                            </div>
                          </div>
                          {/* </a> */}
                        </div>
                      </li>
                    </a>
                  ))}
                </Carousel>
              </div>
            </div>
            {/* Carousel end==============================
==============================================
============================= */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            <div className="cat_banner_group">
              <div className="cat_banner_group1">
                <img
                  src="/img/fake_assets/apple_iphone_13_gr_1.png"
                  alt=""
                  className="img_gr1"
                />
              </div>
              <div className="cat_banner_group1">
                <img
                  src="/img/fake_assets/apple_iphone_13_gr_1.png"
                  alt=""
                  className="img_gr1"
                />
              </div>
            </div>
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            <div className="items_all_list">
              <div className="items_all_list_cat_select">
                <div className="cat_select_div1">
                  <div className="cat_select_div1_head">Categories</div>
                  <div className="cat_select_div1_sub_head">
                    Phones & Laptops
                  </div>
                </div>
                <div className="cat_select_div2">
                  <div className="cat_select_div2_head">
                    Brand{" "}
                    <div className="brand_search_area">
                      <input
                        type="search"
                        name="search"
                        id="searchBrand"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="search_brand"
                      />
                      <SearchIcon className="search_icon" />
                    </div>
                  </div>
                  <div className="cat_select_div2_body">
                    {searchResults.map((brand) => (
                      <div className="select_brand_check_box">
                        <label class="label_cont">
                          {brand.name}
                          <input
                            type="checkbox"
                            name="apple"
                            //   id="apple"
                            className="brand_check_input"
                            key={brand.id}
                          />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="items_all_list_body_cont">
                <div className="items_all_list_body_cont_head1">
                  Connect Your World{" "}
                  <span className="sort_cont">
                    Sort by:{" "}
                    <span className="sort_btn">
                      Popularity
                      <ArrowDropDownIcon />
                    </span>
                  </span>
                </div>
                <div className="items_all_list_body_cont_head2">
                  {totalProducts} Products Found
                  <span className="sort_cont">
                    <WidgetsIcon className="widgi_widgi" />
                  </span>
                </div>
                <div className="items_all_list_body">
                  {phones.map((asset) => (
                    <a href={`/dashboard/products/dels/${asset.id}/${asset.product_name}`}>
                      <li className="carous_list caro_lisss_2">
                        <div
                          className="storeTiles_storeTileContainer__HoGEa"
                          style={{
                            backgroundImage: `url(${api_url2+'/'+asset.product_image})`,
                          }}
                        >
                          <div className="storeTiles_storeTileOffersContainer__3v8lC">
                            <button className="items_remaining_btn">
                              save now
                            </button>
                            <button className="items_remaining_btn2">
                              20% off
                            </button>
                          </div>
                          <div className="storeTiles_storeTileBottomContainer__2sWHh">
                            <div className="asset_name">{asset.product_name}</div>
                            <div className="asset_title">
                              {asset.unitCount}{asset.unitCount ===1? "item left": asset.unitCount <= 1? "no item left":asset.unitCount > 1? "items left": null }
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
          </div>
        </div>
      </section>
    </div>
  );
};



const mapStateToProps1 = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
});

export default  connect(mapStateToProps1)(PhonesCatPage);
