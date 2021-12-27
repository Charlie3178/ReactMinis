import React, { useState } from "react";
import { render } from "react-dom";

export default function counter() {
    const [count, setCount] = useState(0)

    return <div>
        <button onClick={() => setCount(count + 1)}>Up</button>
        <h1>{count}</h1>
        <button onClick={() => setCount(count - 1)}>Down</button>
    </div>
}