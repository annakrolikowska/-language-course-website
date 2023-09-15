import React from 'react';
import Navbar from '../components/Navbar';

function Header() {
  return (
    <header>
      <Navbar/>
      <div className='container mx-auto md:px-4 bg-primary-25 auto h-[500px] py-10 md:mb-32 rounded-basic flex flex-col justify-center'>
            <h1 className='text-6xl lg:text-8xl text-center font-radley'>Nauka języka polskiego</h1>
            <h3 className='text-right my-8 text-3xl'>Lektorka <span className='font-semibold'>Ksenia Sumina</span></h3>
            <div className='md:flex justify-between'>
                <a href='3' className='rounded-basic border border-gray-800 shadow-inner text-xl px-8 py-3 transition duration-300 ease-in-out hover:bg-secondary-100'>Sprawdź ofertę</a>
                <p className='text-xl'>Kraków, ul. św.Gertrudy 19/11</p>
            </div>
      </div>
    </header>
  );
}

export default Header;