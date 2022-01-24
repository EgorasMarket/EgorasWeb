import React, { useState, useEffect, useCallback } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Carousel from "react-multi-carousel";
import "../../../../css/itemsDetailsPage.css";
import axios from "axios";
import {PRODUCT_LOADED,API_URL2 as api_url2} from "../../../../actions/types"
import { connect } from "react-redux";

function ItemDetailsPage({ match}) {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
  };
  const [spec,setSpec]=useState([]);
  const [product_id, setProductId] = useState(match.params.id)
  const [asset, setAsset] = useState("");
 
  const [maxDuration, setmaxDuration] = useState(25);
  const [base, setBase] = useState("");
  // const [base1, setBase1] = useState("");
  const [disable, setDisable] = useState(false);
  const [disable2, setDisable2] = useState(false);
  const [productCode, setProductCode] = useState(475758);
  const [productPrice, setProductPrice] = useState("400,000");
  const [BrandCode, setBrandCode] = useState("Samsung");
  const [count, setCount] = useState(0);
  const [imeeg, setImeeg] = useState("");

  const [activeBg, setActiveBg] = useState("descript");

  const [dataFlow,setDataFlow]=useState([]);
  const [term,setTerm]=useState([]);

  const [productDetails, setProductDetails] = useState({
    
    product_image: "",
    product_name: "",
    product_brand:"",
    Product_type:"",
    unitCount:"",
    amount:"",
    product_duration:"",
    product_category_code:"",
    product_details:"",
    productSpecification:""
    
  })


  const { product_image,product_name ,
  
  product_brand,
  product_type,
  unitCount,
  amount,
  product_duration,
  product_category_code,
  productSpecification,
  product_details
}= productDetails;

  useEffect(() => {

    const body = JSON.stringify({
      product_id
    });

    console.log(body);
  
    axios.post(
        api_url2 + "/v1/product/retrieve/specific",
        body,
        config
    ).then((data) => {
       
        console.log(data.data.data, "king");

      
       
     const getSlid = data.data.data.product_specifications;
    //  const slipVar = getSlid.split(',');
    console.log('====================================');
    console.log(getSlid);
    console.log('====================================');
    setSpec(getSlid)
    // const slipVar = spec.split(',');

        setProductDetails({
          product_image: data.data.data.product_image,
          product_name: data.data.data.product_name ,
          product_brand:data.data.data.product_brand,
          product_type:data.data.data.product_type,
          unitCount:data.data.data.unitCount,
          amount:data.data.data.amount,
          product_duration:data.data.data.product_duration,
          product_category_code:data.data.data.product_category_code,
          product_details:data.data.data.product_detail,
          // productSpecification:slipVar[0]
        })

        // console.log(amount,"rent");

        // setSpec(data.data.data.Product_specification);
        // console.log(product_specification)

        // setDataFlow(data.data.data)
       
        // console.log(product_name,"samuel Une")

    }).catch((err) => {
        console.log(err.response); // "oh, no!"
    })
  }, []);


// const food = spec[0].split('');
// console.log(food[0])

const [itemsLeft, setItemsLeft] = useState(2);

// const iteming = unitCount;

