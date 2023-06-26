import React, { useEffect, useState } from "react";
import "./Hero.css";
import eth from "../../assets/eth.svg";
import usdt from "../../assets/usdt.svg";
// import { toast } from "react-toastify";
import Countdown, { zeroPad } from "react-countdown";
import { toast } from "react-hot-toast";
import bnb from "../../assets/bnb.svg";
import busd from "../../assets/busd.svg";
import logo from "../../assets/logo.png";
// import instagram from "../../assets/social-instagram.svg";
// import twitter from "../../assets/social-twitter.svg";
import twitter from "../../assets/tw.svg";
import telegram from "../../assets/social-telegram.svg";
import tiktok from "../../assets/social-tiktok.svg";
import WalletModal from "../wallet_modal/WalletModal";
import { useDispatch, useSelector } from "react-redux";
import { ENDTIME, formatPrice, GOAL } from "../../hooks/constant";

import { disconnectWallet, loadWeb3 } from "../../api";
import { change_net, getUserProfile } from "../../features/userSlice";
import { getLoarem } from "../../features/lorem/loremSlice";
import Web3 from "web3";
import {
  Presale_Abi,
  Presale_Contract,
  USDT_Abi,
  USDT_Token,
  BUSD_Abi,
  BUSD_Token,
  Eth_Presale_Contract,
  Eth_Presale_Abi,
} from "../../Contracts/contract";
import axios from "axios";

