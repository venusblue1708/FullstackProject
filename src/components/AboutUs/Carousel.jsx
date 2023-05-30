import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./AboutUs.css";

import { Parallax, Pagination, Navigation } from "swiper";

export default function Carousel() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="carousel_box">
          <img
            className="carousel_img"
            src="https://248006.selcdn.ru/MainSite/company-slider/1-new.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="carousel_box">
          <img
            className="carousel_img"
            src="https://248006.selcdn.ru/MainSite/company-slider/2-new.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="carousel_box">
          <img
            className="carousel_img"
            src="https://248006.selcdn.ru/MainSite/company-slider/3-new.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="carousel_box">
          <img
            className="carousel_img"
            src="https://248006.selcdn.ru/MainSite/company-slider/4-new.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="carousel_box">
          <img
            className="carousel_img"
            src="https://248006.selcdn.ru/MainSite/company-slider/7-new.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="carousel_box">
          <img
            className="carousel_img"
            src="https://248006.selcdn.ru/MainSite/company-slider/6-new.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="carousel_box">
          <img
            className="carousel_img"
            src="https://248006.selcdn.ru/MainSite/company-slider/8-new.webp"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
