from flask import jsonify, request
from config import get_db_connection
from datetime import datetime, timedelta, time
from mysql.connector import Error

db = get_db_connection()


def getLessonTrackByLesson(lessonID):
    try:
        cursor = db.cursor(dictionary=True)
        cursor.execute("SELECT * FROM lessonTracking WHERE lesson_id=%s", (lessonID,))
        tracking = cursor.fetchone()

        if not tracking:
            return jsonify({"error": "Lesson tracking not found"}), 404

        return jsonify(tracking), 200
    except Error as error:
        return jsonify({"error": str(error)}), 500
    finally:
        cursor.close()


def getLessonTrackByDate(date):
    try:
        cursor = db.cursor(dictionary=True)
        cursor.execute("SELECT * FROM lessonTracking WHERE original_date=%s", (date,))
        tracking = cursor.fetchone()

        if not tracking:
            return jsonify({"error": "Lesson tracking not found"}), 404

        return jsonify(tracking), 200
    except Error as error:
        return jsonify({"error": str(error)}), 500
    finally:
        cursor.close()


def lessonTrackingRoutes(app):

    app.route("/lessonTrack", methods=['GET'])
    def getLessonTracking():
        try:
            cursor = db.cursor(dictionary=True)
            cursor.execute("SELECT * FROM lessonTracking")
            lessonTrack = cursor.fetchall()
            return jsonify(lessonTrack), 200
        except Error as error:
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()

    
    app.route("lessonTrack/update", methods=['PUT'])
    def updateLessonTrack():
        try:
            cursor = db.cursor(dictionary=True)
            lesson_id = request.json['lesson_id']
            date = request.json['date']

            cursor.execute("UPDATE lessonTracking SET dictated = 1 WHERE lesson_id = %s AND date = date",
                            (lesson_id, date))
            db.commit()
            return jsonify({"message": "Lesson tracking updated successfully"}), 200
        except Error as error:
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()
