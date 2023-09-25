import React from 'react';

function Opinions() {
  return (
    <section id='opinions'>
      <div className='bg-primary-25'>
        <div className='container mx-auto auto pb-10 mb-12 md:mb-0 px-5 xl:px-0 pt-16'>
          <div className='relative inline-block'>
              <h2 className='text-5xl font-radley relative z-10'>Opinie</h2>
              <div className='w-100 h-4 bg-grey-0 absolute bottom-[-1px] left-0 right-0 rounded-basic'></div> 
          </div>
    
          <div className='lg:flex gap-8 xl:gap-24 my-8  justify-between'>

            <div className="sm:p-10">
              <p>
                <span className='text-8xl font-radley'>“</span>
                Ksenia - bardzo profesjonalna nauczycielka, zawsze gotowa wyjaśnić każdy materiał i odpowiedzieć na wszystkie pytania. Jej tempo nauczania jest idealne - nie zbyt szybkie i nie zbyt wolne, zawsze dostosowane do indywidualnych potrzeb uczniów.
              </p> 
              <p className='mt-4'>
                Szczególnie podobało mi się to, jak Ksenia rozumie nasze poczucie humoru. Dzięki temu zajęcia zawsze były interesujące i zabawne. Czułem się swobodnie pytając o cokolwiek, i zawsze otrzymywałem informacje w przystępnej formie. 
              </p>
              <p className='mt-4'>
                Jestem bardzo wdzięczny Ksenii za jej cierpliwość, profesjonalizm i jaskrawą osobowość.
              </p>
              <span className='text-8xl font-radley float-right'>”</span>
              <p className='mt-8'>~ Daniil </p>
            </div>
            
            <div className="sm:p-10">
              <p>
                <span className='text-8xl font-radley'>“</span>
                Ksenia - bardzo profesjonalna nauczycielka, zawsze gotowa wyjaśnić każdy materiał i odpowiedzieć na wszystkie pytania. Jej tempo nauczania jest idealne - nie zbyt szybkie i nie zbyt wolne, zawsze dostosowane do indywidualnych potrzeb uczniów.
              </p> 
              <p className='mt-4'>
                Szczególnie podobało mi się to, jak Ksenia rozumie nasze poczucie humoru. Dzięki temu zajęcia zawsze były interesujące i zabawne. Czułem się swobodnie pytając o cokolwiek, i zawsze otrzymywałem informacje w przystępnej formie. 
              </p>
              <p className='mt-4'>
                Jestem bardzo wdzięczny Ksenii za jej cierpliwość, profesjonalizm i jaskrawą osobowość.
              </p>
              <span className='text-8xl font-radley float-right'>”</span>
              <p className='mt-8'>~ Daniil </p>
            </div>
         </div>
        </div>
      </div>
    </section>
  );
}

export default Opinions;