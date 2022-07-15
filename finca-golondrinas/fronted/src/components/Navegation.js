import React from "react";
import logo from "../img/navbar-logo.png";

export function Navegation() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" href="#page-top">
            <img src={logo} alt="..." />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars ms-1" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Actividades
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  Conócenos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">
                  Contactos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#formBook">
                  Reservaciones
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="masthead">
        <div className="container">
          <div className="masthead-heading text-uppercase">
            Bienvenidos a Las Golondrinas!
          </div>
          <div className="masthead-subheading">
            Lugar donde la aventura, diversión y relax no faltarán
          </div>
          <a className="btn btn-primary btn-xl text-uppercase" href="#formBook">
            Reservar
          </a>
        </div>
      </header>
    </div>
  );
}
export default Navegation;
