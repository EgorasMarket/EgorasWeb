import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../AdminStyles/allCustomer.css";
import axios from "axios";

import {
  PRODUCT_LOADED,
  API_URL2 as api_url2,
} from "../../../../actions/types";

const Newclass = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [allCustomers, setAllCustomers] = useState([]);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // const saveCustomerId = (event) => {
  //   //console.log(event.target.id);
  //   localStorage.setItem("adminCusId", event.target.id);
  // };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    //console.log(event.target.value);
  };
  useEffect(() => {
    if (searchTerm === "") {
      setSearchResults(allCustomers);
      //console.log("tttt");
    } else {
      console.log(allCustomers);
      const results = allCustomers.filter((userInfo) =>
        userInfo.fullname
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
      console.log(results);
      setSearchResults(results);
    }
  }, [searchTerm, allCustomers]);

  useEffect(() => {
    axios
      .get(api_url2 + "/v1/admin/retrieve/staff/all", config, null)
      .then((data) => {
        setAllCustomers(data.data.data);
        // setSearchResults(data.data.payload);
        console.log(data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {/* {((role201 === "CASHIER") || (role201 === "CUSTOMER_SERVICE" ) && (way === "/super_admin/all_user"))? */}
      <div className="other2">
        <section className="no-bg">
          <div className="container">
            <div className="all_user_data_area">
              <div className="all_users_search">
                Search Users
                <div className="search_container">
                  <SearchIcon className="user_search_icon" />
                  <input
                    type="search"
                    name=""
                    id=""
                    placeholder="Search name"
                    className="user_search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </div>
              </div>
              <div className="all_users_body">
                <table className="assets-table s_table">
                  <thead className="assets-category-titles">
                    <tr className="assets">
                      <th className="assets-category-titles-heading1">
                        Gender
                      </th>
                      <th className="assets-category-titles-heading1">Name</th>
                      <th className="assets-category-titles-heading1">
                        Phone number
                      </th>
                      <th className="assets-category-titles-heading1 right_align email_align">
                        Role
                      </th>

                      <th className="assets-category-titles-heading1 right_align">
                        Id
                      </th>

                      <th className="assets-category-titles-heading1 right_align">
                        Staff ID
                      </th>
                    </tr>
                  </thead>
                  {searchResults.map((user) => (
                    <tbody
                      className="assets-table-body popular-categories"
                      id="popular-categories"
                    >
                      {" "}
                      <tr className="assets-category-row">
                        <td className="assets-category-data">
                          <div className="assets-data">
                            <div className="assets-data-name">
                              {user.gender}
                            </div>
                          </div>
                        </td>
                        <td className="assets-category-data1">
                          <div className="assets-data-name">
                            {user.fullname}
                          </div>
                        </td>

                        <td className="assets-category-data1">
                          <div className="assets-data-name">{user.mobile}</div>
                        </td>

                        {/* <td className="assets-category-data1">
                          <div className="assets-data-name">{user.id}</div>
                        </td> */}

                        <td className="assets-category-data1">
                          <div className="assets-data-name">{user.role}</div>
                        </td>

                        <td className="assets-category-data1">
                          <div className="assets-data-name">{user.id}</div>
                        </td>

                        <td className="assets-category-data1">
                          <div className="assets-data-name">{user.staffId}</div>
                        </td>

                        <td className="save_item_data1b">
                          {/* <div className="assets-data-name center_name">
                              ₦{asset.amount}
                            </div> */}
                          {/* <button id={'yes_' + asset.id} onClick={e => submitCallCheck(asset.id)} className="checkout_btn1 py-1 px-2 m-0"> */}
                          <a>
                            <button className="checkout_btn1 py-1 px-2 m-0">
                              {/* <button id={'yes_' + asset.id} onClick={e => submitCallCheck(asset.id)} className="checkout_btn1 py-1 px-2 m-0"> */}
                              See Wallet{" "}
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
            </div>
          </div>
        </section>
      </div>
      {/* :null} */}
    </>
  );
};

//console.log(searchResults);

// =========
// =========

// =========
// =========

export default Newclass;
// export default function Newone(){
//   const url = '/v1/user/transactions/customer/byBranch';

//   const paper = () => {
//     axios.get(`${url}notes`)
//   }
// }
