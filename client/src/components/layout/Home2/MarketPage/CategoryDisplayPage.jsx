import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import WidgetsIcon from "@mui/icons-material/Widgets";
import SearchIcon from "@mui/icons-material/Search";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "../Dashboard/DashboardStyles/category.css";
import "./market.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  PRODUCT_LOADED,
  API_URL2 as api_url2,
} from "../../../../actions/types";
import axios from "axios";
import { connect } from "react-redux";
import "../Dashboard/DashboardPages/CategoryPages/the.css";
import { PaginatedItems } from "../AllProductsDisplayPage/AllProductsDisplayPage";
import { numberWithCommas } from "../../../../static";
import { NoDataFoundComponent } from "../Dashboard/NodataFound/NoDataFoundComponent";

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

const CategoryDisplayPage = ({ match }) => {
  const [totalProducts, setTotalProducts] = useState("200 ");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const text = "No products found.";
  //console.log('====================================');
  //console.log(match.params.category);
  //console.log(match.params.product_name)
  //console.log('====================================');

  const [category2, setCategory2] = useState([]);
  const [erra, setErra] = useState({ cate: "" });
  const { cate } = erra;

  const [goods, setGoods] = useState([]);
  const [phones, setPhone] = useState([]);
  const [seeAll, setSeeAll] = useState([]);
  const [park, setPark] = useState({ imgs: "" });
  const { imgs } = park;

  // const [mark ,setMark]= setInfo({
  //   phoneCath:"",computerCath:""

  // })
  const [page, setPage] = useState({
    categoryPhoneTablets: "",
    categoryHomeAppliances: "",
    categoryElectronics: "",
    categoryComputerAccessories: "",
    categoryFurniture: "",
    categoryMusicalEquipment: "",
    categoryIndustrialEquipment: "",
  });

  const {
    categoryPhoneTablets,
    categoryHomeAppliances,
    categoryElectronics,
    categoryComputerAccessories,
    categoryFurniture,
    categoryMusicalEquipment,
    categoryIndustrialEquipment,
  } = page;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };
  //   const [searchVal, setSearchVal] = useState(match.params.tag);
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
  useEffect(() => {
    const results = assetBrand.filter((name) =>
      name.name.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);
  useEffect(() => {
    axios
      .get(
        api_url2 +
          "/v1/product/retrieve/products/byId/" +
          match.params.category,
        null,
        config
      )
      .then((data) => {
        //console.log("hello mr kingsley");
        console.log(data.data.data, "samuel_Chuks");

        setSeeAll(data.data.data);

        const feed = data.data.data.product_image;

        // /setGoods(data.data.data)
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }, []);

  useEffect(() => {
    phoneTab2();
  }, []);

  function phoneTab2() {
    axios
      .get(api_url2 + "/v1/product/retrieve/category", null, config)
      .then((data) => {
        //console.log(data.data.data, "dominic kig King");
        setCategory2(data.data.data);

        //  cate:category2.product_category_code;
        //  //console.log(cate);
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }

  //   {category2.map((person=>{
  // person.product_category_pa
  //   })}

  //=====================//
  //=====================//
  //=====================//

  //   useEffect(() => {
  //     const results = seeAll.filter((BrandName) =>
  //       BrandName.product_name
  //         .toString()
  //         .toLowerCase()
  //         .includes(searchTerm.toLowerCase())
  //     );
  //     setSearchResults(results);
  //   }, [searchTerm, seeAll]);

  useEffect(() => {
    axios
      .get(api_url2 + "/v1/product/retrieve/products", null, config)
      .then((data) => {
        //console.log(data.data.data, "phlip");

        setPhone(data.data.data);
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }, []);

  // const numberWithCommas = (x) => {
  //   return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  // };
  return (
    <div>
      <section className="market_page_section">
        <div className="custom_container">
          <div className="categories_page_area categories_page_area_non_dash ">
            <div className="cat_banner_heading">
              Connect Your World
              <img
                src="/img/fake_assets/refurb_img.jpeg"
                alt="..."
                className="refurb_img_bann"
              />
            </div>
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}

            <div className="products_display_body pad_bot">
              <div className="products_display_body_heading">
                {match.params.category}
                <dispatchEvent></dispatchEvent>
              </div>
              <div className=".products_display_body_conts_pad">
                {seeAll.length <= 0 ? (
                  <NoDataFoundComponent text={text} />
                ) : (
                  <>
                    <div className="show_prods_on_mobile">
                      {seeAll.slice(0, 10).map((asset, index5) => {
                        return (
                          <a
                            href={`/products/details/${
                              asset.id
                            }/${asset.product_name.replace(/\s+/g, "-")}`}
                            key={index5.toString()}
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
                                          ₦
                                          {numberWithCommas(
                                            asset.roundedAmount
                                          )}{" "}
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
                                            asset.amount /
                                            asset.product_duration
                                          ).toFixed()
                                        )}
                                        <span className="per_day_symbol">
                                          {" "}
                                          / perday
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                                {/* </a> */}
                              </div>
                            </li>
                          </a>
                        );
                      })}
                    </div>
                    <Carousel
                      responsive={responsive8}
                      className="partnerCards LEFTARROW market_carous "
                      showDots={false}
                      //   infinite={false}
                      autoPlay={false}
                      autoPlaySpeed={6000}
                      transitionDelay={"2s"}
                      infinite={true}
                      draggable={true}
                      // transitionDuration={500}
                      swipeable={true}
                      style={{ height: "25em" }}
                    >
                      {seeAll.slice(0, 10).map((asset, index5) => {
                        return (
                          <a
                            href={`/products/details/${
                              asset.id
                            }/${asset.product_name.replace(/\s+/g, "-")}`}
                            key={index5.toString()}
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
                                          ₦
                                          {numberWithCommas(
                                            asset.roundedAmount
                                          )}{" "}
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
                                            asset.amount /
                                            asset.product_duration
                                          ).toFixed()
                                        )}
                                        <span className="per_day_symbol">
                                          {" "}
                                          / perday
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                                {/* </a> */}
                              </div>
                            </li>
                          </a>
                        );
                      })}
                    </Carousel>
                  </>
                )}
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
                  // src={api_url2 + '/'+ seeAll[0].product_image}
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

            <div className="pagination_product_card_body">
              <div className="filter_products_body">
                <div className="filter_products_body_div">
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
                    {searchResults.map((brand, index10) => (
                      <div
                        className="select_brand_check_box"
                        key={index10.toString()}
                      >
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
              <div className="pagination_body">
                <PaginatedItems
                  itemsPerPage={40}
                  items={seeAll}
                  searchVal={match.params.category}
                  totalItems={seeAll.length}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

CategoryDisplayPage.propsTypes = {};

const mapStateToProps1 = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps1)(CategoryDisplayPage);
