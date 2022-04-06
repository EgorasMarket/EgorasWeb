import React, { useState, useEffect, useMemo } from "react";
// import data from "../../../../Data/AllUsersData.json";
import { numberWithCommas } from "../../../../static";

import axios from "axios";
import { API_URL2 as api_url2 } from "../../../../actions/types";
import "../AdminStyles/admin_all_products.css";

const way = window.location.pathname;

const ProductRoutes = () => {
  const [pdwork, setpdwork] = useState([]);
  const [rolesInfo, setRolesInfo] = useState({
    role20: "",
  });

  const { role20 } = rolesInfo;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    axios
      .get(api_url2 + "/v1/product/retrieve/approved/products", null, config)
      .then((data) => {
        console.log(data.data.data, "chukwubuike");

        setpdwork(data.data.data);
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }, []);

  useEffect(() => {
    axios
      .get(api_url2 + "/v1/admin/info", null, config)
      .then((data) => {
        //console.log(data.data.user, "line_ful");
        setRolesInfo({
          role20: data.data.user.role,
        });
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }, []);

  const printProductCode = (product_code) => {
    let today = new Date().toLocaleDateString();

    console.log(product_code);

    // const getName = tag.split(" ");
    // console.log(getName);
    // tag.replaceAll(' ', '')
    // var divContents = document.getElementById("mainContent").innerHTML;

    var printWindow = window.open("", "", "height=1200,width=1200");
    printWindow.document.write(
      "<html><head><style>.small-text{font-size: 12px;}table.GeneratedTable {width: 100%;background-color: #ffffff; border-collapse: collapse; border-width: 1px; border-color: #000000; border-style: solid; color: #000000;}table.GeneratedTable td, table.GeneratedTable th { border-width: 1px; border-color: #000000; border-style: solid;}.center-text{text-align: center;} .center-text h4{margin: 4px;}.set-flex {display: flex; justify-content: space-between;}.w-50{width: 45%;margin:5px;}.bbt{border-bottom: 1px solid black;}</style><title>PRINT PRODUCT ID</title></head>"
    );
    printWindow.document.write(
      '<body style="margin-top: 15px;margin-bottom: 45px;height: min-content;font-family: roboto;margin-right: 25px;  border-bottom: 1px solid black;font-weight:400;">'
    );
    // printWindow.document.write('<h2 style="margin-bottom: 5px">Companys Copy:</h2>');
    printWindow.document.write(
      '<div style="text-align: center;padding: 20px;">'
    );
    printWindow.document.write("<h3>Product ID</h3>");
    printWindow.document.write("<h1>" + product_code + "</h1>");
    printWindow.document.write("</div>");
    printWindow.document.write("</body>");
    printWindow.document.write("</html>");
    printWindow.document.close();
    printWindow.print();
  };

  const printProductPrice = (product_name, amount) => {
    let today = new Date().toLocaleDateString();

    console.log(product_name, amount);

    // const getName = tag.split(" ");
    // console.log(getName);
    // tag.replaceAll(' ', '')
    // var divContents = document.getElementById("mainContent").innerHTML;

    var printWindow = window.open("", "", "height=1200,width=1200");
    printWindow.document.write(
      "<html><head><style>.small-text{font-size: 12px;}table.GeneratedTable {width: 100%;background-color: #ffffff; border-collapse: collapse; border-width: 1px; border-color: #000000; border-style: solid; color: #000000;}table.GeneratedTable td, table.GeneratedTable th { border-width: 1px; border-color: #000000; border-style: solid;}.center-text{text-align: center;} .center-text h4{margin: 4px;}.set-flex {display: flex; justify-content: space-between;}.w-50{width: 45%;margin:5px;}.bbt{border-bottom: 1px solid black;}</style><title>PRINT PRODUCT ID</title></head>"
    );
    printWindow.document.write(
      '<body style="margin-top: 15px;margin-bottom: 45px;height: min-content;font-family: roboto;margin-right: 25px;  border-bottom: 1px solid black;font-weight:400;">'
    );
    // printWindow.document.write('<h2 style="margin-bottom: 5px">Companys Copy:</h2>');
    printWindow.document.write(
      '<div style="text-align: center;padding: 20px;">'
    );
    printWindow.document.write("<h2>Product Price</h2>");
    printWindow.document.write("<h1>₦" + amount + "</h1>");
    printWindow.document.write("<h2>" + product_name + "</h2>");
    printWindow.document.write("</div>");
    printWindow.document.write("</body>");
    printWindow.document.write("</html>");
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <>
      {/* {(role20 === "HOD_MEDIA") && (way ===  "/super_admin/all_products" )? */}
      <div className="other2">
        <section className="no-bg">
          <div className="container">
            <div className="cart_areas">
              <div className="cart_area1">
                <div className="cart_item_num">All Products</div>
                <div className="locked_items2 locked_items2a">
                  <div class="save_prod_deta">
                    <table className="save_item_table">
                      {/* <table className="save_item_table" style={{display: 'unset'}}> */}
                      <thead className="assets-category-titles">
                        <tr className="assets">
                          <th className="assets-category-titles-heading1">
                            Image
                          </th>
                          <th className="assets-category-titles-heading1">
                            Name
                          </th>

                           <th className="assets-category-titles-heading1">
                            Product id
                          </th>

                           <th className="assets-category-titles-heading1">
                            Description
                          </th>



                          {/* <th className="assets-category-titles-heading1 quant">
                          Category
                        </th> */}
                          {/* <th className="assets-category-titles-heading1 quant">
                          Unit Price
                        </th> */}
                          <th className="assets-category-titles-heading1_last">
                            Price
                          </th>
                        </tr>
                      </thead>

                      {pdwork.slice(0, 50).map((asset, index) => (
                        // <tbody
                        //   className="save_items_cat  small_height popular-categories"
                        //   id="popular-categories"
                        //   key={index.toString()}
                        // >
                        //   {" "}
                        //   <tr id={asset.id} className="assets-category-row">
                        //     <td className="save_item_data_cart small_height">
                        //       <div className="assets-data height_data height_data1">
                        //         <img
                        //           src={`${asset.product_image}`}
                        //           alt=""
                        //           className="save_item_img_img"
                        //         />
                        //       </div>
                        //     </td>

                        //     <td
                        //       className="save_item_data1"
                        //       style={{ width: "unset" }}
                        //     >
                        //       <div className="save_items_detailssss">
                        //         <div className="save_items_details1 small_tetxt">
                        //           {asset.product_name}
                        //         </div>
                        //       </div>
                        //     </td>

                        //     {/* <td className="save_item_data1b">
                        //     <div className="assets-data-name center_name">
                        //       {asset.product_category_desc}
                        //     </div>
                        //   </td> */}

                        //     <td className="save_item_data1b">
                        //       <div className="assets-data-name center_name">
                        //         ₦{asset.amount}
                        //       </div>
                        //     </td>

                        //     <td className="save_item_data1b">
                        //       {/* <div className="assets-data-name center_name">
                        //       ₦{asset.amount}
                        //     </div> */}
                        //       {/* <button id={'yes_' + asset.id} onClick={e => submitCallCheck(asset.id)} className="checkout_btn1 py-1 px-2 m-0"> */}
                        //       <a>
                        //         <button
                        //           id={"yes_" + asset.id}
                        //           onClick={() =>
                        //             printProductPrice(
                        //               asset.product_name,
                        //               asset.amount
                        //             )
                        //           }
                        //           className="checkout_btn1 py-1 px-2 m-0"
                        //         >
                        //           {/* <button id={'yes_' + asset.id} onClick={e => submitCallCheck(asset.id)} className="checkout_btn1 py-1 px-2 m-0"> */}
                        //           Print product Print{" "}
                        //         </button>
                        //       </a>

                        //       {/* <button className="checkout_btn1 py-1 px-2 ml-1">
                        //       Refuse{" "}
                        //     </button> */}
                        //     </td>
                        //     <td className="save_item_data1b">
                        //       {/* <div className="assets-data-name center_name">
                        //       ₦{asset.amount}
                        //     </div> */}
                        //       {/* <button id={'yes_' + asset.id} onClick={e => submitCallCheck(asset.id)} className="checkout_btn1 py-1 px-2 m-0"> */}
                        //       <a>
                        //         <button
                        //           id={"yes_" + asset.id}
                        //           onClick={() =>
                        //             printProductCode(asset.product_code)
                        //           }
                        //           className="checkout_btn1 py-1 px-2 m-0"
                        //         >
                        //           {/* <button id={'yes_' + asset.id} onClick={e => submitCallCheck(asset.id)} className="checkout_btn1 py-1 px-2 m-0"> */}
                        //           Print product ID{" "}
                        //         </button>
                        //       </a>

                        //       {/* <button className="checkout_btn1 py-1 px-2 ml-1">
                        //       Refuse{" "}
                        //     </button> */}
                        //     </td>
                        //   </tr>
                        // </tbody>
                         <tbody
                          className="save_items_cat popular-categories"
                          id="popular-categories"
                          key={index.toString()}
                        >
                          {" "}
                          <tr
                            id={asset.id}
                            className="assets-category-row saving_assets_row"
                          >
                            <td className="save_item_data width_thin">
                              <div className="assets-data height_data">
                                <img
                                  src={`${asset.product_image}`}
                                  alt=""
                                  className="save_item_img_img"
                                />
                              </div>
                            </td>

                            <td className="save_item_data1">
                              <div className="save_items_details">
                                <div className="save_items_details1">
                                  {asset.product_name}
                                </div>
                              </div>
                            </td>
                            <td className="save_item_data1b">
                              <div className="assets-data-name center_name">
                                {asset.id}
                              </div>
                            </td>
                            <td className="save_item_data1b">
                              <div className="assets-data-name center_name">
                                {asset.product_category_desc}
                              </div>
                            </td>

                            <td className="save_item_data1b">
                              <div className="assets-data-name center_name">
                                ₦{asset.amount}
                              </div>
                            </td>

                            <td className="save_item_data1b">
                              {/* <div className="assets-data-name center_name">
                              ₦{asset.amount}
                            </div> */}
                              {/* <button id={'yes_' + asset.id} onClick={e => submitCallCheck(asset.id)} className="checkout_btn1 py-1 px-2 m-0"> */}
                                                           <a>
                                <button
                                  id={"yes_" + asset.id}
                                  onClick={() =>
                                    printProductPrice(
                                      asset.product_name,
                                      asset.amount
                                    )
                                  }
                                  className="checkout_btn1 py-1 px-2 m-0"
                                >
                                  {/* <button id={'yes_' + asset.id} onClick={e => submitCallCheck(asset.id)} className="checkout_btn1 py-1 px-2 m-0"> */}
                                  Print product Print{" "}
                                </button>
                              </a>
                              {/* <button className="checkout_btn1 py-1 px-2 ml-1">
                              Refuse{" "}
                            </button> */}
                            </td>

                            <td className="save_item_data1b">
                              {/* <div className="assets-data-name center_name">
                              ₦{asset.amount}
                            </div> */}
                              {/* <button id={'yes_' + asset.id} onClick={e => submitCallCheck(asset.id)} className="checkout_btn1 py-1 px-2 m-0"> */}
                                   <a>
                                <button
                                  id={"yes_" + asset.id}
                                  onClick={() =>
                                    printProductCode(asset.product_code)
                                  }
                                  className="checkout_btn1 py-1 px-2 m-0"
                                >
                                  {/* <button id={'yes_' + asset.id} onClick={e => submitCallCheck(asset.id)} className="checkout_btn1 py-1 px-2 m-0"> */}
                                  Print product ID{" "}
                                </button>
                              </a>                          
                               
                            </td>

                            <td className="save_item_data1b" >
                              
                              {/* <div className="assets-data-name center_name">
                              ₦{asset.amount}
                            </div> */}
                              {/* <button id={'yes_' + asset.id} onClick={e => submitCallCheck(asset.id)} className="checkout_btn1 py-1 px-2 m-0"> */}
                                   <a>
                                <button
                                  id={"yes_" + asset.id}
                                  
                                  className="checkout_btn1 py-1 px-2 m-0"
                                >
                                  {/* <button id={'yes_' + asset.id} onClick={e => submitCallCheck(asset.id)} className="checkout_btn1 py-1 px-2 m-0"> */}
                                  Completed{" "}
                                </button>
                              </a>                          
                               
                            </td>
                             
                             
                  
                  
                
                          </tr>
                        </tbody>
                      ))}
                    </table>
                  </div>
                  {/* <div style={{float:"right",backgroundColor:"#41ba71",color:"white",padding:"8px 10px",borderRadius:"6px",marginTop:"5px"}}>See More</div> */}
                  {/* <div className="total_div">
                  Total: <span className="sum_resu"> ₦{'bnbnbn'}</span>
                </div> */}
                </div>
                <div className="checkout_btns">
                  {/* <button className="checkout_btn1" onClick={OpenModal}>
                  Proceed to Checkout{" "}
                </button> */}
                </div>
              </div>
              {/* <div className="cart_area2"></div> */}
            </div>
          </div>
        </section>
      </div>
      {/* :null} */}
    </>
  );
};

export default ProductRoutes;
