<?php
require '../vendor/autoload.php'; 

$client = new MongoDB\Client('mongodb+srv://YullianaRoman:1234Yul@cluster0.5vmpd.mongodb.net/test');
$companydb = $client->companydb;
$empcollection = $companydb->empcollection;

$id=$_GET['id'];

$deleteResult = $empcollection->deleteOne(
    ['_id' => $id]
);

printf("Deleted %d documents", $deleteResult->getDeletedCount());
header("Location:../index.php");

/*
$deleteResult = $empcollection->deleteMany(
    ['name' => 'Ethan']
);
printf("Deleted %d documents", $deleteResult->getDeletedCount());
*/
?>