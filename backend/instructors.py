from flask import jsonify, request
from database import get_db_connection

db = get_db_connection()

def register_instructors_routes(app):
    @app.route("/instructors", methods=['GET'])
    def getAllInstructors():
        try:
            cursor = db.cursor(dictionary=True)
            cursor.execute("SELECT * FROM instructors")
            instructors = cursor.fetchall()
            return jsonify(instructors), 200
        except Error as error:
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()

    @app.route("/instructors/lessons/<int:id>", methods=['GET'])
    def getInstructorLessons(id):
        try :
            cursor = db.cursor(dictionary=True)
            cursor.execute("SELECT * FROM enrollments where instructor_ci=%s", (id,))
            instructorLessons = cursor.fetchall()
            return jsonify(instructorLessons)
        except Error as error:
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()


    @app.route("/instructors/<int:id>", methods=['GET'])
    def getInstructor(id):
        try:
            cursor = db.cursor(dictionary=True)
            cursor.execute("SELECT * FROM instructors where ci=%s", (id,))
            instructor = cursor.fetchone()
            lessons = getInstructorLessons(id)
            return jsonify(instructor), lessons, 200
        except Error as error:
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()



    @app.route("/instructors/register", methods=['POST'])
    def postInstructor():
        cursor = db.cursor(dictionary=True)
        ci = request.json['ci']
        name = request.json['name']
        lastname = request.json['lastname']

        try:
            cursor.execute("INSERT INTO instructors (ci, name, lastname) VALUES (%s, %s, %s)", 
                        (ci, name, lastname))
            db.commit()
            return jsonify({"message": "Instructor registered successfully"}), 201
        except Error as error:
            db.rollback()
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()


    @app.route("/instructors/delete/<int:id>", methods=['DELETE'])
    def deleteInstructor(id):
        cursor = db.cursor(dictionary=True)
        try:
            cursor.execute("DELETE FROM instructor WHERE ci = %s", (id,))
            db.commit()
            return jsonify({"message": "Instructor deleted successfully"})
        except Error as error:
            db.rollback()
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()

    @app.route("/instructors/edit/<int:id>", methods=['PUT'])
    def editInstructor(id):
        cursor = db.cursor(dictionary=True)
        name = request.json['name']
        lastname = request.json['lastname']

        try:
            cursor.execute("UPDATE instructors SET name = %s, lastname = %s WHERE ci = %s",
                        (name, lastname, id))
            db.commit()
            return jsonify({"message": "Instructor updated successfully"}), 200
        except Error as error:
            db.rollback()
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()