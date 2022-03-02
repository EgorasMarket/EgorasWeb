import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createWallet } from "../../../actions/wallet";
import { depositToken } from "../../../actions/wallet";
import LoadingIcons from "react-loading-icons";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import StarRateIcon from "@mui/icons-material/StarRate";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import NumberFormat from "react-number-format";
// import { NoDataFoundComponent } from "../Home2/Dashboard/NodataFound/NoDataFoundComponent";
import { NoDataFoundComponent } from "../Home2/Dashboard/NodataFound/NoDataFoundComponent";
import { Link } from "react-router-dom";
import data from "../MockData";
import { API_URL2 as api_url2 } from "../../../actions/types";

import axios from "axios";

import "./wallet.css";
const options = [
  "Deposit History",
  "Withdrawal History",
  "Transaction History",
];

const ITEM_HEIGHT = 48;

const Wallet1 = ({ auth, createWallet, depositToken }) => {
  const [age, setAge] = React.useState("");
  const [assetVal, setAssetVal] = useState("0.000");
  const [userId, setUserId] = useState(localStorage.getItem("adminCusId"));
  const [visible, settVisible] = useState(false);
  const [secureNumb, setSecureNumb] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [allTokens, setAllTokens] = useState([]);
  const [copiedTxt, setCopiedTxt] = useState(false);
  const [copiedTxt1, setCopiedTxt1] = useState(false);
  const [deposits, setDeposits] = useState([]);
  const [tokenBal, setTokenBal] = useState("0.000");
  // const [currentToken, setCurrentToken] = useState();
  // const [tokenName, setTokenName] = useState();
  const [tokenSymbol, setTokenSymbol] = useState();
  const [accountExists, setAccountExists] = useState();
  const [createWalletModal, setCreateWalletModal] = useState(false);
  const [walletAddr, setWalletAddr] = useState("");
  const [assetName, setAssetName] = useState();
  const [custId, setCustId] = useState("");
  const [showDeposit, setShowDeposit] = useState(false);
  const [tokenSign, setTokenSign] = useState();
  const [activeBg, setActiveBg] = useState("Home");
  const [network, setNetwork] = useState("BSC");
  // const [txId, setTxId] = useState(
  //   "0589f3200005888b2de942a03c58323c3e267b21c96bad96ea7e333098905746"
  // );
  // const [txId2, setTxId2] = useState(
  //   "0x360ba97e2a8f0deb200e34846092a3b8110283b1"
  // );

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const changeBg = (e) => {
    let currentId = e.currentTarget.id;
    setActiveBg(currentId);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const openCreateWalletModal = () => {
    setCreateWalletModal(true);
  };
  const closeCreateWalletModal = () => {
    setCreateWalletModal(false);
  };
  // useEffect(() => {
  //   axios
  //     .get(api_url2 + "/v1/wallet/get/all/tokens", null, config)
  //     .then((data) => {
  //       console.log(data.data.data, "powerful");

  //       setAllTokens(data.data.data);
  //       setAssetName(data.data.data[0].tokenName);
  //       setTokenSign(data.data.data[0].tokenSymbol);
  //       setTokenSymbol(data.data.data[0].tokenSymbol);
  //       console.log(data.data.data[0].tokenName);

  //       // setWrap({
  //       //   code: data.data.data.product_category_code,
  //       // });
  //     })
  //     .catch((err) => {
  //       console.log(err.response); // "oh, no!"
  //     });
  // }, []);
  useEffect(() => {
    var Authorized = auth.user;
    var userId = Authorized.user.id;
    axios
      .get(api_url2 + "/v1/wallet/get/wallet/info/" + userId, null, config)
      .then((data) => {
        // console.log(data.data.data.balance);
        setTokenBal(data.data.data.balance);
        setAssetVal(data.data.data.balance * 1);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [auth]);
  useEffect(() => {
    var Authorized = auth.user;
    var userId = Authorized.user.id;
    var hardCodedId = "2cac7619-fc8e-45d2-be07-39d76f04def1";
    // console.log(userId);
    axios
      .get(
        api_url2 + "/v1/wallet/get/wallet/fetch/deposits/" + userId,
        null,
        config
      )
      .then((data) => {
        // console.log(data.data.data);
        setDeposits(data.data.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [auth]);
  useEffect(() => {
    setIsLoading2(true);
    axios
      .get(api_url2 + "/v1/wallet/get/all/tokens", null, config)
      .then((data) => {
        // console.log(data.data.data, "powerful");
        setIsLoading2(false);
        setAssetName(data.data.data[0].tokenName);
        setTokenSign(data.data.data[0].tokenSymbol);
        setAllTokens(data.data.data);
        // setWrap({
        //   code: data.data.data.product_category_code,
        // });
      })
      .catch((err) => {
        console.log(err.response); // "oh, no!"
      });
  }, []);
  useEffect(async () => {
    // console.log(auth);
    if (auth.user !== null) {
      // const getName = todecoded.user.fullname;
      // const splitName = getName.split(" ");
      // console.log(todecoded.user.id)
      // setUserId(todecoded.user.id);

      // console.log(userId);

      await axios
        .get(api_url2 + "/v1/wallet/check/wallet/" + userId, null, config)
        .then((data) => {
          //  console.log(data.data, "powerful");
          setAccountExists(data.data.accountExists);
        })
        .catch((err) => {
          console.log(err.response); // "oh, no!"
        });
    }
  }, [auth]);

  const openVisibility = () => {
    settVisible(true);
    setSecureNumb(true);
  };
  const closeVisibility = () => {
    settVisible(false);
    setSecureNumb(false);
  };
  // const timer = () => {
  //   if (timeOut == false) {
  //     setTimeout(() => {
  //       setTimeOuut(false);
  //     }, 1000);
  //   } else {
  //     setTimeOuut(true);
  //   }
  // };

  const copyWalletAddress = (e) => {
    navigator.clipboard.writeText(e);
    // let currentId = e.currentTarget.id;
    // setActiveBg(currentId);
    setCopiedTxt(true);
  };
  const copyTextText = (e) => {
    navigator.clipboard.writeText(e);
    // let currentId = e.currentTarget.id;
    // setActiveBg(currentId);
    setCopiedTxt(true);
  };
  const copyTextText2 = (e) => {
    navigator.clipboard.writeText(e);
    setCopiedTxt1(true);
  };
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  const timer = setTimeout(() => {
    setCopiedTxt(false);
    setCopiedTxt1(false);
  }, 1000);

  const openDepositDiv = async (tokenName, tokenSymbol) => {
    setActiveBg("deposit_btn");
    setShowDeposit(true);
    setIsLoading(true);
    // setCurrentToken(tokenSymbol);
    // setTokenName(tokenName);
    // setIsLoading(true);
    if (accountExists) {
      // console.log("accountExists");
      setShowDeposit(true);
      setIsLoading(true);
      // console.log(userId);
      let res3 = await depositToken(userId, tokenSymbol);
      // console.log(res3);
      setIsLoading(true);

      if (res3.success === true) {
        setWalletAddr(res3.data.address);
        setIsLoading(false);
      }
    } else {
      console.log("not accountExists");
      // setShowDeposit(false);
      // console.log(userId);
      let res3 = await createWallet(userId, tokenSymbol);
      // console.log(res3);
      setIsLoading(true);

      if (res3.success === true) {
        setWalletAddr(res3.data.address);
        setIsLoading(false);
      }
    }
  };
  const closeDepositDiv = () => {
    setShowDeposit(false);
    setActiveBg("withdraw_btn");
  };

  return (
    <div className="other2">
      <section className="no-bg">
        <div className="container">
          <div className="walletClass3">
            <div className="walletSubClass3ng">
              <div className="wallet_heading">Wallet Overview</div>
              <div className="spanEstimated">
                Estimated balance
                {visible == false ? (
                  <VisibilityIcon
                    className="eye-visibility"
                    onClick={openVisibility}
                  />
                ) : (
                  <VisibilityOffIcon
                    className="eye-visibility"
                    onClick={closeVisibility}
                  />
                )}
              </div>
              {isLoading2 == true ? (
                <div className="loading_icon_div_amnt">
                  <LoadingIcons.ThreeDots
                    fill="#fff"
                    className="loading_iconnn"
                  />
                </div>
              ) : (
                <>
                  {secureNumb == true ? (
                    <div className="arrowSpan">
                      *********** <div className="usd_val">*********</div>
                    </div>
                  ) : (
                    <div className="arrowSpan">
                      ₦{assetVal}{" "}
                      <div className="usd_val">≈ ${assetVal / 560}</div>
                    </div>
                  )}
                </>
              )}
            </div>

            <div className="DivCap">
              <div className="formConcept">
                <div className="formConcept1">
                  <span className="formConceptWallet">My Assets</span>
                  <div
                  // className="formConceptSup"
                  // onClick={sending}
                  ></div>
                </div>
                {/* <div className="divConcept2">
                  <div>
                    <StarRateIcon className="starRateIcon" />
                  </div>
                  <div>
                    <div className="nigeriaCurrency">Nigerian Naira</div>
                    {secureNumb == true ? (
                      <div style={{ marginBottom: "5px" }}>*******</div>
                    ) : (
                      <div style={{ marginBottom: "5px" }}>0.00</div>
                    )}

                    <div style={{ display: "flex" }}>
                      <button
                        id="deposit"
                        className={
                          activeBg == "deposit"
                            ? "depositButton_active"
                            : "depositButton"
                        }
                        onClick={changeBg}
                      >
                        Deposit
                      </button>

                      <button
                        id="withdraw"
                        className={
                          activeBg == "withdraw"
                            ? "depositButton_active"
                            : "depositButton"
                        }
                        onClick={changeBg}
                      >
                        Withdraw
                      </button>

                      <button className="buttonMenu_drop">
                        <MoreVertIcon
                          className="divVan"
                          // onClick={works6}
                          id="tab3"
                        />
                        <MoreVertIcon
                          className="divVan"
                          // onClick={works4}
                          id="tab4"
                        />
                        <div className="downContent" id="downContent2">
                          <div
                            className="depo"
                            // onClick={changePage5}
                          >
                            Deposit History
                          </div>
                          <div
                            className="depo"
                            // onClick={changePage6}
                          >
                            Transaction History
                          </div>
                          <div
                            className="depo"
                            // onClick={changePage4}
                          >
                            Withdrawal History
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div> */}

                <hr />
                {isLoading2 == true ? (
                  <div className="loading_icon_d">
                    <LoadingIcons.ThreeDots
                      fill="#229e54"
                      className="loading_iconnn"
                    />
                    <p className="loading_txt">Loading...</p>
                  </div>
                ) : (
                  <>
                    {allTokens.map((data) => (
                      <div className="divConcept2 ">
                        <div>
                          <StarRateIcon className="starRateIcon" />
                        </div>
                        <div>
                          <div className="nigeriaCurrency">
                            {data.tokenName}
                          </div>
                          {secureNumb == true ? (
                            <div style={{ marginBottom: "5px" }}>*******</div>
                          ) : (
                            <div style={{ marginBottom: "5px" }}>
                              {tokenBal}
                              <span className="token_symbolism">
                                {tokenSign}
                              </span>
                            </div>
                          )}

                          <div style={{ display: "flex" }}>
                            <button
                              id="withdraw"
                              className={
                                activeBg == "deposit_btn"
                                  ? "depositButton_active"
                                  : "depositButton"
                              }
                              // id={data.tokenSymbol}
                              onClick={() =>
                                openDepositDiv(data.tokenName, data.tokenSymbol)
                              }
                            >
                              Fund Wallet
                            </button>
                            {/* <button
                              id="withdraw_btn"
                              className={
                                activeBg == "withdraw_btn"
                                  ? "depositButton_active"
                                  : "depositButton"
                              }
                              onClick={closeDepositDiv}
                            >
                              {" "}
                              Withdraw
                            </button> */}

                            <button className="buttonMenu_drop">
                              <MoreVertIcon
                                className="divVan"
                                // onClick={works2}
                                id="tab1"
                              />
                              <MoreVertIcon
                                className="divVan"
                                // onClick={works}
                                id="tab2"
                              />
                              <div className="downContent" id="downContent1">
                                <div
                                  className="depo"
                                  // onClick={changePage5}
                                >
                                  Deposit History
                                </div>
                                <div
                                  className="depo"
                                  // onClick={changePage6}
                                >
                                  Transaction History
                                </div>
                                <div
                                  className="depo"
                                  // onClick={changePage4}
                                >
                                  Withdrawal History
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
              {showDeposit == true ? (
                <div className="deposit_div">
                  <div className="input_amnt_heading">Input Amount</div>
                  <div className="input_amnt_div">
                    <NumberFormat
                      // format="#### #### #### ####"
                      className="input_amnt_div_input"
                      name="card_numberVar"
                      thousandSeparator={true}
                      inputmode="numeric"
                      // value={card_numberVar}
                      // onChange={(e) => onChange1(e)}
                    />
                    <button className="proceed_cust_funding_wallet_div">
                      Proceed
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  cart: state.shop.cart,
});

// export default Wallet;
export default connect(mapStateToProps, { createWallet, depositToken })(
  Wallet1
);
