import React, { useState } from "react";
import { createContext, useContext, useEffect } from "react";

const StudentContext = createContext();

export function useStudent() {
    return useContext(StudentContext);
}

export const StudentProvider = ({ children }) => {
    const initialState = {
        ci: '',
        name: '',
        lastname: '',
        birthdate: '',
        email: '',
        phone_number: '',
        enrollments: [],
        rent: []
    }

    const [student, setStudent] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : initialState;
    });

    // export function
    const updateStudent = (newUser) => {
        setStudent(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
    }

    // export function
    const logOut = () => {
        localStorage.clear();
    }

    const updateEnrollments = (newEnrollmentsList) => {
        const provisionalUser = {
            ci: user?.ci,
            name: user?.name,
            lastname: user?.lastname,
            birthdate: user?.birthdate,
            email: user?.email,
            phone_number: user?.phone_number,
            enrollments: newEnrollmentsList,
            rent: user?.rent
        };

        updateStudent(provisionalUser);
    }

    // export function
    const removeEnrollment = (exEnrollment) => {
        const newEnrollmentsList = user?.enrollments.filter((item) => item.id != exEnrollment.id);
        updateEnrollments(newEnrollmentsList);
    }

    // export function
    const addEnrollment = (newEnrollment) => {
        const newEnrollmentsList = [...user?.enrollments, newEnrollment];
        updateEnrollments(newEnrollmentsList);
    }

    const updateRent = (newRentList) => {
        const provisionalUser = {
            ci: user?.ci,
            name: user?.name,
            lastname: user?.lastname,
            birthdate: user?.birthdate,
            email: user?.email,
            phone_number: user?.phone_number,
            enrollments: user?.enrollments,
            rent: newRentList
        };

        updateStudent(provisionalUser);
    }

    // export function
    const removeRent = (exRent) => {
        const newRentsList = user?.rent.filter((item) => item != exRent);
        updateRent(newRentsList);
    }

    // export function
    const addRent = (newRent) => {
        const newRentList = [...user?.rent, newRent];
        updateRent(newRentList);
    }


    useEffect(() => {
        console.log("User actualizado: ", student);
    }, [student]);

    return (
        <UserContext.Provider value={{student, updateStudent, logOut, removeEnrollment, addEnrollment, removeRent, addRent}}>
            {children}
        </UserContext.Provider>
    );
}