import { useEffect, useState } from "react";
import type { User, UserStatus } from "../interfaces/user";

const UserList = () => {
    const [state, setState] = useState<UserStatus>({ status: "loading" });

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP Error: ${response.status}`);
                }
                return response.json();
            })
            .then((data: User[]) => {
                setState({ status: "success", data });
            })
            .catch((error) => {
                setState({
                    status: "error",
                    error: error instanceof Error ? error : new Error("An Unknown Error Occur!")
                });
            });
    }, []);

    return (
        <div className="container">
            <h1 className="mb-4 text-center text-light">User List</h1>

            {state.status === 'loading' && (
                <div className="text-center">
                    <div className="spinner-border text-primary" />
                    <p className="mt-2">Loading users...</p>
                </div>
            )}

            {state.status === 'error' && (
                <div className="alert alert-danger text-center">
                    <p className="mb-2">{state.error.message}</p>
                    <button
                        className="btn btn-outline-danger"
                        onClick={() => setState({ status: 'loading' })} >
                        Retry
                    </button>
                </div>
            )}

            {state.status === 'success' && (
                <div className="row g-3">
                    {state.data.map((user) => (
                        <div key={user.id} className="col-md-6 col-lg-4">
                            <div className="card h-100 shadow-sm border-2 bg-dark text-light">
                                <div className="card-body">
                                    <h4 className="card-title text-primary">{user.name}</h4>
                                    <h6 className="text-secondary mb-2">@{user.username}</h6>
                                    <hr />

                                    <p className="mb-1">
                                        <strong>Email:</strong> {user.email}
                                    </p>
                                    <p className="mb-1">
                                        <strong>Phone:</strong> {user.phone}
                                    </p>
                                    <p className="mb-1">
                                        <strong>Website:</strong>{" "}
                                        <a href={`https://${user.website}`} target="_blank" rel="noreferrer">
                                            {user.website}
                                        </a>
                                    </p>
                                    <hr />

                                    <h6 className="mb-1"> Address</h6>
                                    <p className="mb-0">
                                        {user.address.houseNo}, {user.address.street}
                                    </p>
                                    <p className="mb-0">
                                        {user.address.city} - {user.address.zipcode}
                                    </p>
                                    <small className="text-secondary">
                                        Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
                                    </small>
                                    <hr />

                                    <h6 className="mb-1">Company</h6>
                                    <p className="mb-0">
                                        <strong>{user.company.name}</strong>
                                    </p>
                                    <small className="text-secondary d-block">
                                        “{user.company.catchPhrase}”
                                    </small>
                                    <small className="text-secondary">
                                        {user.company.bs}
                                    </small>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            )}
        </div>
    )
}

export default UserList