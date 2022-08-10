import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import { ReservationProvider } from "./controller/reservationController";
import { ActivityProvider } from "./controller/activityController";
import { RoomProvider } from "./controller/roomController";
import Admin from "./components/Admin";
import Room from "./components/Room";
import Reservation from "./components/Reservation";
import {Toaster} from "react-hot-toast";
import './App.css';

function App() {
  return (
    <RoomProvider>
      <ActivityProvider>
        <ReservationProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/room' element={<Room/>}/>             
            <Route path='/reservation' element={<Reservation/>} />
          </Routes>
          <Toaster/>
        </ReservationProvider>
      </ActivityProvider>
    </RoomProvider>
  );
}


export default App;
