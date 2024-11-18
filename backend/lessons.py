from flask import jsonify, request
from database import get_db_connection
from datetime import datetime

db = get_db_connection()

def register_lessons_routes(app):
    @app.route("/lessons", methods=['GET'])
    def getAllLessons():
        try:
            cursor = db.cursor(dictionary=True)
            cursor.execute("SELECT * FROM lessons")
            lessons = cursor.fetchall()
            return jsonify(lessons), 200
        except Error as error:
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()


    @app.route("/lessons/<int:id>", methods=['GET'])
    def getLesson(id):
        try:
            cursor = db.cursor(dictionary=True)
            cursor.execute("SELECT * FROM lesson where id=%s", (id,))
            lesson = cursor.fetchone()
            return jsonify(lesson), 200
        except Error as error:
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()



    @app.route("/lessons/activity/<int:id>", methods=['GET'])
    def getLessonByActivity(id):
        try:
            cursor = db.cursor(dictionary=True)
            cursor.execute("SELECT * FROM lesson where activity_id=%s", (id,))
            lessons = cursor.fetchall()
            return jsonify(lessons), 200
        except Error as error:
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()


    @app.route("/lessons/edit/<int:id>", methods=['PUT'])
    def editLesson(id):
        cursor = db.cursor(dictionary=True)
        instructor_ci = request.json['instructor_ci']
        activity_id = request.json['activity_id']
        shift_id = request.json['shift_id']
        capacity = request.json['capacity']

        try:
            current_time = datetime.now().time()
            
            cursor.execute("SELECT starting_time, end_time FROM shifts WHERE id = %s", (shift_id,))
            shift_data = cursor.fetchone()
            
            if not shift_data:
                return jsonify({"error": "Shift not found"}), 404
            
            shift_start = shift_data['start_time']
            shift_end = shift_data['end_time']

            # Verifica si la hora actual está dentro del rango del turno.
            if shift_start <= current_time <= shift_end:
                return jsonify({"error": "Cannot update during the specified shift"}), 403


            # Verifica si el instructor ya está asignado a otra clase en el mismo turno
            cursor.execute("""
                SELECT id 
                FROM lesson 
                WHERE instructor_ci = %s AND shift_id = %s AND id != %s
            """, (instructor_ci, shift_id, id))
            
            conflicting_lesson = cursor.fetchone()
            
            if conflicting_lesson:
                return jsonify({"error": "Instructor is already teaching another class in this shift"}), 409


            cursor.execute("UPDATE instructors SET instructor_ci = %s, activity_id = %s, shift_id = %s, capacity = %s WHERE id = %s",
                        (instructor_ci, activity_id, shift_id, capacity, id))
            db.commit()
            return jsonify({"message": "Lesson updated successfully"})
        except Error as error:
            db.rollback()
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()