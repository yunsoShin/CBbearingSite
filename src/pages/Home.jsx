import React from 'react';
import Banner from '../components/Banner';
import Products from '../components/Products';
import OnlineQuestion from '../components/OnlineQuestion';
import SwiperLogo from '../components/SwiperLogo';
export default function Home() {
  return (
    <>
      <Banner />
      <Products />
      <OnlineQuestion></OnlineQuestion>
      <SwiperLogo></SwiperLogo>
    </>
  );
}
