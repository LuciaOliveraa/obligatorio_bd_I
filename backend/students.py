from flask import jsonify, request
from config import get_db_connection
from mysql.connector import Error
import json


db = get_db_connection()

def studentsRoutes(app):
    @app.route("/students", methods=['GET'])
    def getAllStudents():
        try:
            cursor = db.cursor(dictionary=True)
            cursor.execute("SELECT * FROM students")
            students = cursor.fetchall()
            return jsonify(students), 200
        except Error as error:
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()

    @app.route("/students/<int:id>", methods=['GET'])
    def getStudent(id):
        try:
            cursor = db.cursor(dictionary=True)
            cursor.execute("SELECT * FROM students WHERE ci=%s", (id,))
            student = cursor.fetchone()

            if not student:
                return jsonify({"error": "Student not found"}), 404

            enrollments_response = getStudentEnrollments(id) 
            rents_response = getStudentRents(id) 

            enrollments = enrollments_response[0].get_json() 
            rents = rents_response[0].get_json()  

            response = {
                "student": student,
                "enrollments": enrollments,
                "rents": rents
            }

            return jsonify(response), 200
        except Error as error:
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()




    @app.route("/students/enrollments/<int:id>", methods=['GET'])
    def getStudentEnrollments(id):
        try:
            cursor = db.cursor(dictionary=True)
            cursor.execute("SELECT * FROM enrollments where student_ci=%s", (id,))
            studentEnrollments = cursor.fetchall()
            return jsonify(studentEnrollments), 200
        except Error as error:
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()
        

    @app.route("/students/rents/<int:id>", methods=['GET'])
    def getStudentRents(id):
        try:
            cursor = db.cursor(dictionary=True)
            cursor.execute("SELECT * FROM rent where student_ci=%s", (id,))
            studentRents = cursor.fetchall()
            return jsonify(studentRents), 200
        except Error as error:
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()
        

    @app.route("/students/register", methods=['POST'])
    def postStudent():
        cursor = db.cursor(dictionary=True)
        ci = request.json['ci']
        name = request.json['name']
        lastname = request.json['lastname']
        birthdate = request.json['birthdate']
        email = request.json['email']
        phone_number = request.json['phone_number']

        try:
            cursor.execute("INSERT INTO students (ci, name, lastname, birthdate, email, phone_number) VALUES (%s, %s, %s, %s, %s, %s)", 
                        (ci, name, lastname, birthdate, email, phone_number))
            db.commit()
            return jsonify({"message": "Student registered successfully"}), 201
        except Error as error:
            db.rollback()
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()

    @app.route("/students/delete/<int:id>", methods=['DELETE'])
    def deleteStudent(id):
        cursor = db.cursor(dictionary=True)
        try:
            cursor.execute("DELETE FROM students WHERE ci = %s", (id,))
            db.commit()
            return jsonify({"message": "Student deleted successfully"}), 200
        except Error as error:
            db.rollback()
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()

    @app.route("/students/edit/<int:id>", methods=['PUT'])
    def editStudent(id):
        cursor = db.cursor(dictionary=True)
        name = request.json['name']
        lastname = request.json['lastname']
        birthdate = request.json['birthdate']
        email = request.json['email']
        phone_number = request.json['phone_number']

        try:
            cursor.execute("UPDATE students SET name = %s, lastname = %s, birthdate = %s, email = %s, phone_number = %s WHERE ci = %s",
                        (name, lastname, birthdate, email, phone_number, id))
            db.commit()
            return jsonify({"message": "Student updated successfully"}), 200
        except Error as error:
            db.rollback()
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()
