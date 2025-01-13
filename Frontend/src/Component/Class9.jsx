import React from "react";
import '../css/Class9.css'
import { Classes } from "../JSX/Function";
import { Class9Arr } from "../JSX/Class9Arr";
import Filter from "../JSX/Filter";

export default function ClassIX() {
    return (
        <>
            <div className="Container">
                <Filter />
                <div className="ScrolBody">
                    {Class9Arr.map(Classes)}
                </div>
            </div>
        </>
    )
}