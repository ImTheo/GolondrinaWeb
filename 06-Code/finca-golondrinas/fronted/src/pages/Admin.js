import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Routes, Route } from 'react-router-dom';
import Room from '../components/Room';
import { RoomProvider } from "./controller/roomController";
import Reservation from '../components/Reservation';
function Admin() {
  return (
    <div>
      <Routes>
        <Route path='/room' element={<Room />} />        
        <Route path='/reservation' element={<Reservation/>} />
      </Routes>
      <Toaster/>
    </div>

  )
}

export default Admin