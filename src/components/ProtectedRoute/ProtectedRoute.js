import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ allowedRoles }) => {
    const { user } = useAuth();
    console.log("ProtectedRoute rendered with user:", user);  // Agregar para depuración

    if (!user) {
        // Si no hay usuario autenticado, redirigir al login
        return <Navigate to="/login" />;
    }

    if (!allowedRoles.includes(user.role)) {
        // Si el usuario no tiene el rol permitido, redirigir a la página no autorizada
        return <Navigate to="/unauthorized" />;
    }

    return <Outlet />; // Si el usuario tiene permiso, renderizar el componente hijo
};

export default ProtectedRoute;
