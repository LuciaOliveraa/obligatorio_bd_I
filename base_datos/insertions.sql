use base_datos;

INSERT INTO base_datos.activities (name, description, age_min,price) VALUES
    ('Snowmobile', 'High-speed adventure on snow trails', 21, 16000),
    ('Snowboard', 'Freestyle and downhill on snowy slopes', 18, 9000),
    ('Ski', 'Classic skiing for all experience levels', 18, 18000);

INSERT INTO base_datos.equipment (description, activity_id, price) VALUES
    ('Ski set (skis, boots, and poles)', 3, 6150.00),
    ('Snowboard set (board and boots)', 2, 8200.00),
    ('Snowmobile rental (2 hour)', 1, 9840.00),
    ('Protective helmet', 1, 1230.00),
    ('Protective helmet', 2, 1230.00),
    ('Protective helmet', 3, 1230.00),
    ('Snowmobile goggles', 1, 1025.00),
    ('Snowboard goggles', 2, 1025.00),
    ('Ski goggles', 3, 1025.00),
    ('Skis', 3,3690.00),
    ('Ski boots', 3,  2460.00),
    ('Ski poles', 3, 820.00),
    ('Snowboard', 2, 5740.00),
    ('Snowboard boots', 2, 2870.00);

INSERT INTO base_datos.shifts (name, starting_time, end_time) VALUES
    ('Matutino', '09:00:00', '11:00:00'),
    ('Mediodía', '12:00:00', '14:00:00'),
    ('Vespertino', '16:00:00', '18:00:00');

INSERT INTO base_datos.login (user, password) VALUES
    ('julian.bevc@correo.ucu.edu.uy', 'A1x$hFg9L*mQzS8p'),
    ('belen.tellechea@correo.ucu.edu.uy', 'R3t@5Df8Gh!lX9k2'),
    ('paulina.vidal@correo.ucu.edu.uy', 'G5y%Pz8X!wEr2Tn4'),
    ('lucia.olivera@correo.ucu.edu.uy', 'J6f#Qb9@LnX2Oe3z'),
    ('gunther.german@correo.ucu.edu.uy', 'Z8h&Wr2X!yHp9Lv6'),
    ('roberto.mcclane@correo.ucu.edu.uy', 'M3v!Tw7#YlR5Op2x'),
    ('simba.disney@correo.ucu.edu.uy', 'Q4x*Zl9!Rt5Uh3#k'),
    ('haythor.tilla@correo.ucu.edu.uy', 'L5v$Fh8@Jt2Wo6*q'),
    ('ba.zurita@correo.ucu.edu.uy', 'E7g#Pl3!Xo9Ht5$y'),
    ('estela.garto@correo.ucu.edu.uy', 'R2n!Mf8%Zl7Xv#3j'),
    ('manuela.guedez@correo.ucu.edu.uy', 'S9k@Yh4!Qb2Wm5#v'),
    ('lucia.amor@correo.ucu.edu.uy', 'H3t!Pz8#Lx6Wn9&y'),
    ('fusun.pepe@correo.ucu.edu.uy', 'D5l@Qy9$Wr2Tp8*v'),
    ('gladys.garcia@correo.ucu.edu.uy', 'X7k!Nv3%Zp5Jt#2w'),
    ('marcos.benites@correo.ucu.edu.uy', 'V2l@Rt9!Kp6Xo4#y'),
    ('esteban.quito@correo.ucu.edu.uy', 'U9m!Zt5%Ql3Jw@7x'),
    ('sombrerero.loco@correo.ucu.edu.uy', 'T4x#Jn8!Hp2Wl$3k'),
    ('mileva.maric@correo.ucu.edu.uy', 'B5y*Qn9!Mv3Wr#7x'),
    ('juan.perezoso@correo.ucu.edu.uy', 'C2z#Lf8!Xv6Rj%4y'),
    ('roma.vidal@correo.ucu.edu.uy', 'K9t@Wp4%Xl5Jy&8k'),
    ('armando.paredes@ucu.edu.uy', 'ArP@1234567890'),
    ('jonny.mebaño@ucu.edu.uy', 'JoM@0987654321'),
    ('chapu.zon@ucu.edu.uy', 'ChZ@5678901234'),
    ('elba.lazo@ucu.edu.uy', 'ElL@4567890123'),
    ('elsa.capunta@ucu.edu.uy', 'ElC@2345678901'),
    ('susana.horia@ucu.edu.uy', 'SuH@7890123456'),
    ('dolores.fuertes@ucu.edu.uy', 'DoF@8901234567'),
    ('admin@admin.ucu.edu.uy', '12345678');

