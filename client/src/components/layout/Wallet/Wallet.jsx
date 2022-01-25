import React, { useState, useEffect } from "react";

import IconButton from "@mui/material/IconButton";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Link } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import CloseIcon from "@mui/icons-material/Close";

import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ReplayIcon from "@mui/icons-material/Replay";
import InfoIcon from "@mui/icons-material/Info";
import { flexbox } from "@mui/system";
import "./wallet.css";
const options = [
  "Deposit History",
  "Withdrawal History",
  "Transaction History",
];

const ITEM_HEIGHT = 48;

const Wallet = () => {
  const [age, setAge] = React.useState("");
  const [assetVal, setAssetVal] = useState("200,000.00");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  //  const [anchorE2, setAnchorE2] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // const handleClose2 = () => {
  //   setAnchorE2(null);
  //   swap()
  // };

  const deposit = () => {
    let feed = document.getElementById("weed");
    feed.style.display = "none";
  };
  const hid2 = () => {
    document.getElementById("dialog").style.display = "block";
    document.body.classList.add("adding");
  };
  const hid = () => {
    document.getElementById("dialog").style.display = "none";
    document.body.classList.remove("adding");
  };

  // const inputEnter=()=>{
  //   let car = document.getElementById('numbering');
  //   if (car.value.length > 11){
  //        console.log('value is greater than Eleven')
  //   }
  //    if (car.value.length < 11){
  //        console.log('value is greater than Eleven')
  //   }
  // }

  const phoneNumber = (inputText) => {
    let phoneNo = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (inputText.target.value.match(phoneNo) > 12) {
      document
        .getElementById("inputCorrect")
        .classList.add("invalidConfirmationNumber");
      document.getElementById("inputCorrect").style.display = "block";
    }
    if (inputText.target.value.match(phoneNo) <= 11) {
      document
        .getElementById("inputCorrect")
        .classList.add("invalidConfirmationNumber");
      document.getElementById("inputCorrect").style.display = "block";
      // document.getElementById('inputCorrect').classList.remove('invalidConfirmationNumber');
    } else {
      document
        .getElementById("inputCorrect")
        .classList.remove("invalidConfirmationNumber");
      document.getElementById("inputCorrect").style.display = "none";
    }
  };

  const changeBg3 = () => {
    // let act =document.getElementById('success');
    // let act_1 =document.getElementById('success1');
    let act_2 = document.getElementById("success2");
    let act_3 = document.getElementById("success3");

    act_2.style.background = "#229e54";
    act_2.style.color = "#fff";
    act_3.style.background = "#fff";
    act_3.style.border = "1px solid #229e54";
    act_3.style.color = "black";
    changePage2();
  };

  const changeBg4 = () => {
    let act_2 = document.getElementById("success2");
    let act_3 = document.getElementById("success3");

    act_3.style.background = "#229e54";
    act_3.style.color = "#fff";
    act_2.style.background = "#fff";
    act_2.style.border = "1px solid #229e54";
    act_2.style.color = "black";
  };

  const changeBg5 = () => {
    let act_4 = document.getElementById("success4");
    let act_5 = document.getElementById("success5");

    act_4.style.background = "#229e54";
    act_4.style.color = "#fff";
    act_5.style.background = "#fff";
    act_5.style.border = "1px solid #229e54";
    act_5.style.color = "black";
    changePage3();
  };
  const changeBg6 = () => {
    // let act =document.getElementById('success');
    // let act_1 =document.getElementById('success1');
    let act_4 = document.getElementById("success4");
    let act_5 = document.getElementById("success5");

    act_5.style.background = "#229e54";
    act_5.style.color = "#fff";
    act_4.style.background = "#fff";
    act_4.style.border = "1px solid #229e54";
    act_4.style.color = "black";
  };

  const changePage = () => {
    let good = document.getElementById("weed");
    let good_1 = document.getElementById("weed1");
    let good_2 = document.getElementById("thanks");
    good.style.display = "none";
    good_2.style.display = "none";
    good_1.style.display = "block";
    document.getElementById("makingSense").style.display = "none";
    document.getElementById("makingSense2").style.display = "none";
    document.getElementById("makingSense3").style.display = "none";
    document.getElementById("thanks2Plus").style.display = "none";
    document.getElementById("thanks2Plus50").style.display = "none";
    document.getElementById("downContent1").style.display = "none";

    let act = document.getElementById("success");
    let act_1 = document.getElementById("success1");

    act.style.background = "#229e54";
    act.style.color = "#fff";
    act_1.style.background = "#fff";
    act_1.style.border = "1px solid #229e54";
    act_1.style.color = "black";
    window.history.pushState(
      "kinggdsakk",
      "Title",
      "/wallet/deposit/nigeria-naira"
    );
  };

  const changePage1 = () => {
    let Product = document.getElementById("weed");
    let product1 = document.getElementById("thanks");
    let Product2 = document.getElementById("weed1");
    Product.style.display = "none";
    Product2.style.display = "none";
    product1.style.display = "block";
    document.getElementById("makingSense").style.display = "none";
    document.getElementById("makingSense2").style.display = "none";
    document.getElementById("makingSense3").style.display = "none";
    document.getElementById("thanks2Plus").style.display = "none";
    document.getElementById("thanks2Plus50").style.display = "none";

    let act = document.getElementById("success");
    let act_1 = document.getElementById("success1");
    document.getElementById("downContent1").style.display = "none";

    act_1.style.background = "#229e54";
    act_1.style.color = "#fff";
    act.style.background = "#fff";
    act.style.border = "1px solid #229e54";
    act.style.color = "black";
    window.history.pushState(
      "kinggdsakk",
      "Title"
      //   "dashboard/wallet/dashboard/wallet/withdrawal/nigeria-naira"
    );
  };

  const changePage2 = () => {
    document.getElementById("weed").style.display = "none";
    document.getElementById("thanks").style.display = "none";
    document.getElementById("weed1").style.display = "none";
    document.getElementById("thanks2Plus").style.display = "block";
    window.history.pushState("kinggdsakk", "Title", "/wallet/deposit/egr");
    document.getElementById("thanks2Plus50").style.display = "none";
    document.getElementById("makingSense").style.display = "none";
    document.getElementById("makingSense2").style.display = "none";
    document.getElementById("makingSense3").style.display = "none";
  };

  const changePage3 = () => {
    document.getElementById("weed").style.display = "none";
    document.getElementById("thanks2Plus").style.display = "none";
    document.getElementById("thanks").style.display = "none";
    document.getElementById("weed1").style.display = "none";
    document.getElementById("thanks2Plus50").style.display = "block";
    document.getElementById("makingSense").style.display = "none";
    document.getElementById("makingSense2").style.display = "none";
    document.getElementById("makingSense3").style.display = "none";
  };
  const changePage4 = () => {
    document.getElementById("weed").style.display = "none";
    document.getElementById("thanks2Plus").style.display = "none";
    document.getElementById("thanks").style.display = "none";
    document.getElementById("weed1").style.display = "none";
    document.getElementById("thanks2Plus50").style.display = "none";
    document.getElementById("makingSense").style.display = "block";
    document.getElementById("makingSense2").style.display = "none";
    document.getElementById("makingSense3").style.display = "none";
    document.getElementById("DepositShift1").classList.add("createDiv");
    document.getElementById("DepositShift").classList.remove("createDiv");
    document.getElementById("DepositShift2").classList.remove("createDiv");
    document.getElementById("farm2").innerHTML = "Withdrawal NGN History";
  };

  const changePage5 = () => {
    document.getElementById("weed").style.display = "none";
    document.getElementById("thanks2Plus").style.display = "none";
    document.getElementById("thanks").style.display = "none";
    document.getElementById("weed1").style.display = "none";
    document.getElementById("thanks2Plus50").style.display = "none";
    document.getElementById("makingSense").style.display = "none";
    document.getElementById("makingSense2").style.display = "block";
    document.getElementById("makingSense3").style.display = "none";
    document.getElementById("DepositShift3").classList.add("createDiv");
    document.getElementById("DepositShift4").classList.remove("createDiv");
    document.getElementById("DepositShift5").classList.remove("createDiv");
    document.getElementById("farm").innerHTML = "Deposit NGN History";
  };
  const changePage6 = () => {
    document.getElementById("weed").style.display = "none";
    document.getElementById("thanks2Plus").style.display = "none";
    document.getElementById("thanks").style.display = "none";
    document.getElementById("weed1").style.display = "none";
    document.getElementById("thanks2Plus50").style.display = "none";
    document.getElementById("makingSense").style.display = "none";
    document.getElementById("makingSense2").style.display = "none";
    document.getElementById("makingSense3").style.display = "block";
    document.getElementById("DepositShift8").classList.add("createDiv");
    document.getElementById("DepositShift7").classList.remove("createDiv");
    document.getElementById("DepositShift6").classList.remove("createDiv");
    document.getElementById("farm1").innerHTML = "Transactions History";
  };

  // options[0] = changePage4();
  // options[1] = changePage5();
  // options[2] = changePage6();

  const swap1 = (event) => {
    if (event.target.value[0] === options[0]) {
      changePage4();
    }
    if (event.target.value[1] === options[1]) {
      changePage5();
      // changePage5()
    }
    if (event.target.value[2] === options[2]) {
      changePage6();
    }
  };
  const buttonColor = () => {
    document.getElementById("backFor").classList.add("verify3");
    document.getElementById("verify3").classList.remove("verify3");
    backWard();
  };
  const buttonColor1 = () => {
    document.getElementById("backFor").classList.remove("verify3");
    document.getElementById("verify3").classList.add("verify3");
  };

  const displayInvalid = () => {
    let kind = document.getElementById("BankAccount");
    if (kind.value === null) {
      document.getElementById("show12").style.display = "block";
      document.getElementById("show13").style.display = "none";
    } else if (kind.value.length > 10 || kind.value.length < 10) {
      document.getElementById("show13").style.display = "block";
      document.getElementById("show12").style.display = "none";
    } else {
      document.getElementById("show12").style.display = "none";
      document.getElementById("show13").style.display = "none";
    }
  };

  const speedMe = () => {
    document.getElementById("verifyWithMe").style.display = "block";
    document.getElementById("numbering").style.display = "none";
    document.getElementById("submitAbove4").style.display = "none";
  };
  const displayInvalid2 = () => {
    document.getElementById("show12").style.display = "none";
  };

  const changeImage = () => {
    document.getElementById("myImage").src = "/img/qr-code1.png";
    document.getElementById("p_Text").innerHTML = "/ytunhgbvfredwsaqopmnbvxc";
    document.getElementById("myImage1").src = "/img/qr-code.png";
    document.getElementById("p_Text1").innerHTML = "/ytunh567ujhgbvr432opklji";
  };
  const changeImage1 = () => {
    document.getElementById("myImage").src = "/img/qr-code.png";
    document.getElementById("p_Text").innerHTML = "/vfcgbxnjsazmkiouytrewqml";
    document.getElementById("myImage1").src = "/img/qr-code1.png";
    document.getElementById("p_Text1").innerHTML = "/vfcgbcxzvbnmklopiuytrew";
  };

  const backWard = () => {
    document.getElementById("verifyWithMe").style.display = "none";
    document.getElementById("submitAbove4").style.display = "block";
    document.getElementById("numbering").style.display = "block";
  };

  const copied = () => {
    let copySelect = document.getElementById("myImage");
    let copySelect1 = document.getElementById("p_Text");
    copySelect.select();
    copySelect1.select();

    document.execCommand("copy");
  };
  const sending = () => {
    document.getElementById("contactSupport").style.display = "block";
    document.body.classList.add("adding");
  };
  const sending1 = () => {
    document.getElementById("contactSupport").style.display = "none";
    document.body.classList.remove("adding");
  };

  const add12 = () => {
    document.getElementById("DepositShift1").classList.add("createDiv");
    document.getElementById("DepositShift").classList.remove("createDiv");
    document.getElementById("DepositShift2").classList.remove("createDiv");
    document.getElementById("DepositShift3").classList.remove("createDiv");
    document.getElementById("DepositShift6").classList.remove("createDiv");
    document.getElementById("DepositShift5").classList.remove("createDiv");
    document.getElementById("DepositShift8").classList.remove("createDiv");
    document.getElementById("DepositShift4").classList.add("createDiv");
    document.getElementById("DepositShift7").classList.add("createDiv");
    document.getElementById("withdrawNGN7").innerHTML =
      "Withdrawal history on Process";
    document.getElementById("withdrawNGN8").innerHTML =
      "Withdrawal history on Process";
    document.getElementById("withdrawNGN9").innerHTML =
      "Withdrawal history on Process";
    document.getElementById("farm").innerHTML = "Withdrawal NGN History";
    document.getElementById("farm1").innerHTML = "Withdrawal NGN History";
    document.getElementById("farm2").innerHTML = "Withdrawal NGN History";
  };
  const add13 = () => {
    document.getElementById("DepositShift2").classList.add("createDiv");
    document.getElementById("DepositShift").classList.remove("createDiv");
    document.getElementById("DepositShift1").classList.remove("createDiv");
    document.getElementById("DepositShift4").classList.remove("createDiv");
    document.getElementById("DepositShift7").classList.remove("createDiv");
    document.getElementById("DepositShift3").classList.remove("createDiv");
    document.getElementById("DepositShift6").classList.remove("createDiv");
    document.getElementById("DepositShift5").classList.add("createDiv");
    document.getElementById("DepositShift8").classList.add("createDiv");
    document.getElementById("withdrawNGN7").innerHTML =
      "Transaction history on Process";
    document.getElementById("withdrawNGN8").innerHTML =
      "Transaction history on Process";
    document.getElementById("withdrawNGN9").innerHTML =
      "Transaction history on Process";
    document.getElementById("farm").innerHTML = "Transactions History";
    document.getElementById("farm1").innerHTML = "Transactions History";
    document.getElementById("farm2").innerHTML = "Transactions History";
  };
  const add14 = () => {
    document.getElementById("DepositShift").classList.add("createDiv");
    document.getElementById("DepositShift1").classList.remove("createDiv");
    document.getElementById("DepositShift2").classList.remove("createDiv");
    document.getElementById("DepositShift3").classList.add("createDiv");
    document.getElementById("DepositShift6").classList.add("createDiv");
    document.getElementById("DepositShift4").classList.remove("createDiv");
    document.getElementById("DepositShift7").classList.remove("createDiv");
    document.getElementById("DepositShift5").classList.remove("createDiv");
    document.getElementById("DepositShift8").classList.remove("createDiv");
    document.getElementById("withdrawNGN7").innerHTML =
      "Deposit History on Process";
    document.getElementById("withdrawNGN8").innerHTML =
      "Deposit History on Process";
    document.getElementById("withdrawNGN9").innerHTML =
      "Deposit History on Process";
    document.getElementById("farm1").innerHTML = "Deposit NGN History";
    document.getElementById("farm").innerHTML = "Deposit NGN History";
    document.getElementById("farm2").innerHTML = "Deposit NGN History";
  };

  const works = () => {
    document.getElementById("downContent1").style.display = "block";

    document.getElementById("tab1").style.display = "block";
    document.getElementById("tab2").style.display = "none";
  };

  const works4 = () => {
    document.getElementById("downContent2").style.display = "block";
    document.getElementById("tab3").style.display = "block";
    document.getElementById("tab4").style.display = "none";
  };
  const works8 = () => {
    document.getElementById("downContent3").style.display = "block";
    document.getElementById("tab5").style.display = "block";
    document.getElementById("tab6").style.display = "none";
  };
  const works2 = () => {
    document.getElementById("downContent1").style.display = "none";
    document.getElementById("tab2").style.display = "block";
    document.getElementById("tab1").style.display = "none";
  };
  const works6 = () => {
    document.getElementById("downContent2").style.display = "none";
    document.getElementById("tab4").style.display = "block";
    document.getElementById("tab3").style.display = "none";
  };
  const works10 = () => {
    document.getElementById("downContent3").style.display = "none";
    document.getElementById("tab6").style.display = "block";
    document.getElementById("tab5").style.display = "none";
  };

  //    const works=()=>{
  //     document.getElementById("downContent1").classList.toggle("show");
  //    }

  document.body.onClick = function (event) {
    if (!event.target.matches(".divVan")) {
      var dropdowns = document.getElementsByClassName("downContent");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  return (
    <div className="other2">
      <section className="no-bg">
        <div className="container" >
          <div className="walletClass3">
            <div className="walletSubClass3ng">
              <span className="spanEstimated">Estimated assets value:</span>
              <div className="arrowSpan">₦{assetVal}</div>
            </div>

            <div className="walletDrive">
              <div className="DivCap">
                <div className="formConcept">
                  <div className="formConcept1">
                    <span className="formConceptWallet">Wallets</span>
                    <div className="formConceptSup" onClick={sending}>
                      Contact Support
                    </div>
                  </div>
                  <div className="divConcept2">
                    <div>
                      <StarRateIcon className="starRateIcon" />
                    </div>
                    <div>
                      <div className="nigeriaCurrency">Nigeria Naira</div>
                      <div style={{ marginBottom: "5px" }}>0.00</div>
                      <div style={{ display: "flex" }}>
                        <button
                          className="depositButton"
                          id="success"
                          onClick={changePage}
                        >
                          Deposit
                        </button>
                        <button
                          className="depositButton1"
                          id="success1"
                          onClick={changePage1}
                        >
                          Withdraw
                        </button>

                        <button className="buttonMenu_drop">
                          <MoreVertIcon
                            className="divVan"
                            onClick={works2}
                            id="tab1"
                          />
                          <MoreVertIcon
                            className="divVan"
                            onClick={works}
                            id="tab2"
                          />
                          <div className="downContent" id="downContent1">
                            <div className="depo" onClick={changePage5}>
                              Deposit History
                            </div>
                            <div className="depo" onClick={changePage6}>
                              Transaction History
                            </div>
                            <div className="depo" onClick={changePage4}>
                              Withdrawal History
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="divConcept2">
                    <div>
                      {/*<StarRateIcon className="starRateIcon"/>*/}
                      <img
                        src="egoras-favicon.svg"
                        width="28"
                        style={{ marginRight: "10px" }}
                      />{" "}
                    </div>
                    <div>
                      <div className="nigeriaCurrency">EGR</div>
                      <div style={{ marginBottom: "5px" }}>0.00</div>
                      <div style={{ display: "flex" }}>
                        <button
                          className="depositButton"
                          onClick={changeBg3}
                          id="success2"
                        >
                          Deposit
                        </button>
                        <Link to="/dashboard/wallet/withdrawal">
                          {" "}
                          <button
                            className="depositButton1"
                            id="success3"
                            onClick={changeBg4}
                          >
                            Withdraw
                          </button>
                        </Link>
                        <button className="buttonMenu_drop">
                          <MoreVertIcon
                            className="divVan"
                            onClick={works6}
                            id="tab3"
                          />
                          <MoreVertIcon
                            className="divVan"
                            onClick={works4}
                            id="tab4"
                          />
                          <div className="downContent" id="downContent2">
                            <div className="depo" onClick={changePage5}>
                              Deposit History
                            </div>
                            <div className="depo" onClick={changePage6}>
                              Transaction History
                            </div>
                            <div className="depo" onClick={changePage4}>
                              Withdrawal History
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="divConcept2">
                    <div>
                      <img
                        src="token-right.svg"
                        width="30"
                        style={{ marginRight: "10px" }}
                      />
                    </div>
                    <div>
                      <div className="nigeriaCurrency">EUSD</div>
                      <div style={{ marginBottom: "5px" }}>0.00</div>
                      <div style={{ display: "flex" }}>
                        <button
                          className="depositButton"
                          onClick={changeBg5}
                          id="success4"
                        >
                          Deposit
                        </button>
                        <Link to="/dashboard/wallet/withdrawal">
                          <button
                            className="depositButton1"
                            onClick={changeBg6}
                            id="success5"
                          >
                            Withdraw
                          </button>
                        </Link>
                        <button className="buttonMenu_drop">
                          <MoreVertIcon
                            className="divVan"
                            onClick={works10}
                            id="tab5"
                          />
                          <MoreVertIcon
                            className="divVan"
                            onClick={works8}
                            id="tab6"
                          />
                          <div className="downContent" id="downContent3">
                            <div className="depo" onClick={changePage5}>
                              Deposit History
                            </div>
                            <div className="depo" onClick={changePage6}>
                              Transaction History
                            </div>
                            <div className="depo" onClick={changePage4}>
                              Withdrawal History
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="buyAndSellDiv" id="weed">
                  <div className="buyAndSellDivP">
                    Get started to buy and sell crypto
                  </div>
                  <div className="buyAndSellDivP1">Buy and sell crypto now</div>
                  <p className="buyAndSellDivP2">
                    <span>Egoras</span>{" "}
                    <span> is the easiest place to buy & earn crypto.</span>
                  </p>
                  <div className="buyAndSellDivButton">
                    <Link to="/egr">
                      <button className="buyButton1">Buy</button>
                    </Link>
                    <Link to="/egr">
                      <button className="sellButton2">Sell</button>
                    </Link>
                  </div>
                </div>

                <div className="mena" id="weed1">
                  <div className="mena1">Phone number is required.</div>
                  <div>
                    <input
                      type="number"
                      placeholder="Enter your number"
                      className="numbering"
                      required
                      id="numbering"
                      onChange={phoneNumber}
                    />
                  </div>
                  <div className="invalidConfirmationNumber" id="inputCorrect">
                    please input a correct number
                  </div>
                  <div
                    className="submitAbove aboveSubmit"
                    id="submitAbove4"
                    onClick={speedMe}
                  >
                    continue
                  </div>
                  <div className="verifyWithMe" id="verifyWithMe">
                    <div className="verifyCode">
                      {" "}
                      A confirmation code has been sent to your number. Please
                      enter it below to verify your phone number.
                    </div>
                    <div>
                      <form>
                        <div>
                          <input
                            type="text"
                            placeholder="Verification code"
                            className="verifyCode1"
                          />
                        </div>
                        <div className="invalidConfirmationCode">
                          {" "}
                          invalid confirmation code
                        </div>
                        <div className="verifyCode2">
                          <div
                            className="verifyCode3"
                            id="backFor"
                            onClick={buttonColor}
                          >
                            Back
                          </div>
                          <div
                            className="verifyCode3 verify3"
                            id="verify3"
                            onClick={buttonColor1}
                          >
                            Verify
                          </div>
                        </div>
                        <div className="verifyCode4">Resend OTP via call</div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="thanks" id="thanks">
                  <div className="thanks1">
                    <div className="NGNWithdraw">
                      Withdraw <span className="nigeria">NGN</span>
                    </div>
                    <div className="Fax_T">
                      <div className=" "> Withdrawal with a fast support</div>
                      <div className="newAccount_PLUS">
                        <div onClick={hid2} className="newAccount1">
                          <span className="plusGo">+</span>{" "}
                          <span className="freeFastAccount">
                            Add new account
                          </span>
                        </div>
                      </div>
                      <div className="submitAbove">continue</div>
                    </div>
                  </div>

                  <div className="historyNGN1">
                    <div className="historyNGN2">
                      <span className="nigeria">NGN</span> withdrawal history
                    </div>
                    <div className="thereAreNo">No Transactions for Now.</div>
                  </div>
                </div>

                <div className="NGNHistoryWithdrawal" id="makingSense">
                  <div className="withdrawNGN" id="farm2">
                    Withdraw NGN History
                  </div>
                  <div className="withdrawNGN24">
                    <div className="withdrawNGN2">
                      <div
                        className="DepositShift"
                        value="0.1"
                        id="DepositShift"
                        onClick={add14}
                      >
                        Deposit
                      </div>
                      <div
                        className="DepositShift"
                        value="0.2"
                        id="DepositShift1"
                        onClick={add12}
                      >
                        Withdrawal
                      </div>
                      <div
                        className="DepositShift"
                        value="0.3"
                        id="DepositShift2"
                        onClick={add13}
                      >
                        Transactions
                      </div>
                    </div>
                    <hr />
                    <div className="withdrawNGN7" id="withdrawNGN7">
                      {" "}
                      There are no transactions yet
                    </div>
                  </div>
                </div>
                <div className="NGNHistoryWithdrawal" id="makingSense2">
                  <div className="withdrawNGN" id="farm">
                    Deposit NGN History
                  </div>
                  <div className="withdrawNGN24">
                    <div className="withdrawNGN2">
                      <div
                        className="DepositShift"
                        value="0.1"
                        id="DepositShift3"
                        onClick={add14}
                      >
                        Deposit
                      </div>
                      <div
                        className="DepositShift"
                        value="0.2"
                        id="DepositShift4"
                        onClick={add12}
                      >
                        Withdrawal
                      </div>
                      <div
                        className="DepositShift"
                        value="0.3"
                        id="DepositShift5"
                        onClick={add13}
                      >
                        Transactions
                      </div>
                    </div>
                    <hr />
                    <div className="withdrawNGN7" id="withdrawNGN8">
                      {" "}
                      There are no transactions yet
                    </div>
                  </div>
                </div>
                <div className="NGNHistoryWithdrawal" id="makingSense3">
                  <div className="withdrawNGN" id="farm1">
                    Transactions History
                  </div>
                  <div className="withdrawNGN24">
                    <div className="withdrawNGN2">
                      <div
                        className="DepositShift"
                        value="0.1"
                        id="DepositShift6"
                        onClick={add14}
                      >
                        Deposit
                      </div>
                      <div
                        className="DepositShift"
                        value="0.2"
                        id="DepositShift7"
                        onClick={add12}
                      >
                        Withdrawal
                      </div>
                      <div
                        className="DepositShift"
                        value="0.3"
                        id="DepositShift8"
                        onClick={add13}
                      >
                        Transactions
                      </div>
                    </div>
                    <hr />
                    <div className="withdrawNGN7" id="withdrawNGN9">
                      {" "}
                      There are no transactions yet
                    </div>
                  </div>
                </div>

                <div className="thanks2Plus" id="thanks2Plus">
                  <div className="thanks2Plus1">
                    <div className="thanks2Plus2">Deposit EGORAS EGR</div>
                    <div className="thanks2Plus3">
                      <div className="thanks2Plus4">Address format:</div>
                      <div style={{ display: "flex", marginBottom: "10px" }}>
                        <div className="TRCN add" onClick={changeImage}>
                          EGR20
                        </div>
                        <div className="TRCN" onClick={changeImage1}>
                          EUSD20
                        </div>
                      </div>
                      <div className="thanks2Plus5">EGORAS EGR Address</div>
                      <div style={{ display: "flex", marginBottom: "10px" }}>
                        <div className="thanks2Plus6">
                          {" "}
                          <img
                            src="qr-code.png"
                            alt=""
                            width="160"
                            height="160"
                            id="myImage"
                          />
                        </div>
                        <ReplayIcon
                          style={{
                            width: "30px",
                            height: "25px",
                            padding: "4px",
                            backgroundColor: "#a1ecbf5c",
                            borderRadius: "3px",
                            cursor: "pointer",
                          }}
                        />
                      </div>
                      <p className="thanks2Plus7" id="p_Text">
                        hhjhdgtrunkwqedloingds
                      </p>
                      <button className="thanks2Plus8" onClick={copied}>
                        Copy to Clipboard
                      </button>

                      <hr />

                      <div className="thanks2Plus9">
                        Deposit fee: <span className="Aba1">0.00</span>{" "}
                        <span className="Aba">EGR</span>
                      </div>
                      <div
                        className="thanks2Plus10"
                        style={{ display: "flex", marginBottom: "10px" }}
                      >
                        <InfoIcon
                          style={{ color: "#229e54", marginRight: "10px" }}
                        />
                        <div>
                          You have to deposit at least{" "}
                          <span style={{ fontWeight: "bold" }}>
                            25 <span style={{ color: "#229e54" }}>EGR</span>
                          </span>{" "}
                          to be credited.Any deposit that is less than{" "}
                          <span style={{ fontWeight: "bold" }}>
                            25 <span style={{ color: "#229e54" }}> EGR</span>
                          </span>{" "}
                          will not be refunded
                        </div>
                      </div>
                      <div
                        className="thanks2Plus10"
                        style={{ display: "flex" }}
                      >
                        <InfoIcon
                          style={{ color: "#229e54", marginRight: "10px" }}
                        />
                        <div>
                          This deposit address only accepts{" "}
                          <span
                            style={{ fontWeight: "bold", color: "#229e54" }}
                          >
                            {" "}
                            EGR
                          </span>
                          . Do not send other coins to it.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="thanks2Plus11">
                    <div className="thanks2Plus12">EGR deposit History</div>
                    <div className="thanks2Plus13">
                      There is no deposit yet.
                    </div>
                  </div>
                </div>

                <div className="thanks2Plus" id="thanks2Plus50">
                  <div className="thanks2Plus1">
                    <div className="thanks2Plus2">Deposit EGORAS EUSD</div>
                    <div className="thanks2Plus3">
                      <div className="thanks2Plus4">Address format:</div>
                      <div style={{ display: "flex", marginBottom: "10px" }}>
                        <div className="TRCN add" onClick={changeImage}>
                          EUSD20
                        </div>
                        <div className="TRCN" onClick={changeImage1}>
                          EGR20
                        </div>
                      </div>
                      <div className="thanks2Plus5">EGORAS EUSD Address</div>
                      <div style={{ display: "flex", marginBottom: "10px" }}>
                        <div className="thanks2Plus6">
                          {" "}
                          <img
                            src="qr-code.png"
                            alt=""
                            width="160"
                            height="160"
                            id="myImage1"
                          />
                        </div>
                        <ReplayIcon
                          style={{
                            width: "30px",
                            height: "25px",
                            padding: "4px",
                            backgroundColor: "#a1ecbf5c",
                            borderRadius: "3px",
                            cursor: "pointer",
                          }}
                        />
                      </div>
                      <p className="thanks2Plus7" id="p_Text1">
                        hhjhdgtrunkwqedloingds
                      </p>
                      <button className="thanks2Plus8" onClick={copied}>
                        Copy to Clipboard
                      </button>

                      <hr />

                      <div className="thanks2Plus9">
                        Deposit fee: <span className="Aba1">0.00</span>{" "}
                        <span className="Aba">EUSD</span>
                      </div>
                      <div
                        className="thanks2Plus10"
                        style={{ display: "flex", marginBottom: "10px" }}
                      >
                        <InfoIcon
                          style={{ color: "#229e54", marginRight: "10px" }}
                        />
                        <div>
                          You have to deposit at least{" "}
                          <span style={{ fontWeight: "bold" }}>
                            25 <span style={{ color: "#229e54" }}>EUSD</span>
                          </span>{" "}
                          to be credited.Any deposit that is less than{" "}
                          <span style={{ fontWeight: "bold" }}>
                            25 <span style={{ color: "#229e54" }}> EUSD</span>
                          </span>{" "}
                          will not be refunded
                        </div>
                      </div>
                      <div
                        className="thanks2Plus10"
                        style={{ display: "flex" }}
                      >
                        <InfoIcon
                          style={{ color: "#229e54", marginRight: "10px" }}
                        />
                        <div>
                          This deposit address only accepts{" "}
                          <span
                            style={{ fontWeight: "bold", color: "#229e54" }}
                          >
                            {" "}
                            EUSD
                          </span>
                          . Do not send other coins to it.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="thanks2Plus11">
                    <div className="thanks2Plus12">EUSD deposit History</div>
                    <div className="thanks2Plus13">
                      There is no deposit yet.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="addBag" id="dialog">
            <div className="addBag1">
              <div
                className="addnewAccountDivP"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                Add new account{" "}
                <CloseIcon onClick={hid} style={{ cursor: "pointer" }} />{" "}
              </div>
              <div className="formDivDialog">
                <div className="formDivDialogBankName">Bank name</div>
                <div>
                  {" "}
                  <FormControl sx={{ m: 1, minWidth: "98%" }}>
                    <Select
                      value={age}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      style={{ outline: "0px", border: "none" }}
                    >
                      <MenuItem value="">
                        <em>EGORAS Micro Bank</em>
                      </MenuItem>
                      <MenuItem value={10}>First Bank </MenuItem>
                      <MenuItem value={20}>Access Bank</MenuItem>
                      <MenuItem value={30}>FCMB</MenuItem>
                      <MenuItem value={40}>Zenith Bank </MenuItem>
                      <MenuItem value={50}>Kuda Bank</MenuItem>
                      <MenuItem value={60}>UBA</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="BankAccountNumber1">Bank Account Number</div>
                <div className="styleDiv">
                  <input
                    type="number"
                    placeholder="Ur Account number"
                    max="11"
                    className="BankAccountNumber2"
                    required
                    id="BankAccount"
                    onChange={displayInvalid}
                  />{" "}
                </div>
                <div className="hiddenShow12" id="show12">
                  <span>Account number is required </span>
                </div>
                <div className="hiddenShow13" id="show13">
                  <span>Bank account number is invalid</span>
                </div>
                <div className="BankAccountNumber1">Bank Account Name</div>
                <div className="styleDiv">
                  <input
                    type="text"
                    placeholder="Ur Account name"
                    className="BankAccountNumber2"
                    required
                  />
                </div>
                <div className="SupportWithdrawal">Support fast withdrawal</div>
                <div className="CancelAndCreate">
                  <div className="create14 cancel" onClick={hid}>
                    Cancel
                  </div>
                  <div className="create14 createWeek">Create</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="contactSupport" id="contactSupport">
        <div className="contactSupport1">
          <div className="contactSupport2">
            Contact Support{" "}
            <CloseIcon onClick={sending1} style={{ cursor: "pointer" }} />
          </div>
          <div className="contactSupport21">
            <div className="contactSupport3">Open Telegram</div>
            <div className="contactSupport3">Open WhatsApp</div>
            <div className="contactSupport3">Open Messenger</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
