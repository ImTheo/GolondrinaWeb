import Navegation from './components/Navegation';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Activities from './components/Activities';
import Modals from './components/Modals';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navegation/>      
      <AboutUs/>
      <Activities/>
      <Modals/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
