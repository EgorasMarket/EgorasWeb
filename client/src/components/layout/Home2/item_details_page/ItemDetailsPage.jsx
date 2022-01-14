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
    <div>
      <section className="product_details_section">
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
                  <button className="buy_now_button">Save Now</button>
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
                <div className="desc_details">
                  <p>
                    <br />
                    Specifications Detail
                    <br />
                    Product Type
                    <br />
                    LED
                    <br />
                    Series
                    <br />8<br />
                    Display
                    <br />
                    Screen Size50"
                    <br />
                    &nbsp;
                    <br />
                    Resolution3,840 x 2,160
                    <br />
                    Video
                    <br />
                    Picture EngineCrystal Processor 4K
                    <br />
                    &nbsp;
                    <br />
                    One Billion ColorYes
                    <br />
                    &nbsp;
                    <br />
                    PQI (Picture Quality Index)2200
                    <br />
                    &nbsp;
                    <br />
                    HDR (High Dynamic Range)HDR
                    <br />
                    &nbsp;
                    <br />
                    HDR 10+Support
                    <br />
                    &nbsp;
                    <br />
                    HLG (Hybrid Log Gamma)Yes
                    <br />
                    &nbsp;
                    <br />
                    ContrastMega Contrast
                    <br />
                    &nbsp;
                    <br />
                    ColorDynamic Crystal Color
                    <br />
                    &nbsp;
                    <br />
                    Micro DimmingUHD Dimming
                    <br />
                    &nbsp;
                    <br />
                    Contrast EnhancerYes
                    <br />
                    &nbsp;
                    <br />
                    Auto Motion PlusYes
                    <br />
                    &nbsp;
                    <br />
                    Film ModeYes
                    <br />
                    &nbsp;
                    <br />
                    Natural Mode SupportYes
                    <br />
                    Audio
                    <br />
                    Dolby Digital PlusYes
                    <br />
                    &nbsp;
                    <br />
                    Q-SymphonyQ-Symphony
                    <br />
                    &nbsp;
                    <br />
                    Sound Output (RMS)20 W<br />
                    &nbsp;
                    <br />
                    Speaker Type2 CH
                    <br />
                    &nbsp;
                    <br />
                    Blutooth AudioYes
                    <br />
                    Smart Service
                    <br />
                    Samsung SMART TVSmart
                    <br />
                    &nbsp;
                    <br />
                    Operating SystemTizen™
                    <br />
                    &nbsp;
                    <br />
                    BixbyUS English, UK English, India English, Korean, French,
                    German, Italian, Spanish, Portuguese (features vary by
                    language)
                    <br />
                    &nbsp;
                    <br />
                    Web BrowserYes
                    <br />
                    &nbsp;
                    <br />
                    SmartThings App SupportYes
                    <br />
                    &nbsp;
                    <br />
                    GalleryYes
                    <br />
                    Convergence
                    <br />
                    Mobile to TV - Mirroring, DLNAYes
                    <br />
                    &nbsp;
                    <br />
                    Tap ViewYes
                    <br />
                    &nbsp;
                    <br />
                    Sound WallYes
                    <br />
                    &nbsp;
                    <br />
                    Easy SetupYes
                    <br />
                    &nbsp;
                    <br />
                    App CastingYes
                    <br />
                    &nbsp;
                    <br />
                    Bluetooth Low EnergyYes
                    <br />
                    &nbsp;
                    <br />
                    WiFi DirectYes
                    <br />
                    &nbsp;
                    <br />
                    TV Sound to MobileYes
                    <br />
                    &nbsp;
                    <br />
                    Sound MirroringYes
                    <br />
                    Differentiation
                    <br />
                    Analog Clean ViewYes
                    <br />
                    &nbsp;
                    <br />
                    Triple ProtectionYes
                    <br />
                    Game Feature
                    <br />
                    Auto Game Mode (ALLM)Yes
                    <br />
                    Tuner/Broadcasting
                    <br />
                    Digital BroadcastingDVB-T2S2
                    <br />
                    &nbsp;
                    <br />
                    Analog TunerYes
                    <br />
                    &nbsp;
                    <br />
                    TV Key SupportYes
                    <br />
                    Connectivity
                    <br />
                    HDMI3
                    <br />
                    &nbsp;
                    <br />
                    USB2
                    <br />
                    &nbsp;
                    <br />
                    Composite In (AV)1
                    <br />
                    &nbsp;
                    <br />
                    Ethernet (LAN)Yes
                    <br />
                    &nbsp;
                    <br />
                    Digital Audio Out (Optical)1
                    <br />
                    &nbsp;
                    <br />
                    RF In (Terrestrial / Cable input)1/1(Common Use for
                    Terrestrial)/1
                    <br />
                    &nbsp;
                    <br />
                    HDMI A / Return Ch. SupportYes
                    <br />
                    &nbsp;
                    <br />
                    eARCYes
                    <br />
                    &nbsp;
                    <br />
                    HDMI Quick SwitchYes
                    <br />
                    &nbsp;
                    <br />
                    Wireless LAN Built-inYes (WiFi5)
                    <br />
                    &nbsp;
                    <br />
                    BluetoothYes (BT5.2)
                    <br />
                    &nbsp;
                    <br />
                    Anynet+ (HDMI-CEC)Yes
                    <br />
                    Design
                    <br />
                    DesignAirSlim
                    <br />
                    &nbsp;
                    <br />
                    Bezel Type3 Bezel-less
                    <br />
                    &nbsp;
                    <br />
                    Slim TypeSlim look
                    <br />
                    &nbsp;
                    <br />
                    Front ColorBLACK
                    <br />
                    &nbsp;
                    <br />
                    Stand TypeFLAT LIFT
                    <br />
                    &nbsp;
                    <br />
                    Stand ColorBLACK
                    <br />
                    Additional Feature
                    <br />
                    Adaptive SoundAdaptive Sound
                    <br />
                    &nbsp;
                    <br />
                    AmbienceAmbient Mode
                    <br />
                    &nbsp;
                    <br />
                    Brightness/Color DetectionBrightness Detection
                    <br />
                    &nbsp;
                    <br />
                    Accessibillity - Voice GuideUAE: UK English, French / AFR:
                    UK English, French, Portuguese / Egypt,Libya: UK English,
                    French, German, Spanish
                    <br />
                    &nbsp;
                    <br />
                    Accessibility - Learn TV Remote / Learn Menu ScreenUAE: UK
                    English, French / AFR: UK English, French, Portuguese /
                    Egypt,Libya: UK English, French, Spanish
                    <br />
                    &nbsp;
                    <br />
                    Accessibility - OthersEnlgarge / High Contrast /
                    Multi-output Audio / Color Inversion / Grayscale / Sign
                    Language Zoom / Slow Button Repeat
                    <br />
                    &nbsp;
                    <br />
                    Digital Clean ViewYes
                    <br />
                    &nbsp;
                    <br />
                    Auto Channel SearchYes
                    <br />
                    &nbsp;
                    <br />
                    Auto Power OffYes
                    <br />
                    &nbsp;
                    <br />
                    Caption (Subtitle)Yes
                    <br />
                    &nbsp;
                    <br />
                    Connect Share™ (HDD)Yes
                    <br />
                    &nbsp;
                    <br />
                    ConnectShare™ (USB 2.0)Yes
                    <br />
                    &nbsp;
                    <br />
                    EPGYes
                    <br />
                    &nbsp;
                    <br />
                    Wireless DexYes
                    <br />
                    &nbsp;
                    <br />
                    Web ServiceMicrosoft 365
                    <br />
                    &nbsp;
                    <br />
                    Filmmaker Mode (FMM)Yes
                    <br />
                    &nbsp;
                    <br />
                    OSD LanguageLocal Languages
                    <br />
                    &nbsp;
                    <br />
                    BT HID Built-inYes
                    <br />
                    &nbsp;
                    <br />
                    USB HID SupportYes
                    <br />
                    &nbsp;
                    <br />
                    Teletext (TTX)Yes
                    <br />
                    &nbsp;
                    <br />
                    IPv6 SupportYes
                    <br />
                    &nbsp;
                    <br />
                    MBR SupportYes
                    <br />
                    Power
                    <br />
                    Power SupplyAC220-240V 50/60Hz
                    <br />
                    &nbsp;
                    <br />
                    Power Consumption (Max)140 W<br />
                    Dimension
                    <br />
                    Package Size (WxHxD)1246 x 771 x 137 mm
                    <br />
                    &nbsp;
                    <br />
                    Set Size with Stand (WxHxD)1118.3 x 684.6 x 226.6 mm
                    <br />
                    &nbsp;
                    <br />
                    Set Size without Stand (WxHxD)1118.3 x 644.5 x 25.7 mm
                    <br />
                    &nbsp;
                    <br />
                    Stand (Basic) (WxD)763.6 x 226.6 mm
                    <br />
                    &nbsp;
                    <br />
                    VESA Spec200 x 200 mm
                    <br />
                    Weight
                    <br />
                    Package Weight15.40 kg
                    <br />
                    &nbsp;
                    <br />
                    Set Weight with Stand12.20 kg
                    <br />
                    &nbsp;
                    <br />
                    Set Weight without Stand11.5 kg
                  </p>
                </div>
              </div>
            </div>
            {/* ================ */}
            {/* ================ */}
            {/* =================================================================================================================================================================================================================================================================== */}
            {/*  Projects Section start*/}
            <section className="projectsSection" id="projects">
              <div className="container">
                <div
                  className="projectsArea"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="projectsLinea"></div>
                  <div className="projectsTitleContentsa">
                    <div className="projectTitle">
                      <h1 className="gttitle TITE">
                        Similar Items You May Like
                      </h1>
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
