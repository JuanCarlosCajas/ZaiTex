<?php

require('conexion.php');

// Parámetros para actualizar el alumno
$codigo_alumno = $_POST["codigo"];
$nombre_alumno = $_POST["nombre"];
$apellido_alumno = $_POST["apellido"];
$foto_alumno = $_POST["foto"];
$dni_alumno = $_POST["dni"];
$gmail_recuperacion = $_POST["email"];
$contrasena = $_POST["contrasena"];

// Preparar la llamada al procedimiento almacenado
$stmt = $conn->prepare("CALL updateAlumno(?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssss", $codigo_alumno, $nombre_alumno, $apellido_alumno, $foto_alumno, $dni_alumno, $gmail_recuperacion, $contrasena);

// Ejecutar la llamada
if ($stmt->execute()) {
    echo "Alumno actualizado correctamente.";
} else {
    echo "Error al actualizar el alumno: " . $stmt->error;
}

// Cerrar la conexión
$stmt->close();
$conn->close();