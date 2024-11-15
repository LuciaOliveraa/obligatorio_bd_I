from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector
from mysql.connector import Error
from datetime import datetime, timedelta


app = Flask(__name__)
cors = CORS(app, origins='http://localhost:5173') # con el * se acepta todas las conexiones


try:
    db = mysql.connector.connect(
        host="localhost", 
        user="root", #admin
        password="rootpassword", #adminpassword
        database="base_datos"
    )
except Error as e:
    print(f"Error connecting to MySQL: {e}")

@app.route("/")
def prueba():
    return "holis mundis"

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
        cursor.execute("SELECT * FROM students where ci=%s", (id,))
        student = cursor.fetchone()
        return jsonify(student), 200
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

    try:
        starting_time_obj = datetime.strptime(starting_time, '%H:%M:%S')
        end_time_obj = datetime.strptime(end_time, '%H:%M:%S')
    except ValueError:
        return jsonify({"error": "The time format must be HH:MM:SS"}), 400

    try:
        cursor.execute("INSERT INTO shifts (starting_time, end_time) VALUES (%s, %s)", 
                       (starting_time, end_time))
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
        return jsonify({"message": "Shift deleted successfully"})
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

    try:
        starting_time_obj = datetime.strptime(starting_time, '%H:%M:%S')
        end_time_obj = datetime.strptime(end_time, '%H:%M:%S')
    except ValueError:
        return jsonify({"error": "The time format must be HH:MM:SS"}), 400

    try:
        cursor.execute("UPDATE shifts SET starting_time = %s, end_time = %s  WHERE id = %s",
                       (starting_time, end_time, id))
        db.commit()
        return jsonify({"message": "Shift updated successfully"})
    except Error as error:
        db.rollback()
        return jsonify({"error": str(error)}), 500
    finally:
        cursor.close()

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
    #name = request.json['name']
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

@app.route('/activity_revenue', methods=['GET'])
def getActivityRevenue():
    try:
        cursor = db.cursor(dictionary=True)
        cursor.execute("SELECT * FROM activity_revenue_view")
        result = cursor.fetchall()
        return jsonify(result), 200
    except Error as error:
        return jsonify({"error": str(error)}), 500
    finally:
        cursor.close()

@app.route('/activities_with_most_students', methods=['GET'])
def getActivitiesWithMostStudents():
    try:
        cursor = db.cursor(dictionary=True)
        cursor.execute("SELECT * FROM activities_with_most_students")
        result = cursor.fetchall()
        return jsonify(result), 200
    except Error as error:
        return jsonify({"error": str(error)}), 500
    finally:
        cursor.close()

@app.route('/shifts_with_most_classes', methods=['GET'])
def getShiftsWithMostClasses():
    try:
        cursor = db.cursor(dictionary=True)
        cursor.execute("SELECT * FROM shifts_with_most_classes")
        result = cursor.fetchall()
        return jsonify(result), 200
    except Error as error:
        return jsonify({"error": str(error)}), 500
    finally:
        cursor.close()



if __name__ == "__main__":
    app.run(port=8080)