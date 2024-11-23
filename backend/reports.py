from flask import jsonify, request
from config import get_db_connection
from datetime import datetime, timedelta
from mysql.connector import Error

db = get_db_connection()


def reportsRoutes(app):
    @app.route('/reports', methods=['GET'])
    def getAllReports():
        try:
            cursor = db.cursor(dictionary=True)
            
            reports = {}
            queries = {
                "activity_revenue": "SELECT * FROM activity_revenue_view LIMIT 1",
                "activities_with_most_students": "SELECT * FROM activities_with_most_students LIMIT 1",
                "shifts_with_most_classes": "SELECT * FROM shifts_with_most_classes LIMIT 1"
            }

            for key, query in queries.items():
                cursor.execute(query)
                #reports[key] = cursor.fetchall()
                result = cursor.fetchall()

                for row in result:
                    for column, value in row.items():
                        if isinstance(value, datetime):
                            row[column] = value.isoformat()  
                        elif isinstance(value, timedelta):
                            row[column] = str(value)

                reports[key] = result

            return jsonify(reports), 200

        except Error as error:
            return jsonify({"error": str(error)}), 500

        finally:
            cursor.close()

    @app.route('/reports/activity_revenue', methods=['GET'])
    def getActivityRevenue():
        try:
            cursor = db.cursor(dictionary=True)
            cursor.execute("SELECT * FROM activity_revenue_view LIMIT 1")
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
            cursor.execute("SELECT * FROM activities_with_most_students LIMIT 1")
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
            cursor.execute("SELECT * FROM shifts_with_most_classes LIMIT 1")
            results = cursor.fetchall()

            for shift in results:
                for key, value in shift.items():
                    if isinstance(value, datetime):
                        shift[key] = value.isoformat()  
                    elif isinstance(value, timedelta):
                        shift[key] = str(value)

            return jsonify(results), 200
        except Error as error:
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()