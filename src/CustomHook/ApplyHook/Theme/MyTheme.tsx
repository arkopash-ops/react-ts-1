import { useTheme } from "../../useTheme";

const MyTheme = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div
            className={`p-5 rounded d-flex justify-content-center align-items-center
        ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"}`}
        >
            <button
                className={`btn btn-sm ${theme === "light" ? "btn-dark" : "btn-light"
                    }`}
                onClick={toggleTheme}
            >
                Switch to {theme === "light" ? "Dark" : "Light"}
            </button>
        </div>
    );
};

export default MyTheme;
