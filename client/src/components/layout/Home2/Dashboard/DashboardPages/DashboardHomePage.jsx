import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import LogoutIcon from "@mui/icons-material/Logout";
import "../DashboardStyles/dashboard_home.css";
import {API_URL2 as api} from '../../../../../actions/types'
import {connect, useDispatch } from 'react-redux';
import axios from 'axios'
import { allCart} from '../../../../../actions/shop'
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
const itemDetails2 = [
  {
    // id: 1,
    img: "/img/BAG.jpeg",
    name: "Samsung smart tv series",
    items_remainings: "16 items left.",
    Save_button: "Save now",
    amount: "200,000",
    percentage: "100%",
    // ratio: "175%",
  },
  {
    // id: 2,
    img: "/img/samsung_tv_555.jpeg",
    name: "Lg smart tv series",
    items_remainings: "16 items left.",
    Save_button: "Save now",
    amount: "200,000",
    percentage: "100%",
  },
  {
    // id: 3,
    img: "/img/BAG.jpeg",
    name: "Iphone 12pro max",
    items_remainings: "16 items left.",
    amount: "200,000",
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


const DashboardHomePage = ({cart, auth, allCart}) => {

  const dispatch = useDispatch();


  const fetchFromCart = async (customer_id) => {
    console.log('fetchfromCart', customer_id);
    let call = await axios.get(`${api}/v1/cart/get/${customer_id}`).catch((err) => {
      console.log("error from dashboardcart", err.message);
    });
    // setCartData(call.data.data)

    console.log(call.data.data, 'async call');
    dispatch(allCart(call.data.data))
    // dispatch(allCart(call)) // use this to send to the redux store 
  }

  useEffect(() => {

    if (auth){
      console.log(auth.user.user.id)

      let customer_id = auth.user.user.id
      fetchFromCart(customer_id);
    }
    console.log("inside use effect")
    
  },[cart])



  const [savedNum, setSavedNum] = useState(5);
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
                autoPlay={false}
                autoPlaySpeed={9000}
                infinite={false}
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
            {/* [===================] */}
            {/* [===================] */}
            {/* [===================] */}
            <div className="savings_overview">
              <div className="savings_overview_title">Savings Overview</div>
              <div className="savings_overview_body">
                <div className="savings_overview_body_cont1">
                  Total Number of Locked Items{" "}
                  <span className="saved_figure">{savedNum}</span>
                </div>
                <div className="savings_overview_body_cont2">
                  {itemDetails2.map((item) => (
                    <div className="savings_overview_body_cont2_1a">
                      <div className="save_overview_cont_img">
                        <img
                          src={item.img}
                          alt=""
                          className="save_overview_cont_img_imgg"
                        />
                      </div>
                      <div className="save_item_details">
                        <div className="save_item_details_titles">
                          <div className="save_overview_cont_title">
                            {item.name}
                          </div>
                          <div className="save_overview_cont_amount">
                            ₦{item.amount}
                          </div>
                        </div>
                        <div className="save_item_details_btn">
                          <div className="save_overview_cont_items_left">
                            {item.items_remainings}
                          </div>
                          <button className="save_overview_cont_items_top_up">
                            Top up
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* =================================================================================================================================================================================================================================================================== */}
          {/*  Projects Section start*/}
          <section className="projectsSection savvvvv" id="projects">
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
                    <a href={`/dashboard/products/details/${asset.id}/${asset.name}`}>
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
          {/*  Projects Section start*/}
          <section className="projectsSection savvvvv" id="projects">
            <div className="container">
              <div className="projectsArea">
                <div className="projectsLinea"></div>
                <div className="projectsTitleContentsa">
                  <div className="projectTitle">
                    <h1 className="gttitle TITE">Top Products</h1>
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
                    <a href={`/dashboard/products/details/${asset.id}/${asset.name}`}>
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


const mapStateToProps = (state) =>({
  auth: state.auth,
  cart: state.shop.cart
})

export default connect(mapStateToProps,{allCart}) (DashboardHomePage);
