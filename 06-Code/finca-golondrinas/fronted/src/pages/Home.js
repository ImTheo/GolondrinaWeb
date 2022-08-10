import React from 'react'
import Navegation from '../components/Navegation'
import AboutUs from '../components/AboutUs'
import Activities from '../components/Activities'
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Modals from '../components/Modals';
import ReservationForm from "../components/ReservationForm";

function Home() {
  return (
    <div>
      <Navegation />            
      <Activities/>
      <AboutUs/>
      <Modals/>    
      <Contact/>        
      <ReservationForm/>
      <Footer/>
    </div>
  )
}

export default Home