import React, { useState, useEffect } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import "../DashboardStyles/dashboardCart.css";
import { connect } from "react-redux";
import UserCardPin from "./UserCardPin";
// import {retrieveCart, allCart} from '../../../../../actions/shop'
import { allCart } from "../../../../../actions/shop";
import axios from "axios";
import { API_URL2 as api } from "../../../../../actions/types";
import { useDispatch } from "react-redux";
// import dashboardCheckout from "./dashboardCheckout";
// import dashboardCheckout from "./dashboardCheckout";
import Dashboard_Checkout_Page from "./Dashboard_Checkout_Page";

const DashboardCart = ({ cart, auth }) => {
  const dispatch = useDispatch();
  const [savedNum, setSavedNum] = useState(5);
  const [modal, setModal] = useState(false);
  const [cartData, setCartData] = useState([]);

  const result = cart.reduce(
    (total, currentValue) =>
      (total = parseInt(total) + parseInt(currentValue.sub_total)),
    0
  );
  const OpenModal = () => {
    setModal(true);
  };

  const CloseModal = () => {
    setModal(false);
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  useState(() => {
    // console.log(body.payload);
  }, []);

  // const fetchFromCart = async (customer_id) => {
  //   console.log('fetchfromCart', customer_id);
  //   let call = await axios.get(`${api}/v1/cart/get/${customer_id}`).catch((err) => {
  //     console.log("error from dashboardcart", err.message);
  //   });
  //   setCartData(call.data.data)

  //   console.log(call.data.data, 'async call ');
  //   dispatch(allCart(call.data.data))
  //   // dispatch(allCart(call)) // use this to send to the redux store
  // }

  const deleteFromCart = async (product_id) => {
    console.log("deleteFromcart", product_id);

    let call = await axios
      .delete(`${api}/v1/cart/delete`, config, product_id)
      .then((response) => {
        console.log("item deleted successfully");
        alert("item deleted successfully");
      })
      .catch((err) => {
        console.log("error from dashboardcart", err.message);
        alert("item already deleted or not found");
      });
  };

  // useEffect(() => {

  //   if (auth.user !== null){
  //     let decodedUser = auth.user;
  //     let customer_id = decodedUser.user.id ;
  //     console.log('run all the async funtion from here ', customer_id)

  //     console.log(cart)

  //     fetchFromCart(customer_id);
  //   }

  // }, [cart , auth]);

  return (
    <div className="other2">
      {modal == false ? null : (
        <div className="checkout_main">
          <div className="checkout_modal_out" onClick={CloseModal}></div>
          <Dashboard_Checkout_Page cAmount={result} click={CloseModal} />
        </div>
      )}

      <section className="no-bg">
        <div className="container">


          <div className="cart_areas">
            <div className="cart_area1">
              <div className="cart_item_num">
                Cart <span className="cart_num_num">({cart.length} items)</span>
              </div>
              <div className="locked_items2">
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
                          Quantity
                        </th>
                        <th className="assets-category-titles-heading1 quant">
                          Unit Price
                        </th>
                        <th className="assets-category-titles-heading1_last">
                          Sub Total
                        </th>
                      </tr>
                    </thead>

                    {cart.map((asset) => (
                      <tbody
                        className="save_items_cat  small_height popular-categories"
                        id="popular-categories"
                      >
                        {" "}
                        <tr className="assets-category-row">
                          <td className="save_item_data_cart small_height">
                            <div className="assets-data height_data height_data1">
                              <img
                                src={`${api}/${asset.image}`}
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
                            <div className="save_items_detailssss">
                              <div className="save_items_details1 small_tetxt">
                                {asset.product_name}
                              </div>
                              <div className="save_total_locked_amount smallll_txxt">
                                <span className="items_left_amount">
                                  Total Items Left
                                </span>
                                {asset.total_items} items
                              </div>
                              <div
                                onClick={() => {
                                  deleteFromCart(asset.product_id);
                                  alert(asset.product_id);
                                }}
                                className="remove_from_cart_div"
                              >
                                <DeleteIcon className="delete_icon" />
                                Remove
                              </div>
                            </div>
                          </td>
                          <td className="save_item_data1b">
                            <div className="assets-data-name center_name">
                              {asset.quantity}
                            </div>
                          </td>
                          <td className="save_item_data1b">
                            <div className="assets-data-name center_name">
                              ₦{asset.item_amount}
                            </div>
                          </td>
                          <td className="save_item_data1b">
                            <div className="assets-data-name_last">
                              ₦{asset.sub_total}
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
                <div className="total_div">
                  Total: <span className="sum_resu"> ₦{result}</span>
                </div>
              </div>
              <div className="checkout_btns">
                <button className="checkout_btn1" onClick={OpenModal}>
                  Proceed to Checkout{" "}
                </button>
              </div>
            </div>
            <div className="cart_area2"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps1 = (state) => ({
  auth: state.auth,
  cart: state.shop.cart,
});

// const mapDispatchToProps =

export default connect(mapStateToProps1, {})(DashboardCart);
