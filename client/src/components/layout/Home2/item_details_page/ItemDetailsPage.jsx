import React, { useState, useEffect, useCallback } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Carousel from "react-multi-carousel";
import "../../../../css/itemsDetailsPage.css";

function ItemDetailsPage({ match }) {
  const [asset, setAsset] = useState("");
  const [itemsLeft, setItemsLeft] = useState(5);
  const [maxDuration, setmaxDuration] = useState(25);
  const [base, setBase] = useState("");
  const [disable, setDisable] = useState(false);
  const [disable2, setDisable2] = useState(false);
  const [productCode, setProductCode] = useState(475758);
  const [productPrice, setProductPrice] = useState("400,000");
  const [BrandCode, setBrandCode] = useState("Samsung");
  const [count, setCount] = useState(0);
  const [imeeg, setImeeg] = useState("");

  const [activeBg, setActiveBg] = useState("descript");

  const changeBg = (e) => {
    let currentId = e.currentTarget.id;
    setActiveBg(currentId);
  };

  const increaseCount = () => {
    setCount(count + 1);
    setItemsLeft(itemsLeft - 1);
    if (count >= 4) {
      setDisable(true);
      setDisable2(false);
      console.log("stop count");
    } else {
      setDisable(false);
      setDisable2(false);
    }
  };
  // -=========--
  // -=========--
  // -=========--
  const decreaseCount = () => {
    setCount(count - 1);
    setItemsLeft(itemsLeft + 1);

    if (count <= 1) {
      setDisable2(true);
      setDisable(false);
      console.log("stop count2");
    }
  };

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
  const itemsId = {
    firstItem: {
      // the naming can be any, depends on you.
      id: 1,
      img: "/img/samsung_tv_555.jpeg",
    },
    second: {
      // the naming can be any, depends on you.
      id: 2,
      img: "/img/BAG.jpeg",
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

  useEffect(() => {
    let assetVal = match.params.img;
    let baseVal = match.params.name;
    setAsset(assetVal);
    setBase(baseVal);
    let ticker = assetVal + "-" + baseVal;
    window.scrollTo(0, 0);
    // setImeeg(itemsId.map((log) => log.img));
    setImeeg(itemsId.firstItem.img);
    console.log(itemsId.firstItem.img);
  }, []);

  return (
    <div className="other2">
      <section className="no-bg">
        <div className="container">
          <div className="products_area">
            <div className="product_details_area1">
              <div className="details_area1_cont1">
                {" "}
                <img src={imeeg} alt="" className="product_details_img" />
              </div>
              {/* ================ */}
              {/* ================ */}
              {/* ================ */}
              {/* ================ */}
              <div className="details_area1_cont2">
                {" "}
                <div className="product_details_Title">{base}</div>
                <div className="product_details_code">
                  <span className="product_code_title">Product Code: </span>
                  {productCode}
                </div>
                <div
                  className="product_details_code"
                  style={{ color: "#239e54" }}
                >
                  <span className="product_code_title">Brand: </span>
                  {BrandCode}
                </div>
                {/* ----------------- */}
                {/* <hr className="horizontal_rule" /> */}
                {/* -------------- */}
                <div className="product_details_price">₦{productPrice}</div>
                {/* <hr className="horizontal_rule" /> */}
                {/* ------- */}
                <div className="quantity_div">
                  <div className="quantity_cont">
                    <label htmlFor="Quantity" className="quantity_label">
                      Quantity:
                    </label>
                    <div>
                      <div className="increment_decrement_cont">
                        <button
                          className="decrement_btn"
                          name="decrement"
                          type="submit"
                          value="0"
                          onClick={decreaseCount}
                          disabled={disable2}
                        >
                          -
                        </button>

                        <div className="increment_decrement_div">{count}</div>
                        <button
                          className="increment_btn"
                          name="increment"
                          type="submit"
                          value="1"
                          onClick={increaseCount}
                          disabled={disable}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="items_left_div">
                    Items Left:{" "}
                    <span className="items_left_numb">{itemsLeft} items</span>
                  </div>
                  <div className="items_left_div">
                    Savings max-duration:{" "}
                    <span className="days_left_numb">{maxDuration} days</span>
                  </div>
                </div>
                {/* <hr className="horizontal_rule" /> */}
                {/* ------- */}
                <div className="buy_now_btn_div">
                  <button className="buy_now_button">Add to Cart</button>

                  <div className="save_later">
                    <button className="save_later_btn">
                      <FavoriteIcon className="favorite_icon" />
                    </button>
                    <div className="save_later_txt">Add to favorites.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="product_details_area">{asset}</div> */}
            {/* =======================================879087070y707680769067 */}
            {/* =======================================879087070y707680769067 */}
            {/* =======================================879087070y707680769067 */}
            {/* =======================================879087070y707680769067 */}
            {/* =======================================879087070y707680769067 */}
            <div className="description_area">
              <div className="description_header">
                <div
                  id="descript"
                  onClick={changeBg}
                  className={
                    activeBg == "descript"
                      ? "description_click1 description_click1_active"
                      : "description_click1"
                  }
                >
                  Description
                </div>
              </div>

              <div className="description_body">
                <div className="description_table">
                  <table class="_3a09a_1e-gU">
                    <tbody>
                      <tr>
                        <td>Colour</td>
                        <td>Black</td>
                      </tr>
                      <tr>
                        <td>Warranty Period</td>
                        <td>6 Months</td>
                      </tr>
                      <tr>
                        <td>Brand</td>
                        <td>
                          <a href="/brand/samsung">Samsung</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Display Features</td>
                        <td>UHD</td>
                      </tr>
                      <tr>
                        <td>Display Technology</td>
                        <td>Not Specified</td>
                      </tr>
                      <tr>
                        <td>TV Screen Size</td>
                        <td>50"</td>
                      </tr>
                      <tr>
                        <td>Television 3D Technology</td>
                        <td>No Glasses</td>
                      </tr>
                      <tr>
                        <td>Resolution</td>
                        <td>4K</td>
                      </tr>
                      <tr>
                        <td>Intended Display Use</td>
                        <td>Home Entertainment</td>
                      </tr>
                      <tr>
                        <td>Television Screen Type</td>
                        <td>Flat</td>
                      </tr>
                      <tr>
                        <td>Television Refresh Rate</td>
                        <td>240 Hz</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* ====== */}
                {/* ====== */}
              </div>
            </div>
            {/* ================ */}
            {/* ================ */}
            {/* =================================================================================================================================================================================================================================================================== */}
            {/* =================================================================================================================================================================================================================================================================== */}
            {/*  Projects Section start*/}
            <section className="projectsSection" id="projects">
              <div className="container">
                <div className="projectsArea">
                  <div className="projectsLinea"></div>
                  <div className="projectsTitleContentsa">
                    <div className="projectTitle">
                      <h1 className="gttitle TITE">Recent Products</h1>
                    </div>
                    {/* 
              <a href="/explore_collaterals" className="projectsLink">
                Explore collaterals
                <div className="projectsLinkHover"></div>
              </a> */}
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
                    {itemDetails.map((asset) => (
                      // <div className="cardA">
                      //   <div className="img">
                      //     <div
                      //       className="img-sub"
                      //       style={{
                      //         backgroundImage: `url(${asset.img})`,
                      //         height: "200px",
                      //         width: "100%",
                      //         backgroundRepeat: "no-repeat",
                      //         backgroundSize: "cover",
                      //         borderRadius: "8px",
                      //         borderBottomLeftRadius: "0px",
                      //         borderBottomRightRadius: "0px",
                      //         backgroundPositionY: "center",
                      //       }}
                      //     >
                      //       {/* <div className="img-amount">
                      //       <NumberFormat
                      //         value={1000}
                      //         displayitems_remainings={"text"}
                      //         thousandSeparator={true}
                      //         prefix={"$"}
                      //       />
                      //     </div> */}
                      //     </div>
                      //   </div>

                      //   <div className="cardDetails" style={{ textAlign: "left" }}>
                      //     <h1 className="cardHeader">{asset.name}</h1>
                      //     <h1 className="collat-category">{asset.items_remainings}</h1>
                      //     <div className="heroSlider2">
                      //       <div className="slider-txts1">
                      //         <div className="h-texts">
                      //           <h3 className="htxt1a">{asset.days_left}</h3>
                      //           <h3 className="htxt2a">{asset.percentage}</h3>
                      //         </div>
                      //       </div>
                      //       {/* <div className="slider-a"></div> */}
                      //       <div className="slider" style={{ height: "7px" }}>
                      //         <div
                      //           className="sliderafter"
                      //           style={{
                      //             width: `5%`,
                      //             height: "7px",
                      //           }}
                      //         ></div>
                      //       </div>
                      //       <div className="slider-txts2">
                      //         <div className="p-texts2a">
                      //           <p className="ptxt2a">Remaining Items: 100</p>
                      //         </div>
                      //       </div>
                      //     </div>
                      //   </div>
                      //   </div>
                      <a href={`/products/details/${asset.id}/${asset.name}`}>
                        <li className="carous_list">
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
                  </Carousel>
                  {/* Carousel end==============================
==============================================
============================= */}
                </div>
              </div>
            </section>
            {/*  Projects Section end*/}
            {/* =================================================================================================================================================================================================================================================================== */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ItemDetailsPage;
