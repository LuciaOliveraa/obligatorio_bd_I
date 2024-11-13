from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector
from mysql.connector import Error

app = Flask(_name_)
cors = CORS(app, origins='http://localhost:5173') # con el * se acepta todas las 


db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="rootpassword",
    database="base_datos"
)

@app.route("/")
def prueba():
    return "holis mundis"

@app.route("/students", methods=['GET'])
def getAllStudents():
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM students")
    students = cursor.fetchall()
    cursor.close()
    return jsonify(students)

@app.route("/students/<int:id>", methods=['GET'])
def getStudent(id):
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM students where ci=%s", (id,))
    student = cursor.fetchall()
    cursor.close()
    return jsonify(student)

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
        # Ejecuta la consulta de inserción
        cursor.execute("INSERT INTO students (ci, name, lastname, birthdate, email, phone_number) VALUES (%s, %s, %s, %s, %s, %s)", 
                       (ci, name, lastname, birthdate, email, phone_number))
        # Confirma la transacción
        db.commit()
        # Retorna una respuesta de éxito
        return jsonify({"message": "Student registered successfully"}), 201
    except Error as error:
        # Si ocurre un error, revierte la transacción
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
        return jsonify({"message": "Student deleted successfully"})
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
        return jsonify({"message": "Student updated successfully"})
    except Error as error:
        db.rollback()
        return jsonify({"error": str(error)}), 500
    finally:
        cursor.close()


if _name_ == "_main_":
    app.run(port=8080)