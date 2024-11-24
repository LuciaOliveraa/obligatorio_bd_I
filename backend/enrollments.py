from flask import jsonify, request
from config import get_db_connection
from datetime import datetime, timedelta, time
from mysql.connector import Error

db = get_db_connection()

def enrollmentsRoutes(app):
    @app.route("/enrollments", methods=['GET'])
    def getAllEnrollments():
        try:
            cursor = db.cursor(dictionary=True)
            cursor.execute("SELECT * FROM enrollments")
            enrollments = cursor.fetchall()
            return jsonify(enrollments), 200
        except Error as error:
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()

    @app.route("/enrollments/<int:id>", methods=['GET'])
    def getEnrollmentsByStudent():
        try:
            cursor = db.cursor(dictionary=True)
            cursor.execute("SELECT * FROM enrollments WHERE student_ci=%s", (id,))
            enrollments = cursor.fetchall()

            if not enrollments:
                return jsonify({"error": "  Enrollments not found"}), 404

            return jsonify(enrollments), 200
        except Error as error:
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()

    @app.route("/enrollments/<int:lessonId>/<date>", methods=['GET'])
    def getEnrollmentsByLessonDate(lessonId, date):
        try:
            cursor = db.cursor(dictionary=True)

            date = datetime.strptime(date, "%Y-%m-%d").date()

            cursor.execute("SELECT enrollments.students_ci, students.name, students.lastname FROM enrollments JOIN students on enrollments.students_ci = students.ci WHERE lesson_id=%s AND date=%s" , (lessonId, date,))
            enrollments = cursor.fetchall()

            if not enrollments:
                return jsonify({"error": "  Enrollments not found"}), 404

            return jsonify(enrollments), 200
        except Error as error:
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()

    @app.route("/enrollments/new/<int:id>", methods=['POST'])
    def postEnrollment(id):
        cursor = db.cursor(dictionary=True)
        lesson_id = request.json['lesson_id']
        date = request.json['date']

        try: 
            # Obtiene datos de la clase a la que se quiere inscribir
            cursor.execute("""
                SELECT shifts.starting_time, shifts.end_time, lessons.capacity,
                    (SELECT COUNT(*) FROM enrollments WHERE lesson_id = %s) AS current_enrollments
                FROM lessons
                JOIN shifts ON lessons.shift_id = shifts.id
                WHERE lessons.id = %s
            """, (lesson_id, lesson_id,))
            lesson_data = cursor.fetchone()

            if not lesson_data:
                return jsonify({"error": "Lesson not found"}), 404
            
            new_start_time = lesson_data['starting_time']
            new_end_time = lesson_data['end_time']
            capacity = lesson_data['capacity']
            current_enrollments = lesson_data['current_enrollments']

            # Verificaa capacidad suficiente para inscripción
            if current_enrollments >= capacity:
                return jsonify({"error": "Lesson capacity exceeded"}), 403

            # Inscripciones existentes del estudiante para el mismo día
            cursor.execute("""
                SELECT shifts.starting_time, shifts.end_time 
                FROM enrollments
                JOIN lessons ON enrollments.lesson_id = lessons.id
                JOIN shifts ON lessons.shift_id = shifts.id
                WHERE enrollments.student_ci = %s AND enrollments.date = %s
            """, (id, date))

            existing_inscriptions = cursor.fetchall()

            # Verifica solapamiento de horarios
            for shift in existing_inscriptions:
                existing_start_time = shift['starting_time']
                existing_end_time = shift['end_time']
                
                if not (new_end_time <= existing_start_time or new_start_time >= existing_end_time):
                    return jsonify({"error": "Schedule conflict: already enrolled in another class at the same time"}), 409


            # Busca edad estudiante
            cursor.execute("""
                SELECT students.birthdate FROM enrollments JOIN students ON students.ci = enrollments.student_ci
                        WHERE students.ci = %s
                           """, (id,))
            
            birthdate = cursor.fetchone()
            
            if not birthdate:
                return jsonify({"error": "Birthdate not found"}), 404
            
            # Busca edad mínima 
            cursor.execute("""
                SELECT activities.age_min 
                FROM lessons
                JOIN activities ON lessons.activity_id = activities.id
                WHERE lessons.id = %s
            """, (lesson_id,))
            age_min = cursor.fetchone()

            if not age_min:
                return {"message": "Actividad no encontrada para esta lección."}, 404

            
            birthdate = birthdate[0]
            current_date = datetime.now().date()
    
            # Calculamos la edad
            age = current_date.year - birthdate.year - ((current_date.month, current_date.day) < (birthdate.month, birthdate.day))
            
            # Maneja restricción edad de estudiante
            if age < age_min:
                return {"message": f"El estudiante no cumple con la edad mínima requerida ({age_min} años) para esta actividad."}, 400


            # Inscripción
            cursor.execute("INSERT INTO enrollments (student_ci, lesson_id, date) VALUES (%s, %s, %s)", 
                        (id, lesson_id, date))
            db.commit()
            return jsonify({"message": "Student successfully enrolled"}), 201

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