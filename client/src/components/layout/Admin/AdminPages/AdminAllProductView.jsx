import React, { useState, useEffect, useCallback } from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";
import Carousel from "react-multi-carousel";
import "../../../../css/itemsDetailsPage.css";
import axios from "axios";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Success_Error_Component from "../../../assets/Success_Error_Component";

// import Dashboard_Checkout_Page from "../Dashboard/DashboardPages/Dashboard_Checkout_Page";
import { numberWithCommas } from "../../../../static";

import {ProductImageCarousel} from '../../Home2/item_details_page/ProductImageCarousel';

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import {
  PRODUCT_LOADED,
  API_URL2 as api_url2,
} from "../../../../actions/types";
import { connect, useDispatch } from "react-redux";
import { fontSize } from "@mui/system";
import { response } from "express";
const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
      >
        {title}
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};
function ItemDetailsPage({ auth, match }) {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // const handleSelect = (ranges) => {
  //   //console.log(ranges);
  // };
  const handleSelect = (ranges) => {
    //console.log(ranges);
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  };

  const [spec, setSpec] = useState([]);
  const [displayDays, setDisplayDays] = useState([]);
  const [modal, setModal] = useState(false);
  const [daysAddedDiv, setDaysAddedDiv] = useState(false);
  const [error_msg, setErrorMsg] = useState('');
  const [success_msg, setSuccessMsg] = useState('');
  const [errorDiv, setErrorDiv] = useState(false);
  const [successDiv, setSuccessDiv] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);
  const [product_id, setProductId] = useState(match.params.id);
  const [user_id, set_user_id] = useState("");
  const [showApproval, setShowApproval] = useState(true);
  const [asset, setAsset] = useState("");
  const [adminRole, setAdminRole] = useState("");
  const [moreImg, setMoreImg] = useState([]);
  const [product_route, setProduct_route] = useState("");
  const [productRoute, setProductRoute] = useState({
    // product_route: "",
    carrier: "",
    narration: ""
  })

  const { carrier, narration } = productRoute;

 
  const [base, setBase] = useState("");


  const [imeeg, setImeeg] = useState("");
 

  const [activeBg, setActiveBg] = useState("descript");

  const [term, setTerm] = useState([]);
  const [dailyAmount, setDailyAmount] = useState()
  const [initialDeposit, setInitialDeposit] = useState()

  const [itemDisplay, setItemDisplay] = useState([])

  const [more_image, setMore_image] = useState()

  const [productDetails, setProductDetails] = useState({
    product_image: "",
    product_name: "",
    product_brand: "",
    Product_type: "",
    unitCount: "",
    amount: "",
    // more_image: {},
    product_duration: "",
    product_category_code: "",
    product_details: "",
    productSpecification: "",
    percentage: "",
    payment_type: "",
    productId: ""
  });
  
  var addedDays = 0;

  const onChangeFor2 = (e) => {
    setProduct_route(e.target.value)
    //console.log(nextKin);
  };

  const onChangeFor = (e) => {
    setProductRoute({ ...productRoute, [e.target.name]: e.target.value });
  };

  const openDetailsModal = () => {
    setDetailsModal(true);
  };

  const closeDetailModal = () => {
    setDetailsModal(false);
  };
  const [calvalue, setCalValue] = useState();

  const isDisabled = useCallback((date) => {
    if (date.getDate()) {
      return true;
    }
    //console.log(date.getDate() + 2, "memememe");
  }, []);

  const {
    product_image,
    product_name,
    productId,
    // more_image,
    product_brand,
    product_type,
    unitCount,
    amount,
    product_duration,
    product_category_code,
    productSpecification,
    product_details,
    percentage,
    payment_type,
  } = productDetails;

  useEffect(() => {
    const body = JSON.stringify({
      product_id,
    });
    if (auth) {
      set_user_id(auth.user.user.id);
      setAdminRole(auth.user.user.role);
    }

    //console.log(body);

    axios
      .post(api_url2 + "/v1/product/retrieve/specific", body, config)
      .then((data) => {
        //console.log(data.data.data, "king");

        const getSlid = data.data.data.product_specifications;
        //  const slipVar = getSlid.split(',');
        //console.log("====================================");
        //console.log(getSlid);
        //console.log("====================================");
        setSpec(getSlid);
        // const slipVar = spec.split(',');
        setMore_image(data.data.data.more_image)
        setProductDetails({
          // more_image: data.data.data.more_image,
          product_image: data.data.data.product_image,
          product_name: data.data.data.product_name,
          product_brand: data.data.data.product_brand,
          product_type: data.data.data.product_type,
          unitCount: data.data.data.unitCount,
          amount: data.data.data.amount,
          product_duration: data.data.data.product_duration,
          product_category_code: data.data.data.product_category_code,
          product_details: data.data.data.product_detail,
          percentage: data.data.data.percentage,
          productId: data.data.data.product_id
          // productSpecification:slipVar[0]
        });
        // setLowNumS({prod_dur:"8"});

        //console.log("====================================");
        // const NumbsAr =
        // setLowNumS(NumbLow);
        // //console.log(NumbLow);
        //console.log(lowOutCome);
      })
      .catch((err) => {
        //console.log(err.response); // "oh, no!"
      });
  }, []);

  useEffect(() => {
    console.log(more_image);
    if (more_image != null) {
      // let splited = JSON.parse(more_image);
      // setMoreImg(more_image);
      // console.log(more_image.split(','));
      // console.log(JSON.parse(more_image));
    }
  }, [more_image]);


  // const deletebro =()=>{
  //   const body = JSON.stringify({
  //     product_id,
  //   });
  //   axios
  //   .post(api_url2 + "/v1/product/retrieve/specific", body, config)
  //   .then((data) => {
  //     //console.log(data.data.data, "king");
  
  //     const getSlid = data.data.data.product_specifications;
  //     //  const slipVar = getSlid.split(',');
  //     //console.log("====================================");
  //     //console.log(getSlid);
  //     //console.log("====================================");
         
  
  //     setProductDetails({
  //       product_image: data.data.data.product_image,
  //       product_name: data.data.data.product_name,
  //       product_brand: data.data.data.product_brand,
  //       product_type: data.data.data.product_type,
  //       unitCount: data.data.data.unitCount,
  //       amount: data.data.data.amount,
  //       product_duration: data.data.data.product_duration,
  //       product_category_code: data.data.data.product_category_code,
  //       product_details: data.data.data.product_detail,
  //       percentage: data.data.data.percentage,
  //       productId: data.data.data.product_id
  //       // productSpecification:slipVar[0]
  //     });
  //     // setLowNumS({prod_dur:"8"});
  
  //     //console.log("====================================");
  //     // const NumbsAr =
  //     // setLowNumS(NumbLow);
  //     // //console.log(NumbLow);
  //     //console.log(lowOutCome);
  //   })
  //   .catch((err) => {
  //     //console.log(err.response); // "oh, no!"
  //   });
    
  
        
  // }



  //console.log("====================================");
  //console.log(LowCalc);




  // const iteming = unitCount;
  const changeBg = (e) => {
    let currentId = e.currentTarget.id;
    setActiveBg(currentId);
  };


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


 

  const delete2 = (id) => {
    
    

    axios.delete(api_url2 + `/v1/product/delete/product/${id}`, null, config).then(
      (response) => {
        //console.log(response.data);
        // if (data.data.data.success === true) {

        //   return window.location.replace("/super_admin/all_products");
        // }
  
      

        // deletebro()
      }
    )
  }


    
  // const {
  //   // product_image,
  //   product_name,
  //   productId,
  //   // more_image,
  //   product_brand,
  //   product_type,
  //   unitCount,
  //   amount,
  //   product_duration,
  //   product_category_code,
  //   productSpecification,
  //   product_details,
  //   percentage,
  //   payment_type,
  // } = productDetails;

  useEffect(() => {
    const body = JSON.stringify({
      product_id,
    });
    if (auth) {

      set_user_id(auth.user.user.id);
      console.log(auth.user.user.role);
      const { role } = auth.user.user;
      if (role === "LOGISTICS") {
        setShowApproval(true)
        setAdminRole(role)
      }
      
    }

    //console.log(body);

    axios
      .post(api_url2 + "/v1/product/retrieve/specific", body, config)
      .then((data) => {
        //console.log(data.data.data, "king");

        const getSlid = data.data.data.product_specifications;
        //  const slipVar = getSlid.split(',');
        //console.log("====================================");
        //console.log(getSlid);
        //console.log("====================================");
        setSpec(getSlid);
        // const slipVar = spec.split(',');
        setMore_image(data.data.data.more_image)
        setProductDetails({
          // more_image: data.data.data.more_image,
          product_image: data.data.data.product_image,
          product_name: data.data.data.product_name,
          product_brand: data.data.data.product_brand,
          product_type: data.data.data.product_type,
          unitCount: data.data.data.unitCount,
          amount: data.data.data.amount,
          product_duration: data.data.data.product_duration,
          product_category_code: data.data.data.product_category_code,
          product_details: data.data.data.product_detail,
          percentage: data.data.data.percentage,
          productId: data.data.data.product_id
          // productSpecification:slipVar[0]
        });
        // setLowNumS({prod_dur:"8"});

        //console.log("====================================");
        // const NumbsAr =
        // setLowNumS(NumbLow);
        // //console.log(NumbLow);
        //console.log(lowOutCome);
      })
      .catch((err) => {
        //console.log(err.response); // "oh, no!"
      });
  }, []);

  useEffect(() => {
    console.log(more_image);
    if (more_image != null) {
      // let splited = JSON.parse(more_image);
      // setMoreImg(more_image);
      // console.log(more_image.split(','));
      // console.log(JSON.parse(more_image));
    }
  }, [more_image]);



  useEffect(() => {
    let assetVal = match.params.img;
    let baseVal = match.params.name;


    setAsset(assetVal);
    setBase(baseVal);

    let ticker = assetVal + "-" + baseVal;
    window.scrollTo(0, 0);
    // setImeeg(itemsId.map((log) => log.img));
    setImeeg(itemsId.firstItem.img);
    //console.log(itemsId.firstItem.img);
  }, []);

  useEffect(() => {
    axios
      .get(api_url2 + "/v1/product/retrieve/products", null, config)
      .then((data) => {
        //console.log(data.data.data, "phlip");

        setTerm(data.data.data);

        // setTerm(data.data.data)
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }, []);




  // useEffect(() => {

  //   const body = JSON.stringify({
  //     product_id :"DEMO ",
  //     route :"DEMO ",
  //     carrier :"DEMO ",
  //     narration: " THIS IS A DEMO NARRATION"

  //   })
  //   axios.post(
  //     api_url2 + "/v1/product/set/product/route",
  //     body,
  //     config
  //   ).then((data) => {
        
  //     console.log(data.data);

  //     if (data.data.success === true) {
            
  //       setShowApproval(true)
  //     }

    
  //   })
  //     .catch((err) => {

  //     })


  // }, [])

  const submitRoute = async () => {
    const config = {
      headers: {
        Accept: "*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    console.log(product_id, product_route, carrier, narration);

    const body = JSON.stringify({
      product_id, product_route, carrier, narration
    });

    //console.log(body);


    try {
      const res = await axios.post(
        api_url2 + "/v1/product/set/product/route",
        body,
        config
      );
        
        // console.log(res);
        // .then((response) => {
        //   console.log(
        //     response,
        //     ' response after order endpoint is called'
        //   );
        //   setProcessingDiv(false);
        //   setSuccessMsg(response.data.message);
        //   setOrder_id(response.data.order_id);
        //   setErrorDiv(false);
        //   setSuccessDiv(true);
        //   console.log(window.location.hostname);
        //   alert(window.location.hostname);
        // })
        // .catch((err) => {
        //   console.log(err.response);
        //   setProcessingDiv(false);
        //   setSuccessDiv(false);
        //   setErrorMsg(err.response);
        //   setErrorDiv(true);
        //   // alert(err);
        // });
    
    
      


      if (res.data.data.success === true) {
      
      
      } else {
         error_msg(res.data.data.errors[0].msg, "danger");
      
    }

      
    } catch (err) {
      console.log(err.response);

      
    }
  };

  



  


  const ID = match.params.id;

  const CalcDaysConvert = (x) => {
    x = parseInt(x);
    let result = 0;
    if (x === 5) {
      result = 12 * 30;
    } else if (x === 4) {
      result = 6 * 30;
    } else if (x === 3) {
      result = 4 * 30;
    } else if (x === 2) {
      result = 2 * 30;
    }
    return result;
  };

  const submitCallCheck = async (product_id) => {

    //console.log(product_id, 'I feel it');

    const body = JSON.stringify({
      product_id
    });
    
    axios.post(
      api_url2 + "/v1/product/approve/product",
      body,
      config
    ).then((data) => {
      // document.getElementById(product_id).remove();
        
      //console.log(data.data);

      if (data.data.success === true) {

        return window.location.replace("/super_admin/all_products");
      }

    
    })
      .catch((err) => {
        //console.log(err.response); // "oh, no!"
      });
  }
  
  

  

  const days = CalcDaysConvert(product_duration);
  // setDaysAdded(days)
  const percentDays = (percentage / 100) * days;
  // const endDate = addDays(new Date(), percentDays - 1);
  //console.log(percentDays);
  const percentMoney = (percentage / 100) * amount;

  const CalcAmtPerDay = amount / CalcDaysConvert(product_duration);
  if (ID === "1248f7f7-c2f7-49bd-9e8d-ccdb4db7b82b") {
    //console.log("Hello Mr King");
  }
  const OpenModal = () => {
    setModal(true);
  };
  const CloseModal = () => {
    setModal(false);
  };
  return (
    <div className="other2">
      {modal == false ? null : (
        <div className="checkout_main">
          <div className="checkout_modal_out" onClick={CloseModal}></div>
          {/* <Dashboard_Checkout_Page cAmount={parseInt(productDetails.amount)} click={CloseModal} /> */}
        </div>
      )}
      {/* {dataFlow.map((item)=>{return( */}
      <section className="no-bg">
        <div className="container">
          <div className="products_area">
            <div className="product_details_area1">
              <div className="details_area1_cont1">
                {' '}
            
                {moreImg.length == 0 ? (
                  <img src={product_image} className="image_carooooo" />
                ) : (
                  <ProductImageCarousel
                    img={moreImg[0]}
                    img2={moreImg[1]}
                    img3={moreImg[2]}
                  />
                )}
              </div>
              {/* ================ */}
              {/* ================ */}
              {/* ================ */}
              {/* ================ */}
              <div className="details_area1_cont2">
                {' '}
                <div className="product_details_Title">
                  {product_name}
                </div>
                <div className="product_details_code">
                  <span className="product_code_title">
                    Product Code:{' '}
                  </span>
                  {product_category_code}
                </div>
                <div
                  className="product_details_code"
                  style={{ color: '#239e54' }}
                >
                  <span className="product_code_title">Brand: </span>
                  {product_brand}
                  {/* {props.Brand} */}
                </div>
                {/* ----------------- */}
                {/* <hr className="horizontal_rule" /> */}
                {/* -------------- */}
                {/* {payment_type === 'INSTALLMENT' ? (
              <>
                <InstallmentComponent
                  initial_deposit={initial_deposit}
                  product_duration={product_duration}
                  amount={amount}
                  percentage={percentage}
                  paymentPerday={paymentPerday}
                  numberWithCommas={numberWithCommas}
                />
              </>
            ) : (
              <>
                <OutrightComponent
                  roundedAmount={amount}
                  numberWithCommas={numberWithCommas}
                />
              </>
            )} */}

                <div className="amount_item_div total_amount">
                  <span className="sub_total_txt">Price: </span> ₦
                  {numberWithCommas(parseInt(amount).toFixed())}
                </div>
                {/* ======= */}
                {/* ======= */}
                {/* ======= */}
                {/* ======= */}
                {/* <hr className="horizontal_rule" /> */}
                {/* ------- */}
                <div className="buy_now_btn_div">
                  {/* <button
                className="buy_now_button"
                onClick={openCheckoutModal}
              >
                <ShoppingCartCheckoutIcon className="payment_btn_icon" />
                Proceed to Checkout
              </button> */}
            </div>
           
                
                {
                  adminRole === 'HOD_MEDIA' ? (
                    <div className="offline_payment_div">
                        <button
                          style={{ width: "48%" }}
                          className="buy_now_button"
                      
                          onClick={ e => submitCallCheck(product_id)}
                        >
                          {product_duration !== 1 ? "Approved" : "Proceed to checkout"}
                        </button>
                      
                        <button

                          style={{ width: "48%", backgroundColor: '#e4a788' }}
                          className="buy_now_button"
                          // {/* id={productId}  */}
                          // onClick={e => submitCallCheck(asset.id)} 
                          onClick={() => delete2(productId)}
                        >
                          {product_duration !== 1 ? "Delete" : "Proceed to checkout"}
                        </button>

                    </div>                  
                  ) : (
                    <div className="offline_payment_div">
                        {/* <button
                          style={{ width: "48%" }}
                          className="buy_now_button"
                      
                          onClick={e => submitCallCheck(product_id)}
                        >
                          {product_duration !== 1 ? "Approved" : "Proceed to checkout"}
                        </button>
                      
                        <button

                          style={{ width: "48%", backgroundColor: '#e4a788' }}
                          className="buy_now_button"
                       
                          onClick={() => delete2(productId)}
                        >
                          {product_duration !== 1 ? "Delete" : "Proceed to checkout"}
                        </button> */}
                        
                        <div className="name_input1a">
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Select Route
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              name="product_route"
                              value={product_route}
                              label="Select Route"
                              // onChange={handleChange}
                              onChange={onChangeFor2}
                              // onSelect={onChangeFor2}
                            >
                             
                              <MenuItem value="RUMUKWRUSHI">To Rumukwrushi</MenuItem>
                              <MenuItem value="AGIP">To Agip</MenuItem>
                              <MenuItem value="OYIGBO">To Oyigbo</MenuItem>
                           
                            </Select>
                          </FormControl>
                        </div>
                        <div className="add_cat_input_title">
                          <span className="input_brand">Product Carrier</span>

                          <TextField
                            className=" width_incr"
                            id="outlined-basic"
                            label="Product Carrier"
                            variant="outlined"
                            name="carrier"
                            value={carrier}
                            onChange={(e) => onChangeFor(e)}
                          />
                        </div>
                        <div className="add_cat_input_title">
                          <span className="input_brand">Narration</span>

                          <TextField
                            className=" width_incr"
                            id="outlined-basic"
                            label="Narration"
                            variant="outlined"
                            name="narration"
                            value={narration}
                            onChange={(e) => onChangeFor(e)}
                          />
                        </div>
                        <span className="submit_cat_btn_div">
                          <button className="submit_cat_btn"
                            
                            onClick={submitRoute}
                          
                          >
                            
                            Submit
                          </button>
                          
                        </span>
                      
                      

                      </div>
                      
                      
                  )
                }
          
            
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
              {/* {spec.map((tree)=>( */}

              {/* <div className='my-4'>
                  {spec.map((tree)=>(
                    <span style={{display:'flex',flexDirection:'column'}}>{tree}</span>
                  ))}
                </div> */}

              <div className="description_body">
                <div className="description_table">
                  <table class="_3a09a_1e-gU">
                    <tbody>
                      {spec.map((apple) => (<tr>
                        {/* <td>Colour</td> */}
                        <td>{apple}</td>
                        
                      </tr>))}
                    
                    </tbody>
                  </table>
                </div>
                {/* ====== */}
                {/* ====== */}
              </div>

            
              {/* ====== */}
              {/* ====== */}
              {/* </div> */}

              {/* ))} */}
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
                    {term.map((asset) => (
                   
                      <a
                        href={`/dashboard/products/details/${asset.id}/${asset.product_name.replace(/\s+/g, '-')}`}
                      >
                        <li className="carous_list">
                          <div
                            className="storeTiles_storeTileContainer__HoGEa"
                            style={{
                              backgroundImage: `url(${asset.product_image
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
                                save now
                              </button>
                              <button className="items_remaining_btn2">
                                20% off
                              </button>
                            </div>
                            <div className="storeTiles_storeTileBottomContainer__2sWHh">
                              <div className="asset_name">
                                {asset.product_name}
                              </div>
                              <div className="asset_title">
                                {asset.unitCount}
                                {asset.unitCount === 1
                                  ? "item left"
                                  : asset.unitCount <= 1
                                    ? "no item left"
                                    : asset.unitCount > 1
                                      ? "items left"
                                      : null}
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
            {detailsModal == true ? (
              <div className="detailsModal">
                <div className="detailsModalSection1">
                  <div className="bacKbutton" onClick={closeDetailModal}>
                    Previous
                    <ArrowForwardIosIcon className="arrow_back" />
                  </div>
                  <div className="detailsModalSection1_area1">
                    <div className="delivery_title1">
                      Delivery / Pickup Options
                    </div>
                    <div className="delivery_cards_section">
                      <div className="delivery_card1">
                        <div className="delivery_card_title">
                          Deliver to me{" "}
                          <button className="button_change_delivery_address">
                            Change Address
                          </button>
                        </div>
                        <div className="delivery_card_body">
                          <div className="delivery_card_body_cont1">
                            Samuel Ifeanyi
                          </div>
                          <div className="delivery_card_body_cont1">
                            62 Harold Wilson Drive, Borokiri, RV, Port Harcourt,
                            Rivers
                          </div>
                          <div className="delivery_card_body_cont1">
                            08164020234
                          </div>
                        </div>
                      </div>
                      {/* ============= */}
                      {/* ============= */}
                      {/* ============= */}
                      {/* ============= */}
                      <div className="delivery_card2">
                        <div className="delivery_card_title">
                          Pickup from our agents
                          <button className="button_change_delivery_address pickup_btn">
                            Select Pickup Location
                          </button>
                        </div>
                        <div className="delivery_card_body">
                          <div className="delivery_card_body_cont1">
                            Select a pickup location in your area from our 32
                            locations nationwide.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="detailsModalSection1_area2">
                    <div className="detailsModalSection1-area2_title">
                      Review Order
                    </div>
                    <div className="review_order_div">Delivery 1 of 1</div>
                    <div>
                      <div class="save_prod_deta">
                        <table className="save_item_table">
                          <thead className="assets-category-titles">
                            <tr className="assets">
                              <th className="assets-category-titles-heading1">
                                Item
                              </th>
                              <th className="assets-category-titles-heading1">
                                Item Details
                              </th>
                              <th className="assets-category-titles-heading1 quant">
                                Amount daily
                              </th>
                              {/* <th className="assets-category-titles-heading1 quant">
                              Unit Price
                            </th> */}
                              <th className="assets-category-titles-heading1_last">
                                Sub Total
                              </th>
                            </tr>
                          </thead>

                          <tbody
                            className="save_items_cat popular-categories"
                            id="popular-categories"
                          >
                            {" "}
                            <tr className="assets-category-row">
                              <td className="save_item_data">
                                <div className="assets-data height_data">
                                  <img
                                    src={product_image}
                                    alt=""
                                    className="save_item_img_img"
                                  />
                                </div>
                              </td>
                              {/* ======== */}
                              {/* ======== */}
                              {/* ======== */}
                              {/* ======== */}
                              <td className="save_item_data1">
                                <div className="save_items_details">
                                  <div className="save_items_details1">
                                    {product_name}
                                  </div>
                                  <div className="save_item_days_left">
                                    {unitCount} days left
                                    <div className="days_left_percentage_cont">
                                      <span
                                        className="days_left_percentage"
                                        style={{
                                          width:
                                            100 % -((amount * 100) / unitCount),
                                        }}
                                      ></span>
                                    </div>
                                  </div>
                                  <div className="save_total_locked_amount">
                                    <span className="items_left_amount">
                                      Total Amount Locked on Item
                                    </span>
                                    #{initialDeposit}
                                  </div>
                                </div>
                              </td>
                              <td className="save_item_data1b">
                                <div className="assets-data-name_last">
                                  #{dailyAmount}
                                </div>
                              </td>
                              {/* <td className="save_item_data1b">
                                <div className="assets-data-name center_name">
                                  #{amount}
                                </div>
                              </td> */}
                              <td className="save_item_data1b">
                                <div className="assets-data-name_last">
                                  #{amount * unitCount}
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="detailsModalSection2">
                  <div className="details_modal_divv">
                    <div className="cart_area2_heading">Payment Options</div>
                    <div className="cart_area2_select">
                      <div className="wit_card">
                        Pay via card{" "}
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          classNam="checkBox"
                        />
                      </div>
                    </div>
                    <div className="cart_area2_select border_down">
                      <div className="wit_card">
                        Pay via wallet{" "}
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          classNam="checkBox"
                        />
                      </div>
                    </div>
                    {/* ========= */}
                    {/* ========= */}
                    {/* ========= */}
                    <div className="cart_area2_notes">
                      . No minimum or maximum order.
                      <br />
                      . Make sure your card is still valid.
                      <br />. Ensure sufficient balance to cover this
                      transaction.
                    </div>
                    {/* ========== */}
                    {/* ========== */}
                    {/* ========== */}
                    {/* ========== */}
                    <div className="sub_total_div">
                      Sub Total:{" "}
                      <span className="sub_total_div_span">{amount * unitCount}</span>
                    </div>
                    {/* ========== */}
                    {/* ========== */}
                    {/* ========== */}
                    {/* ========== */}
                    <div className="sub_total_div">
                      Delivery Fee:{" "}
                      <span className="sub_total_div_span">₦0</span>
                    </div>
                    {/* ========== */}
                    {/* ========== */}
                    <div className="secure_transac_text">
                      {" "}
                      Transactions are 100% Safe and Secure
                    </div>
                    {/* ========== */}
                    {/* ========== */}
                    <div className="transac_secure_div">
                      Total <span className="sub_total_div_span">{amount * unitCount}</span>
                    </div>
                    {/* ========== */}
                    {/* ========== */}

                    <button className="checkout_btn1a" onClick={OpenModal}>
                      Proceed to Checkout{" "}
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
      {/* )})} */}
       {/* {ProcessingDiv == false ? null : (
        <div className="processing_transac_div">
          <LoadingIcons.Bars fill="#229e54" />
          Processing Transaction...
        </div>
      )}
      {successDiv == true ? (
        <div className="processing_transac_div insufficient">
          <Success_Error_Component
            remove_success_div={closeCheckoutOptions}
            btn_txt="Continue"
            // msg={success_msg}
            msg={`${success_msg} Order-Id: ${order_id}`}
            errorMsgDiv={errorDiv}
            link_btn={true}
            src="/dashboard/savings"
          />
        </div>
      ) : null}
      {errorDiv == false ? null : (
        <div className="processing_transac_div insufficient">
          <Success_Error_Component
            // remove_success_div={() => setErrorDiv(true)}
            btn_txt="Fund Wallet"
            msg={error_msg}
            errorMsgDiv={errorDiv}
            link_btn={true}
            src="/dashboard/wallet"
          />
        </div>
      )} */}

    </div>
    

  );
    

                            

    }


  const mapStateToProps1 = (state) => ({
    auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated,
    cart: state.shop.cart,
  });
  

export default connect(mapStateToProps1)(ItemDetailsPage);
