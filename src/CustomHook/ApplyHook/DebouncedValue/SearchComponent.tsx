import { useState } from "react";
import useDebouncedValue from "../../useDebouncedValue";

function SearchComponent() {
    const [query, setQuery] = useState("");
    const debouncedQuery = useDebouncedValue(query, 500);

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-6">

                    <div className="input-group input-group-lg">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Type to search..."
                            className="form-control"
                        />
                        <button className="input-group-text">
                            <i className="bi bi-search"></i>
                        </button>
                    </div>

                    <p className="mt-3 text-muted">
                        {debouncedQuery
                            ? `You are searching for: ${debouncedQuery}`
                            : "Start typing..."}
                    </p>

                </div>
            </div>
        </div>
    );
}

export default SearchComponent;