function Hero() {
  const dispatch = useDispatch();
  const [modalShow, setmodalShow] = useState(false);
  const [totalToken, setTotalToken] = useState(0);
  const [error, setError] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [Spinner, setSpinner] = useState(false);
  const [data, setDate] = useState(0);
  const [getChainID, setgetChainID] = useState();
  const [collection, setcollection] = useState(0);

  // let { commonStats, accStats, setUpdater } = props;
  const [balance, setBalance] = useState(0);
  const [TokenName, setTokenName] = useState("--");

  const [IsId, setIsId] = useState(56);

  const webSupply = new Web3("https://bsc.publicnode.com");
  const webSupplyEth = new Web3("https://eth-mainnet.public.blastapi.io");

  const { account, web3, providerType, provider } = useSelector(
    (state) => state.user.data
  );
  const lorem = useSelector((state) => state.lorem);
  const [StagePrice, setStagePrice] = useState(0);
  const [Toal_All_Contracts, setToal_All_Contracts] = useState(0);

  useEffect(() => {
    dispatch(getLoarem());
    Get_Token_Balance();
    GetContractBalance();
    const getChainId1 = async () => {
      window.web3 = new Web3(window.ethereum);
      await window.web3.eth.getChainId((err, netId) => {
        // console.log("Chain_Id", netId);
        setgetChainID(netId);
      });
    };
    getChainId1();
  }, [collection, account]);

  const handleButtonClick = (newData) => {
    setcollection(newData);
  };
  const showModal = () => {
    setmodalShow(true);
  };
  const closeModal = () => {
    setmodalShow(false);
  };

  let Stage_data = 10000000000;
  const GetContractBalance = async () => {
    try {
      let Toal_Balance_All_Contracts = 0;

      let ContractOf = new webSupply.eth.Contract(
        Presale_Abi,
        Presale_Contract
      );
      let EthContractOf = new webSupplyEth.eth.Contract(
        Eth_Presale_Abi,
        Eth_Presale_Contract
      );
      let USDTContractOf = new webSupply.eth.Contract(USDT_Abi, USDT_Token);
      let BUSDContractOf = new webSupply.eth.Contract(BUSD_Abi, BUSD_Token);

      let Presale_Eth_Balace = await web3.eth.getBalance(Eth_Presale_Contract);
      Presale_Eth_Balace = webSupply.utils.fromWei(
        Presale_Eth_Balace.toString()
      );
      console.log("Presale_Eth_Balace", Presale_Eth_Balace);
      Presale_Eth_Balace = Number(Presale_Eth_Balace) * Number(1900);
      Toal_Balance_All_Contracts =
        Number(Toal_Balance_All_Contracts) + Number(Presale_Eth_Balace);

      let Presale_USDT_Balace = await USDTContractOf.methods
        .balanceOf(Presale_Contract)
        .call();
      Presale_USDT_Balace = webSupply.utils.fromWei(
        Presale_USDT_Balace.toString()
      );
      console.log("Presale_USDT_Balace", Presale_USDT_Balace);

      Toal_Balance_All_Contracts =
        Number(Toal_Balance_All_Contracts) + Number(Presale_USDT_Balace);

      let Presale_BUSD_Balance = await BUSDContractOf.methods
        .balanceOf(Presale_Contract)
        .call();
      Presale_BUSD_Balance = webSupply.utils.fromWei(
        Presale_BUSD_Balance.toString()
      );
      console.log("Presale_BUSD_Balance", Presale_BUSD_Balance);

      Toal_Balance_All_Contracts =
        Number(Toal_Balance_All_Contracts) + Number(Presale_BUSD_Balance);

      let Presale_Bnb_Balace = await web3.eth.getBalance(Presale_Contract);
      Presale_Bnb_Balace = webSupply.utils.fromWei(
        Presale_Bnb_Balace.toString()
      );
      console.log("Presale_Bnb_Balace", Presale_Bnb_Balace);
      Presale_Bnb_Balace = Number(Presale_Bnb_Balace) * Number(300);
      Toal_Balance_All_Contracts =
        Number(Toal_Balance_All_Contracts) + Number(Presale_Bnb_Balace);

      console.log(Toal_Balance_All_Contracts, "Toal_Balance_All_Contracts");
      setToal_All_Contracts(Toal_Balance_All_Contracts);

      if (
        Number(Toal_Balance_All_Contracts) > Number(101) &&
        Number(Toal_Balance_All_Contracts) < Number(201)
      ) {
        setStagePrice(webSupply.utils.toWei("0.000000025"));
      } else if (
        Number(Toal_Balance_All_Contracts) > Number(200) &&
        Number(Toal_Balance_All_Contracts) < Number(479)
      ) {
        setStagePrice(webSupply.utils.toWei("0.000000045"));
      } else if (Number(Toal_Balance_All_Contracts) > Number(478)) {
        setStagePrice(webSupply.utils.toWei("0.000000085"));
      } else {
        setStagePrice(webSupply.utils.toWei("0.00000001"));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAmountChange = async (e) => {
    e.preventDefault();
    setAmount(e.target.value);
    let Value = e.target.value;
    // console.log("Value", Value);
    let ContractOf = new webSupply.eth.Contract(Presale_Abi, Presale_Contract);

    if (Value === "") {
      setError("Please enter valid amount.");
      setTotalToken(0);
    } else {
      setError("");
      Value = webSupply.utils.toWei(Value.toString());
      if (collection === 1) {
        let USDT_Token = await ContractOf.methods
          .getTokenvalueperUSDT(Value)
          .call();
        USDT_Token = webSupply.utils.fromWei(USDT_Token.toString());
        // console.log("USDT_Balace", USDT_Token);
        setTotalToken(USDT_Token);
      } else if (collection === 3) {
        let BUSD_Token = await ContractOf.methods
          .getTokenvalueperBUSD(Value)
          .call();
        BUSD_Token = webSupply.utils.fromWei(BUSD_Token.toString());
        console.log("USDT_Balace", BUSD_Token);
        setTokenName("BUSD");
        setTotalToken(BUSD_Token);
      } else if (collection === 2) {
        let BNB_Token = await ContractOf.methods
          .getTokenvalueperBNB(Value)
          .call();
        BNB_Token = webSupply.utils.fromWei(BNB_Token.toString());
        // console.log("bnb balance", BNB_Token);
        setTotalToken(BNB_Token);
      } else if (collection === 0) {
        // let Eth_Token = Number(amount) * 1900000;

        // console.log("Eth_Token", Eth_Token);

        setTotalToken(Number(amount) * Number(200000000000));
      }
    }
  };
  const Get_Token_Balance = async () => {
    try {
      let ContractOf = new webSupply.eth.Contract(
        Presale_Abi,
        Presale_Contract
      );
      let ClaimStatus = await ContractOf.methods.ClaimStatus().call();
      // setIsClaim(ClaimStatus);
      if (collection === 1) {
        let USDTContractOf = new webSupply.eth.Contract(USDT_Abi, USDT_Token);
        let USDT_Balace = await USDTContractOf.methods
          .balanceOf(account)
          .call();
        USDT_Balace = webSupply.utils.fromWei(USDT_Balace.toString());
        console.log("USDT_Balace", USDT_Balace);
        setBalance(USDT_Balace);
        setTokenName("USDT");
      } else if (collection === 3) {
        let BUSDContractOf = new webSupply.eth.Contract(BUSD_Abi, BUSD_Token);
        let BUSD_Balance = await BUSDContractOf.methods
          .balanceOf(account)
          .call();
        BUSD_Balance = webSupply.utils.fromWei(BUSD_Balance.toString());
        setBalance(BUSD_Balance);
        setTokenName("BUSD");

        console.log("BUSD_Balance", BUSD_Balance);
      } else if (collection === 2) {
        let Bnb_Balace = await web3.eth.getBalance(account);
        Bnb_Balace = webSupply.utils.fromWei(Bnb_Balace.toString());
        setBalance(Bnb_Balace);
        setTokenName("BNB");

        console.log("Bnb_Balace", Bnb_Balace);
      } else {
        let Eth_Balace = await web3.eth.getBalance(account);
        Eth_Balace = webSupply.utils.fromWei(Eth_Balace.toString());
        setBalance(Eth_Balace);
        setTokenName("ETH");

        console.log("Eth_Balace", Eth_Balace);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (account) {
      // if (chainId) {
      if (collection >= 0 && collection <= 3) {
        if (parseFloat(amount) > 0) {
          try {
            let web3 = window.web3;

            let ContractOf = new web3.eth.Contract(
              Presale_Abi,
              Presale_Contract
            );
            let Amount = web3.utils.toWei(amount.toString());

            if (collection === 1) {
              if (balance <= amount) {
                toast.error("Insufficient Balance");
                setSpinner(false);
              } else {
                setSpinner(true);
                let USDTContractOf = new web3.eth.Contract(
                  USDT_Abi,
                  USDT_Token
                );

                await USDTContractOf.methods
                  .approve(Presale_Contract, Amount)
                  .send({
                    from: account,
                  });

                toast.success("success ! Your First transaction is success");

                let tx = await ContractOf.methods
                  .BuyTokenWithUSDT(Amount)
                  .send({
                    from: account,
                  });
                toast.success("success ! your last transaction is success");
                setSpinner(false);
              }
            } else if (collection === 3) {
              if (balance <= amount) {
                toast.error("Insufficient Balance");
                setSpinner(false);
              } else {
                setSpinner(true);
                let BUSDContractOf = new web3.eth.Contract(
                  BUSD_Abi,
                  BUSD_Token
                );
                await BUSDContractOf.methods
                  .approve(Presale_Contract, Amount)
                  .send({
                    from: account,
                  });
                toast.success("success ! Your First transaction is success");

                let tx = await ContractOf.methods
                  .BuyTokenWithBUSD(Amount)
                  .send({
                    from: account,
                  });
                toast.success("Success ! your last transaction is success");
                setSpinner(false);
              }
            } else if (collection === 2) {
              if (balance <= amount) {
                toast.error("Insufficient Balance");
                setSpinner(false);
              } else {
                setSpinner(true);
                let tx = await ContractOf.methods.BuyTokenWithBNB().send({
                  from: account,
                  value: Amount,
                });
                toast.success("success ! your last transaction is success");
                setSpinner(false);
              }
            } else {
              if (balance <= amount) {
                toast.error("Insufficient Balance");
                setSpinner(false);
              } else {
                setSpinner(true);
                let EthContractOf = new web3.eth.Contract(
                  Eth_Presale_Abi,
                  Eth_Presale_Contract
                );
                let tx = await EthContractOf.methods.sendEth().send({
                  from: account,
                  value: Amount,
                });
                let TokenValue = Number(totalToken) * 1000000000000000000;
                let res = await axios.post(
                  `https://aishbatokenhistory.aishiba.pro/Add_History`,
                  {
                    UserAddress: account,
                    Amount: TokenValue,
                  }
                );
                console.log("res", res);

                toast.success("success ! your last transaction is success");
                setSpinner(false);
              }
            }
          } catch (err) {
            setSpinner(false);
            toast.dismiss();
            toast.error(err.reason ? err.reason : err.message);
            console.log(err);
          }
        } else {
          toast.dismiss();
          toast.error("Please enter valid amount!!");
          setSpinner(false);

          //setSpinner(false);//
        }
      } else {
        toast.dismiss();
        toast.error("selected paln doesn't exist!!");
        setSpinner(false);

        //setSpinner(false);//
      }
      // } else {
      //   toast.dismiss();
      //   toast.error("please connect network to Bsc chain!!");
      //   //setSpinner(false);//
      // }
    } else {
      toast.dismiss();
      toast.error("please connect wallet!!");
      setSpinner(false);

      //setSpinner(false);//
    }
  };

  const countdownrender = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <>00 Days 00 Hours 00 Min 00 Sec</>;
    } else {
      // Render a countdown
      return (
        <>
          <div
            _ngcontent-nxk-c11=""
            className="bg-bluegrad d-flex flex-column align-items-center justify-content-start p-4 text-white text-center"
          >
            <div
              _ngcontent-nxk-c11=""
              className="d-flex align-items-center justify-content-between w-100 gap-3 fw-semibold font-20"
            >
              <div
                _ngcontent-nxk-c11=""
                className="rounded-3 p-3 time-card text-center fs-6"
              >
                {" "}
                {zeroPad(days, 2)} d
              </div>
              <div
                _ngcontent-nxk-c11=""
                className="rounded-3 p-3 time-card text-center fs-6"
              >
                {" "}
                {zeroPad(hours, 2)} h
              </div>
              <div
                _ngcontent-nxk-c11=""
                className="rounded-3 p-3 time-card text-center fs-6"
              >
                {" "}
                {zeroPad(minutes, 2)} m
              </div>
              <div
                _ngcontent-nxk-c11=""
                className="rounded-3 p-3 time-card text-center fs-6"
              >
                {" "}
                {zeroPad(seconds, 2)} s
              </div>
            </div>

            <p
              _ngcontent-nxk-c11=""
              className="mt-3 mb-2 font-20 fw-semibold claim-title"
            >
              Claim and Exchange Listings After All Phase . Last Chance to Buy
              Now!
            </p>
          </div>
        </>
      );
    }
  };

  // console.log("getChainID", getChainID);

  return (
    <div>
      <WalletModal show={modalShow} onHide={closeModal} ID={IsId} />
      <div _ngcontent-nxk-c11="" className="background new_bg" id="home">
        <div className="container">
          <div
            className="row justify-content-center "
            style={{ fontFamily: "'Itim', cursive" }}
          >
            <div className="col-md-6  text-center">
              <div className="new_b_c">
                <h1>
                  Empowering a decentralized world through a unified platform.
                </h1>
                <p className="haeding_para">
                  Aishiba's vision is to establish a seamless network that
                  unites different blockchain platforms, fostering a strong
                  cross-chain ecosystem for decentralized finance (DeFi), while
                  ensuring secure, transparent, and unrestricted DeFi
                  experiences through essential infrastructure and support.
                </p>

                <div className="d-flex  mt-5 gap-4">
                  <a
                    className="heading_btn"
                    href="https://twitter.com/aishib_pro?s=21"
                    target="_blank"
                  >
                    {" "}
                    <span class="text">Twitter</span>
                    <span class="blob"></span>
                    <span class="blob"></span>
                    <span class="blob"></span>
                    <span class="blob"></span>
                  </a>
                  <a
                    href="https://bscscan.com/token/0x0887a05ecda69a6236c43d6751d15a16c3386e39"
                    target="_blank"
                    className="heading_btn"
                  >
                    {" "}
                    <span class="text">Smart Contract</span>
                    <span class="blob"></span>
                    <span class="blob"></span>
                    <span class="blob"></span>
                    <span class="blob"></span>
                  </a>
                </div>
              </div>
            </div>

            <div _ngcontent-nxk-c11="" className="col-lg-6 right mb-4">
              <div _ngcontent-nxk-c11="" className="walletBox ">
                <div _ngcontent-nxk-c11="" className="text-white borrrr_shs">
                  <p className="mt-3 mb-2 font-20 fw-semibold claim-title text-center">
                    Phase 1 will Ends in 30 Days
                  </p>
                  {/* {loading ? (
                    <Countdown
                      key={Math.floor(Math.random() * 10 + 1)}
                      date={ENDTIME}
                      renderer={countdownrender}
                    />
                  ) : (
                    <Countdown
                      key={Math.floor(Math.random() * 10 + 1)}
                      date={data?.endDate}
                      renderer={countdownrender}
                    />
                  )} */}
                  <Countdown
                    key={Math.floor(Math.random() * 10 + 1)}
                    date={ENDTIME}
                    renderer={countdownrender}
                  />
                  <div className="main_pooo">
                    <div className="bar_top ">
                      <p className="stage_text1">
                        Next Stage Price :
                        {webSupply.utils.fromWei(StagePrice.toString())} $
                      </p>
                      <div className="progress_bar"
                      style={{width:`${(Toal_All_Contracts / 100000) * 100}%`}}
                      >

                       
                      </div>
                    </div>
                    {/* <div className="progress_bar">
                      <div
                        className="clor"
                        style={{ backgroundColor: "#fff" }}
                      ></div>
                      <p className="stage_text">
                        Next Stage Price :
                        {webSupply.utils.fromWei(StagePrice.toString())} $
                      </p>
                      <div
                        className=""
                        style={{
                          width: "1rem",
                        }}
                      ></div>
                    </div> */}
                    <p className="text-center mt-3">
                      USDT raised:${Toal_All_Contracts}/$100,000
                    </p>
                  </div>

                  <div
                    _ngcontent-nxk-c11=""
                    className="bg_new_here p-4 swapArea"
                  >
                    <p
                      _ngcontent-nxk-c11=""
                      className="text-center mb-3 font-14 dashTitle fw-semibold"
                    >
                      1AIDOGE = 0.00000001 $
                    </p>
                    <div
                      _ngcontent-nxk-c11=""
                      className="tab-container row d-flex align-items-center justify-content-md-around justify-content-center gap-1 "
                    >
                      <button
                        _ngcontent-nxk-c11=""
                        className={
                          collection == 0
                            ? "btn new_yello_btn eth_hero font-14 text-uppercase d-flex align-items-center justify-content-center money-btn selected"
                            : "btn new_yello_btn eth_hero font-14 text-uppercase d-flex align-items-center justify-content-center money-btn "
                        }
                        onClick={() =>
                          getChainID == 1
                            ? handleButtonClick(0)
                            : (setIsId(1), showModal())
                        }
                        style={{
                          backgroundColor: collection == 0 ? "black" : "",
                          border: collection == 0 ? "1px solid #00ff7d" : "",
                        }}
                      >
                        <img
                          _ngcontent-nxk-c11=""
                          src={eth}
                          height={25}
                          alt=""
                        />
                        <span
                          _ngcontent-nxk-c11=""
                          className="text-center flex-grow-1 px-2 fw-semibold"
                        >
                          ETH
                        </span>
                      </button>
                      <button
                        _ngcontent-nxk-c11=""
                        className={
                          collection == 1
                            ? "btn new_yello_btn eth_hero font-14 text-uppercase d-flex align-items-center justify-content-center money-btn selected"
                            : "btn new_yello_btn eth_hero font-14 text-uppercase d-flex align-items-center justify-content-center money-btn "
                        }
                        onClick={() =>
                          getChainID == 56
                            ? handleButtonClick(1)
                            : (setIsId(56), showModal())
                        }
                        style={{
                          backgroundColor: collection == 1 ? "red" : "",
                          border: collection == 1 ? "1px solid #00ff7d" : "",
                        }}
                      >
                        <img
                          _ngcontent-nxk-c11=""
                          src={usdt}
                          height={25}
                          alt=""
                        />
                        <div
                          _ngcontent-nxk-c11=""
                          className="text-center flex-grow-1 px-2 fw-semibold d-flex flex-column"
                        >
                          <span _ngcontent-nxk-c11=""> USDT </span>
                          <span
                            _ngcontent-nxk-c11=""
                            className="ssss  text-white subtext"
                          >
                            BEP20
                          </span>
                        </div>
                      </button>
                      <button
                        _ngcontent-nxk-c11=""
                        className={
                          collection == 3
                            ? "btn new_yello_btn eth_hero font-14 text-uppercase d-flex align-items-center justify-content-center money-btn selected"
                            : "btn new_yello_btn eth_hero font-14 text-uppercase d-flex align-items-center justify-content-center money-btn "
                        }
                        onClick={() =>
                          getChainID == 56
                            ? handleButtonClick(3)
                            : (setIsId(56), showModal())
                        }
                      >
                        <img
                          _ngcontent-nxk-c11=""
                          src={busd}
                          height={25}
                          alt=""
                        />
                        <div
                          _ngcontent-nxk-c11=""
                          className="text-center flex-grow-1 px-2 fw-semibold d-flex flex-column"
                        >
                          <span _ngcontent-nxk-c11=""> BUSD </span>
                          <span
                            _ngcontent-nxk-c11=""
                            className="ssss text-white subtext"
                          >
                            BEP20
                          </span>
                        </div>
                      </button>
                      <button
                        _ngcontent-nxk-c11=""
                        className={
                          collection == 2
                            ? "btn new_yello_btn font-14 text-uppercase d-flex align-items-center justify-content-center money-btn selected"
                            : "btn new_yello_btn font-14 text-uppercase d-flex align-items-center justify-content-center money-btn"
                        }
                        onClick={() =>
                          getChainID == 56
                            ? handleButtonClick(2)
                            : (setIsId(56), showModal())
                        }
                      >
                        <img
                          _ngcontent-nxk-c11=""
                          src={bnb}
                          height={25}
                          alt=""
                        />
                        <span
                          _ngcontent-nxk-c11=""
                          className="text-center flex-grow-1 px-2 fw-semibold"
                        >
                          BNB
                        </span>
                      </button>
                    </div>
                    <app-swap _ngcontent-nxk-c11="" _nghost-nxk-c10="">
                      <div
                        _ngcontent-nxk-c10=""
                        className="swapSection  new_swap_son my-3"
                      >
                        <div
                          _ngcontent-nxk-c10=""
                          className="text-center border-bottom pb-2"
                        >
                          <span
                            _ngcontent-nxk-c10=""
                            className="ms-2 text-white font-14 fw-semibold ng-star-inserted"
                          >
                            {TokenName} Balance :{balance}{" "}
                          </span>
                        </div>

                        <div
                          _ngcontent-nxk-c10=""
                          className="body-section ng-star-inserted"
                        >
                          <div _ngcontent-nxk-c10="" className="row">
                            <div
                              _ngcontent-nxk-c10=""
                              className="col-md-6 pe-0"
                            >
                              <div
                                _ngcontent-nxk-c10=""
                                className="d-flex align-items-center justify-content-between mb-1"
                              >
                                <label
                                  _ngcontent-nxk-c10=""
                                  className="d-block text-white ssss"
                                >
                                  Amount in{" "}
                                  <span
                                    _ngcontent-nxk-c10=""
                                    className="fw-bold"
                                  >
                                    {collection == 0
                                      ? "ETH"
                                      : collection == 1
                                      ? "USDT"
                                      : collection == 2
                                      ? "BNB"
                                      : collection == 3
                                      ? "BUSD"
                                      : null}
                                  </span>{" "}
                                  you pay{" "}
                                </label>
                                <div
                                  _ngcontent-nxk-c10=""
                                  className="fw-bold text-white cursor-pointer font-14 ng-star-inserted"
                                  onClick={()=>setAmount(Number(balance) - Number(0.002))}
                                >
                                  Max
                                </div>
                              </div>
                              <div
                                _ngcontent-nxk-c10=""
                                className="amountField d-flex align-items-start"
                              >
                                <div
                                  _ngcontent-nxk-c10=""
                                  className="flex-grow-1"
                                >
                                  <input
                                    _ngcontent-nxk-c10=""
                                    type="text"
                                    apptwodigitdecimalnumber=""
                                    onChange={(e) => handleAmountChange(e)}
                                    placeholder={0}
                                    value={amount}
                                    className="form-control text-truncate color-secondary ng-untouched ng-pristine ng-valid"
                                  />
                                  <div
                                    _ngcontent-nxk-c10=""
                                    className="amountType"
                                  >
                                    {collection == 0 ? (
                                      <img src={eth} alt="" height={25} />
                                    ) : collection == 1 ? (
                                      <img src={usdt} alt="" height={25} />
                                    ) : collection == 2 ? (
                                      <img src={bnb} alt="" height={25} />
                                    ) : collection == 3 ? (
                                      <img src={busd} alt="" height={25} />
                                    ) : null}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div _ngcontent-nxk-c10="" className="col-md-6">
                              <div
                                _ngcontent-nxk-c10=""
                                className="d-flex align-items-center justify-content-between mb-1"
                              >
                                <label
                                  _ngcontent-nxk-c10=""
                                  className="d-block text-white ssss "
                                  style={{marginTop:"0.2rem"}}
                                >
                                  {" "}
                                  Amount in{" "}
                                  <span
                                    _ngcontent-nxk-c10=""
                                    className="fw-bold"
                                  >
                                    $AI
                                  </span>{" "}
                                  you receive{" "}
                                </label>
                              </div>
                              <div
                                _ngcontent-nxk-c10=""
                                className="amountField"
                              >
                                <input
                                  _ngcontent-nxk-c10=""
                                  type="text"
                                  apptwodigitdecimalnumber=""
                                  min="minAmount"
                                  pattern="\d*"
                                  placeholder={0}
                                  value={totalToken}
                                  disabled={true}
                                  className="form-control text-truncate text-mid-grey ng-untouched ng-pristine ng-valid"
                                />
                                <div
                                  _ngcontent-nxk-c10=""
                                  className="amountType"
                                >
                                  <img
                                    src={logo}
                                    alt=""
                                    style={{ width: "30px", height: "30px" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            _ngcontent-nxk-c10=""
                            className="err-msg-container text-center"
                          ></div>
                        </div>
                      </div>
                    </app-swap>
                    <div
                      _ngcontent-nxk-c11=""
                      className="mt-3 d-flex flex-column align-items-center justify-content-center"
                    >
                      <button
                        _ngcontent-nxk-c11=""
                        translate=""
                        className="btn new_buy_now_btn font-14 mb-3 w-75 text-white wh-42 ng-star-inserted"
                        onClick={(e) =>
                          account?.startsWith("0x")
                            ? handleSubmit(e)
                            : (showModal(), setIsId(getChainID))
                        }
                        // onClick={(e) => {handleSubmit(e);showModal()}}
                        // onClick={()=>(change_Metamask())}
                      >
                        {account?.startsWith("0x") ? (
                          <> {Spinner ? "Loading..." : "Buy Now"} </>
                        ) : (
                          "Connect Wallet"
                        )}
                      </button>

                      <div
                        _ngcontent-nxk-c11=""
                        className="font-14 text-center"
                      >
                        Listing price : 1 token = 0.00000012$
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                _ngcontent-nxk-c11=""
                className="d-flex justify-content-center social-wrapper mt-5 mb-4 mb-md-5"
              >
                <a
                  _ngcontent-nxk-c11=""
                  href="https://twitter.com/aishib_pro?s=21"
                  target="_blank"
                  className="social mx-3"
                >
                  <img
                    _ngcontent-nxk-c11=""
                    height={40}
                    src={twitter}
                    alt="twitter"
                  />
                </a>
                <a
                  _ngcontent-nxk-c11=""
                  href="https://t.me/Aishiba_io"
                  target="_blank"
                  className="social mx-3"
                >
                  <img
                    _ngcontent-nxk-c11=""
                    height={40}
                    src={telegram}
                    alt="yt"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

{
  /* <a
                _ngcontent-nxk-c11=""
                href="https://www.instagram.com/aidogecrypto/"
                target="_blank"
                className="social mx-3"
              >
                <img
                  _ngcontent-nxk-c11=""
                  height={40}
                  src={instagram}
                  alt="insta"
                />
              </a> */
}
{
  /* <a
                _ngcontent-nxk-c11=""
                href="https://twitter.com/aidogecrypto"
                target="_blank"
                className="social mx-3"
              >
                <img
                  _ngcontent-nxk-c11=""
                  height={40}
                  src={twitter}
                  alt="twitter"
                />
              </a> */
}

{
  /* <button
                      _ngcontent-nxk-c11=""
                      className="btn new_yello_btn font-14 text-uppercase d-flex align-items-center justify-content-center money-btn"
                    >
                      <img
                        _ngcontent-nxk-c11=""
                        src="/assets/images/svg-icons/card.svg"
                        height={22}
                        alt=""
                      />
                      <span
                        _ngcontent-nxk-c11=""
                        translate=""
                        className="text-center flex-grow-1 px-2 fw-semibold"
                      >
                        CARD
                      </span>
                    </button> */
}

{
  /* <button
                      _ngcontent-nxk-c11=""
                      className={
                        collection == 3
                          ? "btn new_yello_btn font-14 text-uppercase d-flex align-items-center justify-content-center money-btn selected"
                          : "btn new_yello_btn font-14 text-uppercase d-flex align-items-center justify-content-center money-btn"
                      }
                      onClick={() => handleButtonClick(3)}
                    >
                      <img
                        _ngcontent-nxk-c11=""
                        src={usdt}
                        height={25}
                        alt=""
                      />
                      <div
                        _ngcontent-nxk-c11=""
                        className="text-center flex-grow-1 px-2 fw-semibold d-flex flex-column"
                      >
                        <span _ngcontent-nxk-c11=""> USDT </span>
                        <span _ngcontent-nxk-c11="" className="font-10 subtext">
                          BEP20
                        </span>
                      </div>
                    </button> */
}

{
  /* <a
                _ngcontent-nxk-c11=""
                href="https://www.tiktok.com/@aidogecrypto"
                target="_blank"
                className="social mx-3 pt-1"
              >
                <img _ngcontent-nxk-c11="" height={30} src={tiktok} alt="yt" />
              </a> */
}
