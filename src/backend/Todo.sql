
-- Procedure para buscar Alumno
DELIMITER //

CREATE PROCEDURE BuscarAlumno(
    IN codigo VARCHAR(14),
    IN password VARCHAR(14)
)
BEGIN
    DECLARE alumno_id INT;

    -- Verificar si el código de alumno y la contraseña coinciden
    SELECT COUNT(*) INTO alumno_id
    FROM alumno
    WHERE codigo_alumno = codigo AND contrasena = password;

    -- Si se encuentra un registro, devolver los detalles del alumno
    IF alumno_id > 0 THEN
        SELECT *
        FROM alumno
        WHERE codigo_alumno = codigo;
    ELSE
        -- Si no se encuentra ningún registro, devolver un mensaje de error
        SELECT 'No se encontró ningún alumno con el código y contraseña proporcionados' AS mensaje;
    END IF;
END//

DELIMITER ;