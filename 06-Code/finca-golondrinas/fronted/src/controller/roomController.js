import React, { useState, createContext, useEffect, useContext } from 'react';
import axios from 'axios';

const roomContext = createContext();

export const useRoom = () => {
    const context = useContext(roomContext)
    return context;
}


export const RoomProvider = ({ children }) => {
    const [rooms, setRooms] = useState([])
    const [roomsAvailable, setRoomsAvailable] = useState([])
    const getRooms = async () => {
        const res = await axios.get("/api/rooms")
        setRooms(res.data)
    }
    useEffect(() => {
        getRooms()
    }, [])

    const createRoom = async (values, actions) => {
        const result = await axios.post('/api/room', values);
        actions.resetForm();
        console.log(result)
    }
    
    const getRoomsAvailable = async()=>{
        const res = await axios.get("/api/roomsAvailable")
        setRoomsAvailable(res.data)
    }

    useEffect(() => {
        getRoomsAvailable()
    }, [])

    const deleteRoom = async(id)=>{
        const res = await axios.delete('/api/room/'+id)
    }
    
    return (<roomContext.Provider
        value={{ 
            rooms,roomsAvailable,getRooms, createRoom, getRoomsAvailable, deleteRoom
        }}
    >
        {children}
    </roomContext.Provider>
    );
};