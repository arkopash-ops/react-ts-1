import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import type { NavItem } from '../interfaces/nav';

export const Navbar: React.FC = () => {
    const navigate = useNavigate();

    const [authUser, setAuthUser] = useState<{ email: string; role: string } | null>(
        JSON.parse(localStorage.getItem("currentUser") || "null")
    );

    useEffect(() => {
        const handleChange = () => {
            setAuthUser(JSON.parse(localStorage.getItem("currentUser") || "null"));
        };

        window.addEventListener("storage", handleChange);
        return () => window.removeEventListener("storage", handleChange);
    }, []);

    const publicNavItems: NavItem[] = [
        { label: "Sign In", path: "/" },
        { label: "Sign Up", path: "/signupform" },
    ];
    
    const privateNavItems: NavItem[] = [
        { label: "User Data", path: "/signuplist" },
        { label: "List", path: "/userlist" },
    ];

    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        setAuthUser(null);
        navigate("/");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
            <span className="navbar-brand fw-bold">MyApp</span>

            <ul className="navbar-nav ms-auto align-items-center">
                {(authUser ? privateNavItems : publicNavItems).map((item) => (
                    <li className="nav-item ms-3" key={item.path}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link active text-info"
                                    : "nav-link text-white"
                            }
                        >
                            {item.label}
                        </NavLink>
                    </li>
                ))}

                {authUser && (
                    <li className="nav-item ms-3">
                        <button
                            className="btn btn-outline-danger btn-sm"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    );
};
