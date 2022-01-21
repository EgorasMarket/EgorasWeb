import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../AdminStyles/allCustomer.css";
const userData = [
  {
    id: "2",
    name: "Samuel",
    phoneNo: "08164020234",
    Gender: "male",
    emailAddress: "samuelify225@gmail.com",
  },
  {
    id: "2",
    name: "Patrick",
    phoneNo: "08164020234",
    Gender: "male",
    emailAddress: "samuelify225@gmail.com",
  },
  {
    id: "2",
    name: "John",
    phoneNo: "08164020234",
    Gender: "male",
    emailAddress: "samuelify225@gmail.com",
  },
  {
    id: "2",
    name: "Goodness",
    phoneNo: "08164020234",
    Gender: "male",
    emailAddress: "samuelify225@gmail.com",
  },
  {
    id: "2",
    name: "Kingsley",
    phoneNo: "08164020234",
    Gender: "male",
    emailAddress: "samuelify225@gmail.com",
  },
  {
    id: "2",
    name: "Simon",
    phoneNo: "08164020234",
    Gender: "male",
    emailAddress: "samuelify225@gmail.com",
  },
];

const AdminCustomer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const results = userData.filter((userInfo) =>
      userInfo.name.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);
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
                    <th className="assets-category-titles-heading1">Gender</th>
                    <th className="assets-category-titles-heading1 right_align">
                      Email Address
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
                          <div className="assets-data-name">{user.name}</div>
                        </div>
                      </td>
                      <td className="assets-category-data1">
                        <div className="assets-data-name">{user.phoneNo}</div>
                      </td>
                      <td className="assets-category-data1b">
                        <div className="assets-data-name">{user.Gender}</div>
                      </td>
                      <td className="assets-category-data-last">
                        <div className="assets-data-name-last">
                          {user.emailAddress}
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
