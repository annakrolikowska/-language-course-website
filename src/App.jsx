import './App.css';
import './tailwind.css'
import Header from './sections/Header';
import About from './sections/About';
import Offer from './sections/Offer';
import Localisation from './sections/Localisation';
import Opinions from './sections/Opinions';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() { 
  return (
    <div className="App ">
      <Header/>
      <About/>
      <Offer/>
      <Localisation/>
      <Opinions/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

