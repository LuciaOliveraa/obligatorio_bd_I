DROP DATABASE IF EXISTS `base_datos`;

CREATE DATABASE `base_datos` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
-- DEFAULT CHARACTER SET utf8 --> especifica el tipo de caracteres utilizado, varios idiomas
-- COLLATE utf8_spanish_ci --> especifica el idioma español y ci denota que en las búsquedas no se realiza distinción entre mayúsculas y minúsculas

CREATE TABLE base_datos.activities(
    id integer auto_increment not null,
    name varchar(20),
    description varchar(50),
    age_min int(3),
    price numeric(10) not null,
    PRIMARY KEY (id)
);

CREATE TABLE base_datos.equipment(
    id integer auto_increment not null,
    description varchar(50),
    price numeric(10),
    PRIMARY KEY (id)
);

CREATE TABLE base_datos.instructors (
    ci integer(8) not null,
    CHECK ( ci REGEXP '^[0-9]{8}$'),
    name varchar(20) not null,
    lastname varchar(20) not null,
    PRIMARY KEY (ci)
);

CREATE TABLE base_datos.shifts(
    id integer auto_increment not null,
    starting_time time not null,
    end_time time not null,
    PRIMARY KEY (id)
);


CREATE TABLE base_datos.students(
    ci integer(10) not null,
    CHECK ( ci REGEXP '^[0-9]{8}$'),
    name varchar(20),
    lastname varchar(20),
    birthdate date not null,
    email varchar(30) not null,
    phone_number integer(9),
    PRIMARY KEY (ci)
);

ALTER TABLE base_datos.students MODIFY COLUMN email varchar(60) NOT NULL;

CREATE TABLE base_datos.login(
    ci integer(10) not null,
    password varchar(20) not null,
    FOREIGN KEY (ci) REFERENCES base_datos.students(ci),
    PRIMARY KEY (ci)
);

CREATE TABLE base_datos.lesson(
    id integer auto_increment not null,
    instructor_ci integer(10) not null,
    activity_id integer not null,
    shift_id integer not null,
    capacity int(3),
    FOREIGN KEY (instructor_ci) REFERENCES instructors(ci),
    FOREIGN KEY (activity_id) REFERENCES activities(id),
    FOREIGN KEY (shift_id) REFERENCES shifts(id),
    PRIMARY KEY (id)
);

CREATE TABLE base_datos.enrollments(
    student_ci integer(10) not null,
    lesson_id integer not null,
    equipment_id integer not null,
    total_price numeric(10),
    FOREIGN KEY (student_ci) REFERENCES base_datos.students(ci),
    FOREIGN KEY (lesson_id) REFERENCES base_datos.lesson(id),
    FOREIGN KEY (equipment_id) REFERENCES base_datos.equipment(id),
    PRIMARY KEY (student_ci, lesson_id, equipment_id)
);

ALTER TABLE base_datos.enrollments ADD COLUMN date date not null;
