import React, { useState } from 'react'
import type { FormData } from '../interfaces/formData';

const SignupForm: React.FC = () => {

    const initialFormData: FormData = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
        gender: "male",
        address: "",
        city: "",
        state: "",
        zip: "",
        agreed: false,
    };

    const [formData, setFormData] = useState<FormData>(initialFormData);

    type FormError = Partial<Record<keyof FormData, string>>;
    const [errors, setErrors] = useState<FormError>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        if (e.target.type === "checkbox") {
            setFormData(prev => ({ ...prev, [e.target.name]: (e.target as HTMLInputElement).checked }));
        } else {
            setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
        }
        setErrors(prev => ({ ...prev, [e.target.name]: undefined }));
    }

    const validateForm = (): boolean => {
        const newErrors: FormError = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required";
        }

        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = "Phone must be 10 digits";
        }

        if (!formData.address) {
            newErrors.address = "Address is required";
        }

        if (!formData.city) {
            newErrors.city = "City is required";
        }

        if (!formData.state) {
            newErrors.state = "State is required";
        }

        if (!/^\d{5,6}$/.test(formData.zip)) {
            newErrors.zip = "Invalid zip code";
        }

        if (!formData.agreed) {
            newErrors.agreed = "You must accept terms & conditions";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) return;

        try {
            const existingData: FormData[] = JSON.parse(localStorage.getItem("signupData") || "[]");
            const updatedData = [...existingData, formData];
            localStorage.setItem("signupData", JSON.stringify(updatedData));

            console.log("Saved to localStorage:", updatedData);
            alert("Sign up successful!");

            setFormData(initialFormData);
            setErrors({});
        } catch (err) {
            console.error("Failed to saave data: ", err);
            alert("Somthing went wrong while saving your data. Please try again.");
        }
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">

                    <div className="card shadow-lg border-0 rounded-4 bg-dark text-light">
                        <div className="card-body p-4 p-md-5">

                            <h1 className="text-center mb-4 fw-bold">
                                Create Your Account
                            </h1>

                            <form className="row g-3" onSubmit={handleSubmit}>

                                {/* Name */}
                                <div className="col-md-6">
                                    <label htmlFor="firstName" className="form-label">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                        placeholder="Enter first name"
                                        value={formData.firstName}
                                        onChange={handleChange} />
                                    {errors.firstName && (
                                        <div className="invalid-feedback">{errors.firstName}</div>
                                    )}
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="lastName" className="form-label">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                        placeholder="Enter last name"
                                        value={formData.lastName}
                                        onChange={handleChange} />
                                    {errors.lastName && (
                                        <div className="invalid-feedback">{errors.lastName}</div>
                                    )}
                                </div>

                                {/* Email */}
                                <div className="col-md-7">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="text"
                                        name="email"
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                        placeholder="you@example.com"
                                        value={formData.email}
                                        onChange={handleChange} />
                                    {errors.email && (
                                        <div className="invalid-feedback">{errors.email}</div>
                                    )}
                                </div>

                                {/* Password */}
                                <div className="col-md-5">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                        placeholder="********"
                                        value={formData.password}
                                        onChange={handleChange} />
                                    {errors.password && (
                                        <div className="invalid-feedback">{errors.password}</div>
                                    )}
                                </div>

                                {/* Phone No */}
                                <div className="col-md-5">
                                    <label htmlFor="phone" className="form-label">Phone No.</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        inputMode="numeric"
                                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                        placeholder="Enter your Phone Number "
                                        value={formData.phone}
                                        onChange={handleChange} />
                                    {errors.phone && (
                                        <div className="invalid-feedback">{errors.phone}</div>
                                    )}
                                </div>

                                {/* Gender */}
                                <div className="col-md-7">
                                    <label htmlFor="gender" className="form-label d-block">Gender</label>

                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="gender"
                                            value="male"
                                            checked={formData.gender === "male"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="male" className="form-check-label">Male</label>
                                    </div>

                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="gender"
                                            value="female"
                                            checked={formData.gender === "female"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="female" className="form-check-label">Female</label>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                                        placeholder="Enter your address "
                                        value={formData.address}
                                        onChange={handleChange} />
                                    {errors.address && (
                                        <div className="invalid-feedback">{errors.address}</div>
                                    )}
                                </div>

                                {/* City */}
                                <div className="col-md-5">
                                    <label htmlFor="city" className="form-label">City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                                        placeholder="Enter your City"
                                        value={formData.city}
                                        onChange={handleChange} />
                                    {errors.city && (
                                        <div className="invalid-feedback">{errors.city}</div>
                                    )}
                                </div>

                                {/* State */}
                                <div className="col-md-4">
                                    <label htmlFor="state" className="form-label">State</label>
                                    <select
                                        name="state"
                                        className={`form-select ${errors.state ? 'is-invalid' : ''}`}
                                        value={formData.state}
                                        onChange={handleChange} >
                                        <option value={''}>--- Select ---</option>
                                        <option value={'Gujarat'}>Gujarat</option>
                                        <option value={'Maharashtra'}>Maharashtra</option>
                                        <option value={'Madhya Pradesh'}>Madhya Pradesh</option>
                                        <option value={'Rajasthan'}>Rajasthan</option>
                                        <option value={'Bihar'}>Bihar</option>
                                    </select>
                                    {errors.state && (
                                        <div className="invalid-feedback">{errors.state}</div>
                                    )}
                                </div>

                                {/* Zip */}
                                <div className="col-md-3">
                                    <label htmlFor="zip" className="form-label">Zip</label>
                                    <input
                                        type="text"
                                        name="zip"
                                        inputMode="numeric"
                                        className={`form-control ${errors.zip ? 'is-invalid' : ''}`}
                                        placeholder="Enter your Zip "
                                        value={formData.zip}
                                        onChange={handleChange} />
                                    {errors.zip && (
                                        <div className="invalid-feedback">{errors.zip}</div>
                                    )}
                                </div>

                                {/* Checkbox */}
                                <div className="col-12">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            name="agreed"
                                            className={`form-check-input ${errors.agreed ? 'is-invalid' : ''}`}
                                            checked={formData.agreed}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="agreed" className="form-check-label">
                                            I agree to the terms & conditions
                                        </label>
                                        {errors.agreed && (
                                            <div className="invalid-feedback">{errors.agreed}</div>
                                        )}
                                    </div>
                                </div>

                                {/* Button */}
                                <div className="col-12 d-grid mt-3">
                                    <button
                                        type="submit"
                                        className="btn btn-outline-success btn-lg" >
                                        Sign Up
                                    </button>
                                </div>

                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SignupForm