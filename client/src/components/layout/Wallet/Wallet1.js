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

const Wallet1 = ({ auth, createWallet, depositToken, openProcessingDiv }) => {
  const [age, setAge] = React.useState("");
  const [assetVal, setAssetVal] = useState("");
  const [adminId, setAdminId] = useState("");
  const [visible, settVisible] = useState(false);
  const [secureNumb, setSecureNumb] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [allTokens, setAllTokens] = useState([]);
  const [copiedTxt, setCopiedTxt] = useState(false);
  const [copiedTxt1, setCopiedTxt1] = useState(false);
  const [deposits, setDeposits] = useState([]);
  const [tokenBal, setTokenBal] = useState("");
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
        console.log(data.data.data.balance);
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
    console.log(userId);
    axios
      .get(
        api_url2 + "/v1/wallet/get/wallet/fetch/deposits/" + userId,
        null,
        config
      )
      .then((data) => {
        console.log(data.data.data);
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
        console.log(data.data.data, "powerful");
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
    console.log(auth);
    if (auth.user !== null) {
      var todecoded = auth.user;

      // const getName = todecoded.user.fullname;
      // const splitName = getName.split(" ");
      // console.log(todecoded.user.id)
      setAdminId(todecoded.user.id);

      console.log(adminId);

      await axios
        .get(
          api_url2 + "/v1/wallet/check/wallet/" + todecoded.user.id,
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
    // setCurrentToken(tokenSymbol);
    // setTokenName(tokenName);
    // setIsLoading(true);
    if (accountExists) {
      console.log("accountExists");
      setShowDeposit(true);
      setIsLoading(true);
      // console.log(adminId);
      let res3 = await depositToken(adminId, tokenSymbol);
      console.log(res3);
      setIsLoading(true);

      if (res3.success === true) {
        setWalletAddr(res3.data.address);
        setIsLoading(false);
      }
    } else {
      console.log("not accountExists");
      setShowDeposit(false);
      // console.log(adminId);
      let res3 = await createWallet(adminId, tokenSymbol);
      console.log(res3);
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
            <LoadingIcons.ThreeDots fill="#fff" className="loading_iconnn" />
          </div>
        ) : (
          <>
            {secureNumb == true ? (
              <div className="arrowSpan">
                *********** <div className="usd_val">*********</div>
              </div>
            ) : (
              <div className="arrowSpan">
                ₦{assetVal} <div className="usd_val">≈ ${assetVal / 560}</div>
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
              className="formConceptSup"
              // onClick={sending}
            >
              Contact Support
            </div>
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
                    <div className="nigeriaCurrency">{data.tokenName}</div>
                    {secureNumb == true ? (
                      <div style={{ marginBottom: "5px" }}>*******</div>
                    ) : (
                      <div style={{ marginBottom: "5px" }}>
                        {tokenBal}
                        <span className="token_symbolism">{tokenSign}</span>
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
                    <button
                      onClick={openProcessingDiv}
                      className="pay_via_wallet_btn"
                    >
                      Proceed to pay via wallet
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        {showDeposit == true ? (
          <div className="deposit_div">
            <div className="deposit_div_heading">Deposit {assetName}</div>
            <div className="deposit_div_body">
              <div className="deposit_div_body1">
                <div className="deposit_div_body1_input1">
                  <div className="deposit_div_body1_input_title">Coin:</div>
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
                  <div className="deposit_div_body1_input_title">Network:</div>
                  <div className="deposit_div_body1_input_asset">
                    <span className="network_symbol">
                      <span className="token_symbol">BSC</span>
                    </span>{" "}
                    BNB Smart Chain (BEP20)
                  </div>
                </div>
                <div className="deposit_div_body1_input1_qr_code">
                  <div className="deposit_div_body1_input1_qr_code_title">
                    Scan the code on the deposit page to deposit {assetName}
                  </div>
                  <div className="deposit_div_body1_input1_qr_code_img_div">
                    {isLoading == true ? (
                      <div className="qr_code_divv_check">
                        <img
                          src={
                            "https://chart.googleapis.com/chart?cht=qr&chs=120x120&chl=" +
                            walletAddr
                          }
                          alt=""
                          className="qr_img"
                        />
                        <span className="load_qr_code_">
                          <LoadingIcons.ThreeDots
                            fill="#229e54"
                            className="loading_iconnn_wallet"
                          />
                        </span>
                      </div>
                    ) : (
                      <div className="qr_code_divv_check">
                        <img
                          src={
                            "https://chart.googleapis.com/chart?cht=qr&chs=120x120&chl=" +
                            walletAddr
                          }
                          alt=""
                          className="qr_img"
                        />
                      </div>
                    )}

                    <div className="copy_address_div">
                      {isLoading == true ? null : (
                        <>
                          <div className="copy_address_div_title">Address</div>
                          <div className="copy_address_div_txt" id="myInput">
                            {walletAddr}
                            <FileCopyIcon
                              className="file_icon_copy"
                              onClick={() => copyWalletAddress(walletAddr)}
                              // onMouseOut={outFunc}
                            />

                            {copiedTxt == true ? (
                              <div
                                className="copiedToClipBoardDiv"
                                onChange={timer}
                              >
                                Wallet Address copied to clipboard
                              </div>
                            ) : null}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="deposit_div_body1_input1_qr_code_title">
                    <li className="deposit_qr_not">
                      Send only
                      <span className="noticeable_txt"> {tokenSign}</span> to
                      this deposit address.
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
                {deposits.length == 0 ? (
                  <NoDataFoundComponent nodataTxt="No Deposits Here Yet." />
                ) : (
                  <>
                    {deposits.map((data) => (
                      <div className="deposit_history_body_area1">
                        <div className="deposit_history_body_area1_cont">
                          <div className="deposit_history_body_area1_cont_area1">
                            <div className="deposit_history_div1">
                              <span className="token_symbol">
                                {" "}
                                <StarRateIcon className="starRateIcon starRateIcon_2" />
                              </span>
                              <div className="token_deposit_amnt">
                                {data.amount} {tokenSign}
                                <span className="completed_div">Completed</span>
                              </div>
                            </div>
                            <div className="deposit_history_div2">
                              <div className="deposit_history_div2_date">
                                {data.timestamp}
                              </div>
                              <div className="deposit_history_div2_network">
                                <span className="deposit_history_div2_network_title">
                                  Network
                                </span>
                                {network}
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
                                  {walletAddr}
                                </div>

                                <span className="hover_txn_address_cont">
                                  {walletAddr}
                                </span>
                                {/* {copiedTxt1 == true ? (
                                        <div
                                          className="copiedToClipBoardDiv"
                                          onChange={timer}
                                        >
                                          Text copied to clipboard
                                        </div>
                                      ) : null} */}
                              </div>
                              <div className="deposit_history_div2_address">
                                <span className="deposit_history_div2_network_title">
                                  TXID
                                </span>
                                <div className="address_cont">
                                  {data.transaction_hash.substring(0, 10) +
                                    "..." +
                                    data.transaction_hash.substr(
                                      data.transaction_hash.length - 7
                                    )}
                                  {/* {txId} */}
                                </div>

                                <span className="hover_txn_address_cont">
                                  {data.transaction_hash}
                                </span>
                                {/* {copiedTxt == true ? (
                                        <div
                                          className="copiedToClipBoardDiv"
                                          onChange={timer}
                                        >
                                          Text copied to clipboard
                                        </div>
                                      ) : null} */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}

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
