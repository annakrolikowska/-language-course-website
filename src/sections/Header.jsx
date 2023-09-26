import React from 'react';
import Navbar from '../components/Navbar';

function Header() {
  return (
    <header>
      <Navbar/>
      <div className='container mx-auto md:px-4 bg-primary-25 auto h-[90vh] md:h-[500px] py-10 px-5 xl:px-0 mb-12 md:mb-24 rounded-basic flex flex-col justify-evenly md:justify-center'>
            <h1 className='text-5xl sm:text-6xl lg:text-8xl text-center font-radley'>Nauka języka polskiego</h1>
            <h3 className='md:text-right my-8 text-2xl sm:text-3xl relative md:right-[140px]'>Lektorka <span className='font-semibold'>Ksenia Sumina</span></h3>
            <div className='md:flex justify-around'>
                <a href='3' className='rounded-basic border border-gray-800 shadow-inner text-xl px-8 py-3 transition duration-300 ease-in-out hover:bg-primary-100'>Sprawdź ofertę</a>
                <p className='my-12 md:my-0  text-xl'>Kraków, ul. św.Gertrudy 19/11 lub Kremerowska 6/9</p>
            </div>
      </div>
    </header>
  );
}

export default Header;