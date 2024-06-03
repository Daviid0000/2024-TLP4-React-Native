// UserContext.js
import React, { createContext, useState } from 'react';

// Crea el contexto
export const UserContext = createContext();

// Proveedor del contexto
 const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([
        { name: 'Carmen', email: 'email01@gmail.com', password: 'abc' },
        { name: 'Valeria', email: 'email02@gmail.com', password: 'abcd' },
        { name: 'Antonela', email: 'email03@gmail.com', password: 'abcde' },
    ]);

    return (
        <UserContext.Provider value={{ users, setUsers }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider
