use base_datos;

CREATE TRIGGER validate_email_students
BEFORE INSERT ON base_datos.students
FOR EACH ROW
BEGIN
    IF NEW.email NOT LIKE '%@correo.ucu.edu.uy' THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'El email debe terminar con "@correo.ucu.edu.uy"';
    END IF;
END;


CREATE TRIGGER validate_email_instructors
BEFORE INSERT ON base_datos.instructors
FOR EACH ROW
BEGIN
    IF NEW.email NOT LIKE '%@ucu.edu.uy' THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'El email debe terminar con "@ucu.edu.uy"';
    END IF;
END;


CREATE TRIGGER validate_email_admin
BEFORE INSERT ON base_datos.instructors
FOR EACH ROW
BEGIN
    IF NEW.email NOT LIKE '%@admin.ucu.edu.uy' THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'El email debe terminar con "@admin.ucu.edu.uy"';
    END IF;
END;


CREATE TRIGGER validate_email_login
BEFORE INSERT ON base_datos.login
FOR EACH ROW
BEGIN
    IF NEW.user NOT LIKE '%@correo.ucu.edu.uy' 
       AND NEW.user NOT LIKE '%@ucu.edu.uy' 
       AND NEW.user NOT LIKE '%@admin.ucu.edu.uy' THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'El email debe terminar con "@correo.ucu.edu.uy", "@ucu.edu.uy" o "@admin.ucu.edu.uy"';
    END IF;
END;


