import React from "react";
import { Link } from "react-router-dom";

function Display({displayName, description, imgURL}) {
    return (
        <div>
            <h1>{displayName}</h1>
            <p>{description}</p>
            <img src={imgURL} style={{height: "200px"}}></img>
            <Link to="/">BACK</Link>
        </div>
    )
}

export default Display;