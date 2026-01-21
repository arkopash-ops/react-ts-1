import React from 'react'
import { NavLink } from 'react-router-dom';
import type { NavItem } from '../interfaces/nav';

const navItems: NavItem[] = [
    { label: "UserList", path: "/" },
];

export const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
            <span className="navbar-brand fw-bold">MyApp</span>

            <ul className="navbar-nav ms-auto">
                {navItems.map((item) => (
                    <li className="nav-item" key={item.path}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link active text-info"
                                    : "nav-link text-white"
                            } >
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
