import './App.css';
import React from 'react';


function crudAdmin() {
  return (

    <><><><nav class="navbar navbar-expand-lg bg-light">
      <div className="container-fluit">
        <a class="navbar-brand" href="#">Administrador </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#rooms">Habitaciones</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#activities">Actividades</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#books">Reservaciones</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="View/Golondrina/index.php">Salir</a>
            </li>
          </ul>
        </div>
      </div>
    </nav><section>
        <div class="container">
          <h1>HABITACIONES</h1>
          <div class="row">
            <div class="col">
              <div class="form-group">
                <form action="insertRoom.php" method="POST">
                  <label for="id">ID</label><br />
                  <input className="form-control" type="text" id="id" name="id" required="required" placeholder="Nombre" /><br />
                  <label for="nombreHabitacion">Nombre</label><br />
                  <input class="form-control" type="text" id="nombreHabitacion" name="nombreHabitacion" required="required" placeholder="Nombre" /><br />
                  <h5>Capacidad</h5>
                  <div class="row">
                    <div class="col">
                      <label for="adultos">Adultos</label>
                      <input type="number" className="form-control" id="adultos" name="adultos" requiered="requiered" min={0} /><br />
                    </div>
                    <div class="col">
                      <label for="ninos">Niños</label>
                      <input type="number" className="form-control" id="ninos" name="ninos" requiered="requiered" min={0} /><br />
                    </div>
                  </div>
                  <label for="descripcion">Descripcion</label><br />
                  <input className="form-control" type="text" id="descripcion" name="descripcion" required="required" placeholder="Descripcion" /><br />
                  <input class="btn btn-outline-primary" type="submit" required="required" name="Enviar Datos" /><br />
                </form>
              </div>
            </div>
            <div class="col-6">

            </div>
            <div class="col">

            </div>
          </div>

          <table class="table table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Capacidad-Adultos</th>
                <th scope="col">Capacidad-Niños</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Accion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">id</th>
                <td>nombreHabitacion</td>
                <td>adultos</td>
                <td>ninos</td>
                <td>descripcion</td>
                <td><a classname="edit" href="view/Editar.php?id=<?php echo $dato[" _id>Editar</a></td>
                <td><a classname="edit" href="Controller/delete.php?id=<?php echo $dato[" _id>Eliminar</a></td>
              </tr>

            </tbody>

          </table>

          <h4>Sin registros en la Base de Datos</h4>
        </div>
      </section></><section id="activities">
        <div class="container">
          <h1>ACTIVIDADES</h1>
          <div class="row">
            <div class="col">
              <div class="form-group">
                <form action="insertActivity.php" method="POST">
                  <label for="id">ID</label><br />
                  <input class="form-control" type="text" name="id" /><br />
                  <label for="name">Nombre de la actividad </label><br />
                  <input class="form-control" type="text" name="name" required="required" placeholder="Nombre" /><br />
                  <label for="description">Descripcion</label><br />
                  <input class="form-control" type="text" name="description" required="required" placeholder="Descripcion" /><br />
                  <label for="image">Imagen</label><br />
                  <input class="form-control" type="text" name="image" required="required" placeholder="base de datos" /><br />
                  <input class="btn btn-outline-primary" type="submit" required="required" name="Enviar Datos" /><br />
                </form>
              </div>
            </div>
            <div class="col-6">

            </div>
            <div class="col">

            </div>
          </div>
          <table class="table table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Imagen</th>
                <th scope="col">Accion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">id</th>
                <td>name</td>
                <td>description</td>
                <td>image</td>
                <td><a classname="edit" href="view/Editar.php?id=<?php echo $dato[" _id>Editar</a></td>
                <td><a classname="edit" href="Controller/delete.php?id=<?php echo $dato[" _id>Eliminar</a></td>
              </tr>
            </tbody>

          </table>

        </div>


      </section></><section id="books">
        <h1>RESERVACIONES</h1>
          <table class="table table-sm">
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
                <td>nombreCompleto</td>
                <td>correo</td>
                <td>telefono</td>                            
                <td>habitacion</td>
                <td>recreacion</td>                            
                <td>checkin</td>
                <td>checkout</td>
                <td><a classname="edit" href="view/Editar.php?id=<?php echo $dato[" _id>Editar</a></td>
                <td><a classname="edit" href="Controller/delete.php?id=<?php echo $dato[" id>Eliminar</a></td>
              </tr>
            </tbody>

          </table>

      </section></>
      




  );

}




export default crudAdmin;
