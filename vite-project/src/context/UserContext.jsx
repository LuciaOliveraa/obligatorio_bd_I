import React, { useState } from "react";
import { createContext, useContext, useEffect } from "react";

const UserContext = createContext();

export function useUser() {
    return useContext(UserContext);
}

export const UserProvider = ({ children }) => {
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

    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedAuth) : initialState;
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

        updateUser(provisionalUser);
    }

    // export function
    const removeEnrollment = (exEnrollment) => {
        const newEnrollmentsList = user?.enrollments.filter((item) => item.id != exEnrollment.id);
        updateFriends(newEnrollmentsList);
    }

    // export function
    const addEnrollment = (newEnrollment) => {
        const newEnrollmentsList = [...user?.enrollments, newEnrollment];
        updateFriends(newEnrollmentsList);
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