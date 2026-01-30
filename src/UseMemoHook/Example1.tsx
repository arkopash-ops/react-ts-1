import { useMemo, useState } from "react"

const Example1 = () => {
    const [value, setValue] = useState<number>(1);

    const fectorial = useMemo(() => {
        const n = Number(value);

        if (isNaN(n) || n <= 0) return "invalid";

        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }, [value]);

    return (
        <div className="container mt-4">
            <input
                type="number"
                value={value}
                onChange={e => setValue(Number(e.target.value))}
                placeholder="Enter A number"
                className="form-control"
            />
            <p className="mt-2 fs-5">
                Fectorial: {fectorial}
            </p>
        </div>
    )
}

export default Example1