from flask import jsonify, request
from config import get_db_connection
from mysql.connector import Error
from students import getStudent
from instructors import getInstructor

db = get_db_connection()

def loginRoutes(app):
    @app.route('/login', methods=['POST'])
    def login(user):
        cursor = db.cursor(dictionary=True)
        user = request.json['user']
        password = request.json['password']

        try:
            cursor.execute("SELECT * FROM login WHERE user = %s", (user))
            login_data = cursor.fetchone()
            
            # Corroboro errores base.
            if not login_data:
                return jsonify({"error": "Login user not found"}), 404
            
            actual_password = login_data['password']

            if password != actual_password:
                return jsonify({"error": "Incorrect credentials"}), 401

            split_user = user.split("@")
            user_termination = split_user[1]

            if not user_termination:
                return jsonify({"error": "Invalid user"})
            
            # Defino return según el tipo de usuario

            if user_termination == 'correo.ucu.edu.uy':
                cursor.excecute("SELECT ci FROM students WHERE email = %s", (user))
                id = cursor.fetchone()
                return getStudent(id), 200
            

            if user_termination == 'ucu.edu.uy':
                cursor.excecute("SELECT ci FROM instructors WHERE email = %s", (user))
                id = cursor.fetchone()
                return getInstructor(id), 200
            

            if user_termination == 'admin.ucu.edu.uy':
                return jsonify({"User type": "admin"})
            
        except Error as error:
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()