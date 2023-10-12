import './App.css';
import About from './components/About';
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
    </div>
  );
}

export default App;
