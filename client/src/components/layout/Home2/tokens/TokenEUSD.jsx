import React, { useState } from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import "../../../../css/token.css";
const TokenEUSD = () => {
  const [generateModal, setGenerateModal] = useState(false);
  const toggleModal = () => {
    if (generateModal === false) {
      setGenerateModal(true);
    } else if (generateModal === true) {
      setGenerateModal(false);
    }
    // else()
  };
  return (
    <div>
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* Tokens Section Start */}
      <section className="tokenSection2 text-black" id="token">
        <div class="eusd-token-page container">
          <div class="eusd-token-page hero text-center">
            <div class="eusd-token-page circle"></div>
            <div class="eusd-token-page circle circle2"></div>
            <div class="eusd-token-page circle circle3"></div>
            <div class="eusd-token-page circle circle4"></div>
            <img
              src="/img/token-hero-center-blur2.png"
              alt="Waves"
              class="eusd-token-page waves"
            />
            <img
              src="/img/eusd-icon-dollar.svg"
              alt="OUSD coin"
              class="eusd-token-page coin"
            />
            <div class="eusd-token-page d-flex flex-column align-items-center">
              <div class="eusd-token-page ticker-symbol">
                Egoras Naira (eNGN)
              </div>
              <h1 class="eusd-token-page">
                The first decentralised stablecoin that is built for emerging
                markets
              </h1>
              <div
                className="swap_engn_btns"
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                {/* <button
                  style={{ marginTop: "50px" }}
                  class="jsx-4146495177 btn-hero d-flex align-items-center justify-content-center mx-auto  zIndex2"
                  onClick={toggleModal}
                >
                  swap egc
                </button> */}
                <button
                  style={{ marginTop: "50px" }}
                  class="jsx-4146495177 btn-hero d-flex align-items-center justify-content-center mx-auto  zIndex2"
                  onClick={toggleModal}
                >
                  Generate eNGN
                </button>
              </div>
            </div>
          </div>

          <div class="eusd-token-page circle1"></div>
          <div class="eusd-token-page circle1 circle2"></div>
          <div class="eusd-token-page circle1 circle3"></div>
          <div class="eusd-token-page circle1 circle4"></div>
          <div class="eusd-token-page circle2a"></div>
          <div class="eusd-token-page circle2a circle2"></div>
          <div class="eusd-token-page circle2a circle3"></div>
          <div class="eusd-token-page circle2a circle4"></div>
        </div>

        <img src="/img/token-dots.svg" alt="" className="tokenDots" />
      </section>
      {/* Tokens Section End */}

      {/* second token sectio start */}
      <section className="second-eusd-token-section">
        <div className="container">
          <div className="nft-area">
            <div
              className="nft-img-area"
              style={{ display: "inline-flex", width: "100%" }}
            >
              <img
                src="/img/nft-token2.svg"
                alt=""
                style={{ width: "75%", margin: "auto" }}
              />
            </div>
            <div className="nft-txt-area" style={{ width: "100%" }}>
              <p className="span1-txts">NFT-based reward</p>
              <p className="span2-txts"> Earn Redeemable NFT </p>
              <p className="span4-txts">
                Convert your USDT, USDC, and Fiat to eNGN to start earning NFTs
                immediately
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* second token sectio end */}
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      {/* third section start */}
      <section className="earning-section">
        <div className="container">
          <div className="nft-area2">
            <div className="nft-txt-area2 " style={{ width: "100%" }}>
              <div className="span-txts">
                <p className="span4a-txts">
                  All NFTs are Redemmable for real products
                </p>
                <p className="span4b-txts">
                  All yields are automatically converted to eNFTs  which can be
                  redeemed for real product.  eNGN balance compounds multiple
                  times per day. 
                </p>
              </div>
            </div>
            <div
              className="nft-img-area2"
              style={{ display: "inline-flex", width: "100%" }}
            >
              <img
                src="/img/eusd-token-mint.svg"
                alt=""
                style={{ width: "75%", margin: "auto" }}
              />
            </div>
          </div>
        </div>
        <img src="/img/blur-drop.png" alt="" className="blurDrop-token" />
      </section>
      {/* third section end */}
      {/* ========================== */}
      {/* ========================== */}
      {/* ========================== */}
      {/* fourth section start */}
      <section className="earning-section">
        <div className="container">
          <div className="nft-area3">
            <div
              className="nft-img-area2"
              style={{ display: "inline-flex", width: "100%" }}
            >
              <img
                src="/img/sell-token2.png"
                alt=""
                style={{ width: "75%", margin: "auto" }}
              />
            </div>
            <div className="nft-txt-area2 " style={{ width: "100%" }}>
              <div className="span-txts">
                <p className="span4a-txts">Receive your eNFTs with ease</p>

                <p className="span4b-txts">
                  There's no complicated process when you want to redeem the
                  eNFTs. The products will be shipped seamlessly after the
                  lockup period.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src="/img/blur-drop.png" alt="" className="blurDrop-token" />
        <img src="/img/shape-egg2.svg" alt="" class="gteggShape2a" />
      </section>
      {/* fourth section end */}
      {/* =================== */}
      {/* =================== */}
      {/* =================== */}
      {/* =================== */}
      {/* fourth section start */}
      <section className="second-eusd-token-section">
        <div className="container">
          <div className="nft-area2">
            <div className="nft-txt-area2 " style={{ width: "100%" }}>
              <div className="span-txts">
                <p className="span4a-txts">Elastic supply, stable price</p>

                <p className="span4b-txts">
                  EgorasNaira is pegged to the Nigerian Naira. Returns are used
                  to buy back EGC. Supply buy back happens multiple times per
                  day. 
                </p>
              </div>
            </div>
            <div
              className="nft-img-area2"
              style={{ display: "inline-flex", width: "100%" }}
            >
              <img
                src="/img/weigh-tokens.svg"
                alt=""
                style={{ width: "75%", margin: "auto" }}
              />
            </div>
          </div>
        </div>
        <img src="/img/blur-drop.png" alt="" className="blurDrop-token" />
      </section>
      {/* fourth section end */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* fourth section start */}
      <section className="earning-section">
        <div className="container">
          <div className="nft-area3">
            <div
              className="nft-img-area2"
              style={{ display: "inline-flex", width: "100%" }}
            >
              <img
                src="/img/stablecoins-icons.svg"
                alt=""
                style={{ width: "75%", margin: "auto" }}
              />
            </div>
            <div className="nft-txt-area2 " style={{ width: "100%" }}>
              <div className="span-txts">
                <p className="span4a-txts">Decentralized governance</p>

                <p className="span4b-txts">
                  A community of EGR token holders govern the Egoras Protocol,
                  the smart contracts that power eNGN.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src="/img/blur-drop.png" alt="" className="blurDrop-token" />
        <img src="/img/shape-egg2.svg" alt="" class="gteggShape2a" />
      </section>
      {/* fourth section end */}
      {generateModal == true ? (
        <div className="generate_modal">
          <div className="generate_container">
            <div className="generate_title">Input Amount</div>
            <div className="generate_input_div">
              <input
                type="text"
                className="token_modal_generate"
                style={{ width: "100%" }}
                placeHolder="000"
              />
            </div>
            <div className="generate_button">
              <button className="generate_btn">Generate</button>{" "}
              <button
                className="generate_btn close_generate_btn"
                onClick={toggleModal}
              >
                Close
              </button>{" "}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TokenEUSD;
