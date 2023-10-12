import './App.css';
import About from './components/About';
import Kontaktai from './components/Kontaktai';
import Projektai from './components/Projektai';
import CTA from './components/layout/CTA';
import Header from './components/layout/Header';
import Paslaugos from './components/layout/Paslaugos';

function App() {
  return (
    <div>
      <Header />
      <CTA />
      <About />
      <Paslaugos />
      <Projektai />
      <Kontaktai />
    </div>
  );
}

export default App;
