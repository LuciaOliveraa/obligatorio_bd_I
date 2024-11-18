from flask import Flask
from flask_cors import CORS
from students import register_student_routes
from instructors import register_instructors_routes
from activities import register_activity_routes
from equipment import register_equipment_routes
from shifts import register_shifts_routes
from lessons import register_lessons_routes
from enrollments import register_enrollments_routes
from reports import register_reports_routes


app = Flask(__name__)
CORS(app, origins='http://localhost:5173')

@app.route("/")
def prueba():
    return "holis mundis"

register_student_routes(app)
register_instructors_routes(app)
register_activities_routes(app)
register_equipment_routes(app)
register_shifts_routes(app)
register_lessons_routes(app)
register_enrollments_routes(app)
register_reports_routes(app)

if __name__ == "__main__":
    app.run(port=8080)
