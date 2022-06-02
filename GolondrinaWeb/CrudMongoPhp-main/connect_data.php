<?php
	require_once __DIR__ . '/vendor/autoload.php';
    $name = (new MongoDB\Client('mongodb+srv://YullianaRoman:1234Yul@cluster0.5vmpd.mongodb.net/test'))->companydb->empcollection; 
	//$this->db = (new MongoDB\Client('mongodb+srv://YullianaRoman:1234Yul@cluster0.5vmpd.mongodb.net/test'))->crudphpmongo;
		
?>