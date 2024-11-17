from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector
from mysql.connector import Error
from datetime import datetime

app = Flask(_name_)
cors = CORS(app, origins='http://localhost:5173') # con el * se acepta todas las 


db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="rootpassword",
    database="base_datos"
)

@app.route("/")
def prueba():
    return "holis mundis"

# Students
@app.route("/students/enrollments/<int:id>", methods=['GET'])
def getStudentEnrollments(id):
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM enrollments where student_ci=%s", (id,))
    studentEnrollments = cursor.fetchall()
    cursor.close()
    return jsonify(studentEnrollments)

@app.route("/students/rents/<int:id>", methods=['GET'])
def getStudentRents(id):
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM rent where student_ci=%s", (id,))
    studentRents = cursor.fetchall()
    cursor.close()
    return jsonify(studentRents)

@app.route("/students/<int:id>", methods=['GET'])
def getStudent(id):
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM students where ci=%s", (id,))
    student = cursor.fetchall()
    cursor.close()
    enrollments = getStudentEnrollments(id)
    rents = getStudentRents(id)
    return jsonify(student), enrollments, rents




# Instructors
@app.route("/instructors", methods=['GET'])
def getAllInstructors():
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM instructors")
    instructors = cursor.fetchall()
    cursor.close()
    return jsonify(instructors)

@app.route("/instructors/lessons/<int:id>", methods=['GET'])
def getInstructorLessons(id):
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM enrollments where instructor_ci=%s", (id,))
    instructorLessons = cursor.fetchall()
    cursor.close()
    return jsonify(instructorLessons)

@app.route("/instructors/<int:id>", methods=['GET'])
def getInstructor(id):
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM instructors where ci=%s", (id,))
    instructor = cursor.fetchall()
    cursor.close()
    lessons = getInstructorLessons(id)
    return jsonify(instructor), lessons

@app.route("/instructors/register", methods=['POST'])
def postInstructor():
    cursor = db.cursor(dictionary=True)
    ci = request.json['ci']
    name = request.json['name']
    lastname = request.json['lastname']

    try:
        cursor.execute("INSERT INTO instructors (ci, name, lastname) VALUES (%s, %s, %s)", 
                       (ci, name, lastname))
        db.commit()
        return jsonify({"message": "Instructor registered successfully"}), 201
    except Error as error:
        db.rollback()
        return jsonify({"error": str(error)}), 500
    finally:
        cursor.close()


@app.route("/instructors/delete/<int:id>", methods=['DELETE'])
def deleteInstructor(id):
    cursor = db.cursor(dictionary=True)
    try:
        cursor.execute("DELETE FROM instructor WHERE ci = %s", (id,))
        db.commit()
        return jsonify({"message": "Instructor deleted successfully"})
    except Error as error:
        db.rollback()
        return jsonify({"error": str(error)}), 500
    finally:
        cursor.close()

@app.route("/instructors/edit/<int:id>", methods=['PUT'])
def editInstructor(id):
    cursor = db.cursor(dictionary=True)
    name = request.json['name']
    lastname = request.json['lastname']

    try:
        cursor.execute("UPDATE instructors SET name = %s, lastname = %s WHERE ci = %s",
                       (name, lastname, id))
        db.commit()
        return jsonify({"message": "Instructor updated successfully"})
    except Error as error:
        db.rollback()
        return jsonify({"error": str(error)}), 500
    finally:
        cursor.close()




# Lessons    
@app.route("/lessons", methods=['GET'])
def getAllLessons():
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM lessons")
    lessons = cursor.fetchall()
    cursor.close()
    return jsonify(lessons)

@app.route("/lessons/<int:id>", methods=['GET'])
def getSpecificLesson(id):
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM lesson where id=%s", (id,))
    lesson = cursor.fetchall()
    cursor.close()
    return jsonify(lesson)

@app.route("/lessons/activity/<int:id>", methods=['GET'])
def getLessonByActivity(id):
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM lesson where activity_id=%s", (id,))
    lessons = cursor.fetchall()
    cursor.close()
    return jsonify(lessons)

