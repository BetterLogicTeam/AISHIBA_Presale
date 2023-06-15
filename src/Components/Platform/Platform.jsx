import slide_1 from "../../assets/slide_1.png"
import slide_2 from "../../assets/slide_2.png"
import slide_3 from "../../assets/slide_3.png"
import slide_4 from "../../assets/slide_4.png"
import slide_5 from "../../assets/slide_5.png"
import slide_6 from "../../assets/slide_6.png"
import icon_stick from "../../assets/icon_stick.svg"
import "./Platform.css";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect } from "react";
import $ from "jquery";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import Slider_main from "./Slider_main"

function Platform() {

 
  return (
    <div id="Platform">
      <div _ngcontent-nxk-c11="" className="container py-4 bg-mobile">
        <div
          _ngcontent-nxk-c11=""
          className="text-uppercase mt-3 d-none d-md-block text-center fw-bold header-text"
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
        </div>
        <div
          _ngcontent-nxk-c11=""
          translate=""
          className="info-text my-3 text-center"
        >
          {" "}
          Join us in revolutionizing the meme world with our innovative platform
          and community-driven approach{" "}
        </div>
      </div>


      <section _ngcontent-nxk-c13="" className="container py-5">
  <div
    _ngcontent-nxk-c13=""
    className="col-md-12 px-md-5 font-inder right-section fs-4 mx-md-0 mb-3"
  >
    <h2
      _ngcontent-nxk-c13=""
      className="mb-4 mt-4 mt-md-1 fw-bold header-text text-center"
    >
      <span _ngcontent-nxk-c13="" translate="" className="text-white left">
        Generate the{" "}
      </span>
      <span _ngcontent-nxk-c13="" translate="" className="text-tourquise ml-3">
        Hottest Memes
      </span>
    </h2>
    <p
      _ngcontent-nxk-c13=""
      translate=""
      className="text-center my-4 info-text"
    >
      The AiDoge platform provides an AI-driven meme generation experience for
      users, adapting to the ever-changing crypto world. It employs advanced AI
      technology for creating relevant memes based on user-provided text
      prompts. Key aspects include the AI-powered meme generator, text-based
      prompts, and $AI tokens for purchasing credits.
    </p>
    <p
      _ngcontent-nxk-c13=""
      translate=""
      className="text-center my-4 info-text"
    >
      AiDoge’s generator uses cutting-edge AI algorithms to create contextually
      relevant memes, trained on extensive meme datasets and crypto news. This
      ensures high-quality, up-to-date memes.
    </p>
  </div>
  {/**/}
  <div _ngcontent-nxk-c13="" className="memems">
    <div _ngcontent-nxk-c13="" className="row">
      <div
        _ngcontent-nxk-c13=""
        className="col-md-12 px-md-5 font-inder right-section fs-4 mx-md-0"
      >
        <h2
          _ngcontent-nxk-c13=""
          className="mb-2 fw-bold header-text text-center text-tourquise text-uppercase"
        >
          <span _ngcontent-nxk-c13="" translate="" className="text-white">
            Platform Preview
          </span>
        </h2>
      </div>
      <div _ngcontent-nxk-c13="" className="memes-wrapper mt-0 mt-md-3">
        <div _ngcontent-nxk-c13="" className="memes-control mb-sm-3 px-2">
          <div _ngcontent-nxk-c13="" className="position-relative d-flex">
            <p _ngcontent-nxk-c13="" translate="" className="form-control">
              When you realise that AIDOGE can turn your meme game from RUFF to
              Fantastic
            </p>
            <div
              _ngcontent-nxk-c13=""
              className="float-btn d-flex align-items-center"
            >
              <img
                _ngcontent-nxk-c13=""
                src={icon_stick}
                className="img-fluid"
              />
              <span
                _ngcontent-nxk-c13=""
                translate=""
                className="text-gradient ms-2 d-none d-md-block"
              >
                Generate
              </span>
            </div>
          </div>
        </div>
        
      </div>
      
      <Slider_main/>
     
      <div
        _ngcontent-nxk-c13=""
        className="col-md-6 d-flex justify-content-center mx-auto mt-4"
      >
        <div
          _ngcontent-nxk-c13=""
          className="memes-btn mt-0 mt-md-5 flex-wrap justify-content-center text-center"
        >
          <a
            _ngcontent-nxk-c13=""
            translate=""
            className="btn btn-outline-primary text-tourquise px-2 px-md-4 m-1 m-md-2 min-width"
          >
            Variations
          </a>
          <a
            _ngcontent-nxk-c13=""
            translate=""
            className="btn btn-outline-primary text-tourquise px-2 px-md-4 m-1 m-md-2 min-width"
          >
            Edit
          </a>
          <a
            _ngcontent-nxk-c13=""
            translate=""
            className="btn btn-outline-primary text-tourquise px-2 px-md-4 m-1 m-md-2 min-width"
          >
            Mint
          </a>
          <a
            _ngcontent-nxk-c13=""
            translate=""
            className="btn btn-outline-primary text-tourquise px-2 px-md-4 m-1 m-md-2 min-width ng-star-inserted"
          >
            Download
          </a>
          {/**/}
          {/**/}
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  );
}

export default Platform;
