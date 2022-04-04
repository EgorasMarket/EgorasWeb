import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "../DashboardStyles/dashboardOrderPage.css";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../../../MockData";
const DashboardOrderPage = () => {
  return (
    <div className="other2">
      <section className="no-bg">
        <div className="container">
          <div className="order_area">
            <div className="order_heading">Order History</div>
            <div className="order_body">
              <div className="order_cont1">
                <div className="order_cont1_headings">
                  <div className="order_cont1_heading_txt order_cont1_heading_txt_first ">
                    Asset
                  </div>
                  <div className="order_cont1_heading_txt">Title</div>
                  <div className="order_cont1_heading_txt">Type</div>
                  <div className="order_cont1_heading_txt">Amount</div>
                  <div className="order_cont1_heading_txt">Order Id</div>
                  <div className="order_cont1_heading_txt">Date</div>
                  <div className="order_cont1_heading_txt order_cont1_heading_txt_last">
                    Status
                  </div>
                </div>
                <div className="order_cont1_body_container">
                  {data.UserOrders.map((order) => (
                    <div className="order_cont1_body">
                      <div className="order_cont_body_data order_cont_body_data_first">
                        <img
                          src={order.img}
                          alt=""
                          className="order_cont_body_img"
                        />
                      </div>
                      <div className="order_cont_body_data">{order.title}</div>
                      <div className="order_cont_body_data">
                        {order.type == "Outright" ? (
                          <span
                            className="order_type"
                            style={{
                              color: "#ffffff",
                              fontWeight: "700",
                              background: "#41ba71",
                              padding: " 0.3em 1em",
                              borderRadius: "50px",
                              fontSize: "11px",
                            }}
                          >
                            {order.type}
                          </span>
                        ) : order.type == "Savings" ? (
                          <span
                            className="order_type"
                            style={{
                              color: "#ffffff",
                              fontWeight: "700",
                              background: "#e4a788",
                              padding: " 0.3em 1em",
                              borderRadius: "50px",
                              fontSize: "11px",
                            }}
                          >
                            {order.type}
                          </span>
                        ) : null}
                      </div>
                      <div className="order_cont_body_data">
                        ₦{order.amount}
                      </div>
                      <div className="order_cont_body_data">
                        {order.orderId}
                      </div>
                      <div className="order_cont_body_data">{order.Date}</div>
                      <div className="order_cont_body_data">
                        {order.Status == "Pending" ? (
                          <span
                            className="order_status"
                            style={{ background: "#fff3cf", color: "#c19000" }}
                          >
                            {order.Status}{" "}
                            <FontAwesomeIcon
                              className="ml-2"
                              icon={faSpinner}
                              spin
                            />
                          </span>
                        ) : order.Status == "Completed" ? (
                          <span className="order_status">
                            {order.Status}{" "}
                            <CheckCircleOutlineIcon className="cancel_icon" />
                          </span>
                        ) : order.Status == "Canceled" ? (
                          <span
                            className="order_status"
                            style={{ background: "#ffd6d6", color: "#ed5c5c" }}
                          >
                            {order.Status}{" "}
                            <HighlightOffIcon className="cancel_icon" />
                          </span>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardOrderPage;
