import React, { useState, createContext, useEffect, useContext } from 'react';
import axios from 'axios';

const reservationContext = createContext();

export const useReservation = () => {
    const context = useContext(reservationContext)
    return context;
}


export const ReservationProvider = ({ children }) => {
    const [reservations, setReservations] = useState([])

    const getReservations = async () => {
        const res = await axios.get("/api/reservations")
        setReservations(res.data)
    }

    const createReservation = async (values, actions) => {
        const result = await axios.post('/api/reservation', values);
        await axios.put(`api/roomDisailable/${values.room}`);
        actions.resetForm();
        console.log(result)
    }

    useEffect(() => {
        getReservations()
    }, [])

    const deleteReservation = async(id)=>{
        const res = await axios.delete('/api/reservation/'+id)
        console.log(res)
    }

    return (<reservationContext.Provider
        value={{ 
            reservations,getReservations, createReservation, deleteReservation
        }}
    >
        {children}
    </reservationContext.Provider>
    );
};