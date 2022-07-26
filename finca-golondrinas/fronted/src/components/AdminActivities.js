import React from "react";
export function AdminActivities() {
    return ( 
        <><><div className="container">
        <h1>ACTIVIDADES</h1>
        <div className="row">
            <div className="col">
                <div className="form-group">
                    <form action="insertActivities" method="POST">
                        <label htmlFor="idActivities">Id</label>
                        <input
                            classname="form-control"
                            className="rounded"
                            type="text"
                            id="idActivities"
                            name="idActivities"
                            required="required"
                            placeholder="#id" />
                        <br></br>
                        <label htmlFor="imageActivities">Imagen</label>
                            <input
                                classname="form-control"
                                className="rounded"
                                type="text"
                                id="imageActivities"
                                name="imageActivities"
                                required="required"
                                placeholder="Ruta de imagen" />
                            <br></br>
                        <label htmlFor="nameActivity">Nombre Actividad </label>
                        <input
                            classname="form-control"
                            className="rounded"
                            type="text"
                            id="nameActivity"
                            name="nameActivity"
                            required="required"
                            placeholder="Zona Humeda" />
                        <br></br>
                        <label htmlFor="descriptionActivity">Descripción</label>
                        <input
                            classname="form-control"
                            className="rounded"
                            type="text"
                            id="descriptionActivity"
                            name="descriptionActivity"
                            required="required"
                            placeholder="Descripción breve" />
                        <br></br>
                        <label htmlFor="summaryActivity">Summary</label>
                        <input
                            classname="form-control"
                            className="rounded"
                            type="text"
                            id="summaryActivity"
                            name="summaryActivity"
                            required="required"
                            placeholder="parrafo" />
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
                        Descripción
                    </th>
                    <th width={500} scope="col">
                        Summary
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

export default AdminActivities;