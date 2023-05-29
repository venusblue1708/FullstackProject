import React from "react";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
// import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [setSwiperRef] = useState(null);

  return (
    <>
      <Swiper
        style={{ marginTop: "10%" }}
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>{/* <ReviewCard /> */}</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Reviews;
