import React from "react";
export function AdminRooms() {
    return ( 
        <><><div className="container">
            <h1>HABITACIONES</h1>
            <div className="row">
                <div className="col">
                    <div className="form-group">
                        <form action="insertRoom" method="POST">
                            <label htmlFor="id">Id</label>
                            <input
                                classname="form-control"
                                className="rounded"
                                type="text"
                                id="id"
                                name="id"
                                required="required"
                                placeholder="#id" />
                            <br></br>
                            <label htmlFor="nameRoom">Nombre</label>
                            <input
                                classname="form-control"
                                className="rounded"
                                type="text"
                                id="nameRoom"
                                name="nameRoom"
                                required="required"
                                placeholder="Nombre" />
                            <br></br>
                            <label htmlFor="imageRoom">Imagen</label>
                            <input
                                classname="form-control"
                                className="rounded"
                                type="text"
                                id="imageRoom"
                                name="imageRoom"
                                required="required"
                                placeholder="Ruta de imagen" />
                            <br></br>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="adultos">Adultos</label>
                                    <input
                                        type="number"
                                        classname="form-control"
                                        className="rounded"
                                        id="adultos"
                                        name="adultos"
                                        requiered="requiered"
                                        min="{0}" 
                                        placeholder="#"/>
                                    
                                </div>
                                <div className="col">
                                    <label htmlFor="ninos">Niños</label>
                                    <input
                                        type="number"
                                        classname="form-control"
                                        className="rounded"
                                        id="ninos"
                                        name="ninos"
                                        requiered="requiered"
                                        min="{0}" 
                                        placeholder="#"/>
                                   
                                </div>
                            </div>
                            <label htmlFor="descriptionRoom">Descripcion</label>
                            <input
                                classname="form-control"
                                type="text"
                                className="rounded"
                                id="descriptionRoom"
                                name="descriptionRoom"
                                required="required"
                                placeholder="Descripcion" />
                            <br></br>
                            <label htmlFor="priceRoom">Precio</label>
                            <input
                                classname="form-control"
                                type="text"
                                className="rounded"
                                id="priceRoom"
                                name="priceRoom"
                                required="required"
                                placeholder="precio" />
                            <br></br>
                            <label htmlFor="availableRoom">Disponible</label>
                            <select id= "availableRoom" name="availableRoom">
                                <option value="true">Verdadero</option>
                                <option value="false">Falso</option>
                            </select>
                            <input
                                classname="form-control"
                                type="submit"
                                className="rounded"
                                id="availableRoom"
                                name="availableRoom"
                                required="required"/>
                            <br></br>

                            <br></br>
                        </form>
                    </div>
                </div>
            </div>
        </div></><table className="table table-sm" border={1} bordercolor="grey">
                <thead>
                    <tr>
                        <th width={500} scope="col">
                            ID
                        </th>
                        <th width={500} scope="col">
                            Nombre
                        </th>
                        <th width={500} scope="col">
                            Descripción
                        </th>
                        <th width={500} scope="col">
                            Capacidad-Adultos
                        </th>
                        <th width={500} scope="col">
                            Capacidad-Niños
                        </th>
                        <th width={500} scope="col">
                            Precio
                        </th>
                        <th width={500} scope="col">
                            Disponibilidad
                        </th>
                        <th width={500} scope="col">
                            Acción
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                    </tr>
                </tbody>
            </table></>
     );
}

export default AdminRooms;