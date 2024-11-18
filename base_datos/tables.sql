DROP DATABASE IF EXISTS `base_datos`;

CREATE DATABASE `base_datos` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
-- DEFAULT CHARACTER SET utf8 --> especifica el tipo de caracteres utilizado, varios idiomas
-- COLLATE utf8_spanish_ci --> especifica el idioma español y ci denota que en las búsquedas no se realiza distinción entre mayúsculas y minúsculas

CREATE TABLE base_datos.activities(
    id integer auto_increment not null,
    name varchar(20),
    description varchar(100),
    age_min int(3),
    price numeric(10) not null,
    PRIMARY KEY (id)
);

CREATE TABLE base_datos.equipment(
    id integer auto_increment not null,
    activity_id integer,
    description varchar(100),
    price numeric(10),
    FOREIGN KEY (activity_id) REFERENCES base_datos.activities(id) ON DELETE SET NULL,
    PRIMARY KEY (id)
);

CREATE TABLE base_datos.login(
    user varchar(60) not null,
    password varchar(20) not null,
    PRIMARY KEY (user)
);

CREATE TABLE base_datos.administrators(
    email varchar(60),
    FOREIGN KEY (email) REFERENCES base_datos.login(user) ON DELETE CASCADE,
    PRIMARY KEY (email)
);

CREATE TABLE base_datos.students(
    ci integer(8) not null,
    CHECK ( ci REGEXP '^[0-9]{8}$'),
    name varchar(20),
    lastname varchar(20),
    birthdate date not null,
    email varchar(60),
    phone_number integer(9),
    FOREIGN KEY (email) REFERENCES base_datos.login(user) ON DELETE SET NULL,
    PRIMARY KEY (ci)
);

CREATE TABLE base_datos.instructors (
    ci integer(8) not null,
    CHECK ( ci REGEXP '^[0-9]{8}$'),
    name varchar(20) not null,
    lastname varchar(20) not null,
    email varchar(60),
    FOREIGN KEY (email) REFERENCES base_datos.login(user) ON DELETE SET NULL,
    PRIMARY KEY (ci)
);

CREATE TABLE base_datos.shifts(
    id integer auto_increment not null,
    name varchar(30),
    starting_time time not null,
    end_time time not null,
    PRIMARY KEY (id)
);


CREATE TABLE base_datos.lessons(
    id integer auto_increment not null,
    instructor_ci integer(8),
    activity_id integer not null,
    shift_id integer not null,
    capacity int(3),
    FOREIGN KEY (instructor_ci) REFERENCES instructors(ci) ON DELETE SET NULL,
    FOREIGN KEY (activity_id) REFERENCES activities(id) ON DELETE CASCADE,
    FOREIGN KEY (shift_id) REFERENCES shifts(id) ON DELETE CASCADE,
    PRIMARY KEY (id)
);


CREATE TABLE base_datos.rent(
    student_ci integer(8) not null,
    equipment_id integer not null,
    date date not null,
    FOREIGN KEY (student_ci) REFERENCES base_datos.students(ci) ON DELETE CASCADE,
    FOREIGN KEY (equipment_id) REFERENCES base_datos.equipment(id) ON DELETE CASCADE,
    PRIMARY KEY (student_ci, equipment_id)
);

CREATE TABLE base_datos.enrollments(
    student_ci integer(8) not null,
    lesson_id integer not null,
    date date not null,
    FOREIGN KEY (student_ci) REFERENCES base_datos.students(ci) ON DELETE CASCADE,
    FOREIGN KEY (lesson_id) REFERENCES base_datos.lessons(id) ON DELETE CASCADE,
    PRIMARY KEY (student_ci, lesson_id, date)
);
