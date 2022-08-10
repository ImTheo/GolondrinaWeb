import React from 'react'
import { useReservation } from '../controller/reservationController'
import CardReservation from './CardReservation'

export function Reservation() {
    const { reservations } = useReservation()
    return (
        <div className='container' >
            <br />
            <br />
            <div className='grid md:grid-cols-2 gap-4'>
                <p className="btn btn-xl text-uppercase">
                   Reservaciones 
                </p>
                <a className="btn btn-xl text-uppercase" href="/admin">
                    Regresar
                </a>
            </div>
            <br />
            <br />
            <div className="container grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">

                {reservations.map((reservation) => (
                    <CardReservation key={reservation.id} reservation={reservation} />
                ))}
            </div>
        </div>

    )
}
export default Reservation;
