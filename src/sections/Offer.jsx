import React from 'react';
import backgroundImg from '../images/background.png';
import iconFirst from '../images/icon1.png'
import iconSecond from '../images/icon2.png'
import iconThird from '../images/icon3.png'

function Offer() {
  return (
    <section id='offer'>
      <div className='bg-cover bg-center'  style={{
            backgroundImage: `url(${backgroundImg})`,
          }}>
        <div className='container mx-auto auto pb-10 px-5 xl:px-0 mb-12 md:mb-24 pt-16'>
            <div className='relative inline-block'>
                <h2 className='text-5xl font-radley relative z-10'>Пропозиція</h2>
                <div className='w-100 h-4 bg-grey-0 absolute bottom-[-1px] left-0 right-0 rounded-basic'></div> 
            </div>
            <div className='lg:flex gap-8 xl:gap-24 my-8 text-center justify-between'>
                <div className="rounded-basic lg:w-[333px] mb-8 p-10 bg-grey-0 shadow-md hover:scale-105 transition-transform">
                  <h3 className='text-2xl'>Індивідуальні заняття</h3>
                  <img src={iconFirst} alt="individual" className='mx-auto py-8'/>
                  <ul>
                    <li>Урок онліне - <span className='font-semibold'>60</span> злотих/h</li>
                    <li>Урок офлайн - <span className='font-semibold'>70</span> злотих/h</li>
                  </ul>
                  <p className='mt-8'>Перший урок для занять індивідуальних 50% дешевше!  </p>
                </div>
                <div className="rounded-basic lg:w-[333px] mb-8 p-10 bg-grey-0 shadow-md hover:scale-105 transition-transform">
                  <h3 className='text-2xl'>Заняття в парах</h3>
                  <img src={iconSecond} alt="individual" className='mx-auto py-8'/>
                  <ul>
                    <li>Урок онліне - <span className='font-semibold'>90</span> злотих/h</li>
                    <li>Урок офлайн - <span className='font-semibold'>100 </span>злотих/h</li>
                  </ul>
                  <p className='mt-8'></p>
                </div>
                <div className="rounded-basic lg:w-[333px] mb-8 p-10 bg-grey-0 shadow-md hover:scale-105 transition-transform">
                  <h3 className='text-2xl'>Група для початківців</h3>
                  <img src={iconThird} alt="individual" className='mx-auto py-8'/>
                  <ul>
                    <li>для 4-6 людини</li>
                    <li><span className='font-semibold'>45</span> злотих/ 1,5 години 2 рази на тиждень</li>
                  </ul>
                  <p className='mt-8'>година 18:00 - 19:30,  вівторок та п’ятниця</p>
                </div>
            </div>
      </div>
      </div>
    </section>
  );
}

export default Offer;