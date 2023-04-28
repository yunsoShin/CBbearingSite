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
import ft_rolling_logo10 from "../img/ft_rolling_logo10.png";
import ft_rolling_logo11 from "../img/ft_rolling_logo11.png";
import ft_rolling_logo12 from "../img/ft_rolling_logo12.jpeg";
import ft_rolling_logo13 from "../img/ft_rolling_logo113.png";
import ft_rolling_logo14 from "../img/ft_rolling_logo14.jpeg";

import 'swiper/css';
SwiperCore.use([Autoplay]);
function SwiperLogo(props) {
  return (
    <div className=" hidden md:block inline-block-center">
  <Swiper
      autoplay={{ delay: 1500 }}
      loop
      spaceBetween={0}
      slidesPerView={10} // Add this line to show 8 slides at a time
        onSlideChange={(swiper) => {}}
    >
      {/*}
      {logo.map((logo, index) => (
        <SwiperSlide key={index}>
          <img src={logo} alt={`Logo${index +1}`} className="flex"/>
        </SwiperSlide>
      ))}
*/}
      <SwiperSlide>
        <img src={ft_rolling_logo1} alt="Logo 1"className="flex" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ft_rolling_logo2} alt="Logo 2" className="flex" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ft_rolling_logo3} alt="Logo 3" className="flex" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ft_rolling_logo4} alt="Logo 4" className="flex" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ft_rolling_logo5} alt="Logo 5" className="flex" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ft_rolling_logo6} alt="Logo 6" className="flex" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ft_rolling_logo7} alt="Logo 7" className="flex" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ft_rolling_logo8} alt="Logo 8" className="flex" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ft_rolling_logo1} alt="Logo 1" className="flex" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ft_rolling_logo2} alt="Logo 2" className="flex" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ft_rolling_logo3} alt="Logo 3" className="flex" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ft_rolling_logo4} alt="Logo 4" className="flex" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ft_rolling_logo5} alt="Logo 5" className="flex" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ft_rolling_logo6} alt="Logo 6" className="flex" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ft_rolling_logo7} alt="Logo 7" className="flex" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ft_rolling_logo8} alt="Logo 8" className="flex" />
      </SwiperSlide>


    </Swiper> 
    </div>
  );
}

export default SwiperLogo;
          
          
          
          
          