use base_datos;

CREATE VIEW activity_revenue_view AS
SELECT 
    a.id AS activity_id,
    a.name AS activity_name,
    SUM(a.price) + IFNULL(SUM(eq.price), 0)  AS total_revenue 
FROM 
    base_datos.activities a
LEFT JOIN 
    base_datos.lesson l ON a.id = l.activity_id
LEFT JOIN 
    base_datos.enrollments e ON l.id = e.lesson_id
LEFT JOIN 
    base_datos.rent r ON r.student_ci = e.student_ci
LEFT JOIN 
    base_datos.equipment eq ON eq.id = r.equipment_id
GROUP BY 
    a.id, a.name
ORDER BY 
    total_revenue DESC;
    


CREATE VIEW activities_with_most_students AS
SELECT 
    a.id AS activity_id,
    a.name AS activity_name,
    COUNT(e.student_ci)  AS total_students
FROM 
    base_datos.activities a
JOIN 
    base_datos.lesson l ON a.id = l.activity_id
LEFT JOIN 
    base_datos.enrollments e ON l.id = e.lesson_id
GROUP BY 
    a.id, a.name
ORDER BY 
    total_students DESC;



CREATE VIEW shifts_with_most_classes AS
SELECT 
    s.id AS shift_id,
    s.starting_time AS shift_start_time,
    s.end_time AS shift_end_time,
    COUNT(l.id) AS total_classes
FROM 
    base_datos.shifts s
LEFT JOIN 
    base_datos.lesson l ON s.id = l.shift_id
GROUP BY 
    s.id, s.starting_time, s.end_time
ORDER BY 
    total_classes DESC;


