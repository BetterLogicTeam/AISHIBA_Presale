import React, { useState } from "react";
import "./Hero.css";
import eth from "../../assets/eth.svg";
import usdt from "../../assets/usdt.svg";
import bnb from "../../assets/bnb.svg";
// import instagram from "../../assets/social-instagram.svg";
// import twitter from "../../assets/social-twitter.svg";
import discord from "../../assets/social-discord.svg";
import telegram from "../../assets/social-telegram.svg";
import tiktok from "../../assets/social-tiktok.svg";

function Hero() {
  const [collection, setcollection] = useState(0);

  const handleButtonClick = (newData) => {
    setcollection(newData);
  };

  return (
    <div>
      <div _ngcontent-nxk-c11="" className="background new_bg" id="home" >
        {/* <div
          _ngcontent-nxk-c11=""
          className="header-logo d-flex flex-column align-items-center justify-content-center w-100 d-md-none"
        >
          <h1
            _ngcontent-nxk-c11=""
            className="title-txt fs-4 hero_ke_hdng text-uppercase mt-3 header-text"
          >
            <span _ngcontent-nxk-c11="" translate="" className="text-tourquise">
              AIDOGE
            </span>
            <span _ngcontent-nxk-c11="" translate="">
              {" "}
              - The greatest{" "}
            </span>
            <span _ngcontent-nxk-c11="" translate="" className="text-tourquise">
              meme generation{" "}
            </span>
            <span _ngcontent-nxk-c11="" translate="">
              platform
            </span>
          </h1>
        </div> */}
        <div
          _ngcontent-nxk-c11=""
          className="container  row d-sm-flex  mx-sm-3"
        >
        <div className="col-md-6">

        <div className="new_b_c">

        
          <h1>a unified platform to a decenteralized world</h1>
          <p className="haeding_para">
          Aishiba aims to create a seamless network that connects various blockchain platforms, enabling a robust cross-chain ecosystem for decentralized finance (DeFi). By providing essential infrastructure and support, Aishiba strives to empower users with a secure, transparent, and unrestricted DeFi experience.
          </p>
      
      <div className="d-flex  mt-5 gap-4">
        {/* <button className="white_paper_btn"> whitepaper</button> */}
        <button className="heading_btn"> <span class="text">Whitepaper</span>
  <span class="blob"></span>
  <span class="blob"></span>
  <span class="blob"></span>
  <span class="blob"></span>
</button>
        <button className="heading_btn"> <span class="text">Audit</span>
  <span class="blob"></span>
  <span class="blob"></span>
  <span class="blob"></span>
  <span class="blob"></span>
</button>
        {/* <button className="white_paper_btn"> audit</button> */}
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
                      06d
                    </div>
                    <div
                      _ngcontent-nxk-c11=""
                      className="rounded-3 p-3 time-card text-center fs-6"
                    >
                      {" "}
                      02h
                    </div>
                    <div
                      _ngcontent-nxk-c11=""
                      className="rounded-3 p-3 time-card text-center fs-6"
                    >
                      {" "}
                      14m
                    </div>
                    <div
                      _ngcontent-nxk-c11=""
                      className="rounded-3 p-3 time-card text-center fs-6"
                    >
                      {" "}
                      08s
                    </div>
                  </div>
                  
                  <p
                    _ngcontent-nxk-c11=""
                    className="mt-3 mb-2 font-20 fw-semibold claim-title"
                  >
                    {" "}
                    Claim and Exchange Listings June 19th. Last Chance to Buy
                    Now!{" "}
                  </p>
               

              
                
                  
                </div>
                <div className="main_pooo">
                <div className="progress_bar">
                  <div className="clor"></div>
                  <p className="stage_text">next stage price  :$0.0031</p>

                </div>
                <p className="text-center mt-3">usdt raised:$8,983,485.74/$9,909.09</p>
                  
                </div>

             
              
                <div _ngcontent-nxk-c11="" className="bg_new_here p-4 swapArea">
                  <p
                    _ngcontent-nxk-c11=""
                    className="text-center mb-3 font-14 dashTitle fw-semibold"
                  >
                    1 $AI = $0.0000336
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
                        <span _ngcontent-nxk-c11=""> BUSD </span>
                        {/* <span _ngcontent-nxk-c11="" className="font-10 subtext">
                          ERC20
                        </span> */}
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
                    {/* <button
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
                    </button> */}
             
                  </div>
                  <app-swap _ngcontent-nxk-c11="" _nghost-nxk-c10="">
                    <div _ngcontent-nxk-c10="" className="swapSection  new_swap_son my-3">
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
                                  {collection == 0
                                    ? "ETH"
                                    : collection == 1
                                    ? "USDT"
                                    : collection == 2
                                    ? "BNB"
                                    : collection == 3
                                    ? "USDT"
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
                                    <img src={usdt} alt="" height={25} />
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
                                <svg-icon
                                  _ngcontent-nxk-c10=""
                                  src="./assets/images/svg-icons/ai.svg"
                                >
                                  <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    _ngcontent-nxk-c10=""
                                    aria-hidden="true"
                                    style={{ width: 28, height: 28 }}
                                  >
                                    <path
                                      d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                                      fill="#19D4E1"
                                      _ngcontent-nxk-c10=""
                                    />
                                    <path
                                      d="M8.51509 13.7993C8.51509 13.4762 8.62688 13.2029 8.85046 12.9792C9.07405 12.7555 9.34732 12.6436 9.67028 12.6436C9.99323 12.6436 10.2665 12.7555 10.4901 12.9792C10.7137 13.2029 10.8255 13.4762 10.8255 13.7993C10.8255 14.1224 10.7137 14.3958 10.4901 14.6195C10.2665 14.8432 9.99323 14.955 9.67028 14.955C9.34732 14.955 9.07405 14.8432 8.85046 14.6195C8.62688 14.3958 8.51509 14.1224 8.51509 13.7993ZM4.58372 15.477C4.3974 15.7007 4.16761 15.8125 3.89434 15.8125C3.64591 15.8125 3.43475 15.7255 3.26085 15.5515C3.08695 15.3776 3 15.1663 3 14.9178C3 14.6941 3.06211 14.5139 3.18632 14.3772L7.71391 8.2818C7.92507 7.99598 8.20455 7.76608 8.55235 7.59211C8.90015 7.4057 9.27279 7.3125 9.67028 7.3125C10.0429 7.3125 10.3969 7.39327 10.7323 7.55482C11.0677 7.71637 11.3409 7.94006 11.5521 8.22588L16.0797 14.284C16.1542 14.371 16.2163 14.4704 16.266 14.5822C16.3157 14.6817 16.3406 14.7935 16.3406 14.9178C16.3406 15.1663 16.2536 15.3776 16.0797 15.5515C15.9058 15.7255 15.6946 15.8125 15.4462 15.8125C15.1481 15.8125 14.9121 15.6944 14.7382 15.4583L10.3969 9.66118C10.31 9.56177 10.1982 9.45614 10.0615 9.3443C9.93734 9.22003 9.80691 9.1579 9.67028 9.1579C9.53364 9.1579 9.39701 9.22003 9.26037 9.3443C9.13616 9.45614 9.03679 9.56177 8.96226 9.66118L4.58372 15.477Z"
                                      fill="#042948"
                                      _ngcontent-nxk-c10=""
                                    />
                                    <path
                                      d="M20 14.9178C20 15.1663 19.913 15.3776 19.7392 15.5515C19.5653 15.7255 19.3541 15.8125 19.1057 15.8125C18.8572 15.8125 18.6461 15.7255 18.4722 15.5515C18.2983 15.3776 18.2113 15.1663 18.2113 14.9178V8.58004C18.2113 8.33151 18.2983 8.12025 18.4722 7.94627C18.6461 7.7723 18.8572 7.68531 19.1057 7.68531C19.3541 7.68531 19.5653 7.7723 19.7392 7.94627C19.913 8.12025 20 8.33151 20 8.58004V14.9178Z"
                                      fill="#042948"
                                      _ngcontent-nxk-c10=""
                                    />
                                  </svg>
                                </svg-icon>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          _ngcontent-nxk-c10=""
                          className="err-msg-container text-center"
                        >
                          <div
                            _ngcontent-nxk-c10=""
                            className="lowBalance fs-7 text-width m-1 ng-star-inserted"
                          >
                            0.015{" "}
                            {collection == 0
                              ? "ETH"
                              : collection == 1
                              ? "USDT"
                              : collection == 2
                              ? "BNB"
                              : collection == 3
                              ? "USDT"
                              : null}{" "}
                            is reserved for gas. The actual amount used will
                            depend on the network.
                          </div>
                      
                        </div>
                    
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
                      LISTING PRICE: $0.0000336
                    </div>
                  </div>
                </div>

            
              </div>
            </div>




            {/* social media links are here  */}
            <div
              _ngcontent-nxk-c11=""
              className="d-flex justify-content-center social-wrapper mt-5 mb-4 mb-md-5"
            >
             
              <a
                _ngcontent-nxk-c11=""
                href="https://discord.gg/QE5PdhbjUY"
                target="_blank"
                className="social mx-3"
              >
                <img
                  _ngcontent-nxk-c11=""
                  height={40}
                  src={discord}
                  alt="discord"
                />
              </a>
              <a
                _ngcontent-nxk-c11=""
                href="https://t.me/AiDogeCryptoOfficial"
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
              <a
                _ngcontent-nxk-c11=""
                href="https://www.tiktok.com/@aidogecrypto"
                target="_blank"
                className="social mx-3 pt-1"
              >
                <img _ngcontent-nxk-c11="" height={30} src={tiktok} alt="yt" />
              </a>
            </div>
          </div>
        



        </div>


      </div>
    </div>
  );
}

export default Hero;


 {/* <a
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
              </a> */}
              {/* <a
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
              </a> */}



                     {/* <button
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
                    </button> */}