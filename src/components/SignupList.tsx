import React, { useState } from "react";
import type { FormData } from "../interfaces/formData";
import { SignupTable } from "./SignupTable";
import { Pagination } from "./Pagination";

const USER_PER_PAGE = 3;

const SignupList: React.FC = () => {
    const [data] = useState<FormData[]>(() => {
        const storedData = localStorage.getItem("signupData");
        console.log(storedData);
        return storedData ? JSON.parse(storedData) : [];
    });

    const [search, setSearch] = useState("");
    const [gender, setGender] = useState<"all" | "male" | "female">("all");

    const filteredData = data.filter((user) => {
        const searchMatch =
            user.firstName.toLowerCase().includes(search.toLowerCase()) ||
            user.lastName.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase());

        const genderMatch =
            gender === "all" || user.gender === gender;

        return searchMatch && genderMatch;
    });

    const [currentPage, setCurrentPage] = useState<number>(1);

    const startIndex = (currentPage - 1) * USER_PER_PAGE;
    const endIndex = startIndex + USER_PER_PAGE;
    const paginatedData = filteredData.slice(startIndex, endIndex);

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-11 col-xl-10">

                    <div className="card shadow-lg border-0 rounded-4 bg-dark text-light">
                        <div className="card-header bg-transparent border-0 text-center py-4">
                            <h2 className="fw-bold mb-0">
                                Registered Users
                            </h2><hr />
                        </div>

                        <div className="card-body px-4 pb-4">
                            {/* Search Bar */}
                            <div className="row mb-4 align-items-center">
                                <div className="col-md-8 mb-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search by name or email"
                                        value={search}
                                        onChange={(e) => {
                                            setSearch(e.target.value);
                                            setCurrentPage(1);
                                        }}
                                    />
                                </div>

                                {/* Button Group */}
                                <div className="col-md-4 mb-2 d-flex gap-2 justify-content-md-end">
                                    {(["all", "male", "female"] as const).map((g) => (
                                        <button
                                            key={g}
                                            className={`btn ${gender === g ? "btn-primary" : "btn-outline-primary"}`}
                                            onClick={() => {
                                                setGender(g);
                                                setCurrentPage(1);
                                            }}
                                        >
                                            {g.toUpperCase()}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* table */}
                            <div className="table-responsive mt-4">
                                <SignupTable data={paginatedData} />
                            </div>

                            {/* pahination */}
                            <div className="mt-4">
                                <Pagination
                                    totalItems={data.length}
                                    itemsPerPage={USER_PER_PAGE}
                                    currentPage={currentPage}
                                    onPageChange={setCurrentPage}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignupList;
