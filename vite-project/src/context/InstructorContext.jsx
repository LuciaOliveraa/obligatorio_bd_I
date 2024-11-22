import React, { useState } from "react";
import { createContext, useContext, useEffect } from "react";

const InstructorContext = createContext();

export function useInstructor() {
    return useContext(InstructorContext);
}

export const InstructorProvider = ({ children }) => {
    const initialState = {
        ci: '',
        name: '',
        lastname: '',
        email: '',
        lessons: []
    }

    const [instructor, setInstructor] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : initialState;
    });

    // export function
    const updateUser = (newUser) => {
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
    }

    // export function
    const logOut = () => {
        localStorage.clear();
    }

    const updateLessons = (newLessonsList) => {
        const provisionalUser = {
            ci: user?.ci,
            name: user?.name,
            lastname: user?.lastname,
            email: user?.email,
            lessons: newLessonsList
        };

        updateUser(provisionalUser);
    }

    // export function
    const removeLessons = (exLessons) => {
        const newLessonsList = instructor?.lessons.filter((item) => item.id != exLessons.id);
        updateLessons(newLessonsList);
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

        updateUser(provisionalUser);
    }

    // export function
    const removeRent = (exRent) => {
        const newRentsList = user?.rent.filter((item) => item != exEnrollment);
        updateRent(newRentsList);
    }

    // export function
    const addRent = (newRent) => {
        const newRentList = [...user?.rent, newRent];
        updateRent(newRentList);
    }


    useEffect(() => {
        console.log("User actualizado: ", user);
    }, [user]);

    return (
        <UserContext.Provider value={{user, updateUser, logOut, removeEnrollment, addEnrollment, removeRent, addRent}}>
            {children}
        </UserContext.Provider>
    );
}