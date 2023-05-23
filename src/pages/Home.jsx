import React from "react";
import Banner from "../components/Banner";
import OnlineQuestion from "../components/OnlineQuestion";
import SwiperLogo from "../components/SwiperLogo";
import FooterBottom from "../components/FooterBottom";
import Content from "../components/Content";
export default function Home() {
  return (
    <>
      <Banner />
      <Content></Content>
      <OnlineQuestion></OnlineQuestion>
      <SwiperLogo></SwiperLogo>
      <FooterBottom></FooterBottom>
    </>
  );
}
