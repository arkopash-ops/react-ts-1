import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import type { StoredUser } from '../interfaces/formData';

const SigninForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    type FormError = Partial<Record<"email" | "password", string>>;
    const [errors, setErrors] = useState<FormError>({});

    const navigate = useNavigate();

    const validateForm = (): boolean => {
        const newErrors: FormError = {};

        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Invalid email format";
        }

        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();

        if (!validateForm()) return;

        const users: StoredUser[] = JSON.parse(
            localStorage.getItem("signupData") || "[]"
        );
        console.log(users);


        const matchedUser = users.find(
            (u) => u.email === email && u.password === password
        );
        console.log(matchedUser);

        if (!matchedUser) {
            alert("Invalid email or password");
            return;
        }

        localStorage.setItem("currentUser", JSON.stringify(matchedUser));

        navigate("/signuplist")
    }

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">

                    <div className="card shadow-lg border-0 rounded-4 bg-dark text-light">
                        <div className="card-body p-4 p-md-5">

                            <h1 className="text-center mb-4 fw-bold">
                                Log In
                            </h1><hr />

                            <form className="row g-3 mt-3" onSubmit={handleSubmit}>
                                {/* Email */}
                                <div className="col-md-12">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="text"
                                        name="email"
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                        placeholder="you@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                    {errors.email && (
                                        <div className="invalid-feedback">{errors.email}</div>
                                    )}
                                </div>

                                {/* Password */}
                                <div className="col-md-12">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <div className="input-group input-group-lg">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="********"
                                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                        />

                                        <button
                                            type="button"
                                            className="input-group-text"
                                            onClick={() => setShowPassword((prev) => !prev)}
                                        >
                                            <i
                                                className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"
                                                    }`}
                                            ></i>
                                        </button>
                                    </div>
                                    {errors.password && (
                                        <div className="invalid-feedback">{errors.password}</div>
                                    )}
                                </div>

                                {/* Button */}
                                <div className="col-12 d-grid mt-3">
                                    <button
                                        type="submit"
                                        className="btn btn-outline-success btn-lg" >
                                        Sign In
                                    </button>
                                </div>

                                <p className='text-center mb-4'>
                                    Don't have an account? <Link to="/signupform">Sign Up</Link>
                                </p>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SigninForm
