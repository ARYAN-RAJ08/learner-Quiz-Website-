import React from "react";
import '../css/Class9.css'
import { Classes } from "../JSX/Function";
import { Class10Arr } from "../JSX/Class10Arr";
import Filter from '../JSX/Filter';

export default function ClassX() {
    return (
        <>
            <div className="Container">
                <Filter />
                <div className="ScrolBody">
                    {Class10Arr.map(Classes)}
                </div>
            </div>
        </>
    )
}