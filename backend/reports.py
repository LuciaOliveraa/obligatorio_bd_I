from flask import jsonify, request
from database import get_db_connection

db = get_db_connection()


def register_reports_routes(app):
    @app.route('/activity_revenue', methods=['GET'])
    def getActivityRevenue():
        try:
            cursor = db.cursor(dictionary=True)
            cursor.execute("SELECT * FROM activity_revenue_view")
            result = cursor.fetchall()
            return jsonify(result), 200
        except Error as error:
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()

    @app.route('/activities_with_most_students', methods=['GET'])
    def getActivitiesWithMostStudents():
        try:
            cursor = db.cursor(dictionary=True)
            cursor.execute("SELECT * FROM activities_with_most_students")
            result = cursor.fetchall()
            return jsonify(result), 200
        except Error as error:
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()

    @app.route('/shifts_with_most_classes', methods=['GET'])
    def getShiftsWithMostClasses():
        try:
            cursor = db.cursor(dictionary=True)
            cursor.execute("SELECT * FROM shifts_with_most_classes")
            result = cursor.fetchall()
            return jsonify(result), 200
        except Error as error:
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()