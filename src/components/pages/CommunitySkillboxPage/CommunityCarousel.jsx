import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./CommunityCarousel.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const CommunityCarousel = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://static.tildacdn.com/tild3830-3861-4861-a436-373937383530/7-2.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://static.tildacdn.com/tild3633-3464-4837-a433-326435646630/1287-2.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://static.tildacdn.com/tild3439-6235-4664-a637-303031353362/1284-2.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://static.tildacdn.com/tild6336-3139-4433-a437-336534613363/1283-2.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CommunityCarousel;
