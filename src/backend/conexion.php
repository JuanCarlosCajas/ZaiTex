<?php

$servidor = 'localhost';
$bd = 'wewqe';
$usuario = 'root';
$contrasena = '';

$conn = new mysqli($servidor, $usuario, $contrasena, $bd);

if($conn->connect_error){
    die("Conexion fallida: ". $conn->connect_error);
}
