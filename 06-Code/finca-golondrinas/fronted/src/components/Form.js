import React from "react";

export function Form() {
  return (
    <form
      action="../../Controller/insertReserva.php"
      method="POST"
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
              <input
                type="text"
                className="form-control field-form"
                name="nombreCompleto"
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
            <input
              type="email"
              className="field-form"
              name="correo"
              defaultValue
              placeholder="@gmail.com"
            />
            <br />
            <label htmlFor="telefono" className="form-label">
              Número Telefónico
            </label>
            <input
              type="tel"
              className="field-form"
              placeholder="Número Telefónico"
              name="telefono"
              pattern="[0-9]{9}"
              min={-1}
            />
            <div className="row-form">
              <div>
                <label htmlFor="checkin" className="form-label">
                  Fecha de partida
                </label>
                <input
                  type="date"
                  className="field-form form-controler"
                  id="checkin"
                  defaultValue="03/06/2022"
                  min="03/06/2022"
                  max="17/09/2022"
                />
              </div>
              <div>
                <label htmlFor="checkout" className="form-label">
                  Fecha de retorno
                </label>
                <input
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
            <select name="habitacion" id="habitacion" className="field-form">
              <option>

              </option>
            </select>
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
                  name="capacity_adult"
                  min={1}
                  max={20}
                />
              </div>
              <div className="col">
                <label htmlFor="capacity_child" className="form-label">
                  Niños
                </label>
                <input
                  type="number"
                  className="field-form form-controler"
                  id="capacity_child"
                  name="capacity_child"
                  min={1}
                  max={20}
                />
              </div>
            </div>
            <label htmlFor="recreacion" className="form-label">
              Recreaciones adicionales
            </label>
            <select name="recreacion" id="recreacion" className="field-form">
              <option></option>
            </select>
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
    </form>
  );
}

export default Form;
