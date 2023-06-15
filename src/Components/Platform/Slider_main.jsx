import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import slide_1 from "../../assets/slide_1.png";
import slide_2 from "../../assets/slide_2.png";
import slide_3 from "../../assets/slide_3.png";
import slide_4 from "../../assets/slide_4.png";
import slide_5 from "../../assets/slide_5.png";
import slide_6 from "../../assets/slide_6.png";
import icon_logo from "../../assets/icon-logo.svg";

export default function Slider_main() {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: "auto",
          },
          1024: {
            slidesPerView: "auto",
          },
        }}
        pagination={true}
        modules={[Autoplay,EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="owl-item hxn ng-tns-c5-0 ng-trigger ng-trigger-autoHeight active center ng-star-inserted"
            style={{ width: 455 }}
          >
            <div
              _ngcontent-lhx-c13=""
              className="item ng-star-inserted"
              style={{}}
            >
              <img _ngcontent-lhx-c13="" src={slide_1} className="img-fluid" />
            </div>
            <img
              _ngcontent-lhx-c13=""
              src={icon_logo}
              className="float-logo ng-star-inserted"
              style={{}}
            />
            {/**/}
            {/**/}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="owl-item hxn ng-tns-c5-0 ng-trigger ng-trigger-autoHeight active center ng-star-inserted"
            style={{ width: 455 }}
          >
            <div
              _ngcontent-lhx-c13=""
              className="item ng-star-inserted"
              style={{}}
            >
              <img _ngcontent-lhx-c13="" src={slide_2} className="img-fluid" />
            </div>
            <img
              _ngcontent-lhx-c13=""
              src={icon_logo}
              className="float-logo ng-star-inserted"
              style={{}}
            />
            {/**/}
            {/**/}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="owl-item hxn ng-tns-c5-0 ng-trigger ng-trigger-autoHeight active center ng-star-inserted"
            style={{ width: 455 }}
          >
            <div
              _ngcontent-lhx-c13=""
              className="item ng-star-inserted"
              style={{}}
            >
              <img _ngcontent-lhx-c13="" src={slide_3} className="img-fluid" />
            </div>
            <img
              _ngcontent-lhx-c13=""
              src={icon_logo}
              className="float-logo ng-star-inserted"
              style={{}}
            />
            {/**/}
            {/**/}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="owl-item hxn ng-tns-c5-0 ng-trigger ng-trigger-autoHeight active center ng-star-inserted"
            style={{ width: 455 }}
          >
            <div
              _ngcontent-lhx-c13=""
              className="item ng-star-inserted"
              style={{}}
            >
              <img _ngcontent-lhx-c13="" src={slide_4} className="img-fluid" />
            </div>
            <img
              _ngcontent-lhx-c13=""
              src={icon_logo}
              className="float-logo ng-star-inserted"
              style={{}}
            />
            {/**/}
            {/**/}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="owl-item hxn ng-tns-c5-0 ng-trigger ng-trigger-autoHeight active center ng-star-inserted"
            style={{ width: 455 }}
          >
            <div
              _ngcontent-lhx-c13=""
              className="item ng-star-inserted"
              style={{}}
            >
              <img _ngcontent-lhx-c13="" src={slide_5} className="img-fluid" />
            </div>
            <img
              _ngcontent-lhx-c13=""
              src={icon_logo}
              className="float-logo ng-star-inserted"
              style={{}}
            />
            {/**/}
            {/**/}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="owl-item hxn ng-tns-c5-0 ng-trigger ng-trigger-autoHeight active center ng-star-inserted"
            style={{ width: 455 }}
          >
            <div
              _ngcontent-lhx-c13=""
              className="item ng-star-inserted"
              style={{}}
            >
              <img _ngcontent-lhx-c13="" src={slide_6} className="img-fluid" />
            </div>
            <img
              _ngcontent-lhx-c13=""
              src={icon_logo}
              className="float-logo ng-star-inserted"
              style={{}}
            />
            {/**/}
            {/**/}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
