import React from 'react';
import aboutImage from '../images/about.webp'

const paragraphs = [
    "Cześć! Jestem lektorką języka polskiego z pasją i doświadczeniem. Urodziłam się w Ukrainie, ale od ponad 20 lat żyję w Krakowie. Od 6 roku życia mieszkam w Polsce, dzięki temu biegle władam trzema językami: polskim, ukraińskim i rosyjskim.",
    "Moja przygoda z nauczaniem języka polskiego rozpoczęła się kilka lat temu. Przez ostatnie miesiące miałam możliwość być lektorką w szkole językowej „Polski z Polikovską” w Krakowie. Studiowałam filologię słowiańską, a obecnie kontynuuję naukę na kierunku socjologia na Uniwersytecie Jagiellońskim. Moje zainteresowania to nie tylko języki słowiańskie, ale także kwestie społeczne i polityka.",
    "Jestem przekonana, że najlepszym sposobem na nauczenie języka jest połączenie nauki z przyjemnością. Mam doświadczenie w pracy zarówno w grupach, jak i w prowadzeniu lekcji indywidualnych. Moja oferta obejmuje kursy od zera aż po poziom zaawansowany B2. Ponadto, prowadziłam również kluby rozmowne, które pomogły już 22 osobom opanować język polski.",
    "Jeśli masz ochotę odkrywać tajniki języka polskiego w przyjaznej i inspirującej atmosferze, to jestem tutaj, aby Ci w tym pomóc. Razem możemy osiągnąć Twoje cele językowe i otworzyć przed Tobą drzwi do fascynującego świata języka polskiego. Zapraszam do kontaktu, a razem zanurzymy się w magicznym świecie słów i gramatyki. Do zobaczenia na lekcji!"
];
  
function About() {
    return (
        <section id='about'>
            <div className='container mx-auto auto pb-10 px-5 xl:px-0 mb-12 md:mb-24'>
                <div className='relative inline-block'>
                    <h2 className='text-5xl font-radley relative z-10'>O mnie</h2>
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