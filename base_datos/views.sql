use base_datos;

CREATE VIEW activity_revenue_view AS
SELECT 
    a.id AS activity_id,
    a.name AS activity_name,
    COUNT(e.student_ci) * a.price AS activity_revenue,
    IFNULL(SUM(eq.price), 0) AS equipment_revenue,
    (COUNT(e.student_ci) * a.price + IFNULL(SUM(eq.price), 0)) AS total_revenue
FROM 
    base_datos.activities a
LEFT JOIN 
    base_datos.lessons l ON a.id = l.activity_id
LEFT JOIN 
    base_datos.enrollments e ON l.id = e.lesson_id
LEFT JOIN 
    base_datos.rent r ON e.student_ci = r.student_ci
LEFT JOIN 
    base_datos.equipment eq ON r.equipment_id = eq.id
GROUP BY 
    a.id, a.name, a.price
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
    base_datos.lessons l ON a.id = l.activity_id
LEFT JOIN 
    base_datos.enrollments e ON l.id = e.lesson_id
GROUP BY 
    a.id, a.name
ORDER BY 
    total_students DESC;



CREATE VIEW shifts_with_most_classes AS
SELECT 
    s.id AS shift_id,
    s.name AS shift_name,
    s.starting_time AS shift_start_time,
    s.end_time AS shift_end_time,
    COUNT(lt.lesson_id) AS total_dictated_classes
FROM 
    base_datos.shifts s
LEFT JOIN 
    base_datos.lessons l ON s.id = l.shift_id
LEFT JOIN 
    base_datos.lessonTracking lt ON l.id = lt.lesson_id AND lt.dictated = 1
GROUP BY 
    s.id, s.name, s.starting_time, s.end_time
ORDER BY 
    total_dictated_classes DESC;



