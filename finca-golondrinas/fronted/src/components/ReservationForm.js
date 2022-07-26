import React, { useEffect, useState } from "react";
import axios from "axios";
import { Formik, Form, Field } from 'formik';
export function ReservationForm() {
  const [backendData, setBackendData] = useState([{}]);
  const [roomsData, setRooms] = useState([{}]);
  const [reservationsData, setReservation] = useState([{}]);

  useEffect(() => {
    fetch("/api/activities")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });      
  }, []);  

  useEffect(() => {
    fetch("/api/rooms")
      .then((response) => response.json())
      .then((data) => {
        setRooms(data);
      });      
  }, []);  

  useEffect(() => {
    fetch("/api/reservations")
      .then((response) => response.json())
      .then((data) => {
        setReservation(data);
      });      
  }, []);  

  var activities = [];
  for (const data of backendData) {
    activities.push(<option>{data.name}</option>)
  }
  var rooms = [];
  for (const data of roomsData) {
    rooms.push(<option>{data.name}</option>)
  }
  var idReservation = reservationsData.length+1;
  return (
    <Formik initialValues={{
      id:idReservation,
      name: '',
      email: '',
      room: '',
      recreations: '',
      cellphone: '',
      checkin: '',
      checkout: ''
    }}
      onSubmit={async(values, actions) => {         
        values.id=idReservation;
        console.log(values.id);
        const result = await axios.post('/api/reservation',values);
        console.log(result)
      }}
    >
      {({ handleSubmit }) => (
        <Form
          onSubmit={handleSubmit}
          id="formBook"
        >
          <div className="container-form">
            <div className="contact-box">
              <div className="left" />
              <div className="right">
                <h2>RESERVAR</h2>
                <div className="form-group">
                  <label htmlFor="nombreCompleto" className=" form-label">
                    Nombre Completo
                  </label>
                  <Field
                    type="text"
                    className="form-control field-form"
                    name="name"
                    placeholder="Nombre Completo"
                    data-sb-validations="required"
                    minLength={2}
                    maxLength={30}
                  />
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="fullName:required"
                  >
                    Este campo es obligatorio.
                  </div>
                </div>
                <label htmlFor="correo">Correo</label>
                <br />
                <Field
                  type="email"
                  className="field-form"
                  name="email"
                  defaultValue
                  placeholder="@gmail.com"
                />
                <br />
                <label htmlFor="telefono" className="form-label">
                  Número Telefónico
                </label>
                <Field
                  type="tel"
                  className="field-form"
                  placeholder="Número Telefónico"
                  name="cellphone"
                  pattern="[0-9]{9}"
                  min={-1}
                />
                <div className="row-form">
                  <div>
                    <label htmlFor="checkin" className="form-label">
                      Fecha de partida
                    </label>
                    <Field
                      type="date"
                      className="field-form form-controler"
                      name="checkin"
                      defaultValue="03/06/2022"
                      min="03/06/2022"
                      max="17/09/2022"
                    />
                  </div>
                  <div>
                    <label htmlFor="checkout" className="form-label">
                      Fecha de retorno
                    </label>
                    <Field
                      type="date"
                      name="checkout"
                      className="field-form form-controler"
                      id="checkout"
                      placeholder="dd/mm/aaaa"
                      defaultValue="03/06/2022"
                      min="03/06/2022"
                      max="17/09/2022"
                    />
                  </div>
                </div>
                <label htmlFor="habitacion" className="form-label">
                  Seleccione una habitación
                </label>                
                <Field name="room" id="habitacion" className="field-form" as="select">
                {rooms}
                </Field>
                <br />
                <h5>Capacidad</h5>
                <div className="row-form">
                  <div className="col">
                    <label htmlFor="capacity_adult" className="form-label">
                      Adultos
                    </label>
                    <input
                      type="number"
                      className="field-form form-controler"
                      id="capacity_adult"
                      name="adult"
                      min={1}
                      max={20}
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="child" className="form-label">
                      Niños
                    </label>
                    <input
                      type="number"
                      className="field-form form-controler"
                      id="capacity_child"
                      name="child"
                      min={1}
                      max={20}
                    />
                  </div>
                </div>
                <label htmlFor="recreacion" className="form-label">
                  Recreaciones adicionales
                </label>
                <Field as="select" name="recreations" className="field-form">
                {activities}
                </Field>
                <button
                  className="form-btn"
                  type="submit"
                  required="required"
                  name="Enviar Datos"
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ReservationForm;
