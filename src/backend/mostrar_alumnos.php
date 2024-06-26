<?php
header("Access-Control-Allow-Origin: *");

require('conexion.php');

$sql = "CALL MostrarAlumnos()";
$result = $conn->query($sql);

$alumnos = array();

if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        $alumnos[] = $row;
    }
    
} else {
    echo "0 resultados";
}

// Cerrar la conexión
$conn->close();

// Retornar los datos en formato JSON
header('Content-Type: application/json');
echo json_encode($alumnos);