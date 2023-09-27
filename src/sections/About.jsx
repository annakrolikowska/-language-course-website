import React from 'react';
import aboutImage from '../images/about.webp'

const paragraphs = [
    'Привіт! Я викладачка польської мови з палкістю та досвідом. Я народилася в Україні, але з дитинства живу в Польщі. Від 6 років моя освіта повністю проходила в польськіх навчальних закладах, включаючи матуру (ЗНО) та навчання в університеті. Дуже люблю вчити мови та вільно володію трьома: польською, українською та російською.Зокрема я вивчаю ще три мови: чеську, англійську та французьку.  Моя пригода з викладанням польської мови розпочалася кілька років тому. Також останні декілька місяців я мала нагоду працювати викладачкою у мовній школі в Кракові „Polski z Polikovską"',
    "Я впевнена, що найкращий спосіб вивчення мови - це поєднання навчання з приємністю. У мене є досвід роботи як у групах, так і проведення індивідуальних занять: від початкового рівня до поглибленого рівня B2. Я також вела розмовні клуби, завдяки яким вже 22 особи розмовляють польською мовою. ",
    "Якщо ви бажаєте відкрити для себе таємниці польської мови в дружній та надихаючій атмосфері - тоді я тут, щоби допомогти вам у цьому. Разом ми можемо досягти ваших мовних цілей та відкрити перед вами двері до чарівного світу польської мови. Запрошую до зв'язку і разом зануримося в чарівний світ слів та граматики. До зустрічі на наших заняттях!"
];
  
function About() {
    return (
        <section id='about'>
            <div className='fade-in container mx-auto auto pb-10 px-5 xl:px-0 mb-12 md:mb-24'>
                <div className='relative inline-block'>
                    <h2 className='text-5xl font-radley relative z-10'>про мене</h2>
                <div className='w-100 h-4 bg-primary-25 absolute bottom-[-1px] left-0 right-0 rounded-basic'></div> 
                </div>
                <div className='lg:flex justify-between'>
                    <div className='w-full my-8'>
                        {paragraphs.map((paragraph, index) => (
                        <p className='mb-8 md:w-11/12' key={index}>
                            {paragraph}
                        </p>
                        ))}
                    </div>
                    <div className='relative lg:w-6/12 flex items-center'>
                        <img src={aboutImage} alt="Ksenia Sumina" className='relative sm:w-8/12 lg:w-11/12 mx-auto z-10 rounded-basic hover:scale-105 transition-transform'/>
                        <div className=' xl:h-[492px] bg-primary-25 absolute top-20  left-0 right-0 rounded-basic'></div> 
                    </div> 
                    
                </div>
            </div>
        </section>
    );
}

export default About;