INSERT INTO base_datos.administrators(email) VALUES
    ('admin@admin.ucu.edu.uy');

INSERT INTO base_datos.instructors (ci, name, lastname, email) VALUES
    (54968022, 'Armando', 'Paredes', 'armando.paredes@ucu.edu.uy'),
    (59603358, 'Jonny', 'Mebaño', 'jonny.mebaño@ucu.edu.uy'),
    (54967822, 'Chapu', 'Zon', 'chapu.zon@ucu.edu.uy'),
    (54186631, 'Elba', 'Lazo', 'elba.lazo@ucu.edu.uy'),
    (54186632, 'Elsa', 'Capunta', 'elsa.capunta@ucu.edu.uy'),
    (54968992, 'Susana', 'Horia', 'susana.horia@ucu.edu.uy'),
	(59246687, 'Dolores', 'Fuertes', 'dolores.fuertes@ucu.edu.uy');


INSERT INTO base_datos.students (ci, name, lastname, birthdate, email, phone_number) VALUES
    (54957902, 'Julián', 'Bevc', '2005-01-27', 'julian.bevc@correo.ucu.edu.uy', 092959305),
    (54789023, 'Belén', 'Tellechea', '2004-12-20', 'belen.tellechea@correo.ucu.edu.uy', 098763214),
    (56728902, 'Paulina', 'Vidal', '2004-09-22', 'paulina.vidal@correo.ucu.edu.uy', 097283918),
    (54627894, 'Lucía', 'Olivera', '2004-10-12', 'lucia.olivera@correo.ucu.edu.uy', 092374897),
    (34892812, 'Gunther', 'German', '2017-07-21', 'gunther.german@correo.ucu.edu.uy', 093847232),
    (12938232, 'Roberto', 'McClane', '1998-09-08', 'roberto.mcclane@correo.ucu.edu.uy', 098738412),
    (43287298, 'Simba', 'Disney', '2005-03-14', 'simba.disney@correo.ucu.edu.uy', 098348321),
    (23498726, 'Haythor', 'Tilla', '2000-02-20', 'haythor.tilla@correo.ucu.edu.uy', 093827392),
    (23489102, 'Ba', 'Zurita', '2001-11-08', 'ba.zurita@correo.ucu.edu.uy', 099837223),
    (56738291, 'Estela', 'Garto', '2002-03-24', 'estela.garto@correo.ucu.edu.uy', 093829332),
    (56472192, 'Manuela', 'Guedez', '2005-01-18', 'manuela.guedez@correo.ucu.edu.uy', 093849234),
    (32494012, 'Lucía', 'Amor', '2004-05-21', 'lucia.amor@correo.ucu.edu.uy', 0983748293),
    (59427383, 'Fusun', 'Pepe', '1998-07-14', 'fusun.pepe@correo.ucu.edu.uy', 093847283),
    (28291389, 'Gladys', 'García', '1960-08-09', 'gladys.garcia@correo.ucu.edu.uy', 093821837),
    (38920121, 'Marcos', 'Benites', '2004-05-21', 'marcos.benites@correo.ucu.edu.uy', 093829123),
    (43726128, 'Esteban', 'Quito', '2003-08-11', 'esteban.quito@correo.ucu.edu.uy', 093829123),
    (39302012, 'Sombrerero', 'Loco', '2000-11-21', 'sombrerero.loco@correo.ucu.edu.uy', 093456934),
    (23903928, 'Mileva', 'Maric', '1875-12-19', 'mileva.maric@correo.ucu.edu.uy', 093829193),
    (12930932, 'Juan', 'Perezoso', '2002-12-03', 'juan.perezoso@correo.ucu.edu.uy', 094583123),
    (65738191, 'Roma', 'Vidal', '2003-09-26', 'roma.vidal@correo.ucu.edu.uy', 097845723);


INSERT INTO base_datos.lessons (instructor_ci, activity_id, shift_id, capacity) VALUES
    (54968022, 1, 1, 10),
    (59603358, 1, 2, 1),
    (59603358, 1, 3, 8),
    (54967822, 2, 1, 12),
    (54968022, 2, 2, 10),
    (54186632, 2, 3, 1),
    (54186632, 3, 1, 1),
    (54968992, 3, 2, 20),
    (59246687, 3, 3, 18);use base_datos;

