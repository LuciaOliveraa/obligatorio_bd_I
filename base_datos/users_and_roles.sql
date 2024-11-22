use base_datos;

DROP USER 'data_manager';

CREATE ROLE 'data_manager';
GRANT SELECT, INSERT, UPDATE, DELETE ON base_datos.* TO 'data_manager';

CREATE USER IF NOT EXISTS 'admin'@'localhost'
    IDENTIFIED BY 'adminpassword'
    DEFAULT ROLE 'data_manager'
    REQUIRE NONE
    PASSWORD EXPIRE NEVER
    FAILED_LOGIN_ATTEMPTS 3 
    PASSWORD_LOCK_TIME 10
    COMMENT 'User with limited permissions for basic CRUD';


GRANT 'data_manager' TO 'admin'@'localhost';


FLUSH PRIVILEGES;

