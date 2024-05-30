<?php
header("Access-Control-Allow-Origin: *");
require('conexion.php');

// Parámetros para actualizar el alumno
$codigo_alumno = $_POST["codigo_alumno"];
$gmail_recuperacion = $_POST["gmail_recuperacion"];
$sexo = $_POST["sexo"];
$contacto = $_POST["contacto"];

// Preparar la llamada al procedimiento almacenado
$stmt = $conn->prepare("CALL ActualizarAlumno(?, ?, ?, ?)");
$stmt->bind_param("ssss", $codigo_alumno, $gmail_recuperacion, $sexo, $contacto);

// Ejecutar la llamada
if ($stmt->execute()) {
    echo "Alumno actualizado correctamente.";
} else {
    echo "Error al actualizar el alumno: " . $stmt->error;
}

// Cerrar la conexión
$stmt->close();
$conn->close();