INSERT INTO base_datos.activities (name, description, age_min,price) VALUES
    ('Snowmobile', 'High-speed adventure on snow trails', 21, 16000),
    ('Snowboard', 'Freestyle and downhill on snowy slopes', 18, 9000),
    ('Ski', 'Classic skiing for all experience levels', 18, 18000);

INSERT INTO base_datos.equipment (description, activity_id, price) VALUES
    ('Ski set (skis, boots, and poles)', 3, 6150.00),
    ('Snowboard set (board and boots)', 2, 8200.00),
    ('Snowmobile rental (2 hour)', 1, 9840.00),
    ('Protective helmet', 1, 1230.00),
    ('Protective helmet', 2, 1230.00),
    ('Protective helmet', 3, 1230.00),
    ('Snowmobile goggles', 1, 1025.00),
    ('Snowboard goggles', 2, 1025.00),
    ('Ski goggles', 3, 1025.00),
    ('Skis', 3,3690.00),
    ('Ski boots', 3,  2460.00),
    ('Ski poles', 3, 820.00),
    ('Snowboard', 2, 5740.00),
    ('Snowboard boots', 2, 2870.00);

INSERT INTO base_datos.shifts (name, starting_time, end_time) VALUES
    ('Matutino', '09:00:00', '11:00:00'),
    ('Mediodía', '12:00:00', '14:00:00'),
    ('Vespertino', '16:00:00', '18:00:00');

INSERT INTO base_datos.login (user, password) VALUES
    ('julian.bevc@correo.ucu.edu.uy', 'A1x$hFg9L*mQzS8p'),
    ('belen.tellechea@correo.ucu.edu.uy', 'R3t@5Df8Gh!lX9k2'),
    ('paulina.vidal@correo.ucu.edu.uy', 'G5y%Pz8X!wEr2Tn4'),
    ('lucia.olivera@correo.ucu.edu.uy', 'J6f#Qb9@LnX2Oe3z'),
    ('gunther.german@correo.ucu.edu.uy', 'Z8h&Wr2X!yHp9Lv6'),
    ('roberto.mcclane@correo.ucu.edu.uy', 'M3v!Tw7#YlR5Op2x'),
    ('simba.disney@correo.ucu.edu.uy', 'Q4x*Zl9!Rt5Uh3#k'),
    ('haythor.tilla@correo.ucu.edu.uy', 'L5v$Fh8@Jt2Wo6*q'),
    ('ba.zurita@correo.ucu.edu.uy', 'E7g#Pl3!Xo9Ht5$y'),
    ('estela.garto@correo.ucu.edu.uy', 'R2n!Mf8%Zl7Xv#3j'),
    ('manuela.guedez@correo.ucu.edu.uy', 'S9k@Yh4!Qb2Wm5#v'),
    ('lucia.amor@correo.ucu.edu.uy', 'H3t!Pz8#Lx6Wn9&y'),
    ('fusun.pepe@correo.ucu.edu.uy', 'D5l@Qy9$Wr2Tp8*v'),
    ('gladys.garcia@correo.ucu.edu.uy', 'X7k!Nv3%Zp5Jt#2w'),
    ('marcos.benites@correo.ucu.edu.uy', 'V2l@Rt9!Kp6Xo4#y'),
    ('esteban.quito@correo.ucu.edu.uy', 'U9m!Zt5%Ql3Jw@7x'),
    ('sombrerero.loco@correo.ucu.edu.uy', 'T4x#Jn8!Hp2Wl$3k'),
    ('mileva.maric@correo.ucu.edu.uy', 'B5y*Qn9!Mv3Wr#7x'),
    ('juan.perezoso@correo.ucu.edu.uy', 'C2z#Lf8!Xv6Rj%4y'),
    ('roma.vidal@correo.ucu.edu.uy', 'K9t@Wp4%Xl5Jy&8k'),
    ('armando.paredes@ucu.edu.uy', 'ArP@1234567890'),
    ('jonny.mebaño@ucu.edu.uy', 'JoM@0987654321'),
    ('chapu.zon@ucu.edu.uy', 'ChZ@5678901234'),
    ('elba.lazo@ucu.edu.uy', 'ElL@4567890123'),
    ('elsa.capunta@ucu.edu.uy', 'ElC@2345678901'),
    ('susana.horia@ucu.edu.uy', 'SuH@7890123456'),
    ('dolores.fuertes@ucu.edu.uy', 'DoF@8901234567'),
    ('admin@admin.ucu.edu.uy', '12345678');

