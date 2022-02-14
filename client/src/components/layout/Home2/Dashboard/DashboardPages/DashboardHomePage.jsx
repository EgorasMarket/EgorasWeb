import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import LogoutIcon from "@mui/icons-material/Logout";
import "../DashboardStyles/dashboard_home.css";
import { API_URL2 as api } from "../../../../../actions/types";
import { connect, useDispatch } from "react-redux";
import axios from "axios";
import { allCart } from "../../../../../actions/shop";
import DashBoardCard from "../DashBoardCard";
import data from "../../../MockData";
import { retrieveCart } from "../../../../../actions/shop";
import {
  PRODUCT_LOADED,
  API_URL2 as api_url2,
} from "../../../../../actions/types";

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
    breakpoint: { max: 670, min: 400 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 400, min: 0 },
    items: 2,
  },
};

const DashboardHomePage = ({ cart, auth, allCart, match }) => {
  const [cus_id, setCusId] = useState("");
  const dispatch = useDispatch();

  // const fetchFromCart = async (customer_id) => {
  //   console.log('fetchfromCart', customer_id);
  //   let call = await axios.get(`${api}/v1/cart/get/${customer_id}`).catch((err) => {
  //     console.log("error from dashboardcart", err.message);
  //   });
  //   // setCartData(call.data.data)

  //   console.log(call.data.data, 'async call');
  //   dispatch(allCart(call.data.data))
  //   // dispatch(allCart(call)) // use this to send to the redux store
  // }

  // useEffect(() => {
  //   console.log(cus_id);
  //   retrieveCart(cus_id)
  //   console.log("inside use effect")

  // },[])

  const [savedNum, setSavedNum] = useState(5);
  const [productPage_id, setProductPageId] = useState(match.params.id);
  const [lock, setlock] = useState({
    productImage: "",
    productName: "",
    productAmount: "",
  });

  const { productImage, productName, productAmount } = lock;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const [itemGalleryShow, setItemGalleryShow] = useState([]);
  const [accountInfo, setAccountInfo] = useState({
    ledger: "",
    pending_sum: "",
    total_sum: ""
  })
  const {ledger, pending_sum, total_sum} = accountInfo;

  useEffect(async() => {
    await axios
      .get(api_url2 + "/v1/product/retrieve/products", null, config)
      .then((data) => {
        console.log(data.data.data, "phlip");

        setItemGalleryShow(data.data.data);
      })
      .catch((err) => {
        console.log(err); // "oh, no!"
      });
  }, []);


  useEffect(async() => {

    console.log(auth.user.user.id);
    const customer_id = auth.user.user.id
    const body = JSON.stringify({
      customer_id,
    });
    await axios
      .post(api_url2 + "/v1/user/accounts/fetch/dashboard", body, config)
      .then((data) => {
        console.log(data.data.data, "bbbbbbb");

        setAccountInfo({
          ledger: data.data.data.ledger,
          pending_sum: data.data.data.pending_sum,
          total_sum: data.data.data.total_sum
        })

        // setItemGalleryShow(data.data.data);
      })
      .catch((err) => {
        console.log(err.response); // "oh, no!"
      });
  }, [auth]);



   
  // useEffect(() => {

  useEffect(() => {
    axios
      .post(api_url2 + "/v1/user/accounts/fetch/dashboard", null, config)
      .then((data) => {
        console.log(data, "Chukwubuike Ifeanyi");

       
      })
      .catch((err) => {
        console.log(err); // "oh, no!"
      });
  }, []);



  // console.log(body);

  //     axios.post(
  //         api_url2 + "/v1/product/retrieve/specific",
  //         // body,
  //         null,
  //         config
  //     ).then((cafe) => {

  //       console.log("Goods only");
  //         console.log(cafe.data.data, "Feeding");

//         setlock ({
//           productImage:cafe.data.data.product_image,
//           productName:cafe.data.data.product_name,
//           productAmount:cafe.data.data.amount
//         })   
//     }).catch((err) => {
//         console.log(err.response); // "oh, no!"
//     })
// }, []);
    
const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};
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
                {/* {data.dashBoardHomeCard.map((asset, index) => ( */}
                  <DashBoardCard background ={'/img/save_card1.svg'} title={"Total Saving"} balance={total_sum} />
                  <DashBoardCard background ={'/img/save_card2.svg'} title={"Pending Payment"} balance={pending_sum} />
                  <DashBoardCard background ={'/img/save_card3.svg'} title={"Ledger Balance"} balance={ledger}/>
               
                {/* ))} */}
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
                    <h1 className="gttitle TITE">Recent Products / Outright sell-off</h1>
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
                   <a href={`/dashboard/products/details/${asset.id}/${asset.product_name}`}>
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



                
  {/*  Projects Section start*/}
  <section className="projectsSection savvvvv" id="projects">
            <div className="container">
              <div className="projectsArea">
                <div className="projectsLinea"></div>
                <div className="projectsTitleContentsa">
                  <div className="projectTitle">
                    <h1 className="gttitle TITE">Recent Products / Esusu</h1>
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
                    <a href={`/dashboard/products/details/${asset.id}/${asset.product_name}`}>
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
                              {asset.percentage}% to be locked
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
          <section className="projectsSection savvvvv" id="projects">
            <div className="container">
              <div className="projectsArea">
                <div className="projectsLinea"></div>
                <div className="projectsTitleContentsa">
                  <div className="projectTitle">
                    <h1 className="gttitle TITE">Top Products / Outright sell-off</h1>
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
                  {itemGalleryShow.map((asset) => (
                     <a href={`/dashboard/products/details/${asset.id}/${asset.product_name}`}>
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


        {/*  Projects Section start*/}
        <section className="projectsSection savvvvv" id="projects">
            <div className="container">
              <div className="projectsArea">
                <div className="projectsLinea"></div>
                <div className="projectsTitleContentsa">
                  <div className="projectTitle">
                    <h1 className="gttitle TITE">Top Products / Esusu</h1>
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
                  {itemGalleryShow.map((asset) => (
                   <a href={`/dashboard/products/details/${asset.id}/${asset.product_name}`}>
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
                             {asset.percentage}% to be locked
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
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  cart: state.shop.cart,
});

export default connect(mapStateToProps, { allCart })(DashboardHomePage);
