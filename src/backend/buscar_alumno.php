<?php

header("Access-Control-Allow-Origin: *");

require('conexion.php');

$codigo_alumno = $_GET["codigo_alumno"];
$contrasena = $_GET["contrasena"];

// Llamar al procedimiento almacenado
$sql = "CALL BuscarAlumno(?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $codigo_alumno, $contrasena);
$stmt->execute();

// Obtener resultados
$result = $stmt->get_result();

$row = $result->fetch_assoc();

header('Content-Type: application/json');
// Convertir el array en formato JSON
echo json_encode($row);

// Cerrar conexión
$stmt->close();
$conn->close();