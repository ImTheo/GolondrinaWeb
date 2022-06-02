<?php
require 'vendor/autoload.php';

$client = new MongoDB\Client('mongodb+srv://YullianaRoman:1234Yul@cluster0.5vmpd.mongodb.net/test');
$companydb = $client->companydb;
$empcollection = $companydb->empcollection;
$id = isset($_GET['id']) ? $_GET['id'] : "";
$document = $empcollection->findOne(
    ['_id' => $id]
);

require_once("connect_dataHabitaciones.php");
$datos = $name->find();

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>Finca Las Golondrinas</title>
    <!-- Favicon-->
    <link rel="icon" type="image/x-icon" href="view/golondrina///img/golondrinas.png" />
    <!-- Font Awesome icons (free version)-->
    <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
    <!-- Google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700" rel="stylesheet" type="text/css" />
    <!-- Core theme CSS (includes Bootstrap)-->
    <link href="view/golondrina/css/styles.css" rel="stylesheet" />
</head>

<body id="page-top">
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div class="container">
            <a class="navbar-brand" href="#page-top"><img src="view/golondrina/assets/img/navbar-logo.png" alt="..." /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars ms-1"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                    <!-- <li class="nav-item"><a class="nav-link" href="#services">Información</a></li> -->
                    <li class="nav-item"><a class="nav-link" href="#portfolio">Actividades</a></li>
                    <li class="nav-item"><a class="nav-link" href="#about">Conócenos</a></li>
                    <li class="nav-item"><a class="nav-link" href="#team">Contactos</a></li>
                    <li class="nav-item"><a class="nav-link" href="#formBook">Reservaciones</a></li>
                    <li class="nav-item"><a class="nav-link" href="../../login.php">Administrador</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- Masthead-->
    <header class="masthead">
        <div class="container">
            <div class="masthead-heading text-uppercase">Bienvenidos a Las Golondrinas!</div>
            <div class="masthead-subheading">Lugar donde la aventura, diversión y relax no faltarán</div>
            <a class="btn btn-primary btn-xl text-uppercase" href="#formBook">Reservar</a>
        </div>
    </header>
    <!-- Informacion-->
    <!-- <section class="page-section" id="services">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Services</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div class="row text-center">
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">E-Commerce</h4>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Responsive Design</h4>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Web Security</h4>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                </div>
            </div>
        </section> -->
    <!-- Conocenos Grid-->
    <section class="page-section bg-light" id="portfolio">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Nuestras Actividades</h2>
                <h3 class="section-subheading text-muted">Disfruta de un fin de semana inolvidable en la finca las Golondrinas</h3>
            </div>
            <div class="row">
                <div class="col-lg-4 col-sm-6 mb-4">
                    <!-- Portfolio item 1-->
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="view/golondrina/assets/img/portfolio/1.jpg" alt="..." />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Hospedaje</div>
                            <div class="portfolio-caption-subheading text-muted">Ven y Disfruta de nuestro Paisaje</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mb-4">
                    <!-- Portfolio item 2-->
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="view/golondrina/assets/img/portfolio/2.jpg" alt="..." />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Zona Húmeda</div>
                            <div class="portfolio-caption-subheading text-muted">Hidromasaje-Sauna-Turco</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mb-4">
                    <!-- Portfolio item 3-->
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="view/golondrina/assets/img/portfolio/3.jpg" alt="..." />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Espacios al aire libre</div>
                            <div class="portfolio-caption-subheading text-muted">Espacios Exteriores</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                    <!-- Portfolio item 4-->
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="view/golondrina/assets/img/portfolio/4.jpg" alt="..." />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Canchas Deportivas</div>
                            <div class="portfolio-caption-subheading text-muted">Fútbol-Básquet-Voley</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                    <!-- Portfolio item 5-->
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="view/golondrina/assets/img/portfolio/5.jpg" alt="..." />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Zona de Fogata</div>
                            <div class="portfolio-caption-subheading text-muted">Parrillada</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <!-- Portfolio item 6-->
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="view/golondrina/assets/img/portfolio/6.jpg" alt="..." />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Convivencia con Animales</div>
                            <div class="portfolio-caption-subheading text-muted">Finca las Golondrinas</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Actividades-->
    <section class="page-section" id="about">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Conócenos</h2>
                <h3 class="section-subheading text-muted">Sigue formando parte de nuestra historia.</h3>
            </div>
            <ul class="timeline">
                <li>
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="view/golondrina/assets/img/about/1.jpg" alt="..." /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4 class="subheading">Nuestro comienzo</h4>
                        </div>
                        <div class="timeline-body">
                            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                        </div>
                    </div>
                </li>
                <li class="timeline-inverted">
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="view/golondrina/assets/img/about/2.jpg" alt="..." /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4>Misión</h4>
                        </div>
                        <div class="timeline-body">
                            <p class="text-muted">Queremos brindar confort y despertar el gusto por la biodiversidad. Ponerlos en contacto directo con este mundo biodiverso, a través del contacto con los árboles, plantas, animales, insectos, sintiendo la armonía del ambiente, tanto como el movimiento incesante de las nubes…</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="view/golondrina/assets/img/about/3.jpg" alt="..." /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4>Visión</h4>
                        </div>
                        <div class="timeline-body">
                            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                        </div>
                    </div>
                </li>
                <li class="timeline-inverted">
                    <div class="timeline-image">
                        <h4>
                            Sigamos
                            <br />
                            Escribiendo historias
                            <br />
                            juntos!
                        </h4>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    <!-- Contactanos-->
    <section class="page-section bg-light" id="team">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">CONTACTOS</h2>
                <h3 class="section-subheading text-muted">Nos encontramos en Facebook y en Instagram como.</h3>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="view/golondrina/assets/img/team/1.jpg" alt="..." />
                        <h4>Finca "Las Golondrinas"</h4>
                        <p class="text-muted">Facebook</p>
                        <!-- <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i class="fab fa-twitter"></i></a> -->
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                        <!-- <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a> -->
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="view/golondrina/assets/img/team/2.jpg" alt="..." />
                        <h4>las_golondrinas.ec</h4>
                        <p class="text-muted">Instagram</p>
                        <!-- <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><i class="fab fa-facebook-f"></i></a> -->
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <!-- <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src=view/golondrina/assets/img/team/3.jpg" alt="..." />
                            <h4>Larry Parker</h4>
                            <p class="text-muted">Lead Developer</p>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div> -->
            </div>
            <div class="row">
                <div class="col-lg-8 mx-auto text-center">
                    <p class="large text-muted">Atuntaqui - Ecuador <br>Finca "Las Golondrinas" Farm & Lodging <br> Tlf: 0993785518</p>
                </div>
            </div>
        </div>
    </section>
    <form action="../../Controller/insertReserva.php" method="POST" id="formBook">
        <div class="container-form">
            <div class="contact-box">
                <div class="left"></div>
                <div class="right">
                    <h2>RESERVAR</h2>

                    <div class="form-group">
                        <label for="nombreCompleto" class=" form-label">Nombre Completo</label>
                        <input type="text" class="form-control field-form" name="nombreCompleto" placeholder="Nombre Completo" data-sb-validations="required">
                        <div class="invalid-feedback" data-sb-feedback="fullName:required">Este campo es obligatorio.</div>
                    </div>

                    <label for="correo">Correo</label><br />
                    <input class="field-form" type="text" name="correo" placeholder="correo"><br />

                    <label for="telefono" class="form-label">Número Telefónico</label>
                    <input type="text" class="field-form" placeholder="Número Telefónico" name="telefono">

                    <div class="row-form">
                        <div>
                            <label for="checkin" class="form-label">Fecha de partida</label>
                            <input type="date" class="field-form form-controler" id="checkin" min="20/05/2022">
                        </div>

                        <div>
                            <label for="checkout" class="form-label">Fecha de retorno</label>
                            <input type="date" name="checkout" class="field-form form-controler" id="checkout" placeholder="dd/mm/aaaa">
                        </div>
                    </div>
                    <label for="habitacion" class="form-label">Seleccione una habitación</label>
                    <select name="habitacion" id="habitacion" class="field-form">

                        <?php
                        $habitaciones = $name->find();
                        foreach ($habitaciones as $habitacion) : ?>

                            <option> <?php echo $habitacion["nombreHabitacion"]; ?> </option>
                        <?php endforeach ?>
                    </select>
                    <br />
                    <h5>Capacidad</h5>
                    <div class="row-form">
                        <div class="col">
                            <label for="capacity_adult" class="form-label">Adultos</label>
                            <input type="number" class="field-form form-controler" id="capacity_adult" name="capacity_adult">
                        </div>
                        <div class="col">
                            <label for="capacity_child" class="form-label">Niños</label>
                            <input type="number" class="field-form form-controler" id="capacity_child" name="capacity_adult">
                        </div>
                    </div>
                    <label for="recreacion" class="form-label">Recreaciones adicionales</label>
                    <select name="recreacion" id="recreacion" class="field-form">
                        <?php
                        $actividades = $companydb->actividades->find();
                        foreach ($actividades as $actividad) : ?>

                            <option><?php echo $actividad["name"]; ?> </option>
                        <?php endforeach ?>
                    </select>

                    <button class="form-btn" type="submit" required="required" name="Enviar Datos">Enviar</button>
                </div>
            </div>
        </div>
    </form>
    <!-- <section class="page-section" id="contact">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Reservaciones</h2>
                </div>
         -->
    <!-- * * * * * * * * * * * * * * *-->
    <!-- * * SB Forms Contact Form * *-->
    <!-- * * * * * * * * * * * * * * *-->
    <!-- This form is pre-integrated with SB Forms.-->
    <!-- To make this form functional, sign up at-->
    <!-- https://startbootstrap.com/solution/contact-forms-->
    <!-- to get an API token!-->

    <!--         <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div class="row align-items-stretch mb-5">
                        <div class="col-md-6">
                            <div class="form-group">
         -->
    <!-- Name input-->
    <!--                         <input class="form-control field-form" id="name" type="email" placeholder="Nombre *" data-sb-validations="required" />
                                <div class="invalid-feedback" data-sb-feedback="name:required">Este campo es obligatorio.</div>
                            </div>
                            <div class="form-group">
         -->
    <!-- Email address input-->
    <!--                         <input class="form-control" id="email" type="email" placeholder="Email *" data-sb-validations="required,email" />
                                <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div class="invalid-feedback" data-sb-feedback="email:email">Este campo es obligatorio.</div>
                            </div>
                            <div class="form-group mb-md-0">
         -->
    <!-- Phone number input-->
    <!--                         <input class="form-control" id="phone" type="tel" placeholder="Número celular *" data-sb-validations="required" />
                                <div class="invalid-feedback" data-sb-feedback="phone:required">Este campo es obligatorio.</div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group form-group-textarea mb-md-0">
         -->
    <!-- Message input-->
    <!--                    <textarea class="form-control" id="message" placeholder="Descripción *" data-sb-validations="required"></textarea>
                                <div class="invalid-feedback" data-sb-feedback="message:required">Este campo es obligatorio.</div>
                            </div>
                        </div>
                    </div>
              -->
    <!-- Submit success message-->
    <!---->
    <!-- This is what your users will see when the form-->
    <!-- has successfully submitted-->
    <!--    <div class="d-none" id="submitSuccessMessage">
                        <div class="text-center text-white mb-3">
                            <div class="fw-bolder">Formulario guardado con éxito!</div>
                            To activate this form, sign up at
                            <br />
                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                        </div>
                    </div>
                  -->
    <!-- Submit error message-->
    <!---->
    <!-- This is what your users will see when there is-->
    <!-- an error submitting the form-->
    <!--    <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error, no se guardó la Información!</div></div>
                  -->
    <!-- Submit Button-->
    <!-- <div class="text-center"><button class="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Enviar</button></div>
                </form>
            </div>
        </section> -->
    <!-- Footer-->
    <footer class="footer py-4">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-4 my-3 my-lg-0">
                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <div class="col-lg-4 text-lg-end">
                </div>
            </div>
        </div>

    </footer>
    <!-- Portfolio Modals-->
    <!-- Portfolio item 1 modal popup-->
    <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-bs-dismiss="modal"><img src="view/golondrina/assets/img/close-icon.svg" alt="Close modal" /></div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                <!-- Project details-->
                                <h2 class="text-uppercase">Hospedaje</h2>
                                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                <img class="img-fluid d-block mx-auto" src="view/golondrina/assets/img/portfolio/1.jpg" alt="..." />
                                <p>Ofrecemos hermosas habitaciones para hospedarse, con vistas maravillosas hacia la naturaleza</p>
                                <ul class="list-inline">
                                    
                                    <li>
                                        Ven y Disfruta de nuestro Paisaje
                                    </li>
                                </ul>
                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                    <i class="fas fa-xmark me-1"></i>
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Portfolio item 2 modal popup-->
    <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-bs-dismiss="modal"><img src="view/golondrina/assets/img/close-icon.svg" alt="Close modal" /></div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                <!-- Project details-->
                                <h2 class="text-uppercase">Zona Humeda</h2>
                                <p class="item-intro text-muted">Hidro masaje-Sauna-Turco</p>
                                <img class="img-fluid d-block mx-auto" src="view/golondrina/assets/img/portfolio/2.jpg" alt="..." />
                                <p>Contamos con las siguientes instalaciones:</p>
                                <li>Piscina para adultos <li>
                                <li>Piscina para niños</li>
                                <li>Hidromasaje</li>
                                <li>Sauna</li>
                                <li>Turco</li>
                                <li>Piscina Polar</li>
                                <li>Zonas recreativas para relax</li>
                                <ul class="list-inline">
                                    <li>
                                        <strong>Client:</strong>
                                        Zona Humeda
                                    </li>
                                    <li>
                                        <strong>Category:</strong>
                                        Hidro masaje-Sauna-Turco
                                    </li>
                                </ul>
                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                    <i class="fas fa-xmark me-1"></i>
                                    Close Project
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Portfolio item 3 modal popup-->
    <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-bs-dismiss="modal"><img src="view/golondrina/assets/img/close-icon.svg" alt="Close modal" /></div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                <!-- Project details-->
                                <h2 class="text-uppercase">Espacios Exteriores</h2>
                                <img class="img-fluid d-block mx-auto" src="view/golondrina/assets/img/portfolio/3.jpg" alt="..." />
                                <p>La Finca Las Golondrinas cuenta con espacios al aire libre en los que puedes disfrutar con tu familia, disfrutar de nuestras areas verdes. </p>                               
                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                    <i class="fas fa-xmark me-1"></i>
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Portfolio item 4 modal popup-->
    <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-bs-dismiss="modal"><img src="view/golondrina/assets/img/close-icon.svg" alt="Close modal" /></div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                <!-- Project details-->
                                <h2 class="text-uppercase">Project Name</h2>
                                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                <img class="img-fluid d-block mx-auto" src="view/golondrina/assets/img/portfolio/4.jpg" alt="..." />
                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                <ul class="list-inline">
                                    <li>
                                        <strong>Client:</strong>
                                        Canchas Deportivas
                                    </li>
                                    <li>
                                        <strong>Category:</strong>
                                        Fútbol-Básquet-Voly
                                    </li>
                                </ul>
                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                    <i class="fas fa-xmark me-1"></i>
                                    Close Project
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Portfolio item 5 modal popup-->
    <div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-bs-dismiss="modal"><img src="view/golondrina/assets/img/close-icon.svg" alt="Close modal" /></div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                <!-- Project details-->
                                <h2 class="text-uppercase">Project Name</h2>
                                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                <img class="img-fluid d-block mx-auto" src="view/golondrina/assets/img/portfolio/5.jpg" alt="..." />
                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                <ul class="list-inline">
                                    <li>
                                        <strong>Client:</strong>
                                        Zona de Fogata
                                    </li>
                                    <li>
                                        <strong>Category:</strong>
                                        Parrillada
                                    </li>
                                </ul>
                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                    <i class="fas fa-xmark me-1"></i>
                                    Close Project
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Portfolio item 6 modal popup-->
    <div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-bs-dismiss="modal"><img src="view/golondrina/assets/img/close-icon.svg" alt="Close modal" /></div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                <!-- Project details-->
                                <h2 class="text-uppercase">Project Name</h2>
                                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                <img class="img-fluid d-block mx-auto" src="view/golondrina/assets/img/portfolio/6.jpg" alt="..." />
                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                <ul class="list-inline">
                                    <li>
                                        <strong>Client:</strong>
                                        Convivencia con Animales
                                    </li>
                                    <li>
                                        <strong>Category:</strong>
                                        Photography
                                    </li>
                                </ul>
                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                    <i class="fas fa-xmark me-1"></i>
                                    Close Project
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Bootstrap core JS-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Core theme JS-->
    <script src="js/scripts.js"></script>
    <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
    <!-- * *                               SB Forms JS                               * *-->
    <!-- * * Activate your form at https://startbootstrap.com/solution/contact-forms * *-->
    <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
    <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
</body>

</html>