<?php
require "vendor/autoload.php";
$client = new MongoDB\Client('mongodb+srv://YullianaRoman:1234Yul@cluster0.5vmpd.mongodb.net/test');
$companydb = $client->companydb;
$empcollection = $companydb->habitaciones;

$id = $_POST["id"];
$name = $_POST["nombreHabitacion"];
$adult = $_POST["adultos"];
$child = $_POST["ninos"];
$descripcion = $_POST['descripcion'];

$insertOneResult = $empcollection->insertOne(
    ['id' => $id, 'nombreHabitacion' => $name, 'adultos' => $adult, 'ninos' => $child, 'descripcion' => $descripcion]
);
header("Location:crudAdmin.php");
?>