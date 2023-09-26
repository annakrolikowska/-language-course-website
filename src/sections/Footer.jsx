import React from 'react';

function Footer() {

  const navLinks = [
    { text: 'Strona główna', url: '/' },
    { text: 'O mnie', url: '#about' },
    { text: 'Oferta', url: '#offer' },
    { text: 'Kontakt', url: '#contact' },
  ];

  return (
    <section>
      <div className='bg-primary-50 flex justify-end min-h-[200px]'>
        <div className="container mx-auto flex flex-col-reverse md:flex-row justify-between md:items-end p-5 xl:px-0">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">&copy; {new Date().getFullYear()} Ksenia Sumina</p>
          </div>
          <div className="mb-4 md:mb-0">
            <a href="mailto:webmaster@example.com" className="text-sm">polski.z.ikra@gmail.com </a>
          </div>
          <div>
            <ul className="">
              {navLinks.map((link, index) => (
                <li key={index} className="text-sm hover:text-primary-100">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;