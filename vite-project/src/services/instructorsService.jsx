export const getInstructors = async () => {
  try {
    const response = await fetch(`http://localhost:8080/instructors`, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error obteniendo instructores", error);
  }
};

export const getInstructor = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/instructors/${id}`, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error obteniendo el instructor", error);
  }
};

export const addInstructor = async (newInstructor) => {
  try {
    const response = await fetch(`http://localhost:8080/instructors/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newInstructor),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error añadiendo nuevo instructor", error);
  }
};

export const deleteInstructor = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:8080/instructors/delete/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error eliminando instructor", error);
  }
};

export const editInstructor = async (id, editedInstructor) => {
  try {
    const response = await fetch(
      `http://localhost:8080/instructors/edit/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editedInstructor),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error editando instructor", error);
  }
};
