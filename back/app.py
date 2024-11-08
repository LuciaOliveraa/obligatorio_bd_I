from flask import Flask, jsonify, request 
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:rootpassword@db:3306/base_datos'
db = SQLAlchemy(app)

