from flask import jsonify, request
from datetime import datetime
from mysql.connector import Error
from config import get_db_connection

db = get_db_connection()

def rentRoutes(app):
    @app.route("/rents", methods=['GET'])
    def getAllRents():
        try:
            cursor = db.cursor(dictionary=True)
            cursor.execute("SELECT * FROM rent")
            rents = cursor.fetchall()
            return jsonify(rents), 200
        except Error as error:
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()

    @app.route("/rents/new/<int:student_ci>", methods=['POST'])
    def postRent(student_ci):
        cursor = db.cursor(dictionary=True)
        equipment_id = request.json.get('equipment_id')
        date = request.json.get('date')

        try:
            cursor.execute("""
                INSERT INTO rent (student_ci, equipment_id, date) 
                VALUES (%s, %s, %s)
            """, (student_ci, equipment_id, date))
            db.commit()
            return jsonify({"message": "Rent created successfully"}), 201

        except Error as error:
            db.rollback()
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()


    @app.route("/rents/delete", methods=['DELETE'])
    def deleteRent():
        cursor = db.cursor(dictionary=True)
        student_ci = request.json.get('student_ci')
        equipment_id = request.json.get('equipment_id')
        date = request.json.get('date')

        try:
            cursor.execute("""
                DELETE FROM rent 
                WHERE student_ci = %s AND equipment_id = %s AND date = %s
            """, (student_ci, equipment_id, date))
            
            if cursor.rowcount == 0:
                return jsonify({"error": "Rent not found"}), 404

            db.commit()
            return jsonify({"message": "Rent deleted successfully"}), 200

        except Error as error:
            db.rollback()
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()
