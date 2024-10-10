import React, { createContext, useState, useContext } from 'react';

// Crear el contexto de autenticación
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Función de login que establece el rol del usuario
    const login = (role) => {
        setUser({ role });
    };

    // Función de logout que borra el estado del usuario
    const logout = () => {
        setUser(null);
    };

    // Proveer el estado del usuario y las funciones login/logout a los componentes hijos
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personalizado para acceder al contexto de autenticación
export const useAuth = () => useContext(AuthContext);
