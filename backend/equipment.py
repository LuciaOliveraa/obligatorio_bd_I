from flask import jsonify, request
from database import get_db_connection

db = get_db_connection()


def register_equipment_routes(app):
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

    @app.route('equipment/activity/<int:id>', methods=['GET'])
    def getEquipmentByActivity(id):
        try:
            cursor = db.cursor(dictionary=True)
            cursor.execute("SELECT * FROM equipment  where activity_id=%s", (id,))
            equipment = cursor.fetchall()
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
        activity_id = request.json['activity_id']

        try:
            cursor.execute("UPDATE equipment SET description = %s, price = %s, activity_id = %s WHERE id = %s",
                        (description, price, activity_id, id))
            db.commit()
            return jsonify({"message": "Equipment updated successfully"})
        except Error as error:
            db.rollback()
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()