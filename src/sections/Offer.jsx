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
                <h2 className='text-5xl font-radley relative z-10'>Oferta</h2>
                <div className='w-100 h-4 bg-primary-25 absolute bottom-[-1px] left-0 right-0 rounded-basic'></div> 
            </div>
            <div className='lg:flex gap-8 xl:gap-24 my-8 text-center justify-between'>
                <div className="rounded-basic lg:w-[350px] mb-8 p-10 bg-white shadow-md">
                  <h3 className='text-2xl'>Zajęcia indywidualne</h3>
                  <img src={iconFirst} alt="individual" className='mx-auto py-8'/>
                  <ul>
                    <li>Lekcja online - <span className='font-semibold'>60</span> zł/h</li>
                    <li>Lekcja offline - <span className='font-semibold'>70</span> zł/h</li>
                  </ul>
                  <p className='mt-8'>Pierwsza lekcja dla zajęć indywidualnych o 50% taniej</p>
                </div>
                <div className="rounded-basic lg:w-[350px] mb-8 p-10 bg-white shadow-md">
                  <h3 className='text-2xl'>Zajęcia w parach</h3>
                  <img src={iconSecond} alt="individual" className='mx-auto py-8'/>
                  <ul>
                    <li>Lekcja online - <span className='font-semibold'>90</span> zł/h</li>
                    <li>Lekcja offline - <span className='font-semibold'>100 </span>zł/h</li>
                  </ul>
                  <p className='mt-8'></p>
                </div>
                <div className="rounded-basic lg:w-[350px] mb-8 p-10 bg-white shadow-md">
                  <h3 className='text-2xl'>Grupa początkująca</h3>
                  <img src={iconThird} alt="individual" className='mx-auto py-8'/>
                  <ul>
                    <li>Dla 4-6 osób</li>
                    <li><span className='font-semibold'>45</span> zł/ 1.5 h x 2 tyg</li>
                  </ul>
                  <p className='mt-8'>godzina 18:00 - 19:30, wtorek, piątek</p>
                </div>
            </div>
      </div>
      </div>
    </section>
  );
}

export default Offer;