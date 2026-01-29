import { useFormInput } from "../../useFormInput"

const MyForm = () => {
    const firstNameProps = useFormInput('');
    const lastNameProps = useFormInput('');
    const emailProps = useFormInput('');

    return (
        <div className="card bg-dark text-light">
            <div className="card-body pt-0">
                <label className="form-label pe-4">
                    First name:
                    <input
                        className="form-control"
                        placeholder="Enter first name"
                        {...firstNameProps}
                    />
                </label>

                <label className="form-label pt-3">
                    Last name:
                    <input
                        className="form-control"
                        placeholder="Enter last name"
                        {...lastNameProps}
                    />
                </label><br />

                <label className="form-label pt-3">
                    Email:
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        {...emailProps}
                    />
                </label>
                <hr />

                <p className="lead fs-4">
                    Good morning, {firstNameProps.value} {lastNameProps.value}.
                </p>
                <p className="fs-6">
                    You have used <b>{emailProps.value}</b> for login.
                </p>
            </div>
        </div>
    )
}

export default MyForm
