import React, { useState, useEffect } from "react";
import axios from "axios";
import {API_URL2 as api_url2} 
 from "../../../../../actions/types";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
// import poodle from "../../img/profile_img.jpeg";
import AddCircleIcon from "@mui/icons-material/AddCircle";
// import  {useLocal}
import { useLocalStorage } from "../../Activation/useLocalStorage";
import jwt from "jsonwebtoken";

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
// import {getNaame} from "../../../Signup/signup"

function DashboardAccountPage({ sumitGenderAndDate, setAlert, nextOfKING , auth}) {

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };


  const [tokens, setTokens] = useState({ gender: "", dateOfBirth: "" });

  const [nextKin, setNextKin] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    relationship: "",
    gender: "",
   
  });

  //    useEffect(()=>{

  
  //      const userInfo =
  //     () =>
  //     async (dispatch) => {
  //       const config = {
  //         headers: {
  //           Accept: "*",
  //           "Access-Control-Allow-Origin": "*",
  //         },
  //       };
    
     
    
  //       try {
  //         const res = await axios.get(
  //           api_url2 + "/v1/user/info",
            
  //           config
  //         );
  //         console.log(res);
    
  //         return {
  //           success: true,
  //           data: res.data,
  //         };
  //       } catch (err) {
  //         console.log(err.response);
    
  //         return {
  //           success: false,
  //           data: err.response,
  //         };
  //       }
  //     };

  // },[])

//   useEffect(() => {
  
//     axios
//       .get(
//         api_url2+
//           "/v1/user/info",
//         null,
//         config
//       )
//       .then((data) => {
//         console.log(data);
        
//       });
  

//   // }
// }, []);



useEffect(() => {
  // fetchDepositLinks();
  console.log(auth);
  if (auth.user !== null) {
    var todecoded = auth.user;
    var decoded = jwt.decode(todecoded, {
      complete: true,
    });
    setUserName(decoded.payload.user.username);
    // setIsLoggedIn(true);

    console.log(decoded.payload);
    var eee = decoded.payload.exp * 1000;
    var exp = new Date(eee).getTime();

    // if (currentTimestamp >= exp) {
    //   // //console.log('ex');
    //   localStorage.removeItem("token");
    //   window.location.href = "/login";
    // }
  }
}, [auth]);




  // const [userInfoUpdate,setUserInfoUpdate]=useState({
  //   firstname:"",lastname:"",phoneNumber:"",email:"",BVN:"",
  // })


  // const {firstname1,lastname1,phoneNumber1,email1,BVN1} = userInfoUpdate;

  const [userName,setUserName]=useState({user:""});
  const [nameUpdate,setNameUpdate]= useState("");

  const {user}=userName;

  const { firstname, lastname, email, phoneNumber,relationship, gender1,  } =
    nextKin;

  const { gender, dateOfBirth } = tokens;

  const onChangeFor = (e) => {
    setTokens({ ...tokens, [e.target.name]: e.target.value });
  };

  const onChangeFor2 = (e) => {
    setNextKin({ ...nextKin, [e.target.name]: e.target.value });
    console.log(nextKin)
  };

  // const onChangeFor4 =(e)=>{
  //   setUserInfoUpdate({...userInfoUpdate,[e.target.name]:e.target.value})
  // }

  // const updateUser =()=>{
  //   setUserName()
  // }

  // const [value, setValue] = useState("1997-02-09");
  // const [email, setEmail] = useState("samuelify225@gmail.com");
  const [bvnNum, setBvnNum] = useState("23745672845");
  const [phoneNo, setPhoneNo] = useState("+2348164020234");
  //   const [value, setValue] = useState(new Date("2014-02-09"));
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    setNextKin({ ...nextKin, [event.target.name]: event.target.value });
    console.log(nextKin)
  };
  const [activeBg, setActiveBg] = useState("accounts");
  const [activeBody, setActiveBody] = useState("");
  const changeBg = (e) => {
    let currentId = e.currentTarget.id;
    setActiveBg(currentId);
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


  // const updateInfo = async (e) => {
  //   let res = await userInfo(firstname1,lastname1,phoneNumber1,email1,BVN1);

  //   console.log(res);

  //   if (res.data.data.success === true) {
  //     console.log("okay Good Server");
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
      gender,
     
    );

    console.log(res);

    if (res.data.data.success === true) {
      console.log("okay Good Server");
    } else {
      setAlert(res.data.data.errors[0].msg, "danger");
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
                          // src={picture}
                          src="/img/profile_img.jpeg"
                          alt=""
                          className="user_upload_img"
                        />
                        <AddCircleIcon
                          className="add_icon"
                          // onClick={onChangePicture}
                        />
                        {/* <input type="file" name="" id="" /> */}
                        {/* <AvatarSelector onChange={(value) => setPic(value)} value={pic} /> */}
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
                        <button className="save_changes_btn"
                        onClick={sends}
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
                    {/* <div className="toggle_body_area1_cont1">
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
                    </div> */}
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}

                    {/* <div className="toggle_body_area1_cont1">
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
                    </div> */}
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    {/* ================= */}
                    {/* <div className="toggle_body_area1_cont1">
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
                    </div> */}
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
                              <MenuItem 
                              name="relationship"value="Mother" >Mother</MenuItem>
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
                        <button className="save_changes_btn" onClick={nextOfKINGS}>
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
                        {phoneNumber} <EditIcon className="edit_icon" />
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
                        <div className="bvn_btn">{}</div>
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


const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
});


// let  res = await getLogin2(
export default connect(mapStateToProps, { sumitGenderAndDate, setAlert, nextOfKING})(
  DashboardAccountPage
);
