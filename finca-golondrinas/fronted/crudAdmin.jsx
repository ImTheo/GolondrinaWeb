import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap"; 

const data = [

];

class crudAdmin extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      name1: "",
      email: "",
      number:"",
      room:"",
      entryDate:"",
      returnDate:"",
      extraServices:"",
    },
  };
  

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    // eslint-disable-next-line array-callback-return
    arreglo.map((registro) => {
      // eslint-disable-next-line eqeqeq
      if (dato.id == registro.id) {
        arreglo[contador].name1 = dato.name1;
        arreglo[contador].email = dato.email;
        arreglo[contador].number = dato.number;
        arreglo[contador].room = dato.room;
        arreglo[contador].entryDate=dato.entryDate;
        arreglo[contador].returnDate=dato.returnDate;
        arreglo[contador].extraServices=dato.extraServices;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
    // eslint-disable-next-line eqeqeq
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      // eslint-disable-next-line array-callback-return
      arreglo.map((registro) => {
        // eslint-disable-next-line eqeqeq
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
      <><>
      <><><><nav class="navbar navbar-expand-lg bg-light">
      <div className="container-fluit">
        <a className="navbar-brand"href="#"><h2>Administrador</h2></a>
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
                <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar("id")}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar("id")}>Eliminar</Button>
                </td>
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
                <th scope="col">Descripcion</th>
                <th scope="col">Imagen</th>
                <th scope="col">Accion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">id</th>
                <td>name</td>
                <td>email</td>
                <td>Descripcion</td>
                <td>image</td>
                <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar("id")}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar("id")}>Eliminar</Button>
                </td>
              </tr>
            </tbody>

          </table>

        </div>
      </section></></>
      
      <Container>
      <h1>RESERVACIONES</h1>
        <br />
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Correo Electrónico</th>
                <th>Número telefónico</th>
                <th>Habitación</th>
                <th>Fecha de partida</th>
                <th>Fecha de retorno</th>
                <th>Servicios Extras</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.name1}</td>
                  <td>{dato.email}</td>
                  <td>{dato.number}</td>
                  <td>{dato.room}</td>
                  <td>{dato.entryDate}</td>
                  <td>{dato.returnDate}</td>
                  <th>{dato.extraServices}</th>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Nombre: 
              </label>
              <input
                className="form-control"
                name="name1"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.name1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
              Correo Electrónico: 
              </label>
              <input
                className="form-control"
                name="email"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.email}
              />
            </FormGroup>

            <FormGroup>
              <label>
              Número telefónico: 
              </label>
              <input
                className="form-control"
                name="number"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.number}
              />
            </FormGroup>
            <FormGroup>
              <label>
              Habitación: 
              </label>
              <input
                className="form-control"
                name="room"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.room}
              />
            </FormGroup>

            <FormGroup>
              <label>
              Fecha de partida: 
              </label>
              <input
                className="form-control"
                name="entryDate"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.entryDate}
              />
            </FormGroup>

            <FormGroup>
              <label>
              Fecha de retorno: 
              </label>
              <input
                className="form-control"
                name="returnDate"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.returnDate}
              />
            </FormGroup>

            <FormGroup>
              <label>
              Servicios Extras: 
              </label>
              <input
                className="form-control"
                name="extraServices"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.extraServices}
              />
            </FormGroup>

          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar Persona</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Nombre: 
              </label>
              <input
                className="form-control"
                name="name1"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
              Correo Electrónico: 
              </label>
              <input
                className="form-control"
                name="email"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
              Número telefónico: 
              </label>
              <input
                className="form-control"
                name="number"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
              Habitación: 
              </label>
              <input
                className="form-control"
                name="room"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
              Fecha de partida: 
              </label>
              <input
                className="form-control"
                name="entryDate"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
              Fecha de retorno: 
              </label>
              <input
                className="form-control"
                name="returnDate"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
              Servicios Extras: 
              </label>
              <input
                className="form-control"
                name="extraServices"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>


          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
      </> 
    );
  }
}
export default crudAdmin;
