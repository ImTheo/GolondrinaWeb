import React from 'react'
import { useRoom } from '../controller/roomController'
import CardRoom from './CardRoom'

export function Room() {
    const { rooms } = useRoom()
    return (
        <div className='container' >
            <br />
            <br />
            <div className='grid md:grid-cols-2 gap-4'>
                <a className="btn btn-xl text-uppercase" href="#">
                    Agregar una habitacion
                </a>
                <a className="btn btn-xl text-uppercase" href="/admin">
                    Regresar
                </a>
            </div>
            <br />
            <br />
            <div className="container grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

                {rooms.map((room) => (
                    <CardRoom key={room._id} room={room} />
                ))}
            </div>
        </div>

    )
}
export default Room;
