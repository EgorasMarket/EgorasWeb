import React from "react";
import Carousel from "react-multi-carousel";
import LogoutIcon from "@mui/icons-material/Logout";
import "../DashboardStyles/dashboard_home.css";
const cards = [
  {
    id: 1,
    img: "/img/save_card1.svg",
    title: "Total Savings",
    Balance: "50,000",
    Save_button: "Save",
  },
  {
    id: 1,
    img: "/img/save_card2.svg",
    title: "Item Savings",
    Balance: "50,000",
    Save_button: "Save",
  },
  {
    id: 1,
    img: "/img/save_card3.svg",
    title: "Flex Savings",
    Balance: "50,000",
    Save_button: "Save",
  },
  {
    id: 1,
    img: "/img/save_card4.svg",
    title: "Dollar Savings",
    Balance: "50,000",
    Save_button: "Save",
  },
];
const responsive6 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
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
const DashboardHomePage = () => {
  return (
    <div className="other2">
      <section className="no-bg">
        <div className="container">
          <div className="dash_home_area">
            <div className="dash_savings_cards_area">
              {/* Carousel start==============================
==============================================
============================= */}

              <Carousel
                responsive={responsive6}
                className="partnerCards LEFTARROW gtr"
                showDots={false}
                //   infinite={false}
                autoPlay={true}
                autoPlaySpeed={9000}
                infinite={true}
                draggable={true}
                swipeable={true}
                // transitionDuration={1000}
                style={{ height: "25em" }}
              >
                {cards.map((asset) => (
                  <div className="card_cont1">
                    <div className="card_cont_txtxs">
                      {/* <div className="save_card_cont_txt1">
                        <span className="savings_caption">Title</span>
                        <div className="card_cont_txt_tittle">
                          Total Savings
                        </div>
                      </div> */}
                      <div className="save_card_cont_txt1">
                        <span className="savings_caption">{asset.title}</span>
                        <div className="card_cont_txt_tittle">
                          ₦{asset.Balance}
                        </div>
                      </div>
                      <div className="to_save_btn">
                        <LogoutIcon className="to_save_area_icon" /> Start
                        saving
                      </div>
                    </div>
                    <img src={asset.img} alt="" className="savings_card" />
                  </div>
                ))}
              </Carousel>
              {/* Carousel end==============================
==============================================
============================= */}
            </div>
            <div className="savings_overview">
              <div className="savings_overview_title">Savings Overview</div>
              <div className="savings_overview_body"></div>
            </div>
          </div>
          {/* =================================================================================================================================================================================================================================================================== */}
          {/*  Projects Section start*/}
          <section className="projectsSection savvvvv" id="projects">
            <div className="container">
              <div
                className="projectsArea"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <div className="projectsLinea"></div>
                <div className="projectsTitleContentsa">
                  <div className="projectTitle">
                    <h1 className="gttitle TITE">Top Deals</h1>
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
                  responsive={responsive7}
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
      </section>
    </div>
  );
};

export default DashboardHomePage;
