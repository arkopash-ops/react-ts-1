import { useEffect, useState } from "react";

export function useFetch<T>(url: string): [T | null] {
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(result => setData(result.results));
    }, [url]);

    return [data];
}
