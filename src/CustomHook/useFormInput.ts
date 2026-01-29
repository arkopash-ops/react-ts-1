import { useState } from "react"

interface InputProps {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export const useFormInput = (initialValue: string) => {
    const [value, setvalue] = useState(initialValue);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setvalue(e.target.value);
    }

    const inputProps: InputProps = {
        value: value,
        onChange: handleChange,
    };

    return inputProps;
}
