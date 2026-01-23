import React from 'react'
import type { FormData } from '../interfaces/formData'

interface Props {
    data: FormData[];
}

export const SignupTable: React.FC<Props> = ({ data }) => {
    return (
        <table className="table table-dark table-striped table-bordered align-middle mb-0">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>password</th>
                    <th>Phone</th>
                    <th>Gender</th>
                    <th>Address</th>
                </tr>
            </thead>

            <tbody>
                {data.length === 0 ? (
                    <tr>
                        <td colSpan={6} className="text-center">
                            No data found
                        </td>
                    </tr>
                ) : (
                    data.map((user, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.firstName} {user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.phone}</td>
                            <td className='text-capitalize'>{user.gender}</td>
                            <td>{user.address}, {user.city}, {user.state}, India</td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    )
}