INSERT INTO base_datos.administrators(email) VALUES
    ('admin@admin.ucu.edu.uy');

INSERT INTO base_datos.instructors (ci, name, lastname, email) VALUES
    (54968022, 'Armando', 'Paredes', 'armando.paredes@ucu.edu.uy'),
    (59603358, 'Jonny', 'Mebaño', 'jonny.mebaño@ucu.edu.uy'),
    (54967822, 'Chapu', 'Zon', 'chapu.zon@ucu.edu.uy'),
    (54186631, 'Elba', 'Lazo', 'elba.lazo@ucu.edu.uy'),
    (54186632, 'Elsa', 'Capunta', 'elsa.capunta@ucu.edu.uy'),
    (54968992, 'Susana', 'Horia', 'susana.horia@ucu.edu.uy'),
	(59246687, 'Dolores', 'Fuertes', 'dolores.fuertes@ucu.edu.uy');


INSERT INTO base_datos.students (ci, name, lastname, birthdate, email, phone_number) VALUES
    (54957902, 'Julián', 'Bevc', '2005-01-27', 'julian.bevc@correo.ucu.edu.uy', 092959305),
    (54789023, 'Belén', 'Tellechea', '2004-12-20', 'belen.tellechea@correo.ucu.edu.uy', 098763214),
    (56728902, 'Paulina', 'Vidal', '2004-09-22', 'paulina.vidal@correo.ucu.edu.uy', 097283918),
    (54627894, 'Lucía', 'Olivera', '2004-10-12', 'lucia.olivera@correo.ucu.edu.uy', 092374897),
    (34892812, 'Gunther', 'German', '2017-07-21', 'gunther.german@correo.ucu.edu.uy', 093847232),
    (12938232, 'Roberto', 'McClane', '1998-09-08', 'roberto.mcclane@correo.ucu.edu.uy', 098738412),
    (43287298, 'Simba', 'Disney', '2005-03-14', 'simba.disney@correo.ucu.edu.uy', 098348321),
    (23498726, 'Haythor', 'Tilla', '2000-02-20', 'haythor.tilla@correo.ucu.edu.uy', 093827392),
    (23489102, 'Ba', 'Zurita', '2001-11-08', 'ba.zurita@correo.ucu.edu.uy', 099837223),
    (56738291, 'Estela', 'Garto', '2002-03-24', 'estela.garto@correo.ucu.edu.uy', 093829332),
    (56472192, 'Manuela', 'Guedez', '2005-01-18', 'manuela.guedez@correo.ucu.edu.uy', 093849234),
    (32494012, 'Lucía', 'Amor', '2004-05-21', 'lucia.amor@correo.ucu.edu.uy', 0983748293),
    (59427383, 'Fusun', 'Pepe', '1998-07-14', 'fusun.pepe@correo.ucu.edu.uy', 093847283),
    (28291389, 'Gladys', 'García', '1960-08-09', 'gladys.garcia@correo.ucu.edu.uy', 093821837),
    (38920121, 'Marcos', 'Benites', '2004-05-21', 'marcos.benites@correo.ucu.edu.uy', 093829123),
    (43726128, 'Esteban', 'Quito', '2003-08-11', 'esteban.quito@correo.ucu.edu.uy', 093829123),
    (39302012, 'Sombrerero', 'Loco', '2000-11-21', 'sombrerero.loco@correo.ucu.edu.uy', 093456934),
    (23903928, 'Mileva', 'Maric', '1875-12-19', 'mileva.maric@correo.ucu.edu.uy', 093829193),
    (12930932, 'Juan', 'Perezoso', '2002-12-03', 'juan.perezoso@correo.ucu.edu.uy', 094583123),
    (65738191, 'Roma', 'Vidal', '2003-09-26', 'roma.vidal@correo.ucu.edu.uy', 097845723);


INSERT INTO base_datos.lessons (instructor_ci, activity_id, shift_id, capacity) VALUES
    (54968022, 1, 1, 10),
    (59603358, 1, 2, 1),
    (59603358, 1, 3, 8),
    (54967822, 2, 1, 12),
    (54968022, 2, 2, 10),
    (54186632, 2, 3, 1),
    (54186632, 3, 1, 1),
    (54968992, 3, 2, 20),
    (59246687, 3, 3, 18);