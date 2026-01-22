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

    const [currentPage, setCurrentPage] = useState<number>(1);

    const startIndex = (currentPage - 1) * USER_PER_PAGE;
    const endIndex = startIndex + USER_PER_PAGE;
    const paginatedData = data.slice(startIndex, endIndex);

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
                            <div className="table-responsive">
                                <SignupTable data={paginatedData} />
                            </div>

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
