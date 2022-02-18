import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createWallet } from "../../../actions/wallet";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Link } from "react-router-dom";

import { API_URL2 as api_url2 } from "../../../actions/types";
import axios from "axios";

import "./wallet.css";
const options = [
  "Deposit History",
  "Withdrawal History",
  "Transaction History",
];

const ITEM_HEIGHT = 48;

const Wallet = ({ auth, createWallet }) => {
  const [age, setAge] = React.useState("");
  const [assetVal, setAssetVal] = useState("200,000.00");
  const [adminId, setAdminId] = useState("");
  const [visible, settVisible] = useState(false);
  const [allTokens, setAllTokens] = useState([]);
  const [currentToken, setCurrentToken] = useState();
  const [tokenName, setTokenName] = useState();
  const [accountExists, setAccountExists] = useState();
  const [createWalletModal, setCreateWalletModal] = useState(false);
  const [walletAddr, setWalletAddr] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
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
  useEffect(() => {
    axios
      .get(api_url2 + "/v1/wallet/get/all/tokens", null, config)
      .then((data) => {
        console.log(data.data.data, "powerful");

        setAllTokens(data.data.data);
        // setWrap({
        //   code: data.data.data.product_category_code,
        // });
      })
      .catch((err) => {
        console.log(err.response); // "oh, no!"
      });
  }, []);

  useEffect(() => {
    console.log(auth);
    if (auth.user !== null) {
      var todecoded = auth.user;

      // const getName = todecoded.user.fullname;
      // const splitName = getName.split(" ");
      // console.log(todecoded.user.id)
      setAdminId(todecoded.user.id);

      axios
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
  };
  const closeVisibility = () => {
    settVisible(false);
  };
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
              <div className="arrowSpan">
                ₦{assetVal} <span className="usd_val">≈ ${200000 / 560}</span>
              </div>
            </div>

            <div className="walletDrive">
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
                      <div style={{ marginBottom: "5px" }}>0.00</div>
                      <div style={{ display: "flex" }}>
                        <button
                          className="depositButton"
                          // onClick={changeBg3}
                          id="success2"
                        >
                          Deposit
                        </button>

                        <button
                          className="depositButton1"
                          id="success3"
                          // onClick={changeBg4}
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
                        <div style={{ marginBottom: "5px" }}>0.00</div>
                        <div style={{ display: "flex" }}>
                          <button
                            className="depositButton"
                            id={data.tokenSymbol}
                            // onClick={() => changePage3(data.tokenName, data.tokenSymbol)}
                          >
                            Deposit
                          </button>
                          <button
                            className="depositButton1"
                            id="success1"
                            // onClick={changePage1}
                          >
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
              </div>
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
export default connect(mapStateToProps, { createWallet })(Wallet);
