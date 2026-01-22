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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        if (e.target.type === "checkbox") {
            setFormData(prev => ({ ...prev, [e.target.name]: (e.target as HTMLInputElement).checked }));
        } else {
            setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const jsonData = JSON.stringify(formData, null, 2);
        alert(jsonData);
        console.log(jsonData);

        setFormData(initialFormData);
    }

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
                                    <label className="form-label">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className="form-control"
                                        placeholder="Enter first name"
                                        value={formData.firstName}
                                        onChange={handleChange} />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        className="form-control"
                                        placeholder="Enter last name"
                                        value={formData.lastName}
                                        onChange={handleChange} />
                                </div>

                                {/* Email */}
                                <div className="col-md-7">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="you@example.com"
                                        value={formData.email}
                                        onChange={handleChange} />
                                </div>

                                {/* Password */}
                                <div className="col-md-5">
                                    <label className="form-label">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="********"
                                        value={formData.password}
                                        onChange={handleChange} />
                                </div>

                                {/* Phone No */}
                                <div className="col-md-5">
                                    <label className="form-label">Phone No.</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        inputMode="numeric"
                                        className="form-control"
                                        placeholder="Enter your Phone Number "
                                        value={formData.phone}
                                        onChange={handleChange} />
                                </div>

                                {/* Gender */}
                                <div className="col-md-7">
                                    <label className="form-label d-block">Gender</label>

                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="gender"
                                            value="male"
                                            checked={formData.gender === "male"}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label">Male</label>
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
                                        <label className="form-check-label">Female</label>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="col-12">
                                    <label className="form-label">Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        className="form-control"
                                        placeholder="Enter your address "
                                        value={formData.address}
                                        onChange={handleChange} />
                                </div>

                                {/* City */}
                                <div className="col-md-5">
                                    <label className="form-label">City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        className="form-control"
                                        placeholder="Enter your City"
                                        value={formData.city}
                                        onChange={handleChange} />
                                </div>

                                {/* State */}
                                <div className="col-md-4">
                                    <label className="form-label">State</label>
                                    <select
                                        name="state"
                                        className="form-select"
                                        value={formData.state}
                                        onChange={handleChange} >
                                        <option value={''}>Choose...</option>
                                        <option value={'gujarat'}>Gujarat</option>
                                        <option value={'maharashtra'}>Maharashtra</option>
                                        <option value={'madhyaPradesh'}>Madhya Pradesh</option>
                                        <option value={'rajasthan'}>Rajasthan</option>
                                        <option value={'bihar'}>Bihar</option>
                                    </select>
                                </div>

                                {/* Zip */}
                                <div className="col-md-3">
                                    <label className="form-label">Zip</label>
                                    <input
                                        type="text"
                                        name="zip"
                                        inputMode="numeric"
                                        className="form-control"
                                        placeholder="Enter your Zip "
                                        value={formData.zip}
                                        onChange={handleChange} />
                                </div>

                                {/* Checkbox */}
                                <div className="col-12">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            name="agreed"
                                            className="form-check-input"
                                            checked={formData.agreed}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label">
                                            I agree to the terms & conditions
                                        </label>
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