console.log('====================================');
console.log(spec);
console.log(productDetails)
console.log('====================================');
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

    if ((unitCount <= 1) || (count >= unitCount) ||(count === unitCount)){
      setDisable(true);
    }else{
      setDisable(false);
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

    if ((unitCount <= 1) || (count < 1)){
      setDisable2(true);
    }else{
      setDisable2(false);
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



  useEffect(() => {
  
    axios.get(
        api_url2 + "/v1/product/retrieve/products",
        null,
        config
    ).then((data) => {
       
        console.log(data.data.data, "phlip");
     
       
        // setTerm(data.data.data)

       
      })
      .catch((err) => {
        console.log(err); // "oh, no!"
      });

    
  }, []);


  const ID = match.params.id;

  if(ID=== "1248f7f7-c2f7-49bd-9e8d-ccdb4db7b82b"){
    console.log('Hello Mr King')
  }


 

  return (
    <div className="other2">
      {/* {dataFlow.map((item)=>{return( */}
      <section className="no-bg">
        <div className="container">
          <div className="products_area">
            <div className="product_details_area1">
              <div className="details_area1_cont1">
                {" "}
                <img src={api_url2+'/'+product_image} alt="" className="product_details_img" />
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
                  {product_category_code}
                </div>
                <div
                  className="product_details_code"
                  style={{ color: "#239e54" }}
                >
                  <span className="product_code_title">Brand: </span>
                  {product_brand}
                  {/* {props.Brand} */}
                  
                </div>
                {/* ----------------- */}
                {/* <hr className="horizontal_rule" /> */}
                {/* -------------- */}
                <div className="product_details_price">₦{amount}</div>
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
                    <span className="items_left_numb">{unitCount} { unitCount === 1 ? "item" : (unitCount < 1) ? " ":"items"}</span>
                  </div>
                  <div className="items_left_div">
                    Savings max-duration:{" "}
                    <span className="days_left_numb">{product_duration} {product_duration === 1 ? "month":product_duration <= 0 ? "" : "months"}</span>
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
                      <tr>
                        {/* <td>Colour</td> */}
                        <td>{spec[0]}</td>
                      </tr>
                      <tr>
                        {/* <td>Warranty Period</td> */}
                        <td>{spec[1]}</td>
                      </tr>
                      {/* <tr>
                       <td>
                       {tree[0]}
                       </td>
                      </tr> */}
                      <tr>
                        {/* <td>Brand</td> */}
                        <td>
                          {spec[2]}
                        </td>
                      </tr>
                      <tr>
                        {/* <td>Display Features</td> */}
                        <td>{spec[3]}</td>
                      </tr>
                      <tr>
                        {/* <td>Display Technology</td> */}
                        <td>{spec[4]}</td>
                      </tr>
                      <tr>
                        {/* <td>TV Screen Size</td> */}
                        <td>{spec[5]}</td>
                      </tr>
                      {/* <tr> */}
                        {/* <td>Television 3D Technology</td> */}
                        {/* <td>{spec[6]}</td> */}
                      {/* </tr> */}

                      {/* <tr> */}
                        {/* <td>Resolution</td> */}
                        {/* <td>{spec[7]}</td> */}
                      {/* </tr> */}
                      {/* <tr> */}
                        {/* <td>Intended Display Use</td> */}
                        {/* <td>{spec[8]}</td> */}
                      {/* </tr> */}
                      {/* <tr> */}
                        {/* <td>Television Screen Type</td> */}
                        {/* <td>{spec[9]}</td> */}
                      {/* </tr> */}
                      {/* <tr> */}
                        {/* <td>Television Refresh Rate</td> */}
                        {/* <td>{spec[10]}</td> */}
                      {/* </tr> */}
                    </tbody>
                  </table>
                </div>
                {/* ====== */}
                {/* ====== */}
              </div>


              {/* <div className='my-4'>
                  {spec.map((tree)=>(
                    <span style={{display:'flex',flexDirection:'column'}}>{tree}</span>
                  ))}
                </div> */}
              {/* <div className="description_body">
                <div className="description_table">
                  <table class="_3a09a_1e-gU">
                    <tbody>
                      <tr>
                        <td>Colour</td>
                        <td>{spec[0]}</td>
                      </tr>
                      <tr>
                        <td>Warranty Period</td>
                        <td>6 Months</td>
                      </tr> */}
                      {/* <tr>
                       <td>
                       {tree[0]}
                       </td>
                      </tr> */}
                      {/* <tr>
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
                </div> */}
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
                      <a href={`/products/details/${asset.id}/${asset.product_name}`}>
                        <li className="carous_list">
                          <div
                            className="storeTiles_storeTileContainer__HoGEa"
                            style={{
                              backgroundImage: `url(${api_url2+'/'+asset.product_image})`,
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
      {/* )})} */}
    </div>
  );
}

// const mapStateToProps1 = (state) => ({
//   auth: state.auth,
//   isAuthenticated: state.auth.isAuthenticated,
// })

export default  ItemDetailsPage;
