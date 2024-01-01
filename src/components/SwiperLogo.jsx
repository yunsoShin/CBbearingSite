import React from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ft_rolling_logo1 from "../img/ft_rolling_logo1.png";
import ft_rolling_logo2 from "../img/ft_rolling_logo2.png";
import ft_rolling_logo3 from "../img/ft_rolling_logo3.png";
import ft_rolling_logo4 from "../img/ft_rolling_logo4.png";
import ft_rolling_logo5 from "../img/ft_rolling_logo5.png";
import ft_rolling_logo6 from "../img/ft_rolling_logo6.png";
import ft_rolling_logo7 from "../img/ft_rolling_logo7.png";
import ft_rolling_logo8 from "../img/ft_rolling_logo8.png";

import "swiper/css";
SwiperCore.use([Autoplay]);
function SwiperLogo(props) {
  return (
    <div className=" hidden md:block inline-block-center w-full z-10">
      <Swiper
        autoplay={{ delay: 1500 }}
        loop
        spaceBetween={0}
        slidesPerView={10} // Add this line to show 8 slides at a time
        onSlideChange={(swiper) => {}}
        className="h-full"
      >
        {/*}
      {logo.map((logo, index) => (
        <SwiperSlide key={index}>
          <img src={logo} alt={`Logo${index +1}`} className="flex"/>
        </SwiperSlide>
      ))}
*/}
        <SwiperSlide className="h-full flex">
          <img src={ft_rolling_logo1} alt="Swiper-Logo" className="flex h-24" />
        </SwiperSlide>
        <SwiperSlide className="h-full flex">
          <img src={ft_rolling_logo2} alt="Swiper-Logo" className="flex h-24" />
        </SwiperSlide>
        <SwiperSlide className="h-full flex">
          <img src={ft_rolling_logo3} alt="Swiper-Logo" className="flex h-24" />
        </SwiperSlide>
        <SwiperSlide className="h-full flex">
          <img src={ft_rolling_logo4} alt="Swiper-Logo" className="flex h-24" />
        </SwiperSlide>
        <SwiperSlide className="h-full flex">
          <img src={ft_rolling_logo5} alt="Swiper-Logo" className="flex h-24" />
        </SwiperSlide>
        <SwiperSlide className="h-full flex">
          <img src={ft_rolling_logo6} alt="Swiper-Logo" className="flex h-24" />
        </SwiperSlide>
        <SwiperSlide className="h-full flex">
          <img src={ft_rolling_logo7} alt="Swiper-Logo" className="flex h-24" />
        </SwiperSlide>
        <SwiperSlide className="h-full flex">
          <img src={ft_rolling_logo8} alt="Swiper-Logo" className="flex h-24" />
        </SwiperSlide>
        <SwiperSlide className="h-full flex">
          <img src={ft_rolling_logo1} alt="Swiper-Logo" className="flex h-24" />
        </SwiperSlide>
        <SwiperSlide className="h-full flex">
          <img src={ft_rolling_logo2} alt="Swiper-Logo" className="flex h-24" />
        </SwiperSlide>
        <SwiperSlide className="h-full flex">
          <img src={ft_rolling_logo3} alt="Swiper-Logo" className="flex h-24" />
        </SwiperSlide>
        <SwiperSlide className="h-full flex">
          <img src={ft_rolling_logo4} alt="Swiper-Logo" className="flex h-24" />
        </SwiperSlide>
        <SwiperSlide className="h-full flex">
          <img src={ft_rolling_logo5} alt="Swiper-Logo" className="flex h-24" />
        </SwiperSlide>
        <SwiperSlide className="h-full flex">
          <img src={ft_rolling_logo6} alt="Swiper-Logo" className="flex h-24" />
        </SwiperSlide>
        <SwiperSlide className="h-full flex">
          <img src={ft_rolling_logo7} alt="Swiper-Logo" className="flex h-24" />
        </SwiperSlide>
        <SwiperSlide className="h-full flex">
          <img src={ft_rolling_logo8} alt="Swiper-Logo" className="flex h-24" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperLogo;
