import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
    children: React.ReactElement;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const authUser = JSON.parse(localStorage.getItem("currentUser") || "null");

    if (!authUser) {
        return <Navigate to="/" replace />;
    }

    return children;
}

export default ProtectedRoute
