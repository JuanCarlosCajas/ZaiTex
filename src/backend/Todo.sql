
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


--Procedure para actualizar Alumno

DELIMITER //

CREATE PROCEDURE actualizar_alumno(
    IN codigo VARCHAR(14),
    IN nuevo_gmail_recuperacion VARCHAR(30),
    IN nuevo_sexo VARCHAR(14),
    IN nuevo_contacto VARCHAR(14)
)
BEGIN
    UPDATE alumno
    SET
        gmail_recuperacion = nuevo_gmail_recuperacion,
        sexo = nuevo_sexo,
        contacto = nuevo_contacto
    WHERE codigo_alumno = codigo;
END//

DELIMITER ;

-- Procedure de Mostrar Matriculas
DELIMITER //

CREATE PROCEDURE mostrar_matriculas_por_alumno(
    IN codigo_alumno_param VARCHAR(14)
)
BEGIN
    SELECT *
    FROM matricula_curso
    WHERE codigo_alumno = codigo_alumno_param;
END//

DELIMITER ;