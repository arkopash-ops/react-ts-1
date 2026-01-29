import { useFetch } from "../../useFetch";

interface Pokemon {
    name: string;
}

const FetchData = () => {
    const [data] = useFetch<Pokemon[]>(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10"
    );

    return (
        <div className="row row-cols-5">
            {data &&
                data.map((p) => (
                    <div key={p.name} className="col">
                        <span className="badge bg-info w-100 mt-3">
                            <p className="fs-5 pt-2 text-dark">{p.name}</p>
                        </span>
                    </div>
                ))}
        </div>
    );
};

export default FetchData;
