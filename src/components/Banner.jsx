import React from 'react';

export default function Banner() {
  return (
    <section className='h-96  relative'>
      <div className='w-full h-full bg-cover bg-banner opacity-80' />
      <div className='absolute w-full top-32 text-center text-gray-50 drop-shadow-2xl'>
        <h2 className='lg:text-4xl text-xl'>청북 베어링 상사</h2>
        <p className='text-xl'>Best Products, High Quality</p>
      </div>
    </section>
  );
}
