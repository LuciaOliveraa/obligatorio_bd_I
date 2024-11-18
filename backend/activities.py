from flask import jsonify, request
from database import get_db_connection

db = get_db_connection()


def register_activities_routes(app):
    @app.route('/activities', methods=['GET'])
    def getAllActivities():
        try:
            cursor = db.cursor(dictionary=True)
            cursor.execute("SELECT * FROM activities")
            activities = cursor.fetchall()
            return jsonify(activities), 200
        except Error as error:
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()

    @app.route('/activities/<int:id>', methods=['GET'])
    def getActivity(id):
        try: 
            cursor = db.cursor(dictionary=True)
            cursor.execute("SELECT * FROM activities where id=%s", (id,))
            activity = cursor.fetchone()
            return jsonify(activity), 200
        except Error as error:
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()

    @app.route('/activities/edit/<int:id>', methods=['PUT'])
    def editActivity(id):
        cursor = db.cursor(dictionary=True)
        description = request.json['description']
        age_min = request.json['age_min']
        price = request.json['price']

        try:
            if age_min < 18:
                return jsonify({"error": "age_min must be greater than or equal to 18"}), 400

            cursor.execute("UPDATE activities SET description = %s, age_min = %s, price = %s WHERE id = %s",
                        (description, age_min, price, id))
            db.commit()
            return jsonify({"message": "Activity updated successfully"})
        except Error as error:
            db.rollback()
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()