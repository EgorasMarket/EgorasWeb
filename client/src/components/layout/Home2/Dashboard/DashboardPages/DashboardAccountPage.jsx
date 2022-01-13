import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
// import TextField from "@mui/material/TextField";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import TimePicker from "@mui/lab/TimePicker";
// import DateTimePicker from "@mui/lab/DateTimePicker";
// import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
// import MobileDatePicker from "@mui/lab/MobileDatePicker";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import "../DashboardStyles/dashboard_home.css";
import "../DashboardStyles/dashboard_account.css";
function DashboardAccountPage() {
  const [value, setValue] = useState("1997-02-09");
  const [email, setEmail] = useState("samuelify225@gmail.com");
  const [bvnNum, setBvnNum] = useState("23745672845");
  const [phoneNo, setPhoneNo] = useState("+2348164020234");
  //   const [value, setValue] = useState(new Date("2014-02-09"));
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [activeBg, setActiveBg] = useState("accounts");
  const [activeBody, setActiveBody] = useState("");
  const changeBg = (e) => {
    let currentId = e.currentTarget.id;
    setActiveBg(currentId);
  };
  // const handleChange = (newValue) => {
  //   setValue(newValue);
  // };
  return (
    <div className="other2" style={{ paddingBottom: "0em" }}>
      <section className="no-bg" style={{ paddingBottom: "0em" }}>
        <div className="container">
          <div className="dashboard_account_page_area">
            <div className="account_toggle_heading">
              <span
                id="accounts"
                onClick={changeBg}
                className={
                  activeBg == "accounts"
                    ? "account_toggle account_toggle_active"
                    : "account_toggle"
                }
              >
                Accounts
              </span>
              <span
                id="kin"
                onClick={changeBg}
                className={
                  activeBg == "kin"
                    ? "account_toggle account_toggle_active"
                    : "account_toggle"
                }
              >
                Next of Kin
              </span>
              <span
                id="security"
                onClick={changeBg}
                className={
                  activeBg == "security"
                    ? "account_toggle account_toggle_active"
                    : "account_toggle"
                }
              >
                Security
              </span>
            </div>
            {/* [[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]] */}
            <div className="account_toggle_body_area">
              {activeBg == "accounts" ? (
                <div className="account_toggle_body_area1">
                  <div className="account_toggle_body_area1_title">
                    Personalize
                  </div>
                  <div className="account_toggle_body_area1_txts_input">
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    <div className="toggle_body_area1_cont1">
                      <div className="toggle_body_area1_cont1_txts">
                        Change Profile Picture{" "}
                        <span className="toggle_body_area1_cont1_sub_txts">
                          {" "}
                          Choose a new avatar to be used across Egoras
                        </span>
                      </div>
                      <div className="toggle_body_area1_cont1_input">
                        {" "}
                        <img
                          src="/img/profile_img.jpeg"
                          alt=""
                          className="user_upload_img"
                        />
                      </div>
                    </div>
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    <div className="toggle_body_area1_cont1">
                      <div className="toggle_body_area1_cont1_txts">
                        Full Name
                        <span className="toggle_body_area1_cont1_sub_txts">
                          {" "}
                          Customize your account name
                        </span>
                      </div>
                      <div className="toggle_body_area1_cont1_input">
                        <TextField
                          className="name_input1"
                          id="outlined-basic"
                          label="First Name"
                          variant="outlined"
                          value="Ifeanyi"
                        />
                        <TextField
                          className="name_input1"
                          id="outlined-basic"
                          label="Last Name"
                          variant="outlined"
                          value="Okwara"
                        />
                      </div>
                    </div>
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}

                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    <div className="toggle_body_area1_cont1">
                      <div className="toggle_body_area1_cont1_txts">
                        Gender
                        <span className="toggle_body_area1_cont1_sub_txts">
                          {" "}
                          How you would like to be identified
                        </span>
                      </div>
                      <div className="toggle_body_area1_cont1_input">
                        <div className="radio_group">
                          <input
                            type="radio"
                            name="gender"
                            id="male"
                            value="Male"
                          />
                          <label for="male" class="radio">
                            Male
                          </label>
                        </div>
                        <div className="radio_group">
                          <input
                            type="radio"
                            name="gender"
                            id="female"
                            value="female"
                          />
                          <label for="female" class="radio">
                            Female
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    <div className="toggle_body_area1_cont1">
                      <div className="toggle_body_area1_cont1_txts">
                        Date of birth
                        <span className="toggle_body_area1_cont1_sub_txts">
                          {" "}
                          For your birthday :
                        </span>
                      </div>
                      <div className="toggle_body_area1_cont1_input">
                        {/* <DesktopDatePicker
                        label="Date desktop"
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                      /> */}
                        <input
                          type="date"
                          name=""
                          id=""
                          value={value}
                          className="name_input1 date_input"
                        />
                        {/* <TextField
                        className="name_input1"
                        id="outlined-basic"
                        label="Username"
                        variant="outlined"
                        value="Cyntax247"
                      /> */}
                      </div>
                    </div>
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    <div className="toggle_body_area1_cont1">
                      <div className="toggle_body_area1_cont1_txts"></div>
                      <div className="toggle_body_area1_cont1_input">
                        <button className="save_changes_btn">
                          Save Changes
                        </button>
                      </div>
                    </div>
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                  </div>
                </div>
              ) : null}
              {/* ================= */}
              {/* ================= */}
              {/* ================= */}
              {/* ================= */}
              {activeBg == "kin" ? (
                <div className="account_toggle_body_area1">
                  <div className="account_toggle_body_area1_title">
                    Personal Details
                  </div>
                  <div className="account_toggle_body_area1_txts_input">
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    <div className="toggle_body_area1_cont1">
                      <div className="toggle_body_area1_cont1_txts">
                        Full Name
                        <span className="toggle_body_area1_cont1_sub_txts"></span>
                      </div>
                      <div className="toggle_body_area1_cont1_input">
                        <TextField
                          className="name_input1"
                          id="outlined-basic"
                          label="First Name"
                          variant="outlined"
                        />
                        <TextField
                          className="name_input1"
                          id="outlined-basic"
                          label="Last Name"
                          variant="outlined"
                        />
                      </div>
                    </div>
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    <div className="toggle_body_area1_cont1">
                      <div className="toggle_body_area1_cont1_txts">
                        Email Address
                        <span className="toggle_body_area1_cont1_sub_txts"></span>
                      </div>
                      <div className="toggle_body_area1_cont1_input">
                        <TextField
                          className="name_input1a"
                          id="outlined-basic"
                          label="Email Address"
                          variant="outlined"
                        />
                      </div>
                    </div>
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    <div className="toggle_body_area1_cont1">
                      <div className="toggle_body_area1_cont1_txts">
                        Phone number
                        <span className="toggle_body_area1_cont1_sub_txts"></span>
                      </div>
                      <div className="toggle_body_area1_cont1_input">
                        <TextField
                          className="name_input1a"
                          id="outlined-basic"
                          label="Phone number"
                          variant="outlined"
                        />
                      </div>
                    </div>
                    {/* '''''''''''''''''''''∂∂ */}
                    {/* '''''''''''''''''''''∂∂ */}
                    {/* '''''''''''''''''''''∂∂ */}
                    <div className="account_toggle_body_area1_title">
                      Bank Details
                    </div>
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    <div className="toggle_body_area1_cont1">
                      <div className="toggle_body_area1_cont1_txts">
                        Bank
                        <span className="toggle_body_area1_cont1_sub_txts">
                          {" "}
                        </span>
                      </div>
                      <div className="toggle_body_area1_cont1_input">
                        <div className="name_input1a">
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Select Bank
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={age}
                              label="Age"
                              onChange={handleChange}
                            >
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </div>
                    </div>
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}

                    <div className="toggle_body_area1_cont1">
                      <div className="toggle_body_area1_cont1_txts">
                        Account Number
                        <span className="toggle_body_area1_cont1_sub_txts"></span>
                      </div>
                      <div className="toggle_body_area1_cont1_input">
                        <TextField
                          className="name_input1a"
                          id="outlined-basic"
                          label="Account number"
                          variant="outlined"
                        />
                      </div>
                    </div>
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    <div className="toggle_body_area1_cont1">
                      <div className="toggle_body_area1_cont1_txts">
                        Account Name
                        <span className="toggle_body_area1_cont1_sub_txts"></span>
                      </div>
                      <div className="toggle_body_area1_cont1_input">
                        <TextField
                          className="name_input1a"
                          id="outlined-basic"
                          label="Account name"
                          variant="outlined"
                        />
                      </div>
                    </div>
                    {/* '''''''''''''''''''''∂∂ */}
                    {/* '''''''''''''''''''''∂∂ */}
                    {/* '''''''''''''''''''''∂∂ */}
                    <div className="account_toggle_body_area1_title">
                      Other Details
                    </div>
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    <div className="toggle_body_area1_cont1">
                      <div className="toggle_body_area1_cont1_txts">
                        Relationship{" "}
                        <span className="toggle_body_area1_cont1_sub_txts">
                          Father, Mother, Sister
                        </span>
                      </div>
                      <div className="toggle_body_area1_cont1_input">
                        <div className="name_input1a">
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Select Relationship
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={age}
                              label="Age"
                              onChange={handleChange}
                            >
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </div>
                    </div>

                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    <div className="toggle_body_area1_cont1">
                      <div className="toggle_body_area1_cont1_txts">
                        Gender
                        <span className="toggle_body_area1_cont1_sub_txts">
                          {" "}
                          How you would like to be identified
                        </span>
                      </div>
                      <div className="toggle_body_area1_cont1_input">
                        <div className="radio_group">
                          <input
                            type="radio"
                            name="gender"
                            id="male"
                            value="Male"
                          />
                          <label for="male" class="radio">
                            Male
                          </label>
                        </div>
                        <div className="radio_group">
                          <input
                            type="radio"
                            name="gender"
                            id="female"
                            value="female"
                          />
                          <label for="female" class="radio">
                            Female
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}

                    <div className="toggle_body_area1_cont1">
                      <div className="toggle_body_area1_cont1_txts"></div>
                      <div className="toggle_body_area1_cont1_input">
                        <button className="save_changes_btn">
                          Save Changes
                        </button>
                      </div>
                    </div>
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                  </div>
                </div>
              ) : null}
              {/* ================= */}
              {/* ================= */}
              {/* ================= */}
              {/* ================= */}
              {activeBg == "security" ? (
                <div className="account_toggle_body_area1">
                  <div className="account_toggle_body_area1_title">
                    Verified Information
                  </div>
                  <div className="account_toggle_body_area1_txts_input">
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    <div className="toggle_body_area1_cont1">
                      <div className="toggle_body_area1_cont1_txts">
                        Email Address
                        <span className="toggle_body_area1_cont1_sub_txts"></span>
                      </div>
                      <div className="toggle_body_area1_cont1_input">
                        {email}
                      </div>
                    </div>
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    <div className="toggle_body_area1_cont1">
                      <div className="toggle_body_area1_cont1_txts">
                        Phone Number
                        <span className="toggle_body_area1_cont1_sub_txts"></span>
                      </div>
                      <div className="toggle_body_area1_cont1_input">
                        {phoneNo} <EditIcon className="edit_icon" />
                      </div>
                    </div>
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    <div className="toggle_body_area1_cont1">
                      <div className="toggle_body_area1_cont1_txts">
                        Bank Verification Number (BVN)
                        <span className="toggle_body_area1_cont1_sub_txts">
                          {" "}
                        </span>
                      </div>
                      <div className="toggle_body_area1_cont1_input">
                        <div className="bvn_btn">{bvnNum}</div>
                      </div>
                    </div>
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    <div className="account_toggle_body_area1_title">
                      Password
                    </div>
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    <div className="toggle_body_area1_cont1">
                      <div className="toggle_body_area1_cont1_txts">
                        Update Password
                        <span className="toggle_body_area1_cont1_sub_txts">
                          Change your old password to a new one
                        </span>
                      </div>
                      <div className="toggle_body_area1_cont1_input">
                        <div className="bvn_btn">Change Password</div>
                      </div>
                    </div>
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    {/* <div className="toggle_body_area1_cont1">
                      <div className="toggle_body_area1_cont1_txts">
                        Update PIN
                        <span className="toggle_body_area1_cont1_sub_txts">
                          Change or reset your Egoras PIN
                        </span>
                      </div>
                      <div className="toggle_body_area1_cont1_input">
                        <div className="bvn_btn">Change PIN</div>
                      </div>
                    </div> */}
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                  </div>
                </div>
              ) : null}
              <div className="account_toggle_body_area2"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DashboardAccountPage;
