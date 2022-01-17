import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
// import AvatarSelector from "react-avatar-selector";
// import poodle from "../../img/profile_img.jpeg";
import AddCircleIcon from "@mui/icons-material/AddCircle";
// import  {useLocal}
import { useLocalStorage } from "../../Activation/useLocalStorage";
// import TextField from "@mui/material/TextField";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import TimePicker from "@mui/lab/TimePicker";
// import DateTimePicker from "@mui/lab/DateTimePicker";
// import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
// import MobileDatePicker from "@mui/lab/MobileDatePicker";

import axios from "axios";
import {
    API_URL2 as api_url
} from "../../../../../actions/types.js";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import "../DashboardStyles/dashboard_home.css";
import "../DashboardStyles/dashboard_account.css";
import { connect } from "react-redux";
import { sumitGenderAndDate, nextOfKING } from "../../../../../actions/auth";
import { setAlert } from "../../../../../actions/alert";

function DashboardAccountPage({ sumitGenderAndDate, setAlert, nextOfKING }) {
  const [tokens, setTokens] = useState({ gender: "", dateOfBirth: "" });
  const [customerAddress, setAddress] = useState("");
  const [passport, setPassport] = React.useState('');

  const [nextKin, setNextKin] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    gender1: "",
    relationship: "",
  });

  const config = {
    headers: {
        'Content-Type': 'application/json'
    },
  };

  const { firstname, lastname, email, gender1, relationship, phoneNumber } =
    nextKin;

  const { gender, dateOfBirth } = tokens;

  const onChangeFor = (e) => {
    setTokens({ ...tokens, [e.target.name]: e.target.value });
  };

  const onChangeFor2 = (e) => {
    setNextKin({ ...nextKin, [e.target.name]: e.target.value });
  };

  // const [value, setValue] = useState("1997-02-09");
  // const [email, setEmail] = useState("samuelify225@gmail.com");
  const [bvnNum, setBvnNum] = useState("23745672845");
  const [phoneNo, setPhoneNo] = useState("+2348164020234");
  //   const [value, setValue] = useState(new Date("2014-02-09"));
  const [age, setAge] = React.useState({ relationship });
  const [activeBg, setActiveBg] = useState("accounts");
  const [activeBody, setActiveBody] = useState("");
  // const immmg = localStorage.getItem("imageDef");
  const [modal, setModal] = useState(false);
  // const [image2, setImage2] = useState("../../img/profile_img.jpeg");
  const [image, setImage] = useState("../../img/profile_img.jpeg");
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }

    const types = ['jpg', 'png', 'jpeg']

        if (event.currentTarget.id === "customer_image") {

            if (event.currentTarget.files.length === 0) {
                // setUserInfo({ ...userInfo, applicantImg: "" });
                // document.getElementById("output1").src = "";

            } else {
                let passportFile = document.getElementById("customer_image").files[0];

                let fileExtension = passportFile.name.split(".").pop();
                console.log(passportFile);

                if (!types.includes(fileExtension)) {

                } else {
                    if (passportFile.size > 1000000) {

                        console.log('file too large.');

                    } else {
                        setPassport(passportFile);
                    }
                }

            }
        }
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const changeBg = (e) => {
    let currentId = e.currentTarget.id;
    setActiveBg(currentId);
  };
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const onAddressChange = (event) => {
    // setAddress(address);
    setAddress(event.target.value || '');
  };
  // const onChangePicture = (e) => {
  //   setPicture(URL.createObjectURL(e.target.files[0]));
  // };
  // const handleChange = (newValue) => {
  //   setValue(newValue);
  // };

  const sends = async (e) => {
    let res = await sumitGenderAndDate(gender, dateOfBirth);

    console.log(res);

    if (res.data.data.success === true) {
      console.log("okay Good Server");
    } else {
      setAlert(res.data.data.errors[0].msg, "danger");
    }
  };

  const Apple = async (e) => {
    let res = await nextOfKING(
      firstname,
      lastname,
      email,
      gender,
      relationship,
      phoneNumber
    );

    console.log(res);

    if (res.data.data.success === true) {
      console.log("okay Good Server");
    } else {
      setAlert(res.data.data.errors[0].msg, "danger");
    }
  };


  // To Add User Image
  const SubmitPassport = async e => {
    e.preventDefault();


    const formData = new FormData()

    if (passport === '') {
        console.log('empty passport');

        // setAlert('Please provide a passport photo', 'danger');

    } else {

        const element = document.getElementById('customer_image')
        const file = element.files[0]
        formData.append('customer_image', file, file.name)

        console.log(file, 'hhhh');

        try {
            const res = await axios.put(api_url + '/v1/user/add/customer/image', formData);
            console.log(res.data, 'undefined');

            if (res.data.statusCode === 200) {
                // setPassportUpload(true)
            } else {
                // setAlert('Something went wrong, please try again later', 'danger');
            }

        } catch (err) {
            console.log(err);
            // setAlert('Check your internet connection', 'danger');
        }

    }

  }

  const SubmitAddress = async e => {
    console.log(customerAddress);
    if (customerAddress === '') {

    } else {
      const body = JSON.stringify({ customerAddress });
      try {
        const res = await axios.post(api_url + '/v1/user/add/address', body, config);
        console.log(res.data, 'undefined');

        if (res.data.statusCode === 200) {
            // setPassportUpload(true)
        } else {
            // setAlert('Something went wrong, please try again later', 'danger');
        }

      } catch (err) {
          console.log(err.response);
          // setAlert('Check your internet connection', 'danger');
      }

    }
  }

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
                          // src={value}
                          src={image}
                          // src="/img/profile_img.jpeg"
                          alt=""
                          className="user_upload_img"
                        />
                        <AddCircleIcon
                          className="add_icon"
                          onClick={openModal}
                        />{" "}
                        {/* <label
                          for="file-upload"
                          className="custom-file-upload"
                          onChange={onImageChange}
                        >
                          <AddCircleIcon
                            className="add_icon"
                            onChange={onImageChange}
                          />{" "}
                        </label>
                        <input
                          type="file"
                          id="file-upload"
                          onChange={onImageChange}
                          className="filetype"
                        /> */}
                        {/* <input type="file" name="" id="" /> */}
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
                          value={firstname}
                        />
                        <TextField
                          className="name_input1"
                          id="outlined-basic"
                          label="Last Name"
                          variant="outlined"
                          value={lastname}
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
                            onChange={onChangeFor}
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
                            value="Female"
                            onChange={onChangeFor}
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
                          name="dateOfBirth"
                          id=""
                          value={dateOfBirth}
                          className="name_input1 date_input"
                          onChange={onChangeFor}
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
                          name="firstname"
                          value={firstname}
                          onChange={onChangeFor2}
                        />
                        <TextField
                          className="name_input1"
                          id="outlined-basic"
                          label="Last Name"
                          variant="outlined"
                          name="lastname"
                          value={lastname}
                          onChange={onChangeFor2}
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
                          name="email"
                          value={email}
                          onChange={onChangeFor2}
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
                          name="phoneNumber"
                          value={phoneNumber}
                          onChange={onChangeFor2}
                        />
                      </div>
                    </div>
                    {/* '''''''''''''''''''''∂∂ */}
                    {/* '''''''''''''''''''''∂∂ */}
                    {/* '''''''''''''''''''''∂∂ */}
                    {/* <div className="account_toggle_body_area1_title">
                      Bank Details
                    </div> */}
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}

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
                          Father, Mother, Sister ...
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
                              name="relationship"
                              value={age}
                              label="Age"
                              onChange={handleChange}
                              // onSelect={onChangeFor2}
                            >
                              <MenuItem value={10}>Mother</MenuItem>
                              <MenuItem value={20}>Father</MenuItem>
                              <MenuItem value={30}>Sister</MenuItem>
                              <MenuItem value={40}>Uncle</MenuItem>
                              <MenuItem value={50}>Aunt</MenuItem>
                              <MenuItem value={60}>Brother</MenuItem>
                              <MenuItem value={70}>Inlaw</MenuItem>
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
                            // value={Male}

                            onClick={onChangeFor2}
                          />
                          <label for="male" class="radio" value={gender}>
                            Male
                          </label>
                        </div>
                        <div className="radio_group">
                          <input
                            type="radio"
                            name="gender"
                            id="female"
                            // value="female"
                            onClick={onChangeFor2}
                          />
                          <label for="female" class="radio" value={gender}>
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
                        <button className="save_changes_btn" onClick={Apple}>
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
                    <div className="account_toggle_body_area1_title">
                      Address
                    </div>
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    <div className="toggle_body_area1_cont1">
                      <div className="toggle_body_area1_cont1_txts">
                        Add Address
                        <span className="toggle_body_area1_cont1_sub_txts">
                          input your address for easy shipping 
                        </span>
                      </div>
                      <div className="toggle_body_area1_cont1_input">
                        <div className="input_btn_grouped_div">
                          <TextField
                            className="name_input1a"
                            id="outlined-basic"
                            label="Address"
                            variant="outlined"
                            name="customerAddress"
                            value={customerAddress}
                            onClick={SubmitAddress}
                            onChange={onAddressChange}
                          />
                          <button
                            className="add_photo"
                            style={{ width: "25%" }}
                            onClick={SubmitAddress}
                          >
                            Submit Address
                          </button>
                        </div>
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

      {modal == true ? (
        <div className="profile_modal_div">
          <div className="container">
            <div className="profile_modal_area">
              <div className="profile_modal_area1">
                <div className="profile_modal_area1_img">
                  <img
                    // src={value}
                    src={image}
                    // src="/img/profile_img.jpeg"
                    alt=""
                    className="user_upload_img"
                    style={{ width: "250px", height: "250px" }}
                  />
                  <label
                    for="customer_image"
                    className="custom-file-upload33"
                    onChange={onImageChange}
                  >
                    <AddCircleIcon
                      className="add_icon33"
                      // onChange={onImageChange}
                    />{" "}
                  </label>
                  <input
                    type="file"
                    id="customer_image"
                    onChange={onImageChange}
                    type='file' name='customer_image' 
                    // onChange={onFileChange}
                    className="filetype"
                  />
                  {/* <input
                    type="file"
                    onChange={onImageChange}
                    className="filetype"
                  /> */}
                </div>{" "}
              </div>
              <div className="profile_modal_area2">
                {/* <label
                for="file-upload"
                className="custom-file-upload"
                onChange={onImageChange}
              >
                <button className="add_photo" onChange={onImageChange}>
                  Add photo
                </button>
              </label>
              <input
                type="file"
                id="file-upload"
                onChange={onImageChange}
                className="filetype"
              /> */}
                <button className="add_photo" onClick={SubmitPassport}>Add Photo</button>
                <button className="cancel_photo" onClick={closeModal}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

// let  res = await getLogin2(
export default connect(null, { sumitGenderAndDate, setAlert, nextOfKING })(
  DashboardAccountPage
);
