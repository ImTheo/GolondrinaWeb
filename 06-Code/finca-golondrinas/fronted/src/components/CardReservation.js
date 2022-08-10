import React from 'react'
import {toast} from 'react-hot-toast'
import { useReservation } from '../controller/reservationController';

export function CardReservation({ reservation }) {
    const {deleteReservation} = useReservation()
    const handleDelete = (id) => {
        toast(
          (t) => (
            <div>
              <p className="text-white">
                Seguro de eliminar <strong>{id}</strong>?
              </p>
              <div>
                <button
                  className="bg-red-500 hover:bg-red-400 px-3 py-2 text-sm text-white rounded-sm mx-2"
                  onClick={(e) => {
                    deleteReservation(id);
                    toast.dismiss(t.id);
                  }}
                >
                  Delete
                </button>
                <button
                  className="bg-slate-400 hover:bg-slate-500 px-3 py-2 text-white rounded-sm mx-2"
                  onClick={() => toast.dismiss(t.id)}
                >
                  Cancel
                </button>
              </div>
            </div>
          ),
          {
            style: {
              background: "#202020"
            }
          }
        );
      };

    return (
        <div className="bg-zinc-600 text-white rounded-md shadow-md shadow-black hover:bg-zinc-700 hover:cursor-pointer">
            <div className="px-4 py-7">
                <div className="flex justify-between items-center">
                    <h2 className="text-md font-semibold" >{reservation.id}</h2>
                    <button
                        className="bg-red-600 text-sm px-2 py-1 rounded-sm" 
                        onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(reservation.id);
                          }}>
                    Eliminar
                    </button>
                </div>
                <br/> 
                <h4 className='text-center'>Cliente</h4>                
                <p>Nombre: {reservation.name}</p>                
                <p>Email: {reservation.email}</p>
                <p>Teléfono: {reservation.cellphone}</p>                               
                <h4 className='text-center'>Reservación</h4>                
                <p>Habitación: {reservation.room}</p>                
                <p>Checkin: {reservation.checkin}</p>                               
                <p>Checkout: {reservation.checkout}</p>              
                <p>Actividades: {reservation.recreations}</p>
            </div>
        </div >
    )
}
export default CardReservation;