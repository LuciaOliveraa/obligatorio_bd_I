import React, { useState } from "react";
import { createContext, useContext, useEffect } from "react";

const UserTypeContext = createContext();

export function useUserType() {
    return useContext(UserTypeContext);
}

export const UserTypeProvider = ({ children }) => {
    const initialState = '';

    const [userType, setUserType] = useState(() => {
        const storedUser = localStorage.getItem("userType");
        return storedUser ? JSON.parse(storedUser) : initialState;
    });

    // export function
    const updateUserType = (newType) => {
        setUserType(newType);
        localStorage.setItem('userType', JSON.stringify(newType));
        
        return newType;
    }

    // export function
    const logOutType = () => {
        localStorage.clear();
    }

    useEffect(() => {
        console.log("UserType actualizado: ", userType);
    }, [userType]);

    return (
        <UserTypeContext.Provider value={{userType, updateUserType, logOutType}}>
            {children}
        </UserTypeContext.Provider>
    );
}