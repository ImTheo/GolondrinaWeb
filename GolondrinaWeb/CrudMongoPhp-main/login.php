<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Formulario CSS</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="View/Golondrina/css/styles.css">
</head>

<body>

    <div class="contenedor-formulario contenedor">
        <div class="imagen-formulario">

        </div>

        <form class="formulario" action="validate.php" method="POST">
            <div class="texto-formulario">
                <h2>Bienvenido de nuevo</h2>
                <p>Inicia sesión con tu cuenta</p>
            </div>
            <div class="input">
                <label for="usuario">Usuario</label>
                <input placeholder="Ingresa tu nombre" type="text" id="usuario" name="usuario">
            </div>
            <div class="input">
                <label for="clave">Contraseña</label>
                <input placeholder="Ingresa tu contraseña" type="password" id="clave" name="clave">
            </div>
            <div class="input">
                <input type="submit" value="Login" class="form-btn">
            </div>
        </form>
    </div>

</body>

</html>