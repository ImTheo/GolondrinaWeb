<?php
require '../../vendor/autoload.php';

$client = new MongoDB\Client('mongodb+srv://YullianaRoman:1234Yul@cluster0.5vmpd.mongodb.net/test');
$companydb = $client->companydb;

require_once("connect_dataHabitaciones.php");

$data = $activity->find();
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
    <link rel="icon" type="image/x-icon" href="assets/img/golondrinas.png" />
    <!-- Font Awesome icons (free version)-->
    <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
    <!-- Google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700" rel="stylesheet" type="text/css" />
    <!-- Core theme CSS (includes Bootstrap)-->
    <link href="css/styles.css" rel="stylesheet" />
</head>

<body id="page-top">
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div class="container">
            <a class="navbar-brand" href="#page-top"><img src="assets/img/navbar-logo.png" alt="..." /></a>
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

    <section class="page-section bg-light" id="portfolio">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Nuestras Actividades</h2>
                <h3 class="section-subheading text-muted">Disfruta de un fin de semana inolvidable en la finca las Golondrinas</h3>
            </div>


            <div class="row">
                <?php foreach ($data as $dat) : ?>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="<?php echo "#" . $dat->id ?>">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="<?php echo $dat->image ?>" alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading"><?php echo $dat->name ?></div>
                                <div class="portfolio-caption-subheading text-muted"><?php echo $dat->description ?></div>
                            </div>
                        </div>
                    </div>
                <?php endforeach ?>
            </div>
        </div>
    </section>
    <!-- About-->
    <section class="page-section" id="about">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Conócenos</h2>
                <h3 class="section-subheading text-muted">Sigue formando parte de nuestra historia.</h3>
            </div>
            <ul class="timeline">                
                <li class="timeline-inverted">
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="..." /></div>
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
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="..." /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4>Visión</h4>
                        </div>
                        <div class="timeline-body">
                            <p class="text-muted">Para el 2018 lograr los estándares de calidad requeridos en la prestación de servicios y productos  a nuestros huéspedes y comensales, a través de un proceso de mejora continua obteniendo una generación de beneficios a través del mercado local y foráneo, en el que nuestro nombre llegue a ser uno de los primeros en nuestra región.</p>
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
    <!-- Contact-->
    <section class="page-section bg-light" id="team">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">CONTACTOS</h2>
                <h3 class="section-subheading text-muted">Nos encontramos en Facebook y en Instagram como.</h3>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="assets/img/team/1.jpg" alt="..." />
                        <h4>Finca "Las Golondrinas"</h4>
                        <p class="text-muted">Facebook</p>
                        <a class="btn btn-dark btn-social mx-2" href="https://www.facebook.com/Finca-Las-Golondrinas-108175164818199" aria-label="Parveen Anand Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="assets/img/team/2.jpg" alt="..." />
                        <h4>las_golondrinas.ec</h4>
                        <p class="text-muted">Instagram</p>
                        <a class="btn btn-dark btn-social mx-2" href="https://www.instagram.com/accounts/login/?next=/las_golondrinas.ec/" aria-label="Diana Petersen LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 mx-auto text-center">
                    <p class="large text-muted">Atuntaqui - Ecuador <br>Finca "Las Golondrinas" Farm & Lodging <br> Tlf: 0993785518</p>
                </div>
            </div>
        </div>
    </section>
    <!-- Reservations-->
    <form action="../../Controller/insertReserva.php" method="POST" id="formBook">
        <div class="container-form">
            <div class="contact-box">
                <div class="left"></div>
                <div class="right">
                    <h2>RESERVAR</h2>

                    <div class="form-group">
                        <label for="nombreCompleto" class=" form-label">Nombre Completo</label>
                        <input type="text" class="form-control field-form" name="nombreCompleto" placeholder="Nombre Completo" data-sb-validations="required" minlength="2" maxlength="30">
                        <div class="invalid-feedback" data-sb-feedback="fullName:required">Este campo es obligatorio.</div>
                    </div>

                    <label for="correo">Correo</label><br />
                    <input type="email" class="field-form" type="text" name="correo" value placeholder="@gmail.com"><br />

                    <label for="telefono" class="form-label">Número Telefónico</label>
                    <input type="tel" class="field-form" placeholder="Número Telefónico" name="telefono" pattern="[0-9]{9}" min="-1" >

                    <div class="row-form">
                        <div>
                            <label for="checkin" class="form-label">Fecha de partida</label>
                            <input type="date" class="field-form form-controler" id="checkin" value = "03/06/2022" min="03/06/2022" max= "17/09/2022">
                        </div>

                        <div>
                            <label for="checkout" class="form-label">Fecha de retorno</label>
                            <input type="date" name="checkout" class="field-form form-controler" id="checkout" placeholder="dd/mm/aaaa" value = "03/06/2022" min="03/06/2022" max= "17/09/2022">
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
                            <input type="number" class="field-form form-controler" id="capacity_adult" name="capacity_adult" min="1" max="20">
                        </div>
                        <div class="col">
                            <label for="capacity_child" class="form-label">Niños</label>
                            <input type="number" class="field-form form-controler" id="capacity_child" name="capacity_child" min="1" max="20">
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

    <?php
    $data = $activity->find();
    foreach ($data as $act) : ?>
        <div class="portfolio-modal modal fade" id="<?php echo $act->id; ?>" tabindex="-1" role="dialog" aria-hidden="true" name="<?php echo $act->id; ?>">
            <h1><?php echo $act->id; ?></h1>
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    <!-- Project details-->
                                    <h2 class="text-uppercase"><?php echo $act->name ?></h2>
                                    <img class="img-fluid d-block mx-auto" src="<?php echo $act->image ?>" alt="..." />
                                    <p><?php echo $act->sumary ?></p>
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
    <?php endforeach ?>

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