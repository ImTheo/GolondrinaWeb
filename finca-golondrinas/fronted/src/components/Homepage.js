import React from "react";

import {Navegation} from './Navegation';
import {AboutUs} from './AboutUs';
import {Contact} from './Contact';
import {Footer} from './Footer';
import {Activities} from './Activities';
import {Modals} from './Modals';
import {Form} from "./Form";

export function Homepage() {
    return (     
    <div className="App">
    <Navegation/>      
    <Activities/>
    <AboutUs/>
    <Modals/>
    <Contact/>
    <Form/>
    <Footer/>
    </div>
    );
}

export default Homepage;