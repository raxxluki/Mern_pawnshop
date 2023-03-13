import {createContext, useState} from "react";

const UserContext = createContext({});

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const contextValue = {
        user,
        setUser
    }

    return <UserContext.Provider value={contextValue}>
        {children}
    </UserContext.Provider>
}

export default UserContext;