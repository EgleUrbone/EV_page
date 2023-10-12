import './App.css';
import About from './components/About';
import Kontaktai from './components/Kontaktai';
import Projektai from './components/Projektai';
import CTA from './components/layout/CTA';
import Header from './components/layout/Header';
import Paslaugos from './components/Paslaugos';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div>
      <Header />
      <CTA />
      <About />
      <Paslaugos />
      <Projektai />
      <Kontaktai />
      <Footer />
    </div>
  );
}

export default App;
