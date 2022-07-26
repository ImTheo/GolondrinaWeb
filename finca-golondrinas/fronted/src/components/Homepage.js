import React from "react";

import {Navegation} from './Navegation';
import {AboutUs} from './AboutUs';
import {Contact} from './Contact';
import {Footer} from './Footer';
import {Activities} from './Activities';
import {Modals} from './Modals';
import {ReservationForm} from "./ReservationForm";

export function Homepage() {
    return (     
    <div className="App">
    <Navegation/>      
    <Activities/>
    <AboutUs/>
    <Modals/>
    <Contact/>
    <ReservationForm/>
    <Footer/>
    </div>
    );
}

export default Homepage;