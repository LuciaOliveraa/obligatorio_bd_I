const url = "http://localhost:8080";

export const loginAccount = async (account, updateStudent, updateInstructor, userType, updateUserType) => {
    try {
      const response = await fetch( url+"/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(account),
      });

      if (response.status === 200) {
        const userData = await response.json();

        if (userData.student) {
            updateUserType("student");
        } else if (userData.instructor) {
            updateUserType("instructor");
        } else {
            updateUserType("admin");
            return true;
        }

        if (userType == "student") {
            const newUser = {
                id: userData.student.ci,
                name: userData.student.name,
                lastname: userData.student.lastname,
                birthdate: userData.student.birthdate,
                email: userData.student.email,
                phone_number: userData.student.phone_number,
                enrollments: userData.enrollments,
                rent: userData.rents
            };
            updateStudent(newUser);

            return true;
        }

        if (userType == "instructor") {
          const newUser = {
              id: userData.instructor?.ci,
              name: userData.instructor.name,
              lastname: userData.instructor.lastname,
              email: userData.instructor.email,
              lessons: userData.lessons
          };
          updateInstructor(newUser);

          return true;
      } 

      } 
    } catch (error) {
      console.log("Error en el login", error);
      return false;
    }
  };