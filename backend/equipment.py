from flask import jsonify, request
from config import get_db_connection
from mysql.connector import Error

db = get_db_connection()


def equipmentRoutes(app):
    @app.route('/equipment', methods=['GET'])
    def getAllEquipment():
        try:
            cursor = db.cursor(dictionary=True)
            cursor.execute("SELECT * FROM equipment")
            equipment = cursor.fetchall()
            return jsonify(equipment), 200
        except Error as error:
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()

    @app.route('/equipment/activity/<int:id>', methods=['GET'])
    def getEquipmentByActivity(id):
        try:
            cursor = db.cursor(dictionary=True)
            cursor.execute("SELECT * FROM equipment where activity_id=%s", (id,))
            equipment = cursor.fetchall()

            if not equipment:
                    return jsonify({"error": "  Equipment not found"}), 404

            return jsonify(equipment), 200
        except Error as error:
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()


    @app.route('/equipment/<int:id>', methods=['GET'])
    def getEquipment(id):
        try: 
            cursor = db.cursor(dictionary=True)
            cursor.execute("SELECT * FROM equipment where id=%s", (id,))
            equipment = cursor.fetchone() 

            if not equipment:
                    return jsonify({"error": "  Equipment not found"}), 404
                    
            return jsonify(equipment), 200
        except Error as error:
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()

    @app.route('/equipment/edit/<int:id>', methods=['PUT'])
    def editEquipment(id):
        cursor = db.cursor(dictionary=True)
        description = request.json['description']
        price = request.json['price']

        try:
            cursor.execute("UPDATE equipment SET description = %s, price = %s WHERE id = %s",
                        (description, price, id))
            db.commit()
            return jsonify({"message": "Equipment updated successfully"}), 200
        except KeyError as e:
            return jsonify({"error": f"Missing key: {str(e)}"}), 400
        except Error as error:
            db.rollback()
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()