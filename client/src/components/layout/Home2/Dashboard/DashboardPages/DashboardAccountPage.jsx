import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL2 as api_url2 } from "../../../../../actions/types";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import LockIcon from "@mui/icons-material/Lock";
import { useLocalStorage } from "../../Activation/useLocalStorage";
// import jwt from "jsonwebtoken";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import "../DashboardStyles/dashboard_home.css";
import "../DashboardStyles/dashboard_account.css";
import { connect } from "react-redux";
import {
  sumitGenderAndDate,
  nextOfKING,
  changePassword,
} from "../../../../../actions/auth";
import { setAlert } from "../../../../../actions/alert";
// import {getNaame} from "../../../Signup/signup"

function DashboardAccountPage({
  sumitGenderAndDate,
  setAlert,
  nextOfKING,
  auth,
  changePassword,
}) {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const [image, setImage] = useState("");
  const [nxtOfKinA, setNxtOfKinA] = useState(false);
  // const [getNxtOfKin, setGetNxtOfKin] = useState([]);
  const[nextOfKinData, setNextOfKinData] =useState({
    nxtcustomer_id: "",
    nxtemail: "",
    nxtfirstname: "",
    nxtgender: "",
    nxtlastname: "",
    nxtphoneNumber: "",
    nxtrelationship: ""
  })
  const [tokens, setTokens] = useState({ gender: "", dateOfBirth: "" });
  const [customerAddress, setAddress] = useState("");
  const [customer_image, setcustomer_image] = useState("");

  const [nextKin, setNextKin] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    relationship: "",
    gender: "",
  });

  const [changePassword1, setChangePassword] = useState({
    oldpassword: "",
    newpassword: "",
  });

  const [userInfo, setUserInfo] = useState({
    Userfirstname: "",
    Userlastname: "",
    Useremail: "",
    UserphoneNumber: "",
    UseruserImage: "",
    Userrelationship: "",
    Usergender: "",
    Userbvn: "",
    UserdateOfBirth: "",
  });

  const {
    Userfirstname,
    Userlastname,
    Useremail,
    Usergender,
    Userrelationship,
    UseruserImage,
    UserphoneNumber,
    Userbvn,
    UserdateOfBirth,
  } = userInfo;

  const {
    nxtcustomer_id,
    nxtemail,
    nxtfirstname,
    nxtgender,
    nxtlastname,
    nxtphoneNumber,
    nxtrelationship
   } = nextOfKinData;
  const { oldpassword, newpassword } = changePassword1;

  useEffect(() => {
    // fetchDepositLinks();
    //console.log(auth);
    if (auth.user !== null) {
      // let dataa = 'stackabuse.com';
      // //console.log( new Buffer(dataa));
      var todecoded = auth.user;
      var todecodedn = todecoded.user.userImage;

      // //console.log('====================================');
      //console.log(todecodedn);
      // //console.log('====================================');

      const getName = todecoded.user.fullname;
      const splitName = getName.split(" ");

      setUserInfo({
        Userfirstname: splitName[0],
        Userlastname: splitName[1],
        Useremail: todecoded.user.email,
        UseruserImage: todecoded.user.userImage,
        UserphoneNumber: todecoded.user.phoneNumber,
        Userrelationship: todecoded.user.relationship,
        Usergender: todecoded.user.gender,
        Userbvn: todecoded.user.BVN,
        UserdateOfBirth: todecoded.user.dateOfBirth,
      });

      if (todecoded.user.userImage !== null) {
        setImage(api_url2 + "/" + todecoded.user.userImage);
      } else {
        setImage("../../img/profile_img.jpeg");
      }
    }
  }, [auth]);

  useEffect(() => {
    axios.get(
        api_url2 + "/v1/user/nextOfKin/info",
        null,
        config
    ).then((data) => {
       //console.log('eeeeee');
        //console.log(data.data.nxtOfKin, "king");

        if (data.data.status === true) {
          setNxtOfKinA(true)
        } 
     
        setNextOfKinData({
          // nxtcustomer_id: customer_id,
          nxtemail: data.data.nxtOfKin.email,
          nxtfirstname: data.data.nxtOfKin.firstname,
          nxtgender: data.data.nxtOfKin.gender,
          nxtlastname: data.data.nxtOfKin.lastname,
          nxtphoneNumber: data.data.nxtOfKin.phoneNumber,
          nxtrelationship: data.data.nxtOfKin.relationship
    })
        // setGoods(data.data.data)

     
      })
      .catch((err) => {
        //console.log(err.response); // "oh, no!"
      });



      axios.get(
        api_url2 + "/v1/user/address/info",
        null,
        config
      ).then((data) => {
       //console.log('eeeeee');
        //console.log(data.data.cusAddress, "king");
     
      })
      .catch((err) => {
        //console.log(err.response); // "oh, no!"
      });

    
  }, []);

  const [userName, setUserName] = useState({ user: "" });
  const [nameUpdate, setNameUpdate] = useState("");

  const { user } = userName;

  // //console.log('okkkk');

  // const config = {
  //   headers: {
  //       'Content-Type': 'application/json'
  //   },
  // };

  const { firstname, lastname, email, gender1, relationship, phoneNumber } =
    nextKin;

  const { gender, dateOfBirth } = tokens;

  const onChangeFor = (e) => {
    setTokens({ ...tokens, [e.target.name]: e.target.value });
  };

  const onChangeFor2 = (e) => {
    setNextKin({ ...nextKin, [e.target.name]: e.target.value });
    //console.log(nextKin);
  };

  const onChangeFor4 = (e) => {
    setChangePassword({ ...changePassword1, [e.target.name]: e.target.value });
  };

  // const updateUser =()=>{
  //   setUserName()
  // }

  // const [value, setValue] = useState("1997-02-09");
  // const [email, setEmail] = useState("samuelify225@gmail.com");
  const [bvnNum, setBvnNum] = useState("23745672845");
  const [phoneNo, setPhoneNo] = useState("+2348164020234");
  const [phone_no2, setPhone_no2] = useState("");
  //   const [value, setValue] = useState(new Date("2014-02-09"));
  const [age, setAge] = React.useState({ relationship });
  const [activeBg, setActiveBg] = useState("accounts");
  const [activeBody, setActiveBody] = useState("");
  // const immmg = localStorage.getItem("imageDef");
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  // const [image2, setImage2] = useState("../../img/profile_img.jpeg");

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));

      const types = ["jpg", "png", "jpeg"];

      if (event.currentTarget.id === "customer_image") {
        if (event.currentTarget.files.length === 0) {
          // setUserInfo({ ...userInfo, applicantImg: "" });
          // document.getElementById("output1").src = "";
        } else {
          let passportFile = document.getElementById("customer_image").files[0];

          let fileExtension = passportFile.name.split(".").pop();
          //console.log(passportFile);

          if (!types.includes(fileExtension)) {
          } else {
            if (passportFile.size > 1000000) {
              //console.log("file too large.");
            }
            // else {
            setcustomer_image(passportFile);
            // }
          }
        }
      }
    }
  };

  const onChangeaddress = (event) => {
    setAddress(event.target.value);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
    setPhone_no2(event.target.value);
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
  const openModal2 = () => {
    setModal2(true);
  };
  const closeModal2 = () => {
    setModal2(false);
  };
  const openModal3 = () => {
    setModal3(true);
  };
  const closeModal3 = () => {
    setModal3(false);
  };
  // const onChangePicture = (e) => {
  //   setPicture(URL.createObjectURL(e.target.files[0]));
  // };
  // const handleChange = (newValue) => {
  //   setValue(newValue);
  // };

  const sends = async (e) => {
    let res = await sumitGenderAndDate(gender, dateOfBirth);

    //console.log(res);

    if (res.success === true) {
      //console.log("okay Good Server");
    } else {
      //console.log("Something went wrong!");
      // setAlert(res.data.data.errors[0].msg, "danger");
    }
  };

  // const updateInfo = async (e) => {
  //   let res = await userInfo(firstname1,lastname1,phoneNumber1,email1,BVN1);

  //   //console.log(res);

  //   if (res.data.data.success === true) {
  //     //console.log("okay Good Server");
  //   } else {
  //     setAlert(res.data.data.errors[0].msg, "danger");
  //   }
  // };

  const nextOfKINGS = async (e) => {
    let res = await nextOfKING(
      firstname,
      lastname,
      email,
      phoneNumber,
      relationship,
      gender
    );

    //console.log(res);

    if (res.data.data.success === true) {
      //console.log("okay Good Server");
    } else {
      setAlert(res.data.data.errors[0].msg, "danger");
    }
  };

  const sumitChangePassword = async (e) => {
    let res = await changePassword(oldpassword, newpassword);

    //console.log(res);

    if (res.data.data.success === true) {
      //console.log("okay Good Server");
    } else {
      setAlert(res.data.data.errors[0].msg, "danger");
    }
  };

  const AddUserPhoto = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    if (customer_image === "") {
      //console.log("empty passport");

      // setAlert('Please provide a passport photo', 'danger');
    } else {
      const element = document.getElementById("customer_image");
      const file = element.files[0];
      formData.append("customer_image", file, file.name);

      //console.log(formData, "hhhh");

      try {
        const res = await axios.put(
          api_url2 + "/v1/user/add/customer/image",
          formData
        );
        //console.log(res.data, "undefined");

        if (res.data.statusCode === 200) {
          // setPassportUpload(true)
        } else {
          // setAlert('Something went wrong, please try again later', 'danger');
        }
      } catch (err) {
        //console.log(err.response);
        // setAlert('Check your internet connection', 'danger');
      }
    }
  };

  const submitAddress = async (e) => {
    e.preventDefault();

    // //console.log('vbvbvb');

    if (customerAddress === "") {
      //console.log("empty address");

      // setAlert('Please provide a passport photo', 'danger');
    } else {
      const body = JSON.stringify({ customerAddress });
      //console.log(body);

      try {
        const res = await axios.post(
          api_url2 + "/v1/user/add/address",
          body,
          config
        );
        //console.log(res.data, "undefined");

        if (res.data.statusCode === 200) {
          // setPassportUpload(true)
        } else {
          // setAlert('Something went wrong, please try again later', 'danger');
        }
      } catch (err) {
        //console.log(err.response);
        // setAlert('Check your internet connection', 'danger');
      }
    }
  };

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
                      {UseruserImage === null ? (
                        <div className="toggle_body_area1_cont1_txts">
                          Change Profile Picture{" "}
                          <span className="toggle_body_area1_cont1_sub_txts">
                            {" "}
                            Choose a new avatar to be used across Egoras
                          </span>
                        </div>
                      ) : (
                        <div className="toggle_body_area1_cont1_txts">
                          My Profile Picture{" "}
                          <span className="toggle_body_area1_cont1_sub_txts">
                            {" "}
                            {/* Choose a new avatar to be used across Egoras */}
                          </span>
                        </div>
                      )}
                      <div className="toggle_body_area1_cont1_input">
                        {" "}
                        <img src={image} alt="" className="user_upload_img" />
                        {UseruserImage === null ? (
                          <AddCircleIcon
                            className="add_icon"
                            onClick={openModal}
                          />
                        ) : null}
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
                          value={Userfirstname}
                        />
                        <TextField
                          className="name_input1"
                          id="outlined-basic"
                          label="Last Name"
                          variant="outlined"
                          value={Userlastname}
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
                        {Usergender === null ? (
                          <div className="d-flex">
                            <div className="radio_group pr-4">
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
                        ) : (
                          Usergender
                        )}
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
                        {UserdateOfBirth === null ? (
                          <input
                            type="date"
                            name="dateOfBirth"
                            id=""
                            value={dateOfBirth}
                            className="name_input1 date_input"
                            onChange={onChangeFor}
                          />
                        ) : (
                          UserdateOfBirth
                        )}
                      </div>
                    </div>
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    {UserdateOfBirth === null ? (
                      <div className="toggle_body_area1_cont1">
                        <div className="toggle_body_area1_cont1_txts"></div>
                        <div className="toggle_body_area1_cont1_input">
                          <button className="save_changes_btn" onClick={sends}>
                            Save Changes
                          </button>
                        </div>
                      </div>
                    ) : null}
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
                  {
                    nxtOfKinA === true ? (
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
                              value={nxtfirstname}
                              // onChange={onChangeFor2}
                            />
                            <TextField
                              className="name_input1"
                              id="outlined-basic"
                              label="Last Name"
                              variant="outlined"
                              name="lastname"
                              value={nxtlastname}
                              // onChange={onChangeFor2}
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
                              value={nxtemail}
                              // onChange={onChangeFor2}
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
                              value={nxtphoneNumber}
                              // onChange={onChangeFor2}
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
                           <TextField
                              className="name_input1a"
                              id="outlined-basic"
                              label="Relationship"
                              variant="outlined"
                              // name="phoneNumber"
                              value={nxtrelationship}
                              // onChange={onChangeFor2}
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
                          {/* <div className="toggle_body_area1_cont1_input">
                            <div className="radio_group">
                              <input
                                type="radio"
                                name="gender"
                                id="male"
                                // value={Male}
                                value="Male"
                                onChange={onChangeFor2}
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
                                value="Female"
                                onChange={onChangeFor2}
                              />
                              <label for="female" class="radio" value={gender}>
                                Female
                              </label>
                            </div>
                          </div> */}
                          {nxtgender}
                        </div>
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}

                        {/* <div className="toggle_body_area1_cont1">
                          <div className="toggle_body_area1_cont1_txts"></div>
                          <div className="toggle_body_area1_cont1_input">
                            <button
                              className="save_changes_btn"
                              onClick={nextOfKINGS}
                            >
                              Save Changes
                            </button>
                          </div>
                        </div> */}
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                      </div>
                    ) : (
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
                                  value={relationship}
                                  label="Age"
                                  // onChange={handleChange}
                                  onChange={onChangeFor2}
                                  // onSelect={onChangeFor2}
                                >
                                  <MenuItem name="relationship" value="Mother">
                                    Mother
                                  </MenuItem>
                                  <MenuItem value="Father">Father</MenuItem>
                                  <MenuItem value="Sister">Sister</MenuItem>
                                  <MenuItem value="Uncle">Uncle</MenuItem>
                                  <MenuItem value="Aunt">Aunt</MenuItem>
                                  <MenuItem value="Brother">Brother</MenuItem>
                                  <MenuItem value="Inlaw">Inlaw</MenuItem>
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
                                value="Male"
                                onChange={onChangeFor2}
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
                                value="Female"
                                onChange={onChangeFor2}
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
                            <button
                              className="save_changes_btn"
                              onClick={nextOfKINGS}
                            >
                              Save Changes
                            </button>
                          </div>
                        </div>
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                      </div>
                    )
                  }
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
                        {Useremail}
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
                        {UserphoneNumber} {phone_no2}
                        <AddCircleIcon
                          className="edit_icon"
                          onClick={openModal2}
                        />
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
                        <div className="bvn_btn">{Userbvn}</div>
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
                        <div className="bvn_btn" onClick={openModal3}>
                          Change Password
                        </div>
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
                            onChange={onChangeaddress}
                          />
                          <button
                            className="add_photo"
                            style={{ width: "25%" }}
                            onClick={submitAddress}
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
                      onChange={onImageChange}
                    />{" "}
                  </label>
                  <input
                    type="file"
                    id="customer_image"
                    name="customer_image"
                    onChange={onImageChange}
                    className="filetype"
                  />
                </div>{" "}
              </div>
              <div className="profile_modal_area2">
                <button className="add_photo" onClick={AddUserPhoto}>
                  <AddAPhotoIcon className="photo_icon" /> Add Photo
                </button>
                <button className="cancel_photo" onClick={closeModal}>
                  <DoDisturbIcon className="cancel_icon" /> Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {modal2 == true ? (
        <div className="profile_modal_div">
          <div className="container">
            <div className="profile_modal_area_phone_no">
              <div className="profile_modal_area1">
                <TextField
                  className="name_input1ab"
                  id="outlined-basic"
                  label="Phone No:"
                  variant="outlined"
                  name="phone no"
                  value={phone_no2}
                  onChange={handleChange}
                />
              </div>
              <div className="profile_modal_area2">
                <button className="add_photo">
                  {" "}
                  <LocalPhoneIcon className="cancel_icon" />
                  Add Number
                </button>
                <button className="cancel_photo" onClick={closeModal2}>
                  {" "}
                  <DoDisturbIcon className="cancel_icon" />
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {modal3 == true ? (
        <div className="profile_modal_div">
          <div className="container">
            <div className="profile_modal_area_phone_no">
              <div className="profile_modal_area1">
                <div className="password_divs">
                  <TextField
                    className="name_input1ab"
                    id="outlined-basic"
                    label="Change Password"
                    variant="outlined"
                    name="changePassword"
                    type="password"
                    value={oldpassword}
                    onChange={onChangeFor4}
                  />
                  <TextField
                    className="name_input1ab"
                    id="outlined-basic"
                    label="Re-Enter Password"
                    variant="outlined"
                    name="changePassword"
                    type="password"
                    value={newpassword}
                    onChange={onChangeFor4}
                  />
                </div>
              </div>
              <div className="profile_modal_area2">
                <button className="add_photo" onClick={sumitChangePassword}>
                  <LockIcon className="cancel_icon" />
                  Change Password
                </button>
                <button className="cancel_photo" onClick={closeModal3}>
                  <DoDisturbIcon className="cancel_icon" />
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

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
});

// let  res = await getLogin2(
export default connect(mapStateToProps, {
  sumitGenderAndDate,
  setAlert,
  nextOfKING,
  changePassword,
})(DashboardAccountPage);
