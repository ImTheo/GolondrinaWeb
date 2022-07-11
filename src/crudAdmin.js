const mongoose = require('mongoose');
const vendor = require ('vendor/autoload');


const $client = new Client('');
$companydb = $client=>companydb;
$actividad = $companydb=>actividades;
$habitacion = $companydb=>habitaciones;
$reservacion = $companydb=>reservaciones;
var head = React.createClass({
    render: function() {
        <div>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title />
          <meta name="description" content />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;1,600&display=swap" rel="stylesheet" />
          <link href="styles/style.css" rel="stylesheet" type="text/css" />
          <nav classname="navbar navbar-expand-lg bg-light">
            <div classname="container-fluid">
              <a classname="navbar-brand" href="#">Administrador </a>
              <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span classname="navbar-toggler-icon" />
              </button>
              <div classname="collapse navbar-collapse" id="navbarNav">
                <ul classname="navbar-nav">
                  <li classname="nav-item">
                    <a classname="nav-link active" aria-current="page" href="#rooms">Habitaciones</a>
                  </li>
                  <li classname="nav-item">
                    <a classname="nav-link" href="#activities">Actividades</a>
                  </li>
                  <li classname="nav-item">
                    <a classname="nav-link" href="#books">Reservaciones</a>
                  </li>
                  <li classname="nav-item">
                    <a classname="nav-link" href="View/Golondrina/index.php">Salir</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
    }
  });
  var section = React.createClass({
    render: function() {
      return (
  
        <section id="rooms">
          <div classname="container">
            <h1>HABITACIONES</h1>
            <div classname="row">
              <div classname="col">
                <div classname="form-group">
                  <form action="insertRoom" method="POST">
                    <label htmlFor="id">ID</label><br />
                    <input classname="form-control" type="text" id="id" name="id" required="required" placeholder="Nombre" /><br />                            
                    <label htmlFor="nombreHabitacion">Nombre</label><br />
                    <input classname="form-control" type="text" id="nombreHabitacion" name="nombreHabitacion" required="required" placeholder="Nombre" /><br />
                    <h5>Capacidad</h5>
                    <div classname="row">
                      <div classname="col">
                        <label htmlFor="adultos">Adultos</label>
                        <input type="number" className="form-control" id="adultos" name="adultos" requiered="requiered" min={0} /><br />
                      </div>
                      <div classname="col">
                        <label htmlFor="ninos">Niños</label>
                        <input type="number" className="form-control" id="ninos" name="ninos" requiered="requiered" min={0} /><br />
                      </div>
                    </div>
                    <label htmlFor="descripcion">Descripcion</label><br />
                    <input classname="form-control" type="text" id="descripcion" name="descripcion" required="required" placeholder="Descripcion" /><br />
                    <input classname="btn btn-outline-primary" type="submit" required="required" name="Enviar Datos" /><br />
                  </form>
                </div>
              </div>
              <div classname="col-6">
              </div>
              <div classname="col">
              </div>
            </div>
            <div classname="datos=dato">
            </div><table classname="table table-sm">
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
              <tbody><tr>
                  <th scope="row">id</th>
                  <td>nombreHabitacion</td>
                  <td>adultos</td>
                  <td>ninos</td>
                  <td>descripcion</td>
                  <td><a classname="edit" href="view/Editar.php?id=<?php echo $dato[" _id>Editar</a></td>
                  <td><a classname="edit" href="Controller/delete.php?id=<?php echo $dato[" _id>Eliminar</a></td>
                </tr>
              </tbody></table>
          </div>
        </section>
      );
    }
  });
    
  var section = React.createClass({
    render: function() {
      return (
  
        <section id="activities">
          <div classname="container">
            <h1>ACTIVIDADES</h1>
            <div classname="row">
              <div classname="col">
                <div classname="form-group">
                  <form action="insertActivity.php" method="POST">
                    <label htmlFor="id">ID</label><br />
                    <input classname="form-control" type="text" name="id" /><br />
                    <label htmlFor="name">Nombre de la actividad </label><br />
                    <input classname="form-control" type="text" name="name" required="required" placeholder="Nombre" /><br />
                    <label htmlFor="description">Descripcion</label><br />
                    <input classname="form-control" type="text" name="description" required="required" placeholder="Descripcion" /><br />
                    <label htmlFor="image">Imagen</label><br />
                    <input classname="form-control" type="text" name="image" required="required" placeholder="base de datos" /><br />
                    <input classname="btn btn-outline-primary" type="submit" required="required" name="Enviar Datos" /><br />
                  </form>
                </div>
              </div>
              <div classname="col-6">
              </div>
              <div classname="col">
              </div>
            </div>
            <div classname="datos=dato">
            </div><table classname="table table-sm">
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
              </tbody><tbody>
              </tbody></table>
            if (mongoDb=datos) {'{'}
            {'}'} else {'{'}<h4>Sin datos ingresados</h4>
            {'}'}
          </div>
        </section>
      );
    }
  });

  var section = React.createClass({
    render: function() {
      return (
  
        <section id="books">
          <h1>RESERVACIONES</h1>
          <div classname="datos=dato">
          </div><table classname="table table-sm">
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
            </tbody><tbody>
            </tbody></table>
        </section>
      );
      
    }
    
  });
  
<script src="" async defer></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
mongoose.connect("mongodb+srv://YullianaRoman:1234Yul@cluster0.5vmpd.mongodb.net/test")
.then(()=>console.log("Connect to MongoDB")).catch((error)=>console.error(error));
