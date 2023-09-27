import React from 'react';

function Opinions() {
  return (
    <section id='opinions'>
      <div className='bg-primary-25'>
        <div className='container mx-auto auto pb-10 mb-12 md:mb-0 px-5 xl:px-0 pt-16'>
          <div className='relative inline-block'>
              <h2 className='text-5xl font-radley relative z-10'>Думки</h2>
              <div className='w-100 h-4 bg-grey-0 absolute bottom-[-1px] left-0 right-0 rounded-basic'></div> 
          </div>
    
          <div className='lg:flex gap-8 xl:gap-24 my-8  justify-between'>

            <div className="sm:p-10 w-full">
              <p>
                <span className='text-8xl font-radley'>“</span>
                Ксенія - дуже професійний вчитель, завжди готова пояснити будь-який матеріал і відповісти на всі запитання. Її темп навчання ідеальний - не занадто швидкий і не занадто повільний, завжди пристосований до індивідуальних потреб учнів.
              </p> 
              <p className='mt-4'>
              Особливо мені сподобалося, як Ксенія розуміє наше почуття гумору. Це завжди робило заняття цікавими і веселими. Я почувався вільним, питаючи про щось, і завжди отримував інформацію у доступній формі. 
              </p>
              <p className='mt-4'>
              Я дуже вдячний Ксенії за її терплячість, професіоналізм і яскраву особистість :D
              </p>
              <span className='text-8xl font-radley float-right'>”</span>
              <p className='mt-8'>~ Daniil </p>
            </div>
            
            <div className="sm:p-10 w-full">
              <p>
                <span className='text-8xl font-radley'>“</span>
                Я надзвичайно задоволена викладанням польської мови у Вас! Ваша відмінна експертиза і відданість викладанню роблять навчання польської мови легким і захоплюючим. 
              </p> 
              <p className='mt-4'>
                Ви завжди терплячі, завжди готові допомогти з будь-якими питаннями та виправленнями. 
                Ваші уроки завжди цікаві та насичені корисною інформацією.              
              </p>
              <p className='mt-4'>
              Дякую вам за надання такої чудової можливості вивчати польську мову!
              </p>
              <span className='text-8xl font-radley float-right'>”</span>
              <p className='mt-8'>~ Nastia </p>
            </div>
         </div>
        </div>
      </div>
    </section>
  );
}

export default Opinions;