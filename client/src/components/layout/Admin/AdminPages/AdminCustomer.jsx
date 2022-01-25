import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../AdminStyles/allCustomer.css";
import axios from "axios";
import {
  PRODUCT_LOADED,
  API_URL2 as api_url2,
} from "../../../../actions/types";

const AdminCustomer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [allCustomers, setAllCustomers] = useState([]);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  // const allCustomers = [
  //   {
  //     id: "2",
  //     name: "Samuel",
  //     phoneNumber: "08164020234",
  //     gender: "male",
  //     email: "samuelify225@gmail.com",
  //   },
  //   {
  //     id: "2",
  //     name: "Patrick",
  //     phoneNumber: "08164020234",
  //     gender: "male",
  //     email: "samuelify225@gmail.com",
  //   },
  //   {
  //     id: "2",
  //     name: "John",
  //     phoneNumber: "08164020234",
  //     gender: "male",
  //     email: "samuelify225@gmail.com",
  //   },
  //   {
  //     id: "2",
  //     name: "Goodness",
  //     phoneNumber: "08164020234",
  //     gender: "male",
  //     email: "samuelify225@gmail.com",
  //   },
  //   {
  //     id: "2",
  //     name: "Kingsley",
  //     phoneNumber: "08164020234",
  //     gender: "male",
  //     email: "samuelify225@gmail.com",
  //   },
  //   {
  //     id: "2",
  //     name: "Simon",
  //     phoneNumber: "08164020234",
  //     gender: "male",
  //     email: "samuelify225@gmail.com",
  //   },
  // ];

  useEffect(() => {
    axios
      .get(api_url2 + "/v1/admin/retrieve/customers/byBranch", null, config)
      .then((data) => {
        console.log(data.data.data, "king");

        setAllCustomers(data.data.data);
      })
      .catch((err) => {
        console.log(err.response); // "oh, no!"
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };
  useEffect(() => {
    if (searchTerm === "") {
      setSearchResults(allCustomers);
      console.log("tttt");
    } else {
      const results = allCustomers.filter((userInfo) =>
        userInfo.fullname
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }
  }, [searchTerm, allCustomers]);

  console.log(searchResults);

  // =========
  // =========
  // =========
  // =========
  return (
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
                  placeholder="Search"
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
                    <th className="assets-category-titles-heading1">Name</th>
                    <th className="assets-category-titles-heading1">
                      Phone No
                    </th>
                    <th className="assets-category-titles-heading1">gender</th>
                    <th className="assets-category-titles-heading1 right_align email_align">
                      Email Address
                    </th>
                    <th className="assets-category-titles-heading1 right_align">
                      Action
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
                          {/* <PhoneAndroidIcon className="assets-list-icon" /> */}
                          <div className="assets-data-name">
                            {user.fullname}
                          </div>
                        </div>
                      </td>
                      <td className="assets-category-data1">
                        <div className="assets-data-name">
                          {user.phoneNumber}
                        </div>
                      </td>
                      <td className="assets-category-data1b">
                        <div className="assets-data-name">{user.gender}</div>
                      </td>
                      <td className="assets-category-data1b">
                        <div className="assets-data-name">{user.email}</div>
                      </td>
                      <td className="assets-category-data-last">
                        <div className="assets-data-name-last">
                          <a href="/super_admin/user_overview"></a>
                          <button id={user.id} className="btn btn-primary">
                            View
                          </button>
                        </div>
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
  );
};

export default AdminCustomer;
