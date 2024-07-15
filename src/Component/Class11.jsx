import React from "react";
import '../css/Class9.css'
import { Classes } from "../JSX/Function";
import { Class11Arr } from "../JSX/Class11Arr";
import Filter from '../JSX/Filter';

export default function ClassXI() {
    return (
        <>
            <div className="Container">
                <Filter />
                <div className="ScrolBody">
                    {Class11Arr.map(Classes)}
                </div>
            </div>
        </>
    );
}