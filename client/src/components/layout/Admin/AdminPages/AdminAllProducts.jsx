import React, { useState, useEffect, useMemo } from "react";
// import data from "../../../../Data/AllUsersData.json";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import {
  API_URL2 as api_url2,
} from "../../../../actions/types";
import "../AdminStyles/admin_all_products.css";
const data = [
  {
    id: 1,
    first_name: "Isac",
    last_name: "Tooher",
    email: "itooher1@psu.edu",
    phone: "655-567-3619",
  },
];

const way = window.location.pathname;

let PageSize = 10;
const AdminAllProducts = () => {
  const [itemdisplay,setItemDisplay] = useState([]);
  const [rolesInfo,setRolesInfo]= useState({
    role20:""
  })


  const {role20} = rolesInfo
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };



  useEffect(() => {
  
    axios.get(
        api_url2 + "/v1/product/retrieve/new/products",
        null,
        config
    ).then((data) => {
       
        console.log(data.data.data, "chukwubuike");
     
       
        setItemDisplay(data.data.data);

      })
      .catch((err) => {
        console.log(err); // "oh, no!"
      });

    
  }, []);


      
  useEffect(() => {
  
    axios.get(
        api_url2 + "/v1/admin/info",
        null,
        config
    ).then((data) => {
       
        console.log(data.data.user, "line_ful");
        setRolesInfo({
          role20:data.data.user.role,
        })
       
    
      })
      .catch((err) => {
        console.log(err); // "oh, no!"
      }); 
  }, []);


  const submitCallCheck = async (product_id) => {

    console.log(product_id, 'I feel it');

    const body = JSON.stringify({
      product_id
    });
    
    axios.post(
      api_url2 + "/v1/product/approve/product",
      body,
      config
      ).then((data) => {
        document.getElementById(product_id).remove();
        
          console.log(data.data);
    
        })
        .catch((err) => {
          console.log(err.response); // "oh, no!"
        });


    // var elem = document.getElementById('btn_' + loanId);

    // elem.innerHTML = "Sending...";

    // let res = await sendCustomerResponse({ feedback, loanId })
    // console.log(res);

    // if (res === undefined) {
      
    // } else {
    //     if (res.success == true) {
           
    //         document.getElementById('yes_'+productID).remove();

    //     }
    // }

}

  return (
    <>
         {/* {(role20 === "HOD_MEDIA") && (way ===  "/super_admin/all_products" )? */}
    <div className="other2">
      <section className="no-bg">
      <div className="container">
          <div className="cart_areas">
            <div className="cart_area1">
              <div className="cart_item_num">
                All Products
              </div>
              <div className="locked_items2 locked_items2a">
                <div class="save_prod_deta">
                  <table className="save_item_table">
                    <thead className="assets-category-titles">
                      <tr className="assets">
                        <th className="assets-category-titles-heading1">
                          Image
                        </th>
                        <th className="assets-category-titles-heading1">
                          Name
                        </th>
                        <th className="assets-category-titles-heading1">
                          Brand
                        </th>
                        <th className="assets-category-titles-heading1 quant">
                          Category
                        </th>
                        {/* <th className="assets-category-titles-heading1 quant">
                          Unit Price
                        </th> */}
                        <th className="assets-category-titles-heading1_last">
                          Price
                        </th>
                        <th className="assets-category-titles-heading1_last">
                          Action
                        </th>
                      </tr>
                    </thead>

                    {itemdisplay.map((asset) => (
                      <tbody
                        className="save_items_cat  small_height popular-categories"
                        id="popular-categories"
                      >
                        {" "}
                        <tr id={asset.id} className="assets-category-row">
                          <td className="save_item_data_cart small_height">
                            <div className="assets-data height_data height_data1">
                              <img
                                src={`${api_url2}/${asset.product_image}`}
                                alt=""
                                className="save_item_img_img"
                              />
                            </div>
                          </td>
                         
                          <td className="save_item_data1" style={{width: 'unset'}}>
                            <div className="save_items_detailssss">
                              <div className="save_items_details1 small_tetxt">
                                {asset.product_name}
                              </div>
                              
                            </div>
                          </td>
                          <td className="save_item_data1b">
                            <div className="assets-data-name center_name">
                              {asset.product_brand}
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
                             <a href={`/super_admin/all_products_view/${asset.id}/${asset.product_name}`} >
                            <button id={'yes_' + asset.id}  className="checkout_btn1 py-1 px-2 m-0">
                            {/* <button id={'yes_' + asset.id} onClick={e => submitCallCheck(asset.id)} className="checkout_btn1 py-1 px-2 m-0"> */}
                              View detail{" "}
                            </button>
                            </a>
                        
                            {/* <button className="checkout_btn1 py-1 px-2 ml-1">
                              Refuse{" "}
                            </button> */}
                          </td>
                         
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
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

export default AdminAllProducts;
