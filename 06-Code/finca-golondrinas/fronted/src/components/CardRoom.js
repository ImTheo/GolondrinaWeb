import React from 'react'
import {toast} from 'react-hot-toast'
import { useRoom } from '../controller/roomController';

export function CardRoom({ room }) {
    const {deleteRoom} = useRoom()
    console.log(room.avaliable)
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
                    deleteRoom(id);
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
                    <h2 className="text-md font-semibold" >{room.name}</h2>
                    <button
                        className="bg-red-600 text-sm px-2 py-1 rounded-sm" 
                        onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(room.id);
                          }}>
                    Eliminar
                    </button>
                </div>
                <br/>
                <p>Codigo: {room.id}</p>                
                <h4 className='text-center'>Capacidad</h4>                
                <p>Adultos: {room.adults}</p>                
                <p>Niños: {room.children}</p>
                <p>Descripcion: {room.description}</p>                
                <p>Precio: {room.price}</p>                
                <p>Disponibilidad: {room.avaliable}</p>
            </div>
        </div >
    )
}
export default CardRoom;