import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
// import TextField from "@mui/material/TextField";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import TimePicker from "@mui/lab/TimePicker";
// import DateTimePicker from "@mui/lab/DateTimePicker";
// import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
// import MobileDatePicker from "@mui/lab/MobileDatePicker";
import TextField from "@mui/material/TextField";
import "../DashboardStyles/dashboard_home.css";
import "../DashboardStyles/dashboard_account.css";
function DashboardAccountPage() {
  const [value, setValue] = useState("1997-02-09");
  //   const [value, setValue] = useState(new Date("2014-02-09"));

  const [activeBg, setActiveBg] = useState("accounts");
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
            <div className="account_toggle_body_area">
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
                  <div className="toggle_body_area1_cont1">
                    <div className="toggle_body_area1_cont1_txts">
                      Username
                      <span className="toggle_body_area1_cont1_sub_txts">
                        {" "}
                        Receive money from friends using your username
                      </span>
                    </div>
                    <div className="toggle_body_area1_cont1_input">
                      <TextField
                        className="name_input1"
                        id="outlined-basic"
                        label="Username"
                        variant="outlined"
                        value="Cyntax247"
                      />
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
                      {/* <DesktopDatePicker
                        label="Date desktop"
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                      /> */}
                      <button className="save_changes_btn">Save Changes</button>
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
                </div>
              </div>
              <div className="account_toggle_body_area2"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DashboardAccountPage;
