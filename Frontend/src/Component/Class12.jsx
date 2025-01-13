import React from "react";
import '../css/Class9.css'
import { Classes } from "../JSX/Function";
import { Class12Arr } from "../JSX/Class12Arr";
import Filter from '../JSX/Filter';

export default function ClassXII() {
    return (
        <>
            <div className="Container">
                <Filter />
                <div className="ScrolBody">
                    {Class12Arr.map(Classes)}
                </div>
            </div>
        </>
    );
}