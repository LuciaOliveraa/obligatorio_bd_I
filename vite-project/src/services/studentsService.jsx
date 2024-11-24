export const getStudents = async () => {
  try {
    const response = await fetch(`http://localhost:8080/students`, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error obteniendo estudiantes", error);
  }
};

export const getStudent = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/students${id}`, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error obteniendo el estudiante", error);
  }
};

export const addStudent = async (newStudent) => {
  try {
    const response = await fetch(`http://localhost:8080/students/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStudent),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error añadiendo nuevo estudiante", error);
  }
};

export const deleteStudent = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:8080/students/delete/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error eliminando estudiante", error);
  }
};

export const editStudent = async (id, editedStudent) => {
  try {
    const response = await fetch(`http://localhost:8080/students/edit/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedStudent),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error editando estudiante", error);
  }
};
