<?php

require('conexion.php');

$archivos = $_FILES['imagen'];
$numArchivos = count($archivos['tmp_name']);
$nombre = "Juan Carlos";
$apellido = "Cajas Ocaña";
$dni = "94849345";
$gmail = "prueba1905@gmail.com";
$contrasena = "9876";

echo $numArchivos;


$sql = "CALL insertar_alumno(?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);

for($i = 0; $i < $numArchivos; $i++){
    $contenidoImagen = file_get_contents($archivos['tmp_name'][$i]);
    $archivoImagen = base64_encode($contenidoImagen);
}

$stmt->bind_param("ssssss",$nombre, $apellido, $archivoImagen, $dni, $gmail, $contrasena );

if($stmt->execute()){
    echo "Archivo subido correctamente";
}
