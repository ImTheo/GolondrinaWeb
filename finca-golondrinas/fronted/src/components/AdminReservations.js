import React from "react";
export function AdminReservations() {
    return ( 
      <><><div className="container">
            <h1>RESERVACIONES</h1>
            <div className="row">
                <div className="col">
                    <div className="form-group">
                        <form action="insertReservation" method="POST">
                            <label htmlFor="idReservation">Id</label>
                            <input
                                classname="form-control"
                                className="rounded"
                                type="text"
                                id="idReservation"
                                name="idReservation"
                                required="required"
                                placeholder="#id" />
                            <br></br>
                            <label htmlFor="nameClient">Cliente </label>
                            <input
                                classname="form-control"
                                className="rounded"
                                type="text"
                                id="nameClient"
                                name="nameClient"
                                required="required"
                                placeholder="Theo Rosero" />
                            <br></br>
                            <label htmlFor="emailClient">Email</label>
                            <input
                                classname="form-control"
                                className="rounded"
                                type="text"
                                id="emailClient"
                                name="emailClient"
                                required="required"
                                placeholder="nombre@espe.com" />
                            <br></br>
                            <label htmlFor="recrationClient">Recreaciones</label>
                            <input
                                classname="form-control"
                                className="rounded"
                                type="text"
                                id="recrationClient"
                                name="recrationClient"
                                required="required"
                                placeholder="piscina" />
                            <br></br>
                            <label htmlFor="cellphoneClient">Celular</label>
                            <input
                                classname="form-control"
                                className="rounded"
                                type="text"
                                id="cellphoneClient"
                                name="cellphoneClient"
                                required="required"
                                placeholder="Celular" />
                            <br></br>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="checkinReservation">Chekin</label>
                                    <input
                                        type="date"
                                        classname="form-control"
                                        className="rounded"
                                        id="checkinReservation"
                                        name="checkinReservation"
                                        requiered="requiered"
                                        placeholder="#"/>        
                                </div>
                                <div className="col">
                                <label htmlFor="checkoutReservation">Checkout</label>
                                    <input
                                        type="date"
                                        classname="form-control"
                                        className="rounded"
                                        id="checkoutReservation"
                                        name="checkoutReservation"
                                        requiered="requiered"
                                        placeholder="#"/>       
                                </div>
                            </div>
                            <label htmlFor="roomReservation">Habitacion</label>
                            <input
                                classname="form-control"
                                type="text"
                                className="rounded"
                                id="roomReservation"
                                name="roomReservation"
                                required="required"
                                placeholder="Cuarto" />
                            <br></br>
                            <input
                                className="boton"
                                type="submit"
                                required="required"
                                name="Enviar Datos" />
                            <br />
                        </form>
                    </div>
                </div>
            </div>
        </div></><table className="table table-sm" border={1} bordercolor="grey">
                <thead>
                    <tr>
                        <th width={500} scope="col">
                            Id
                        </th>
                        <th width={500} scope="col">
                            Nombre
                        </th>
                        <th width={500} scope="col">
                            Email
                        </th>
                        <th width={500} scope="col">
                            Recreacion
                        </th>
                        <th width={500} scope="col">
                            Celular
                        </th>
                        <th width={500} scope="col">
                            Chekin
                        </th>
                        <th width={500} scope="col">
                            Chekout
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

export default AdminReservations;