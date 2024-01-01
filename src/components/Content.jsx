import React from "react";
import Main_icon1 from "../img/main_icon1.png";
import Main_icon2 from "../img/main_icon2.png";
import Main_icon3 from "../img/main_icon3.png";
import Main_icon4 from "../img/main_icon4.png";

function Content(props) {
  return (
    <div className="bg-slate-800 w-full  md:h-fit  h-fit relative  -translate-y-24 flex md:justify-center md:items-center">
      <ul className="flex flex-wrap gap-30 w-full ">
        <li className="md:w-1/4  w-2/4 flex flex-col items-center">
          <strong p="true" className="text-white mt-4 text-sm md:text-lg">
            산업용 기계부품 수입판매
          </strong>
          <p className="text-white text-xs md:text-lg mb-10">
            -유렵,미국,일본,중국,대만-
          </p>
          <img src={Main_icon1} alt="" className="mb-10" />
          <p className="text-white  text-center text-sm md:text-lg">
            INDUSTRIAL <br />
            COMPONENT IMPORT
          </p>
        </li>
        <li className="md:w-1/4 w-2/4 flex flex-col items-center ">
          <strong p="true" className="text-white mb-12 mt-4 text-sm mdLtext-lg">
            자동화 부품 솔루션 제공
          </strong>
          <img src={Main_icon2} alt="" className="mb-12" />
          <p className="text-white text-center text-sm md:text-lg">
            SOLUTION FOR <br /> FACTORY AUTOMATION
          </p>
        </li>
        <li className="md:w-1/4 w-2/4 flex flex-col items-center">
          <strong p="true" className="text-white mb-12 mt-4 text-sm mdLtext-lg">
            불용재고 수출대행
          </strong>
          <img src={Main_icon3} alt="" className="mb-14" />
          <p className="text-white text-sm md:text-lg">EXPORT AGENT</p>
        </li>
        <li className="md:w-1/4 w-2/4 flex flex-col items-center">
          <strong p="true" className="text-white mb-12 mt-4 text-sm mdLtext-lg">
            구매 대행
          </strong>
          <img src={Main_icon4} alt="" className=" mb-14" />
          <p className="text-white text-sm md:text-lg">PURCHASING AGENT</p>
        </li>
      </ul>
    </div>
  );
}

export default Content;
