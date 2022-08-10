import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup"
import { useReservation } from "../controller/reservationController";
import { useActivity } from "../controller/activityController";
import { useRoom } from "../controller/roomController";

const validate = Yup.object().shape({
  name: Yup.string()
    .required('Este campo debe ser completado'),

  checkin: Yup.string()
    .required('Este campo debe ser completado'),

  email: Yup.string()
    .email('El email es invalido')
    .required('Este campo debe ser completado'),

  cellphone: Yup.string()
    .max(10, 'El numero telefonico no debe exceder los 10 digitos')
    .min(10, 'El numero telefonico debe tener 10 digitos')
    .required('Este campo debe ser completado'),

  checkout: Yup.string()
    .required('Este campo debe ser completado')
});

export function ReservationForm() {

  const [roomsData, setRooms] = useState([{}]);
  const date = new Date()
  const currentDate = date.getFullYear() + "-" + "0" + (date.getMonth() + 1) + "-0" +  date.getDate()  
  const {reservations, createReservation} = useReservation();
  const {activities} = useActivity();
  const {roomsAvailable} = useRoom();

  useEffect(() => {
    fetch("/api/roomsAvailable")
      .then((response) => response.json())
      .then((data) => {
        setRooms(data);
      });
  }, []);

  const activitiesData = [];
  const rooms = [];
  for (const data of activities) {
    activitiesData.push(<option>{data.name}</option>)
  }
  for (const data of roomsAvailable) {
    rooms.push(<option>{data.name}</option>)
  }

  var idReservation = reservations.length + 1;
  console.log(idReservation)

  return (
    < Formik
      initialValues={{
        id: idReservation,
        name: '',
        email: '',
        room: '',
        recreations: '',
        cellphone: '',
        checkin: '',
        checkout: ''
      }
      }

      validationSchema={validate}

      onSubmit={async (values, actions) => {
        values.id = idReservation;
        await createReservation(values, actions)
      }}
    >
      {({ errors, touched, isValid, dirty, values }) => (
        <Form
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
                    className={touched.name ? ` field-form ${errors.name ? "invalid" : "valid"}` : 'field-form'}
                    name="name"
                    placeholder="Juan Perez"
                    minLength={2}
                    maxLength={30}
                  />
                  {touched.name && errors.name && <small className="d-block invalid-feedback">{errors.name}</small>}
                </div>
                <label htmlFor="correo" className="form-label">Correo</label>
                <br />
                <Field
                  type="email"
                  className={touched.email ? ` field-form ${errors.email ? "invalid" : "valid"}` : 'field-form'}
                  name="email"
                  placeholder="golondrinas@gmail.com"
                />
                {touched.email && errors.email && <small className="d-block invalid-feedback">{errors.email}</small>}
                <br />
                <label htmlFor="telefono" className="form-label">
                  Número Telefónico
                </label>
                <Field
                  type="tel"
                  className={touched.cellphone ? `field-form ${errors.cellphone ? "invalid" : "valid"}` : 'field-form'}
                  placeholder="0941236489"
                  name="cellphone"
                />
                {touched.cellphone && errors.cellphone && <small className="d-block invalid-feedback">{errors.cellphone}</small>}
                <div className="row-form">
                  <div>
                    <label className="form-label" htmlFor="checkin">
                      Fecha de partida
                    </label>
                    <Field
                      type="date"
                      className="field-form form-controler"
                      name="checkin"
                      min={currentDate}
                    />
                  </div>
                  <div>
                    <label name="checkout" className="form-label">
                      Fecha de retorno
                    </label>
                    <Field
                      type="date"
                      name="checkout"
                      className="field-form form-controler"
                      id="checkout"
                      min={values.checkin}
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
                <label htmlFor="recreacion" className="form-label">
                  Recreaciones adicionales
                </label>
                <Field as="select" name="recreations" className="field-form">
                  {activitiesData}
                </Field>
                <button
                  className="form-btn"
                  type="submit"
                  disabled={!isValid || !dirty}
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik >
  );
}

export default ReservationForm;
