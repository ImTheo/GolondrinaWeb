<?php
require "vendor/autoload.php";
$client = new MongoDB\Client('mongodb+srv://YullianaRoman:1234Yul@cluster0.5vmpd.mongodb.net/test');
$companydb = $client->companydb;
$empcollection = $companydb->actividades;

$id = $_POST["id"];
$name = $_POST["name"];
$descripcion = $_POST['description'];
$image = $_POST['image'];

$insertOneResult = $empcollection->insertOne(
    ['id' => $id, 'name' => $name, 'description' => $descripcion,'image' => $image]
);
header("Location:crudAdmin.php");
?>