import React from "react";
import {Navegation} from './components/Navegation';
import {AboutUs} from './components/AboutUs';
import {Contact} from './components/Contact';
import {Footer} from './components/Footer';
import {Activities} from './components/Activities';
import {Modals} from './components/Modals';
import {Form} from "./components/Form";
import crudAdmin from "../crudAdmin";

import './App.css';

function App() {
  return (
    <div className="App">
      <Navegation/>      
      <Activities/>
      <AboutUs/>
      <Modals/>
      <Contact/>
      <Form/>
      <Footer/>
      <crudAdmin/>
      
    </div>
  );
}


export default App;
