import React, { useState } from "react";

export default function() {
    const [alignment, setAlignment] = useState("center");

    return <div>
        <h1 style={{ textAlign: alignment }}>Align Me</h1>
        <div>
            <button onClick={() => setAlignment("left")}>Left</button>
            <button onClick={() => setAlignment("center")}>Center</button>
            <button onClick={() => setAlignment("right")}>Right</button>
        </div>
    </div>
}