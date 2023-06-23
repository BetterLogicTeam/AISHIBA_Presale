import React, { useState } from "react";
import "./Hero.css";
import eth from "../../assets/eth.svg";
import usdt from "../../assets/usdt.svg";
import bnb from "../../assets/bnb.svg";
import busd from "../../assets/busd.svg";
<img src="_sma" alt="" />;
import logo from "../../assets/logo.png";
// import instagram from "../../assets/social-instagram.svg";
// import twitter from "../../assets/social-twitter.svg";
import twitter from "../../assets/tw.svg";
import telegram from "../../assets/social-telegram.svg";
import tiktok from "../../assets/social-tiktok.svg";

function Hero() {
  const [collection, setcollection] = useState(0);

  const handleButtonClick = (newData) => {
    setcollection(newData);
  };

  return (
    <div>
      <div _ngcontent-nxk-c11="" className="background new_bg" id="home">
        {/* <div
          _ngcontent-nxk-c11=""
          className="container slfkk  row d-sm-flex  mx-sm-3"
        >
          <div className="col-md-6 ">
            <div className="new_b_c">
              <h1>a unified platform to a decenteralized world</h1>
              <p className="haeding_para">
                Aishiba aims to create a seamless network that connects various
                blockchain platforms, enabling a robust cross-chain ecosystem
                for decentralized finance (DeFi). By providing essential
                infrastructure and support, Aishiba strives to empower users
                with a secure, transparent, and unrestricted DeFi experience.
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

          <div
            _ngcontent-nxk-c11=""
            className="col-lg-6 right mb-4 order-1 order-lg-2"
          >
            <div _ngcontent-nxk-c11="" className="walletBox ">
              <div _ngcontent-nxk-c11="" className="text-white borrrr_shs">
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
                      30d
                    </div>
                    <div
                      _ngcontent-nxk-c11=""
                      className="rounded-3 p-3 time-card text-center fs-6"
                    >
                      {" "}
                      00h
                    </div>
                    <div
                      _ngcontent-nxk-c11=""
                      className="rounded-3 p-3 time-card text-center fs-6"
                    >
                      {" "}
                      00m
                    </div>
                    <div
                      _ngcontent-nxk-c11=""
                      className="rounded-3 p-3 time-card text-center fs-6"
                    >
                      {" "}
                      00s
                    </div>
                  </div>

                  <p
                    _ngcontent-nxk-c11=""
                    className="mt-3 mb-2 font-20 fw-semibold claim-title"
                  >
                    Claim and Exchange Listings in August . Last Chance to Buy
                    Now!
                  </p>
                </div>
                <div className="main_pooo">
                  <div className="progress_bar">
                    <div className="clor"></div>
                    <p className="stage_text">Next Stage Price :0.000000025$</p>
                  </div>
                  <p className="text-center mt-3">USDT raised:0/$100,000</p>
                </div>

                <div _ngcontent-nxk-c11="" className="bg_new_here p-4 swapArea">
                  <p
                    _ngcontent-nxk-c11=""
                    className="text-center mb-3 font-14 dashTitle fw-semibold"
                  >
                    1AIDOGE = 1 token = 0.00000001 $
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
                      onClick={() => handleButtonClick(0)}
                    >
                      <img _ngcontent-nxk-c11="" src={eth} height={25} alt="" />
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
                      onClick={() => handleButtonClick(1)}
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
                          className="font-10  text-white subtext"
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
                      onClick={() => handleButtonClick(3)}
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
                          className="font-10 text-white subtext"
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
                      onClick={() => handleButtonClick(2)}
                    >
                      <img _ngcontent-nxk-c11="" src={bnb} height={25} alt="" />
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
                          ETH balance 0
                        </span>
                      </div>

                      <div
                        _ngcontent-nxk-c10=""
                        className="body-section ng-star-inserted"
                      >
                        <div _ngcontent-nxk-c10="" className="row">
                          <div _ngcontent-nxk-c10="" className="col-md-6 pe-0">
                            <div
                              _ngcontent-nxk-c10=""
                              className="d-flex align-items-center justify-content-between mb-1"
                            >
                              <label
                                _ngcontent-nxk-c10=""
                                className="d-block text-white ssss"
                              >
                                {" "}
                                Amount in{" "}
                                <span _ngcontent-nxk-c10="" className="fw-bold">
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
                              >
                                Max{" "}
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
                                  placeholder={0}
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
                                className="d-block text-white font-14"
                              >
                                {" "}
                                Amount in{" "}
                                <span _ngcontent-nxk-c10="" className="fw-bold">
                                  $AI
                                </span>{" "}
                                you receive{" "}
                              </label>
                            </div>
                            <div _ngcontent-nxk-c10="" className="amountField">
                              <input
                                _ngcontent-nxk-c10=""
                                type="text"
                                apptwodigitdecimalnumber=""
                                min="minAmount"
                                pattern="\d*"
                                placeholder={0}
                                className="form-control text-truncate text-mid-grey ng-untouched ng-pristine ng-valid"
                              />
                              <div _ngcontent-nxk-c10="" className="amountType">
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
                    >
                      Buy Now
                    </button>

                    <div _ngcontent-nxk-c11="" className="font-14 text-center">
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
        </div> */}


        {/* /// new code of the  first component */}

        <div className="container">
  <div className="row justify-content-center ">
    
   <div className="col-md-6  text-center">
            <div className="new_b_c">
              <h1>a unified platform to a decenteralized world</h1>
              <p className="haeding_para">
                Aishiba aims to create a seamless network that connects various
                blockchain platforms, enabling a robust cross-chain ecosystem
                for decentralized finance (DeFi). By providing essential
                infrastructure and support, Aishiba strives to empower users
                with a secure, transparent, and unrestricted DeFi experience.
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

          <div
            _ngcontent-nxk-c11=""
            className="col-lg-6 right mb-4"
          >
            <div _ngcontent-nxk-c11="" className="walletBox ">
              <div _ngcontent-nxk-c11="" className="text-white borrrr_shs">
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
                      30d
                    </div>
                    <div
                      _ngcontent-nxk-c11=""
                      className="rounded-3 p-3 time-card text-center fs-6"
                    >
                      {" "}
                      00h
                    </div>
                    <div
                      _ngcontent-nxk-c11=""
                      className="rounded-3 p-3 time-card text-center fs-6"
                    >
                      {" "}
                      00m
                    </div>
                    <div
                      _ngcontent-nxk-c11=""
                      className="rounded-3 p-3 time-card text-center fs-6"
                    >
                      {" "}
                      00s
                    </div>
                  </div>

                  <p
                    _ngcontent-nxk-c11=""
                    className="mt-3 mb-2 font-20 fw-semibold claim-title"
                  >
                    Claim and Exchange Listings in August . Last Chance to Buy
                    Now!
                  </p>
                </div>
                <div className="main_pooo">
                  <div className="progress_bar">
                    <div className="clor"></div>
                    <p className="stage_text">Next Stage Price :0.000000025$</p>
                  </div>
                  <p className="text-center mt-3">USDT raised:0/$100,000</p>
                </div>

                <div _ngcontent-nxk-c11="" className="bg_new_here p-4 swapArea">
                  <p
                    _ngcontent-nxk-c11=""
                    className="text-center mb-3 font-14 dashTitle fw-semibold"
                  >
                    1AIDOGE = 1 token = 0.00000001 $
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
                      onClick={() => handleButtonClick(0)}
                    >
                      <img _ngcontent-nxk-c11="" src={eth} height={25} alt="" />
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
                      onClick={() => handleButtonClick(1)}
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
                          className="font-10  text-white subtext"
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
                      onClick={() => handleButtonClick(3)}
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
                          className="font-10 text-white subtext"
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
                      onClick={() => handleButtonClick(2)}
                    >
                      <img _ngcontent-nxk-c11="" src={bnb} height={25} alt="" />
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
                          ETH balance 0
                        </span>
                      </div>

                      <div
                        _ngcontent-nxk-c10=""
                        className="body-section ng-star-inserted"
                      >
                        <div _ngcontent-nxk-c10="" className="row">
                          <div _ngcontent-nxk-c10="" className="col-md-6 pe-0">
                            <div
                              _ngcontent-nxk-c10=""
                              className="d-flex align-items-center justify-content-between mb-1"
                            >
                              <label
                                _ngcontent-nxk-c10=""
                                className="d-block text-white ssss"
                              >
                                {" "}
                                Amount in{" "}
                                <span _ngcontent-nxk-c10="" className="fw-bold">
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
                              >
                                Max{" "}
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
                                  placeholder={0}
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
                                className="d-block text-white font-14"
                              >
                                {" "}
                                Amount in{" "}
                                <span _ngcontent-nxk-c10="" className="fw-bold">
                                  $AI
                                </span>{" "}
                                you receive{" "}
                              </label>
                            </div>
                            <div _ngcontent-nxk-c10="" className="amountField">
                              <input
                                _ngcontent-nxk-c10=""
                                type="text"
                                apptwodigitdecimalnumber=""
                                min="minAmount"
                                pattern="\d*"
                                placeholder={0}
                                className="form-control text-truncate text-mid-grey ng-untouched ng-pristine ng-valid"
                              />
                              <div _ngcontent-nxk-c10="" className="amountType">
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
                    >
                      Buy Now
                    </button>

                    <div _ngcontent-nxk-c11="" className="font-14 text-center">
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
