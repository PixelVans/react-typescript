import { createContext, useState } from "react";


export type AuthUser = {
    name: string
    email: string
}

type userContextProviderProps = {
    children: React.ReactNode
}
type userContextType = {
    user: AuthUser | null
    setUser:  React.Dispatch<React.SetStateAction<AuthUser | null>>
}
export const userContext = createContext({} as userContextType)

export const UserContextProvider = ({ children }: userContextProviderProps) => {
   const [user, setUser] = useState<AuthUser | null>(null)
    return (
        <userContext.Provider value={ {user, setUser} }>
            {children}
        </userContext.Provider>
    ) 
   
 };




