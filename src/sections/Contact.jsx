import React from 'react';
import contactIcon from '../images/contact-icon1.png'
import contactIcon2 from '../images/contact-icon2.png'
import contactImg from '../images/class1.webp'

function Contact() {
  return (
    <section id='contact'>
        <div className='container mx-auto auto pl-5 xl:px-0'>
           
            <div className='md:flex justify-between'>
                <div className='mb-12 md:my-24'>
                   <div className='relative inline-block'>
                      <h2 className='text-5xl font-radley relative z-10'>Kontakt</h2>
                      <div className='w-100 h-4 bg-primary-25 absolute bottom-[-1px] left-0 right-0 rounded-basic'></div> 
                  </div>
                  <div className='flex align-center items-center gap-5 my-8'>
                    <div className='w-5 h-5 bg-primary-25 rounded-full p-2.5 flex items-center justify-center box-content'>
                      <img src={contactIcon} alt="email" className='w-full h-full'/> 
                    </div>
                    <a href="mailto:webmaster@example.com" className='sm:text-2xl'>e-mail: polski.z.ikra@gmail.com </a>
                  </div>
                  <div className='flex align-center items-center gap-5 my-8'>
                    <div className='w-5 h-5 bg-primary-25 rounded-full p-2.5 flex items-center justify-center box-content'>
                      <img src={contactIcon2} alt="telegram" className='w-full h-full'/> 
                    </div>
                    <h3 className='sm:text-2xl'>telegram: @Ksenia_Polski</h3>
                  </div>
                </div>
                <div className="hidden md:block max-h-[465px] w-1/2 overflow-hidden">
                  <img src={contactImg} alt="contact photo" className='w-full h-full object-cover'/> 
                </div>
            </div>
      </div>
    </section>
  );
}

export default Contact;