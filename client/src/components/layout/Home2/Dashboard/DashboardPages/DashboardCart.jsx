import React, { useState, useEffect } from "react";
import "../DashboardStyles/dashboardCart.css";

const lockedItems = [
  {
    id: 1,
    img: "/img/samsung_tv_555.jpeg",
    name: "Samsung smart tv series",
    total_items: " 19",
    days_left: "28",
    days_left_percent: "82%",
    quantity: "1",
    unit_price: "350,000",

    // ratio: "175%",
  },
  {
    id: 2,
    img: "/img/samsung_tv_555.jpeg",
    name: "Lg smart tv series",
    total_items: " 200",
    days_left: "13",
    days_left_percent: "27%",
    quantity: "2",
    unit_price: "150,000",
  },
  {
    id: 3,
    img: "/img/samsung_tv_555.jpeg",
    name: "Iphone 12pro max",
    total_items: " 170",
    days_left: "23",
    days_left_percent: "77%",
    quantity: "2",
    unit_price: "550,000",
  },
];
const DashboardCart = () => {
  const [savedNum, setSavedNum] = useState(5);
  return (
    <div className="other2">
      <section className="no-bg">
        <div className="container">
          <div className="cart_area">
            <div className="cart_item_num">
              Cart <span className="cart_num_num">({savedNum} items)</span>
            </div>
            <div className="locked_items">
              <div class="save_prod_deta">
                <table className="save_item_table">
                  <thead className="assets-category-titles">
                    <tr className="assets">
                      <th className="assets-category-titles-heading1">Item</th>
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

                  {lockedItems.map((asset) => (
                    <tbody
                      className="save_items_cat  small_height popular-categories"
                      id="popular-categories"
                    >
                      {" "}
                      <tr className="assets-category-row">
                        <td className="save_item_data small_height">
                          <div className="assets-data height_data height_data1">
                            <img
                              src={asset.img}
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
                            <div className="save_items_details1 small_tetxt">
                              {asset.name}
                            </div>
                            <div className="save_total_locked_amount smallll_txxt">
                              <span className="items_left_amount">
                                Total Items Left
                              </span>
                              {asset.total_items} items
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
                            #{asset.unit_price}
                          </div>
                        </td>
                        <td className="save_item_data1b">
                          <div className="assets-data-name_last">
                            #{asset.total_locked_amount}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardCart;
