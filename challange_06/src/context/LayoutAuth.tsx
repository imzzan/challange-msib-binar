'use client'
import { createContext } from "react";
import { useRouter } from "next/navigation";

type Auth = {
    email : string | null | undefined,
    login : (email : string) => void,
    logout : () => void
}

export const AuthConext = createContext<Auth>({});

const AuthProvider = ({children} : {children : React.ReactNode}) => {

    let email;
    if (typeof window !== 'undefined') {
      // Perform localStorage action
      email = localStorage.getItem('token')
    }
    const router = useRouter()

    const login = (email : string) => {
        localStorage.setItem('email', email);
        router.push("/cari-mobil");
    }

    const logout = () => {
        localStorage.removeItem('email')
        router.push("/");
    }

    return (
        <AuthConext.Provider value={{email, login, logout}}>
            {children}
        </AuthConext.Provider>
    )
}

export default AuthProvider