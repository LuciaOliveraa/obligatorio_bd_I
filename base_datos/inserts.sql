use base_datos;

DELETE from base_datos.activities;

INSERT INTO base_datos.activities (name, description, age_min,price) VALUES
    ('Snowmobile', 'High-speed adventure on snow trails', 21, 16000),
    ('Snowboard', 'Freestyle and downhill on snowy slopes', 18, 9000),
    ('Sky', 'Classic skiing for all experience levels', 18, 18000);

DELETE from base_datos.equipment;

INSERT INTO base_datos.equipment (description, price) VALUES
    ('Ski set (skis, boots, and poles)', 6150.00),
    ('Snowboard set (board and boots)', 8200.00),
    ('Snowmobile rental (2 hour)', 9840.00),
    ('Protective helmet', 1230.00),
    ('Ski goggles', 1025.00),
    ('Skis', 3690.00),
    ('Ski boots', 2460.00),
    ('Ski poles', 820.00),
    ('Snowboard', 5740.00),
    ('Snowboard boots', 2870.00);

INSERT INTO base_datos.instructors (ci, name, lastname) VALUES
    (54968022, 'Armando', 'Paredes'),
    (59603358, 'Jonny', 'Mebaño'),
    (54967822, 'Chapu', 'Zon'),
    (54186631, 'Elba', 'Lazo'),
    (54186632, 'Elsa', 'Capunta'),
    (54968992, 'Susana', 'Horia'),
	(59246687, 'Dolores', 'Fuertes');

INSERT INTO base_datos.shifts (starting_time, end_time) VALUES
    ('09:00:00', '11:00:00'),
    ('12:00:00', '14:00:00'),
    ('16:00:00', '18:00:00');

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

INSERT INTO base_datos.login (ci, password) VALUES
    (54957902, 'A1x$hFg9L*mQzS8p'),
    (54789023, 'R3t@5Df8Gh!lX9k2'),
    (56728902, 'G5y%Pz8X!wEr2Tn4'),
    (54627894, 'J6f#Qb9@LnX2Oe3z'),
    (34892812, 'Z8h&Wr2X!yHp9Lv6'),
    (12938232, 'M3v!Tw7#YlR5Op2x'),
    (43287298, 'Q4x*Zl9!Rt5Uh3#k'),
    (23498726, 'L5v$Fh8@Jt2Wo6*q'),
    (23489102, 'E7g#Pl3!Xo9Ht5$y'),
    (56738291, 'R2n!Mf8%Zl7Xv#3j'),
    (56472192, 'S9k@Yh4!Qb2Wm5#v'),
    (32494012, 'H3t!Pz8#Lx6Wn9&y'),
    (59427383, 'D5l@Qy9$Wr2Tp8*v'),
    (28291389, 'X7k!Nv3%Zp5Jt#2w'),
    (38920121, 'V2l@Rt9!Kp6Xo4#y'),
    (43726128, 'U9m!Zt5%Ql3Jw@7x'),
    (39302012, 'T4x#Jn8!Hp2Wl$3k'),
    (23903928, 'B5y*Qn9!Mv3Wr#7x'),
    (12930932, 'C2z#Lf8!Xv6Rj%4y'),
    (65738191, 'K9t@Wp4%Xl5Jy&8k');

INSERT INTO base_datos.lesson (instructor_ci, activity_id, shift_id, capacity) VALUES
    (54968022, 1, 1, 10),
    (59603358, 1, 2, 1),
    (59603358, 1, 3, 8),
    (54967822, 2, 1, 12),
    (54968022, 2, 2, 10),
    (54186632, 2, 3, 1),
    (54186632, 3, 1, 1),
    (54968992, 3, 2, 20),
    (59246687, 3, 3, 18);