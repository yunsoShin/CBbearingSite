import React from 'react';

function Banner(props) {
  return (
    <section className='h-96 bg-slate-700 relative'>
      <div className='w-full h-full bg-cover bg-banner opacity-7'/>
      <div className='absolute w-full top-32 text-center text-gray-50 drop-shadow-2xl'>
        <h2 className='text-6xl mb-10'>청북베어링상사</h2>
        <p className='text-2xl'>최고의 품질을 보장합니다</p>
      </div>
    </section>
    
  );
}

export default Banner;