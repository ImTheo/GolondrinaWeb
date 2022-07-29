import React from "react";

export function CrudAdmin() {
  return (
    <div>
      <nav>
        <div>
          <div>
            <ul className="nav">
              <li>
                <a classname="nav-link" href="#exit">
                  Salir
                </a>
              </li>
              <li>
                <a classname="nav-link" href="#reservations">
                  Reservaciones
                </a>
              </li>
              <li>
                <a classname="nav-link" href="#activities">
                  Actividades
                </a>
              </li>
              <li>
                <a
                  classname="nav-link active"
                  aria-current="page"
                  href="#rooms"
                >
                  Habitaciones
                </a>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <a classname="navbar-brand" href="#">
          <h1>ADMINISTRADOR</h1>
        </a>
      </nav>
      <section>
        <div className="container">
          <h1>HABITACIONES</h1>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <form action="insertRoom.php" method="POST">
                  <br />
                  <label htmlFor="id">ID</label>
                  <br />
                  <input
                    classname="form-control"
                    className="rounded"
                    type="text"
                    id="id"
                    name="id"
                    required="required"
                    placeholder="Nombre"
                  />
                  <label htmlFor="nombreHabitacion">Nombre</label>
                  <br />
                  <input
                    classname="form-control"
                    className="rounded"
                    type="text"
                    id="nombreHabitacion"
                    name="nombreHabitacion"
                    required="required"
                    placeholder="Nombre"
                  />
                  <h5>Capacidad</h5>
                  <br />
                  <div className="row">
                    <div className="col">
                      <label htmlFor="adultos">Adultos</label>
                      <br />
                      <input
                        type="number"
                        classname="form-control"
                        className="rounded"
                        id="adultos"
                        name="adultos"
                        requiered="requiered"
                        min="{0}"
                      />
                      <br />
                      <br />
                    </div>
                    <div className="col">
                      <label htmlFor="ninos">Niños</label>
                      <br />
                      <input
                        type="number"
                        classname="form-control"
                        className="rounded"
                        id="ninos"
                        name="ninos"
                        requiered="requiered"
                        min="{0}"
                      />
                      <br />
                    </div>
                  </div>
                  <br />
                  <br />
                  <label htmlFor="descripcion">Descripcion</label>
                  <br />
                  <input
                    classname="form-control"
                    type="text"
                    className="rounded"
                    id="descripcion"
                    name="descripcion"
                    required="required"
                    placeholder="Descripcion"
                  />
                  <br />
                  <br />
                  <input
                    className="boton"
                    type="submit"
                    required="required"
                    name="Enviar Datos"
                  />
                  <br />
                </form>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
        <h2>HABITACIONES</h2>
        <br />
        <br />
        <br />
        <table className="table table-sm" border={1} bordercolor="grey">
          <thead>
            <tr>
              <th width={500} scope="col">
                ID
              </th>
              <th width={500} scope="col">
                Nombre
              </th>
              <th width={500} scope="col">
                Capacidad-Adultos
              </th>
              <th width={500} scope="col">
                Capacidad-Niños
              </th>
              <th width={500} scope="col">
                Descripción
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
        </table>
        <br />
        <h2>ACTIVIDADES</h2>
        <div className="container">
          <br />
          <br />
          <div className="row">
            <div className="col">
              <div className="form-group">
                <form action="insertRoom.php" method="POST">
                  <br />
                  <label htmlFor="id">ID</label>
                  <br />
                  <input
                    classname="form-control"
                    type="text"
                    id="id"
                    className="rounded"
                    name="id"
                    required="required"
                    placeholder="Nombre"
                  />

                  <label htmlFor="nombreHabitacion">Nombre</label>
                  <br />
                  <input
                    classname="form-control"
                    className="rounded"
                    type="text"
                    id="nombreHabitacion"
                    name="nombreHabitacion"
                    required="required"
                    placeholder="Nombre"
                  />
                  <h5>Capacidad</h5>
                  <br />
                  <div className="row">
                    <div className="col">
                      <label htmlFor="adultos">Adultos</label>
                      <br />
                      <input
                        type="number"
                        classname="form-control"
                        className="rounded"
                        id="adultos"
                        name="adultos"
                        requiered="requiered"
                        min="{0}"
                      />
                      <br />
                      <br />
                    </div>
                    <div className="col">
                      <label htmlFor="ninos">Niños</label>
                      <br />
                      <input
                        type="number"
                        classname="form-control"
                        id="ninos"
                        className="rounded"
                        name="ninos"
                        requiered="requiered"
                        min="{0}"
                      />
                      <br />
                    </div>
                  </div>
                  <br />
                  <br />
                  <label htmlFor="descripcion">Descripcion</label>
                  <br />
                  <input
                    classname="form-control"
                    type="text"
                    id="descripcion"
                    className="rounded"
                    name="descripcion"
                    required="required"
                    placeholder="Descripcion"
                  />
                  <br />
                  <br />
                  <input
                    className="boton"
                    type="submit"
                    required="required"
                    name="Enviar Datos"
                  />
                  <br />
                </form>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
        <table className="table table-sm" border={1} bordercolor="grey">
          <thead>
            <tr>
              <th scope="col">Modalidad</th>
              <th scope="col">Nombre</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Imagen</th>
              <th scope="col">Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr>

            </tr>
            <tr>
              <td>
                <a className="edit" href>
                  Editar
                </a>
              </td>
              <td>
                <a className="edit" href>
                  Eliminar
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <h2>RESERVACIONES</h2>
        <br />
        <table className="table table-sm" border={1} bordercolor="grey">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Correo Electrónico</th>
              <th scope="col">Número telefónico</th>
              <th scope="col">Habitación</th>
              <th scope="col">Fecha de partida</th>
              <th scope="col">Fecha de retorno</th>
              <th scope="col">Servicios Extras</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>

            </tr>
            <tr>
              <td>
                <a className="edit" href>
                  Editar
                </a>
              </td>
              <td>
                <a className="edit" href>
                  Eliminar
                </a>
              </td>
            </tr>
          </tbody>
          <tbody></tbody>
        </table>
      </section>
    </div>
  );
}
export default CrudAdmin;
