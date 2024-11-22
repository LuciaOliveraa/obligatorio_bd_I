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
            ci: instructor?.ci,
            name: instructor?.name,
            lastname: instructor?.lastname,
            email: instructor?.email,
            lessons: newLessonsList
        };

        updateUser(provisionalUser);
    }

    // export function
    const removeLesson = (exLessons) => {
        const newLessonsList = instructor?.lessons.filter((item) => item.id != exLessons.id);
        updateLessons(newLessonsList);
    }

    // export function
    const addLesson = (newLesson) => {
        const newLessonList = [...instructor?.lessons, newLesson];
        updateEnrollments(newLessonList);
    }


    useEffect(() => {
        console.log("User actualizado: ", instructor);
    }, [instructor]);

    return (
        <UserContext.Provider value={{instructor, updateUser, logOut, removeLesson, addLesson}}>
            {children}
        </UserContext.Provider>
    );
}