@app.route("/lessons/edit/<int:id>", methods=['PUT'])
def editLesson(id):
    cursor = db.cursor(dictionary=True)
    instructor = request.json['instructor']
    activity = request.json['activity']
    shift = request.json['shift']
    capacity = request.json['capacity']

    try:
        current_time = datetime.now().time()
        
        cursor.execute("SELECT starting_time, end_time FROM shifts WHERE id = %s", (shift,))
        shift_data = cursor.fetchone()
        
        if not shift_data:
            return jsonify({"error": "Shift not found"}), 404
        
        shift_start = shift_data['start_time']
        shift_end = shift_data['end_time']

        # Verifica si la hora actual está dentro del rango del turno.
        if shift_start <= current_time <= shift_end:
            return jsonify({"error": "Cannot update during the specified shift"}), 403

        cursor.execute("UPDATE instructors SET instructor_ci = %s, activity_id = %s, shift_id = %s, capacity = %s WHERE id = %s",
                       (instructor, activity, shift, capacity, id))
        db.commit()
        return jsonify({"message": "Lesson updated successfully"})
    except Error as error:
        db.rollback()
        return jsonify({"error": str(error)}), 500
    finally:
        cursor.close()




# Enrollments
@app.route("/enrollments", methods=['GET'])
def getAllEnrollments():
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM enrollments union enrollments_without_equipment")
    lessons = cursor.fetchall()
    cursor.close()
    return jsonify(lessons)

@app.route("/enrollments/new/<int:id>", methods=['POST'])
def postEnrollment(id):
    cursor = db.cursor(dictionary=True)
    lesson_id = request.json['lesson_id']
    date = request.json['date']

    try: 
        # Se obtiene el turno de la clase a la que se quiere inscribir
        cursor.execute("""
            SELECT shifts.starting_time, s.end_time 
            FROM lesson
            JOIN shifts ON lesson.shift_id = shift.id
            WHERE lesson.id = %s
        """, (lesson_id,))
        newEnrollmentShift = cursor.fetchone()

        if not newEnrollmentShift:
            return jsonify({"error": "Enrollment shift not found"})
        
        newStartingTime = newEnrollmentShift['starting_time']
        newEndTime = newEnrollmentShift['end_time']

        # Inscripciones existentes del estudiante para ese día
        cursor.execute("""
            SELECT shifts.starting_time, shifts.end_time 
            FROM enrollments
            JOIN lessons ON enrollments.lesson_id = lesson.id
            JOIN shifts ON lesson.shift_id = shifts.id
            WHERE enrollments.student_ci = %s AND enrollments.date = %s
        """, (id, date))
        existingInscriptions = cursor.fetchall()

        # Verifica solapamiento de horarios
        for shift in existingInscriptions:
            existing_start_time = shift['starting_time']
            existing_end_time = shift['end_time']
            
            if not (newEndTime <= existing_start_time or newStartingTime >= existing_end_time):
                return jsonify({"error": "Schedule conflict: already enrolled in another class at the same time"}), 409


        cursor.execute("INSERT INTO enrollments (ci, lesson_id, date) VALUES (%s, %s, %s)", 
                       (id, lesson_id, date))
        db.commit()
        return jsonify({"message": "Student registered successfully"}), 201
    except Error as error:
        db.rollback()
        return jsonify({"error": str(error)}), 500
    finally:
        cursor.close()


@app.route("/enrollments/delete/<int:id>", methods=['DELETE'])
def deleteEnrollment(id):
    cursor = db.cursor(dictionary=True)
    lesson_id = request.json['lesson_id']
    date = request.json['date']

    try:
        cursor.execute("DELETE FROM enrollments where student_ci = %s AND lesson_id = %s AND date = %s", (id, lesson_id, date))
        db.commit()
        return jsonify({"message": "Enrollment deleted successfully"}), 201
    except Error as error:
        db.rollback()
        return jsonify({"error": str(error)}), 500
    finally:
        cursor.close()


if _name_ == "_main_":
    app.run(port=8080)