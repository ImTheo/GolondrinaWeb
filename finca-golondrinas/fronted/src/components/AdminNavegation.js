import React from "react";
export function AdminNavegation() {
    return ( 
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
     );
}

export default AdminNavegation;