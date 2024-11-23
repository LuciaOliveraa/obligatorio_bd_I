from flask import jsonify, request
from config import get_db_connection
from datetime import datetime, timedelta
from mysql.connector import Error

db = get_db_connection()

def shiftsRoutes(app):
    @app.route("/shifts", methods=['GET'])
    def getAllShifts():
        try:
            cursor = db.cursor(dictionary=True)
            cursor.execute("SELECT * FROM shifts")
            shifts = cursor.fetchall()

            for shift in shifts:
                for key, value in shift.items():
                    if isinstance(value, datetime):
                        shift[key] = value.isoformat()  
                    elif isinstance(value, timedelta):
                        shift[key] = str(value) 

            return jsonify(shifts), 200
        except Error as error:
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()

    @app.route("/shifts/<int:id>", methods=['GET'])
    def getShift(id):
        try: 
            cursor = db.cursor(dictionary=True)
            cursor.execute("SELECT * FROM shifts where id=%s", (id,))
            shift = cursor.fetchone()

            if not shift:
                    return jsonify({"error": "  Shift not found"}), 404

            for key, value in shift.items():
                    if isinstance(value, datetime):
                        shift[key] = value.isoformat()  
                    elif isinstance(value, timedelta):
                        shift[key] = str(value) 

            return jsonify(shift), 200
        except Error as error:
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()

    @app.route("/shifts/add", methods=['POST'])
    def postShift():
        cursor = db.cursor(dictionary=True)
        starting_time = request.json['starting_time']
        end_time = request.json['end_time']
        name = request.json['name']

        try:
            starting_time_obj = datetime.strptime(starting_time, '%H:%M:%S')
            end_time_obj = datetime.strptime(end_time, '%H:%M:%S')
        except ValueError:
            return jsonify({"error": "The time format must be HH:MM:SS"}), 400

        try:
            cursor.execute("INSERT INTO shifts (name, starting_time, end_time) VALUES (%s, %s, %s)", 
                        (name, starting_time, end_time))
            db.commit()
            return jsonify({"message": "Shift added successfully"}), 201
        except Error as error:
            db.rollback()
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()

    @app.route("/shifts/delete/<int:id>", methods=['DELETE'])
    def deleteShift(id):
        cursor = db.cursor(dictionary=True)
        try:
            cursor.execute("DELETE FROM shifts WHERE id = %s", (id,))
            db.commit()
            return jsonify({"message": "Shift deleted successfully"}), 201
        except Error as error:
            db.rollback()
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()

    @app.route("/shifts/edit/<int:id>", methods=['PUT'])
    def editShift(id):
        cursor = db.cursor(dictionary=True)
        starting_time = request.json['starting_time']
        end_time = request.json['end_time']
        name = request.json['name']

        try:
            starting_time_obj = datetime.strptime(starting_time, '%H:%M:%S')
            end_time_obj = datetime.strptime(end_time, '%H:%M:%S')
        except ValueError:
            return jsonify({"error": "The time format must be HH:MM:SS"}), 400

        try:
            cursor.execute("UPDATE shifts SET name = %s, starting_time = %s, end_time = %s  WHERE id = %s",
                        (name, starting_time, end_time, id))
            db.commit()
            return jsonify({"message": "Shift updated successfully"}), 201
        except Error as error:
            db.rollback()
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()