<?php
require "vendor/autoload.php";

$client = new MongoDB\Client('mongodb+srv://YullianaRoman:1234Yul@cluster0.5vmpd.mongodb.net/test');
$companydb = $client->companydb;
$datos = $companydb->admin->find();

$user = $_POST['usuario'];
$password = $_POST['clave'];

foreach ($datos as $dato) {
    $dbuser = $dato['usuario'];
    $dbpass = $dato['contraseña'];
}

if ($user === "user" && $password === "clave") {

    header("Location:crudAdmin.php");
} else {
    header("Location:View/Golondrina/index.php");
    //header("Location:crudAdmin.php");
}
?>