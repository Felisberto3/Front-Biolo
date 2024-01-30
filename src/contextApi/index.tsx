import { createContext, useEffect, useState } from "react"
interface payLoad {
    userExist: {
        id: number;
        email: string;
        firstName: string | null;
        lastName: string | null;
        userType: string | null;
        passwordHash: string;
        imagePath: string | null;
        bornDate: Date | null;
    };
    token: string;
}


export const ThemeContext = createContext({})

export const ContextProvider = ({ children }: any) => {
    const [currentUser, setCurrentUser] = useState<payLoad | []>([])
    async function getAllData() {
        setCurrentUser(JSON.parse(localStorage.getItem('payLoad')!) || [])
    }

    // useEffect(() => {
    //     getAllData()
    // }, [currentUser])
    return (
        <ThemeContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </ThemeContext.Provider>
    )
}