import React, { useState, useEffect } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { TokenModal } from "./TokenModal/TokenModal";
import Success_Error_Component from "../../../assets/Success_Error_Component"
import SwapVerticalCircleIcon from "@mui/icons-material/SwapVerticalCircle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faCaretDown, faAddressCard, faCopy, faBlog, faRestroom, faFileInvoiceDollar, faMoneyBill, faCheckCircle, faCircleNotch, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import {
    Web3ReactProvider,
    useWeb3React,
    UnsupportedChainIdError
  } from "@web3-react/core";
import axios from "axios";
import { parseEther, formatEther } from "@ethersproject/units";
import CloseIcon from "@mui/icons-material/Close";
import data from "../../MockData";
import { checkAllowance, unluckToken, transactReceipt, swapImpl, getPriceImpl}  from "../../../../web3/index"

// ================
// ================
// ================
import { API_URL3 as api_url3 } from "../../../../actions/types";

import { ConnectWallet } from "../../../auth/ConnectWallet";
import "./AddLiquidity.css";
const AddLiquidity = ({ match, closeModal, which }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
 
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [tokenBtn, setTokenBtn] = useState(false);
  const [tokenBtn2, setTokenBtn2] = useState(false);
  const [defaultPrice, setDefaultPrice] = useState(0);
  const [tokenName, setTokenName] = useState(0);
  const [base, setBase] = useState("");
  const [stage, setStage] = useState("swap");
  const [tokenName2, setTokenName2] = useState(0);
  const [text, setText] = useState("");
    const [hash, setHash] = useState("");
  const [inputToggle, setInputToggle] = useState(false);
  const [baseVal, setBaseVal] = useState({
    id: "1",
    img: "/img/egc-icon.svg",
    name: "Egoras Credit",
    contract: "0x3EB0a733787384fB818Fca15562b75Ecf5D4b956",
    symbol: "EGC",
    eusd_Avail: "90M",
    stable: "0.50%",
    ratio: "120%",
    balance: 0,
  });
  const [assetVal, setAssetVal] = useState({
    id: "1",
    img: "/img/eusd-icon-dollar.svg",
    name: "Egoras Naira",
    contract: "0x3EB0a733787384fB818Fca15562b75Ecf5D4b956",
    symbol: "eNGN",
    eusd_Avail: "6.93M",
    stable: "1.00%",
    ratio: "165%",
    balance: 0,
  });

  const context = useWeb3React();
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error
  } = context;
  const [inputVal, setInputVal] = useState("0");
  const [inputVal2, setInputVal2] = useState("0");
  // const [inputVal, setInputVal] = useState();
  
  useEffect(() => {
    if(library){
      var ticker = "EGC-eNGN";
      getPriceImpl(ticker, library.getSigner()).then((price) => {
      setDefaultPrice(formatEther(price.message));
     
    });
    }
  }, [library]);

  const Continue = async (e) => {
    setStage("swap");
    setText("");
    setInputVal(0);
    setInputVal2(0);
    
 
}

  const [connected, setConnected] = useState(false);
  const toggleInput = () => {
      if (inputToggle == true) {
          setInputToggle(false);
          setBaseVal({
            id: "1",
            img: "/img/egc-icon.svg",
            name: "Egoras Credit",
           contract: "0x3EB0a733787384fB818Fca15562b75Ecf5D4b956",
            symbol: "EGC",
            eusd_Avail: "90M",
            stable: "0.50%",
            ratio: "120%",
            balance: 0,
          }) 
          setAssetVal({
            id: "1",
            img: "/img/eusd-icon-dollar.svg",
            name: "Egoras Naira",
            contract: "0x3EB0a733787384fB818Fca15562b75Ecf5D4b956",
            symbol: "eNGN",
            eusd_Avail: "6.93M",
            stable: "1.00%",
            ratio: "165%",
            balance: 0,
        })

        } else if (inputToggle == false) {
            setInputToggle(true);
            setBaseVal({
                id: "1",
                img: "/img/eusd-icon-dollar.svg",
                name: "Egoras Naira",
                contract: "0x3EB0a733787384fB818Fca15562b75Ecf5D4b956",
                symbol: "eNGN",
                eusd_Avail: "6.93M",
                stable: "1.00%",
                ratio: "165%",
                balance: 0,
            })
            setAssetVal({
                id: "1",
                img: "/img/egc-icon.svg",
                name: "Egoras Credit",
               contract: "0x3EB0a733787384fB818Fca15562b75Ecf5D4b956",
                symbol: "EGC",
                eusd_Avail: "90M",
                stable: "0.50%",
                ratio: "120%",
                balance: 0,
              }) 
     
        }
        setInputVal("0")
  
        console.log(baseVal,inputVal)
    };
    const onChange = (e) => {
      if(baseVal.symbol == "EGC"){
        setInputVal2(parseFloat(defaultPrice) * parseFloat(e.target.value));
      }else{
        setInputVal2(parseFloat(e.target.value) / parseFloat(defaultPrice));
      }
      console.log(baseVal,"inputVal")
      setInputVal(e.target.value);

    };
  const TokenData = (e) => {
    let currentTarget = e.currentTarget.id;
    console.log(currentTarget);
    setTokenName(currentTarget);

    if (modal === true) {
      setModal(false);
    } else if (modal === false) {
      setModal(true);
    }
    setTokenBtn(true);
  };
  const TokenData2 = (e) => {
    let currentTarget = e.currentTarget.id;
    console.log(currentTarget);
    setTokenName2(currentTarget);

    if (modal2 === true) {
      setModal2(false);
    } else if (modal2 === false) {
      setModal2(true);
    }
    setTokenBtn2(true);
  };
  const toggleModal = (id) => {
    // let target = e.currentTarget.id;
    console.log(id);
    if (modal === true) {
      setModal(false);
    } else if (modal === false) {
      setModal(true);
    }
  };

  const doSwap = async ()  => {
      
      console.log("baseVal", baseVal);
     
    setText("Transacting with blockchain, please wait...");
    setStage("loading")
  console.log(baseVal.symbol, "baseVal.symbol");
    
        let  ckeckAllowance = await checkAllowance(account,parseEther(inputVal.toString(), "wei").toString(), library.getSigner(), baseVal.symbol.toLowerCase());
        // alert("Within the block chain 1: " + ckeckAllowance)

        if(ckeckAllowance.status == true){
            let isBase = baseVal.symbol == "eNGN" ? false  : true;
            let ret = await 
            swapImpl(parseEther(inputVal.toString(), "wei").toString(),isBase, library.getSigner());

            // alert("Within the block chain 2: " + ret)
            
            if(ret.status == true) {
           
            setHash(ret.message);
            setStage("success")
            } else if (ret.status == false){
               
            setText(ret.message)
            setStage("error")
            }
        } else {
            setStage("unlock")
        }
   
}


  const toggleModal2 = () => {
    if (modal2 === true) {
      setModal2(false);
    } else if (modal2 === false) {
      setModal2(true);
    }
  };
  const background = [
    {
      background: "#000",
    },
  ];

  const doUnluck = async (e) => {
       
   
    setText("Transacting with blockchain, please wait...");
    let infinityunlock = 900000000000000;
   // parseEther( depositAmount.toString(), "wei").toString()
    setStage("loading")
    let ret = await unluckToken(parseEther(infinityunlock.toString(), "wei").toString(), library.getSigner(),  baseVal.symbol.toLowerCase());
    if(ret.status == true){
     
      localStorage.setItem('unlocking', true);
      localStorage.setItem('unlockingHash', ret.message)
     
      setText("Unlocking please wait aleast 1/2 minutes");
    }else{
        setText(ret.message);
     setStage("error");

    
    }

  }

  setInterval(() => {
    if(localStorage.getItem('unlocking') == "true"){
      console.log("running Interval");
      transactReceipt(localStorage.getItem('unlockingHash'), library)
        .then(function(env) {
          console.log("running Interval", env);
         if(env.status == true && env.message !== null){
           if(env.message.confirmations > 0){
             
              localStorage.setItem('unlocking', false);
            setStage("swap")
              
             
           }
           
         }
      });
         
      }
}, 7000);

  return (
    <div className=" modal_bg">
      {/* Tokens Section Start */}
      <section className=" no-bg">
        <div className="container">
          <div className="liquidity_area">
            <div className="liquidity_cont">
              <div className="liquidity_cont_head">
                <CloseIcon className="settings_icon" onClick={closeModal} />
                <div className="liquidity_cont_head_text"></div>
                {/* <SettingsIcon className="settings_icon" /> */}
              </div>
             
                  {/* <div className="tips_layer">
                    <div className="tips_writeUp">
                      <span className="tip_sub_head">Tip: </span> When you add
                      liquidity, you will receive pool tokens representing your
                      position. These tokens automatically earn fees
                      proportional to your share of the pool, and can be
                      redeemed at any time.
                    </div>
                  </div> */}
                  {
                    stage == "loading" ? (<div>

<section className="tokenSection2 text-black" id="token" style={{width: "100%", minWidth: "450px"}}>

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
               
              </div>
              <h1 class="eusd-token-page">
                {text}
              </h1>
              <div
                className="swap_engn_btns"
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              > </div>
              </div>
</div>
</div>
</section>
                    </div>) : null
                  }
                  { stage == "swap" ? (
 <div className="liquidity_cont_body">
 <div className="liquidity_cont_body_conts">
                            <div>
                                 <div className="input_amnt_layer">
                      <span className="input_txt">From</span>
                      <div className="amnt_input">
                        <input
                          type="number"
                          name="number"
                          id="number"
                          onChange={onChange}
                          placeholder="000"
                          className="amnt_input_field"
                          autocomplete="off"
                          value={inputVal}
                        />

                        <button className="display_tokens_drop">
                          <img
                            src=         {inputToggle == false ? baseVal.img: baseVal.img}
                            alt=""
                            className="asset_icon"
                          />
                             {inputToggle == false ? baseVal.symbol: baseVal.symbol}
                          
                          <ArrowDropDownIcon className="drop_down_icon" />
                        </button>
                      </div>
                    </div>


                  {/* <div className="plus_icon_layer"> */}
                  <SwapVerticalCircleIcon
                    className="plus_icon_layer"
                    onClick={toggleInput}
                  />

<div className="input_amnt_layer">
                      <span className="input_txt">To</span>
                      <div className="amnt_input">
                        <input
                          type="number"
                          name="number"
                          id="number"
                          placeholder="000"
                          className="amnt_input_field"
                          autocomplete="off"
                          // value={inputVal * 200}
                          value={
                            inputVal2
                          }
                        //   value={
                        //     tokenBtn2 == true ? inputVal * 213535 : inputVal
                        //   }
                        />
                      
                  
                          <>
                           
                                <button
                                  className="display_tokens_drop"
                                 
                                >
                                         <img
                            src=     {inputToggle == false ? assetVal.img: assetVal.img}
                            alt=""
                            className="asset_icon"
                          />
                          {inputToggle == false ? assetVal.symbol: assetVal.symbol}
                         
                                  <ArrowDropDownIcon className="drop_down_icon" />
                                </button>
                        
                          </>
                     
                      </div>
                    </div>


                  {/* </div> */}

                  <div className="connect_btn_div">
                  <button
                  id="generate"
                  style={{ marginTop: "50px" }}
                  class="jsx-4146495177 connect_btn d-flex align-items-center justify-content-center mx-auto  zIndex2"
                  onClick={doSwap}
                >
                  {
                       inputVal > 0 
                       ? "Convert": "Enter an amount"
                  }
                </button>
                 
                  </div>
                </div>
              </div>
                                </div>
                  ) : null}
                   

                   { stage == "success" ? (
                            <div>
                                <div className="col-md-12 mt-4">
                                    <h1 className="text-center text-success">
                                        <FontAwesomeIcon icon={faCheckCircle} /> <br />
                                        Success
                                    </h1>
                                    <p className="text-center">Transaction was successful. <br />
                                        <a className="btn btn-link text-success" href={"https://bscscan.com/tx/" + hash} target="_blank">View on bscscan.com</a>
                                        <br />
                                        <button  className="jsx-4146495177 connect_btn d-flex align-items-center justify-content-center mx-auto  zIndex2" onClick={e => Continue(e)}>Continue</button>
                                    </p>
                                </div>
                            </div> ) : null
                        } 

{
                      stage == "unlock" ? (
                        <div className="processing_transac_div insufficient">
                        <div className="success_container">
                          <div className="success_heading">
                            
                              <img
                                style={{ width: "100%" }}
                                src="/img/error_div_heading_icon.svg"
                                alt=""
                                // onClick={onclick}
                              />
                          
                              {/* <img
                                style={{ width: "100%" }}
                                src="/img/succees_div_heading_icon.svg"
                                alt=""
                                // onClick={onclick}
                              /> */}
                         
                          </div>
                          <div className="success_title">
                          
                              <span>Unlock</span>
                           
                          </div>
                          {/* <div className="success_para">{msg}</div> */}
                          <div className="success_para">  Approve <b>Egoras</b> to spend  {baseVal.symbol} on your behalf.</div> 
                          <div className="success_btn_div">
                          
                            
                          <button className='jsx-4146495177 connect_btn d-flex align-items-center justify-content-center mx-auto  zIndex2'   onClick={e => doUnluck(e)}>
                                                      Unlock
                                                    </button>
                              
                          
                              
                           
                             
                         
                          </div>
                        </div>
                      </div>
                      ) : null
                  }

                  {
                      stage == "error" ? (
                        <div className="processing_transac_div insufficient">
                        <div className="success_container">
                          <div className="success_heading">
                            
                              <img
                                style={{ width: "100%" }}
                                src="/img/error_div_heading_icon.svg"
                                alt=""
                                // onClick={onclick}
                              />
                          
                              {/* <img
                                style={{ width: "100%" }}
                                src="/img/succees_div_heading_icon.svg"
                                alt=""
                                // onClick={onclick}
                              /> */}
                         
                          </div>
                          <div className="success_title">
                          
                              <span>Error</span>
                           
                          </div>
                          {/* <div className="success_para">{msg}</div> */}
                          <div className="success_para">{text}</div> 
                          <div className="success_btn_div">
                          
                            
                                <button
                                  style={
                                   
                                      {
                                          backgroundColor: "#ff575a",
                                          boxShadow: "#ffc2c3 0px 4px 10px",
                                        }
                                    }
                                  className="success_btn"
                                 onClick={Continue}
                                >
                                  Continue
                                </button>
                              
                          
                              
                           
                             
                         
                          </div>
                        </div>
                      </div>
                      ) : null
                  }
            </div>

          </div>
        </div>






      </section>
      {modal == true ? (
        <TokenModal
          toggleTokenModal={toggleModal}
          execute={TokenData}
          tokenData1={data.base}
          tokenData={data.assets}
          disabled="disabled"
          // tokenId={data.tokenData}
        />
      ) : null}
      {modal2 == true ? (
        <TokenModal
          toggleTokenModal={toggleModal2}
          execute={TokenData2}
          tokenData={data.assets}
          tokenData1={data.base}
          disabled="disabled"
          // tokenId={data.tokenData}
        />
      ) : null}
    </div>
  );
};

export default AddLiquidity;
