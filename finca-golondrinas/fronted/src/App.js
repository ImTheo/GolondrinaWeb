import React from "react";
import {Homepage} from "./components/Homepage";
import {CrudAdmin as Admin} from "./components/CrudAdmin";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';

function App() {
  return (

  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="admin/*" element={<Admin />} />
  </Routes>
  </BrowserRouter>

  );
}


export default App;
