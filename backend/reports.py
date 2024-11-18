from flask import jsonify, request
from config import get_db_connection

db = get_db_connection()


def reportsRoutes(app):
    @app.route('/reports', methods=['GET'])
    def getAllReports():
        try:
            cursor = db.cursor(dictionary=True)
            
            reports = {}
            queries = {
                "activity_revenue": "SELECT * FROM activity_revenue_view",
                "activities_with_most_students": "SELECT * FROM activities_with_most_students",
                "shifts_with_most_classes": "SELECT * FROM shifts_with_most_classes"
            }

            for key, query in queries.items():
                cursor.execute(query)
                reports[key] = cursor.fetchall()

            return jsonify(reports), 200

        except Error as error:
            return jsonify({"error": str(error)}), 500

        finally:
            cursor.close()

    @app.route('/reports/activity_revenue', methods=['GET'])
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

    @app.route('/reports/activities_with_most_students', methods=['GET'])
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

    @app.route('/reports/shifts_with_most_classes', methods=['GET'])
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