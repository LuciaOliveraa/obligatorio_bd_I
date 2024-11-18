from flask import Flask
from flask_cors import CORS
from students import studentsRoutes
from instructors import instructorsRoutes
from activities import activitiesRoutes
from equipment import equipmentRoutes
from shifts import shiftsRoutes
from lessons import lessonsRoutes
from enrollments import enrollmentsRoutes
from reports import reportsRoutes

app = Flask(__name__)
CORS(app, origins='http://localhost:5173')

@app.route("/")
def prueba():
    return "holis mundis"

studentsRoutes(app)
instructorsRoutes(app)
activitiesRoutes(app)
equipmentRoutes(app)
shiftsRoutes(app)
lessonsRoutes(app)
enrollmentsRoutes(app)
reportsRoutes(app)

if __name__ == "__main__":
    app.run(port=8080)
