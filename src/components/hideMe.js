import React, { useState } from "react";

export default function() {
    const [visibility, setVisibility] = useState("block");
    const [buttonText, setButtonText] = useState("Hide Me");

    const buttonClick = () => {
        setVisibility(visibility === "block" ? "none": "block")
        setButtonText(buttonText === "Hide Me" ? "Show Me": "Hide Me")
    }

    return <div>
        <h1 style={{ display: visibility }}>Hide Me</h1>
        <div>
            <button onClick={buttonClick}>{buttonText}</button>
           
        </div>
    </div>
}