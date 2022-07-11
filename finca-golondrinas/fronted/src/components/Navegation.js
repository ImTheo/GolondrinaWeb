import React from 'react'
import logo from '../img/navbar-logo.png'
function Navegation() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div class="container">
                    <a class="navbar-brand" href="#page-top"><img src={logo} alt="..." /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i class="fas fa-bars ms-1"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                            <li class="nav-item"><a class="nav-link" href="#portfolio">Actividades</a></li>
                            <li class="nav-item"><a class="nav-link" href="#about">Conócenos</a></li>
                            <li class="nav-item"><a class="nav-link" href="#team">Contactos</a></li>
                            <li class="nav-item"><a class="nav-link" href="#formBook">Reservaciones</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <header class="masthead">
                <div class="container">
                    <div class="masthead-heading text-uppercase">Bienvenidos a Las Golondrinas!</div>
                    <div class="masthead-subheading">Lugar donde la aventura, diversión y relax no faltarán</div>
                    <a class="btn btn-primary btn-xl text-uppercase" href="#formBook">Reservar</a>
                </div>
            </header>
        </div>
    );
}
export default Navegation;