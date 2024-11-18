import mysql.connector
from mysql.connector import Error

def get_db_connection():
    try:
        db = mysql.connector.connect(
            host="localhost",
            user="root",  #admin
            password="rootpassword", 
            database="base_datos"
        )
        return db
    except Error as e:
        print(f"Error connecting to MySQL: {e}")
        return None
