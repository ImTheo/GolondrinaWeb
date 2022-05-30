<?php
require '../vendor/autoload.php'; 

$nombreCompleto=$_POST["nombreCompleto"];
$correo=$_POST["correo"];
$habitacion=$_POST["habitacion"];
$recreacion=$_POST["recreacion"];
$telefono=$_POST["telefono"];

$client = new MongoDB\Client('mongodb+srv://YullianaRoman:1234Yul@cluster0.5vmpd.mongodb.net/test');
$companydb = $client->companydb;
$reservaciones = $companydb->reservaciones;
$insertOneResult = $reservaciones->insertOne(
    ['nombreCompleto' => $nombreCompleto, 'correo' => $correo, 'habitacion' => $habitacion, 'recreacion' => $recreacion,'telefono' => $telefono]
);
printf("Inserted %d documents", $insertOneResult->getInsertedCount());
var_dump($insertOneResult->getInsertedId());
header("Location:../view/Golondrina/index.php");
/*
$insertManyResult = $reservaciones->insertMany([
    ['_id' => '2', 'correo' => 'Brad', 'habitacion' => '26', 'recreacion' => 'mongoDB'],
    ['_id' => '3', 'correo' => 'Chris', 'habitacion' => '30', 'recreacion' => 'nodejs'],
    ['_id' => '4', 'correo' => 'Debbie', 'habitacion' => '22', 'recreacion' => 'angular']
]);
*/
?>