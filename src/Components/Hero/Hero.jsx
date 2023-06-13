import React from "react";
import "./Hero.css";
import eth from "../../assets/eth.svg";
import usdt from "../../assets/usdt.svg";
import bnb from "../../assets/bnb.svg";
import instagram from "../../assets/social-instagram.svg";
import twitter from "../../assets/social-twitter.svg";
import discord from "../../assets/social-discord.svg";
import telegram from "../../assets/social-telegram.svg";
import tiktok from "../../assets/social-tiktok.svg";


function Hero() {
  return (
    <div>
      <div _ngcontent-nxk-c11="" className="background">
        <div
          _ngcontent-nxk-c11=""
          className="header-logo d-flex flex-column align-items-center justify-content-center w-100 d-md-none"
        >
          <h1
            _ngcontent-nxk-c11=""
            className="title-txt fs-4 text-uppercase mt-3 header-text"
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
        </div>
        <div
          _ngcontent-nxk-c11=""
          className="container row d-sm-flex align-items-start mx-sm-3"
        >
          <div
            _ngcontent-nxk-c11=""
            className="col-lg-7 leftSec align-self-end order-2 order-lg-1"
          >
            <div
              _ngcontent-nxk-c11=""
              className="d-flex d-lg-block align-items-center justify-content-center mb-3 mb-md-5 pb-0 pb-md-4"
            >
              <a
                _ngcontent-nxk-c11=""
                href="./assets/documents/Aidoge_Whitepaper.pdf"
                target="_blank"
                translate=""
                className="btn btn-whitepaper btn-outline-primary font-20"
              >
                Whitepaper
              </a>
            </div>
          </div>
          <div
            _ngcontent-nxk-c11=""
            className="col-lg-5 right mb-4 order-1 order-lg-2"
          >
            <div _ngcontent-nxk-c11="" className="walletBox bg-primary">
              <div _ngcontent-nxk-c11="">
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
                  {/**/}
                </div>
                <div _ngcontent-nxk-c11="" className="bg-white p-4 swapArea">
                  <p
                    _ngcontent-nxk-c11=""
                    className="text-center mb-3 font-14 dashTitle fw-semibold"
                  >
                    1 $AI = $0.0000336
                  </p>
                  <div
                    _ngcontent-nxk-c11=""
                    className="tab-container row d-flex align-items-center justify-content-md-around justify-content-center gap-2"
                  >
                    <button
                      _ngcontent-nxk-c11=""
                      className="btn btn-light font-14 text-uppercase d-flex align-items-center justify-content-center money-btn selected"
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
                      className="btn btn-light font-14 text-uppercase d-flex align-items-center justify-content-center money-btn"
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
                          ERC20
                        </span>
                      </div>
                    </button>
                    <button
                      _ngcontent-nxk-c11=""
                      className="btn btn-light font-14 text-uppercase d-flex align-items-center justify-content-center money-btn"
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
                    <button
                      _ngcontent-nxk-c11=""
                      className="btn btn-light font-14 text-uppercase d-flex align-items-center justify-content-center money-btn"
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
                    </button>
                    {/* <button
                      _ngcontent-nxk-c11=""
                      className="btn btn-light font-14 text-uppercase d-flex align-items-center justify-content-center money-btn"
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
                  </div>
                  <app-swap _ngcontent-nxk-c11="" _nghost-nxk-c10="">
                    <div _ngcontent-nxk-c10="" className="swapSection my-3">
                      <div
                        _ngcontent-nxk-c10=""
                        className="text-center border-bottom pb-2"
                      >
                        <span
                          _ngcontent-nxk-c10=""
                          className="ms-2 text-mid-grey font-14 fw-semibold ng-star-inserted"
                        >
                          ETH balance 0
                        </span>
                        {/**/}
                        {/**/}
                      </div>
                      {/**/}
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
                                className="d-block text-mid-grey font-14"
                              >
                                {" "}
                                Amount in{" "}
                                <span _ngcontent-nxk-c10="" className="fw-bold">
                                  ETH
                                </span>{" "}
                                you pay{" "}
                              </label>
                              <div
                                _ngcontent-nxk-c10=""
                                className="fw-bold text-primary cursor-pointer font-14 ng-star-inserted"
                              >
                                Max{" "}
                              </div>
                              {/**/}
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
                                  <svg-icon _ngcontent-nxk-c10="">
                                    <svg
                                      width={50}
                                      height={50}
                                      viewBox="0 0 50 50"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      _ngcontent-nxk-c10=""
                                      aria-hidden="true"
                                      style={{ width: 28, height: 28 }}
                                    >
                                      <path
                                        d="M25.1435 49.5432C38.7831 49.5432 49.8401 38.4529 49.8401 24.7716C49.8401 11.0902 38.7831 0 25.1435 0C11.5039 0 0.446777 11.0902 0.446777 24.7716C0.446777 38.4529 11.5039 49.5432 25.1435 49.5432Z"
                                        fill="#4793FF"
                                        _ngcontent-nxk-c10=""
                                      />
                                      <path
                                        d="M25.1436 0C38.7613 0 49.8402 11.1125 49.8402 24.7716C49.8402 38.4306 38.7613 49.5432 25.1436 49.5432V0Z"
                                        fill="#5E69E2"
                                        _ngcontent-nxk-c10=""
                                      />
                                      <path
                                        d="M25.1432 43.3244C35.3586 43.3244 43.6399 35.0184 43.6399 24.7717C43.6399 14.5249 35.3586 6.21899 25.1432 6.21899C14.9277 6.21899 6.64648 14.5249 6.64648 24.7717C6.64648 35.0184 14.9277 43.3244 25.1432 43.3244Z"
                                        fill="#2EBEEF"
                                        _ngcontent-nxk-c10=""
                                      />
                                      <path
                                        d="M25.1436 6.21899C35.3427 6.21899 43.6403 14.541 43.6403 24.7717C43.6403 35.0023 35.3427 43.3244 25.1436 43.3244V6.21899Z"
                                        fill="#4793FF"
                                        _ngcontent-nxk-c10=""
                                      />
                                      <path
                                        d="M23.9395 12.3066L16.1896 23.9666C15.8655 24.4533 15.8655 25.0887 16.1896 25.5767L23.9395 37.2367C24.5122 38.0987 25.7747 38.0987 26.3475 37.2367L34.0973 25.5767C34.4215 25.0887 34.4215 24.4533 34.0973 23.9666L26.3475 12.3066C25.7747 11.4445 24.5123 11.4445 23.9395 12.3066Z"
                                        fill="#76E5F6"
                                        _ngcontent-nxk-c10=""
                                      />
                                      <path
                                        d="M25.1436 26.6468V37.8832C25.6024 37.8832 26.0612 37.6677 26.3476 37.2367L34.0975 25.5767C34.2481 25.35 34.3279 25.0912 34.3384 24.8311L25.4273 26.6183C25.3337 26.6369 25.2386 26.6468 25.1436 26.6468Z"
                                        fill="#2EBEEF"
                                        _ngcontent-nxk-c10=""
                                      />
                                      <path
                                        d="M25.143 11.66C24.6842 11.66 24.2254 11.8756 23.939 12.3066L16.1891 23.9666C16.0158 24.2279 15.9361 24.5301 15.9482 24.8311L24.8592 26.6183C24.9529 26.6369 25.048 26.6468 25.143 26.6468V11.66Z"
                                        fill="#C2F4FB"
                                        _ngcontent-nxk-c10=""
                                      />
                                    </svg>
                                  </svg-icon>
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
                                className="d-block text-mid-grey font-14"
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
                            0.015 ETH is reserved for gas. The actual amount
                            used will depend on the network.
                          </div>
                          {/**/}
                          {/**/}
                        </div>
                        {/**/}
                        {/**/}
                        {/**/}
                      </div>
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                    </div>
                  </app-swap>
                  <div
                    _ngcontent-nxk-c11=""
                    className="mt-3 d-flex flex-column align-items-center justify-content-center"
                  >
                    <button
                      _ngcontent-nxk-c11=""
                      translate=""
                      className="btn btn-primary font-14 mb-3 w-75 text-white wh-42 ng-star-inserted"
                    >
                      Buy Now
                    </button>
                    {/**/}
                    {/**/}
                    <div _ngcontent-nxk-c11="" className="font-14 text-center">
                      LISTING PRICE: $0.0000336
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
              </a>
              <a
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
              </a>
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
                <img
                  _ngcontent-nxk-c11=""
                  height={30}
                  src={tiktok}
                  alt="yt"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Hero;
