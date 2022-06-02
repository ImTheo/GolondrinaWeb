<?php
    $name = (new MongoDB\Client('mongodb+srv://YullianaRoman:1234Yul@cluster0.5vmpd.mongodb.net/test'))->companydb->habitaciones; 
	//$this->db = (new MongoDB\Client('mongodb+srv://YullianaRoman:1234Yul@cluster0.5vmpd.mongodb.net/test'))->crudphpmongo;
	$url=(new MongoDB\Client('mongodb+srv://YullianaRoman:1234Yul@cluster0.5vmpd.mongodb.net/test'));
	$activity = $url->companydb->actividades;
?>