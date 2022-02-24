import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createWallet } from "../../../actions/wallet";
import { depositToken } from "../../../actions/wallet";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import StarRateIcon from "@mui/icons-material/StarRate";
import FileCopyIcon from "@mui/icons-material/FileCopy";
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

const Wallet = ({ auth, createWallet, depositToken }) => {
  const [age, setAge] = React.useState("");
  const [assetVal, setAssetVal] = useState("200,000.00");
//   const [AdminCustId, setAdminId] = useState("");
  const [visible, settVisible] = useState(false);
  const [secureNumb, setSecureNumb] = useState(false);
  const [allTokens, setAllTokens] = useState([]);
  const [copiedTxt, setCopiedTxt] = useState(false);
  const [copiedTxt1, setCopiedTxt1] = useState(false);
  // const [currentToken, setCurrentToken] = useState();
  // const [tokenName, setTokenName] = useState();
  const [tokenSymbol, setTokenSymbol] = useState();
  const [accountExists, setAccountExists] = useState();
  const [createWalletModal, setCreateWalletModal] = useState(false);
  const [walletAddr, setWalletAddr] = useState("");
  const [assetName, setAssetName] = useState();
  const [showDeposit, setShowDeposit] = useState(false);
  const [tokenSign, setTokenSign] = useState();
  const [activeBg, setActiveBg] = useState("Home");
  const [txId, setTxId] = useState(
      "0589f3200005888b2de942a03c58323c3e267b21c96bad96ea7e333098905746"
      );
      const [txId2, setTxId2] = useState(
          "0x360ba97e2a8f0deb200e34846092a3b8110283b1"
          );
          
const [AdminCustId, setAdminCustId] = useState(localStorage.getItem('adminCusId'));
//   const AdminCustId = " 0f2fcd67-a605-4074-8d29-08a6bbfc8f9b"

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
    axios
      .get(api_url2 + "/v1/wallet/get/all/tokens", null, config)
      .then((data) => {
        console.log(data.data.data, "powerful");
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


  useEffect(async() => {
      console.log(AdminCustId);
    console.log(auth);
    if (auth.user !== null) {
      var todecoded = auth.user;

      // const getName = todecoded.user.fullname;
      // const splitName = getName.split(" ");
      // console.log(todecoded.user.id)
    //   setAdminId(todecoded.user.id);


      await axios
        .get(
          api_url2 + "/v1/wallet/check/wallet/" + AdminCustId,
          null,
          config
        )
        .then((data) => {
          console.log(data.data, "powerful");
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
    // setCurrentToken(tokenSymbol);
    // setTokenName(tokenName);

    if (accountExists) {
      console.log('accountExists');
      setShowDeposit(true);
      // console.log(AdminCustId);
      let res3 = await depositToken(AdminCustId, tokenSymbol);
      console.log(res3);

      if (res3.success === true) {
        setWalletAddr(res3.data.address);
      }
    } else {
      console.log('not accountExists');
      setShowDeposit(true);
      // console.log(AdminCustId);
      let res3 = await createWallet(AdminCustId, tokenSymbol);
      console.log(res3);

      if (res3.success === true) {
        setWalletAddr(res3.data.address);
      }
    }

  };
  const closeDepositDiv = () => {
    setShowDeposit(false);
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
              {secureNumb == true ? (
                <div className="arrowSpan">
                  *********** <div className="usd_val">*********</div>
                </div>
              ) : (
                <div className="arrowSpan">
                  ₦{assetVal} <div className="usd_val">≈ ${200000 / 560}</div>
                </div>
              )}
            </div>

            <div className="DivCap">
              <div className="formConcept">
                <div className="formConcept1">
                  <span className="formConceptWallet">My Assets</span>
                  <div
                    className="formConceptSup"
                    // onClick={sending}
                  >
                    Contact Support
                  </div>
                </div>
                <div className="divConcept2">
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
                </div>
                <hr />

                {allTokens.map((data) => (
                  <div className="divConcept2 ">
                    <div>
                      <StarRateIcon className="starRateIcon" />
                    </div>
                    <div>
                      <div className="nigeriaCurrency">{data.tokenName}</div>
                      {secureNumb == true ? (
                        <div style={{ marginBottom: "5px" }}>*******</div>
                      ) : (
                        <div style={{ marginBottom: "5px" }}>0.00</div>
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
                          Deposit
                        </button>
                        <button
                          id="withdraw_btn"
                          className={
                            activeBg == "withdraw_btn"
                              ? "depositButton_active"
                              : "depositButton"
                          }
                          onClick={changeBg}
                        >
                          {" "}
                          Withdraw
                        </button>

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
              </div>
              {showDeposit == true ? (
                <div className="deposit_div">
                  <div className="deposit_div_heading">Deposit {assetName}</div>
                  <div className="deposit_div_body">
                    <div className="deposit_div_body1">
                      <div className="deposit_div_body1_input1">
                        <div className="deposit_div_body1_input_title">
                          Coin:
                        </div>
                        <div className="deposit_div_body1_input_asset">
                          <span className="token_symbol">
                            {" "}
                            <StarRateIcon className="starRateIcon" />
                            {tokenSign}{" "}
                          </span>
                          {assetName}
                        </div>
                      </div>
                      <div className="deposit_div_body1_input1">
                        <div className="deposit_div_body1_input_title">
                          Network:
                        </div>
                        <div className="deposit_div_body1_input_asset">
                          <span className="network_symbol">
                            <span className="token_symbol">BSC</span>
                          </span>{" "}
                          BNB Smart Chain (BEP20)
                        </div>
                      </div>
                      <div className="deposit_div_body1_input1_qr_code">
                        <div className="deposit_div_body1_input1_qr_code_title">
                          Scan the code on the deposit page to deposit{" "}
                          {assetName}
                        </div>
                        <div className="deposit_div_body1_input1_qr_code_img_div">
                          <img
                            src={
                              "https://chart.googleapis.com/chart?cht=qr&chs=120x120&chl=" +
                              walletAddr
                            }
                            alt=""
                            className="qr_img"
                          />
                          <div className="copy_address_div">
                            <div className="copy_address_div_title">
                              Address
                            </div>
                            <div className="copy_address_div_txt" id="myInput">
                              {walletAddr}
                              <FileCopyIcon
                                className="file_icon_copy"
                                // onClick={copyText}
                                // onMouseOut={outFunc}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="deposit_div_body1_input1_qr_code_title">
                          <li className="deposit_qr_not">
                            Send only
                            <span className="noticeable_txt">
                              {" "}
                              {tokenSign}
                            </span>{" "}
                            to this deposit address.
                          </li>
                          <li className="deposit_qr_not">
                            Ensure the network is
                            <span className="noticeable_txt">
                              {" "}
                              BNB Smart Chain (BEP20).
                            </span>
                          </li>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="deposit_history">
                    <div className="deposit_history_title">Recent Deposits</div>
                    <div className="deposit_history_body">
                      {data.depositTransactions.map((data) => (
                        <div className="deposit_history_body_area1">
                          <div className="deposit_history_body_area1_cont">
                            <div className="deposit_history_body_area1_cont_area1">
                              <div className="deposit_history_div1">
                                <span className="token_symbol">
                                  {" "}
                                  <StarRateIcon className="starRateIcon starRateIcon_2" />
                                </span>
                                <div className="token_deposit_amnt">
                                  131.3504 {tokenSign}
                                  <span className="completed_div">
                                    Completed
                                  </span>
                                </div>
                              </div>
                              <div className="deposit_history_div2">
                                <div className="deposit_history_div2_date">
                                  2022-02-20{" "}
                                  <span className="deposit_history_div2_time">
                                    12:28
                                  </span>
                                </div>
                                <div className="deposit_history_div2_network">
                                  <span className="deposit_history_div2_network_title">
                                    Network
                                  </span>
                                  {data.network}
                                </div>
                                <div className="deposit_history_div2_address">
                                  <span className="deposit_history_div2_network_title">
                                    Address
                                  </span>
                                  <div className="address_cont">
                                    {/* {data.fromAddress.substring(0, 10) +
                                    "..." +
                                    data.fromAddress.substr(
                                      data.fromAddress.length - 10
                                    )} */}
                                    {data.fromAddress}
                                  </div>

                                  <FileCopyIcon
                                    className="deposit_history_address_copy_icon"
                                    onClick={() =>
                                      copyTextText2(data.fromAddress)
                                    }
                                    // onClick={copyText}
                                    // onMouseOut={outFunc}
                                  />
                                  <span className="hover_txn_address_cont">
                                    {data.fromAddress}
                                  </span>
                                  {copiedTxt1 == true ? (
                                    <div
                                      className="copiedToClipBoardDiv"
                                      onChange={timer}
                                    >
                                      Text copied to clipboard
                                    </div>
                                  ) : null}
                                </div>
                                <div className="deposit_history_div2_address">
                                  <span className="deposit_history_div2_network_title">
                                    TXID
                                  </span>
                                  <div className="address_cont">
                                    {data.txnId.substring(0, 10) +
                                      "..." +
                                      data.txnId.substr(data.txnId.length - 7)}
                                    {/* {txId} */}
                                  </div>

                                  <FileCopyIcon
                                    onClick={() => copyTextText(data.txnId)}
                                    className="deposit_history_address_copy_icon"

                                    // onClick={copyText}
                                    // onMouseOut={outFunc}
                                  />
                                  <span className="hover_txn_address_cont">
                                    {data.txnId}
                                  </span>
                                  {copiedTxt == true ? (
                                    <div
                                      className="copiedToClipBoardDiv"
                                      onChange={timer}
                                    >
                                      Text copied to clipboard
                                    </div>
                                  ) : null}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="view_all_btn" key={data.id}>
                        <a href="#" className="view_all_link">
                          {" "}
                          View all
                        </a>
                      </div>
                    </div>
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
export default connect(mapStateToProps, { createWallet, depositToken })(Wallet);
