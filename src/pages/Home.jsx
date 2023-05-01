import React from 'react';
import Banner from '../components/Banner';
import Products from '../components/Products';
import OnlineQuestion from '../components/OnlineQuestion';
import SwiperLogo from '../components/SwiperLogo';
import FooterBottom from '../components/FooterBottom';

export default function Home() {
  return (
    <>
      <Banner />
      
      <OnlineQuestion></OnlineQuestion>
      <SwiperLogo></SwiperLogo>
      <FooterBottom></FooterBottom>
    </>
  );
}
