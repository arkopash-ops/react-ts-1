import { useMemo, useState } from "react";
import useDebouncedValue from "../CustomHook/useDebouncedValue";

const someNames: string[] = [
    "Isha", "Zeel", "Aryan", "Moulik",
    "Harsh", "Mohit", "Ayush", "Kishan",
    "Nidhi", "Neel", "Vaishnavi", "Pranav",
    "Vishvam", "Bhavy", "Honey", "Shanvi"
];

const Example2 = () => {
    const [search, setSearch] = useState("");
    const debouncedQuery = useDebouncedValue(search, 500);


    const filterName = useMemo(() => {
        if (!debouncedQuery) return someNames;

        return someNames.filter(
            n => n.toLowerCase()
                .includes(debouncedQuery.toLowerCase())
        );
    }, [debouncedQuery]);

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-header bg-dark">
                    <div className="input-group">
                        <input
                            type="text"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Search Name"
                            className="form-control"
                        />
                        <button className="input-group-text" disabled>
                            <i className="bi bi-search"></i>
                        </button>
                    </div>
                </div>

                <div className="card-body">
                    {filterName.length === 0 ? (
                        <p className="mt-3 text-muted text-center">Name not found.</p>
                    ) : (
                        <div className="row mt-3 g-2">
                            {filterName.map((name) => (
                                <div key={name} className="col-6 col-md-3">
                                    <div className="border rounded py-2 text-center">
                                        {name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Example2