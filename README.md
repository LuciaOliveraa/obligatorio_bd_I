# Proyecto final de base de datos I

En este proyecto, como estudiantes de segundo año de ingeniería informática, nos enfrantamos al desafío de crear nuestra primera aplicación web desde su primera línea. El objetivo era crear una plataforma de inscripciones a deportes en la nieve para estudiantes de la universidad. Se desarrollaron tres tipos de usuarios diferentes: 
  - El administrador, con acceso a distintos reportes y poder omnisciente sobre las distintas clases existentes
  - El usuario de estudiante, con acceso a la posibilidad de inscribirse a clases, alquilar equipamiento y visualizar sus propios datos
  - El usuario docente, con acceso a la visualización de las distintas actividades disponibles y sus propios datos

# Para ejecutar el proyecto

1. Crear un contenedor en docker, posicionándose dentro de la carpeta que contiene el archivo docker-compose.yml y ejecutar el comando "docker compose up"
2. En una IDE para base de datos apta para SQL, ejecutar los archivos de la carpeta "base_datos" en el siguiente orden:
  - tables.sql
  - triggers.sql
  - insertions.sql
  - users_and_roles.sql
  - views.sql
3. Para levantar el backend:
  - Asegurarse de estar dentro de la carpeta "backend" en la terminal
  - Correr el archivo "main.py" ejecutando "python main.py" o "python3 main.py" si utilizas una mac OS y una versión de python superior a la 3
4. Para correr el frontend:
  - Confirmar su posiciónamiento dentro de la carpeta "vite-project" en la terminal
  - Ejecutar el comando "npm install", que instalará las librerías y packages que no se encuentren en la computadora previamente.
  - Para iniciar el proyecto, utilizar el comando "npm run dev"
  - Clickear sobre el enlace impreso en la consola "http://localhost:5173/" y se dirigirá a la página del proyecto.

# Principales tecnologías utilizadas

  - SQL
  - python
  - Node.js

# Ideas a futuro

  - Sistema de notificaciones que comunique al estudiante cuando se modifican los datos de una clase a la que está inscripto, para que este decida si darse de baja o no.
  - Implementación del SOFT DELETE en algunas tablas de la base de datos, para mantener datos estadísticos o de resguardo para posibles reportes.
  - Sistema de autenticación mediante un token para aumentar la seguridad de la aplicación; por ejemplo JWT.

# Reflexiones

Durante la realización del proyecto, se estimuló el desarrollo distintas habilidades por medio de la prueba y el error, dado el tiempo disponible para su realización (en paralelo a otros proyectos del semestre transcurriendo en las mismas fechas) y conocimientos previos que presentábamos al comienzo de su ejecución, nos encontramos orgullosos del resultado alcanzado; sin embargo, consideramos que siempre se puede mejorar y que este es solo el comienzo.

Habilidades trabajadas:
  - el diseño integral de una aplicación
  - atención al detalle
  - resolución dinámica y creativa de problemas
  - el trabajo en equipo
  - la repartición de tareas
  - la organización temporal
  - la comunicación interpersonal
  - entre otras
