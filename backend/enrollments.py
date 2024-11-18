from flask import jsonify, request
from database import get_db_connection

db = get_db_connection()

def register_enrollments_routes(app):
    @app.route("/enrollments", methods=['GET'])
    def getAllEnrollments():
        try:
            cursor = db.cursor(dictionary=True)
            cursor.execute("SELECT * FROM enrollments union enrollments_without_equipment")
            lessons = cursor.fetchall()
            cursor.close()
            return jsonify(lessons)
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
                SELECT shifts.starting_time, shifts.end_time, lesson.capacity, 
                    (SELECT COUNT(*) FROM enrollments WHERE lesson_id = %s) AS current_enrollments
                FROM lesson
                JOIN shifts ON lesson.shift_id = shifts.id
                WHERE lesson.id = %s
            """, (lesson_id, lesson_id))
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
                JOIN lesson ON enrollments.lesson_id = lesson.id
                JOIN shifts ON lesson.shift_id = shifts.id
                WHERE enrollments.student_ci = %s AND enrollments.date = %s
            """, (id, date))
            existing_inscriptions = cursor.fetchall()

            # Verifica solapamiento de horarios
            for shift in existing_inscriptions:
                existing_start_time = shift['starting_time']
                existing_end_time = shift['end_time']
                
                if not (new_end_time <= existing_start_time or new_start_time >= existing_end_time):
                    return jsonify({"error": "Schedule conflict: already enrolled in another class at the same time"}), 409


            # Inscripción
            cursor.execute("INSERT INTO enrollments (student_ci, lesson_id, date) VALUES (%s, %s, %s)", 
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