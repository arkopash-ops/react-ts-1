import { useMemo, useState } from "react";

const Example3 = () => {
    const [color, setColor] = useState("#ffffff");

    const bgColor = useMemo(() => {
        return color
    }, [color]);

    return (
        <div className="container">
            <div className="card">
                <div className="card-header bg-dark">
                    <input
                        type="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className="form-control form-control-lg"
                    />
                </div>

                <div className="card-body text-center">
                    <span className="badge bg-secondary mb-3">
                        {bgColor.toUpperCase()}
                    </span>

                    <div
                        className="rounded-3 mt-3"
                        style={{
                            backgroundColor: bgColor,
                            height: "120px",
                            border: "1px solid #dee2e6"
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Example3;
