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
                cursor.execute("SELECT ci FROM students WHERE email = %s", (user))
                id = cursor.fetchone()
                return getStudent(id), 200
            

            if user_termination == 'ucu.edu.uy':
                cursor.execute("SELECT ci FROM instructors WHERE email = %s", (user))
                id = cursor.fetchone()
                return getInstructor(id), 200
            

            if user_termination == 'admin.ucu.edu.uy':
                return jsonify({"User type": "admin"})
            
        except Error as error:
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()


    @app.route('/create-user', methods=['POST'])
    def createUser():
        cursor = db.cursor(dictionary=True)
        user = request.json['user']
        password = request.json['password']

        ci = request.json['ci']
        name = request.json['name']
        lastname = request.json['lastname']
        birthdate = request.json['birthdate']
        phone_number = request.json['phone_number']

        try:
            split_user = user.split("@")
            user_termination = split_user[-1]

            if not user_termination:
                return jsonify({"error": "Invalid user"})
            
            # Defino insert según el tipo de usuario

            if user_termination == 'correo.ucu.edu.uy':
                cursor.execute("INSERT INTO login(user, password) VALUES (%s, %s)", (user, password))
                cursor.execute("INSERT INTO students(ci, name, lastname, birthdate, email, phone_number) VALUES (%s, %s, %s, %s, %s, %s)", 
                                (ci, name, lastname, birthdate, user, phone_number))
                db.commit()
                return getStudent(ci), 200
            

            if user_termination == 'ucu.edu.uy':
                cursor.execute("INSERT INTO login(user, password) VALUES (%s, %s)", (user, password))
                cursor.execute("INSERT INTO instructors(ci, name, lastname, email) VALUES (%s, %s, %s, %s)", 
                                (ci, name, lastname, user))
                db.commit()
                return getInstructor(ci), 200
        

            if user_termination == 'admin.ucu.edu.uy':
                cursor.execute("INSERT INTO login(user, password) VALUES (%s, %s)", (user, password))
                cursor.execute("INSERT INTO administrators(email) VALUES (%s)", 
                                (user))
                db.commit()
                return jsonify({"User type": "admin"})
            else:
                return jsonify({"User is not valid"})

        except Error as error:
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close() 

        
    @app.route('/delete-user/<int:ci>', methods=['DELETE'])
    def deleteUser(ci):
        cursor = db.cursor(dictionary=True)

        try:
            cursor.execute("SELECT email FROM students WHERE ci = %s", (ci))
            student_email = cursor.fetchone()

            cursor.execute("SELECT email FROM instructors WHERE ci = %s", (ci))
            instructor_email = cursor.fetchone()

            if student_email:
                cursor.execute("DELETE * FROM students WHERE ci = %s", (ci))
                cursor.execute("DELETE * FROM login WHERE user = %s", (student_email))
                db.commit()
                return jsonify({"Result":"student deleted successfully"}), 200
            
            if instructor_email:
                cursor.execute("DELETE * FROM instructors WHERE ci = %s", (ci))
                cursor.execute("DELETE * FROM login WHERE user = %s", (instructor_email))
                db.commit()
                return jsonify({"Result":"instructor deleted successfully"}), 200
            else:
                return jsonify({"Result":"user not found"})

        except Error as error:
            return jsonify({"error": str(error)}), 500
        finally:
            cursor.close()
        