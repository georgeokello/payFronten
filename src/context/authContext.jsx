import { createContext, useState, useEffect } from "react";


export const AuthContext = createContext()

export function AuthProvider({ children }){
    const [role, setRole] = useState(localStorage.getItem("role"))

    // keep localstorage in sync
    useEffect(() => {
        if(role){
            localStorage.setItem("role", role)
        }else{
            localStorage.removeItem("role")
        }
    }, [role])

    return(
        <AuthContext.Provider value={{role, setRole}}>
            { children }
        </AuthContext.Provider>
    )
}