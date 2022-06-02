<?php
require 'vendor/autoload.php';
$client = new MongoDB\Client;
$companydb = $client->companydb;
$empcollection = $companydb->empcollection;

?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="">
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;1,600&display=swap" rel="stylesheet">
    <link href="styles/style.css" rel="stylesheet" type="text/css">

    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Administrador </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#rooms">Habitaciones</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#activities">Actividades</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#books">Reservaciones</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</head>

<body>
    <section id="rooms">
        <div class="container">
            <h1>HABITACIONES</h1>
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <form action="Controller/insert.php" method="POST">
                            <label for="name">Nombre</label><br />
                            <input class="form-control" type="text" name="name" required="required" placeholder="Nombre"><br />
                            <h5>Capacidad</h5>
                            <div class="row">
                                <div class="col">
                                    <label for="capacity_adult">Adultos</label>
                                    <input type="number" class="form-control" id="capacity_adult" name="capacity_adult" requiered="requiered" min="0"></br>
                                </div>
                                <div class="col">
                                    <label for="capacity_child">Niños</label>
                                    <input type="number" class="form-control" id="capacity_child" name="capacity_adult" requiered="requiered" min="0"></br>
                                </div>
                            </div>
                            <label for="age">Descripcion</label><br />
                            <input class="form-control" type="text" name="description" required="required" placeholder="Descripcion"><br />
                            <input class="btn btn-outline-primary" type="submit" required="required" name="Enviar Datos" /><br />
                        </form>
                    </div>
                </div>
                <div class="col-6">
                    <!-- 2 of 3 (wider) -->
                </div>
                <div class="col">
                    <!-- 3 of 3 -->
                </div>
            </div>


            <?php
            require_once("View/Golondrina/connect_dataHabitaciones.php");

            if ($name->count() > 0) {
                $datos = $name->find();
            ?>
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
                        <?php foreach ($datos as $dato) { ?>
                            <tr>
                                <th scope="row"><?php echo $dato["_id"]; ?></th>
                                <td><?php echo $dato["nombreHabitacion"]; ?></td>
                                <td><?php echo $dato["capacity_adult"]; ?></td>
                                <td><?php echo $dato["capacity_child"]; ?></td>
                                <td><?php echo $dato["description"]; ?></td>
                                <td><a class="edit" href="view/Editar.php?id=<?php echo $dato["_id"]; ?>">Editar</a></td>
                                <td><a class="edit" href="Controller/delete.php?id=<?php echo $dato["_id"]; ?>">Eliminar</a></td>
                            </tr>
                        <?php
                        } //foreach
                        ?>
                    <tbody>
                </table>
            <?php } else { ?>
                <h4></i>Sin registros en la Base de Datos</h4>
            <?php } ?>

        </div>
    </section>

    <section id="activities">
        <div class="container">
            <h1>ACTIVIDADES</h1>
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <form action="Controller/insert.php" method="POST">
                            <label for="id">ID</label><br />
                            <input class="form-control" type="text" name="id"><br />
                            <label for="name">Nombre de la actividad </label><br />
                            <input class="form-control" type="text" name="name" required="required" placeholder="Nombre"><br />
                            <label for="age">Descripcion</label><br />
                            <input class="form-control" type="text" name="description" required="required" placeholder="Descripcion"><br />
                            <label for="skill">Imagen</label><br />
                            <input class="form-control" type="text" name="image" required="required" placeholder="base de datos"><br />
                            <input class="btn btn-outline-primary" type="submit" required="required" name="Enviar Datos" /><br />
                        </form>
                    </div>
                </div>
                <div class="col-6">
                    <!-- 2 of 3 (wider) -->
                </div>
                <div class="col">
                    <!-- 3 of 3 -->
                </div>
            </div>


            <?php
            require_once("connect_data.php");

            if ($name->count() > 0) {
                $datos = $name->find();
            ?>
                <table class="table table-sm">
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
                        <?php foreach ($datos as $dato) { ?>
                            <tr>
                                <th scope="row"><?php echo $dato["_id"]; ?></th>
                                <td><?php echo $dato["name"]; ?></td>
                                <td><?php echo $dato["description"]; ?></td>
                                <td><?php echo $dato["image"]; ?></td>
                                <td><a class="edit" href="view/Editar.php?id=<?php echo $dato["_id"]; ?>">Editar</a></td>
                                <td><a class="edit" href="Controller/delete.php?id=<?php echo $dato["_id"]; ?>">Eliminar</a></td>
                            </tr>
                        <?php
                        } //foreach
                        ?>
                    <tbody>
                </table>
            <?php } else { ?>
                <h4></i>Sin registros en la Base de Datos</h4>
            <?php } ?>

        </div>
    </section>

    <section id="books">
        <h1>RESERVACIONES</h1>
        <?php
        require_once("connect_data.php");

        if ($name->count() > 0) {
            $datos = $name->find();
        ?>
            <table class="table table-sm">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Correo Electrónico</th>
                        <th scope="col">Número telefónico</th>                        
                        <th scope="col">Habitación</th>                    
                        <th scope="col">Fecha de partida</th>                        
                        <th scope="col">Fecha de retorno</th>
                        <th scope="col">Servicios Extras</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($datos as $dato) { ?>
                        <tr>
                            <th scope="row"><?php echo $dato["_id"]; ?></th>
                            <td><?php echo $dato["name"]; ?></td>
                            <td><?php echo $dato["email"]; ?></td>
                            <td><?php echo $dato["phone"]; ?></td>
                            <td><?php echo $dato["room"]; ?></td>                            
                            <td><?php echo $dato["checkin"]; ?></td>
                            <td><?php echo $dato["checkout"]; ?></td>
                            <td><?php echo $dato["activities"]; ?></td>
                            <td><a class="edit" href="view/Editar.php?id=<?php echo $dato["_id"]; ?>">Editar</a></td>
                            <td><a class="edit" href="Controller/delete.php?id=<?php echo $dato["_id"]; ?>">Eliminar</a></td>
                        </tr>
                    <?php
                    } //foreach
                    ?>
                <tbody>
            </table>
        <?php } else { ?>
            <h4></i>Sin registros en la Base de Datos</h4>
        <?php } ?>

        </div>
    </section>
    <?php require_once("View/Pie.php") ?>


    <script src="" async defer></script>
    <!-- Optional JavaScript; choose one of the two! -->
    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
        -->
</body>

</html>