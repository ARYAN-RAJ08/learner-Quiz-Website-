import React from "react";
import "../css/test.css";
import { Link } from "react-router-dom";
import { TestFunction, TestHide } from "../JavaScript/TestFunction";
import { Quuesstion } from "../JSX/Question";
import { EExxaamm } from "../JSX/Function";

export default function Test() {
    return (
        <>
            <div className="All">
                <div className="SubAll">
                    <h1>Test Instruction</h1>
                    <ol className="Ins">
                        <li>All questions are compulsory.</li>
                        <li>This question paper contains 15 questions.</li>
                        <li>All questions are Mcq.</li>
                        <li>No negative marks</li>
                        <li>Each question carry 1 mark</li>
                    </ol>
                    <div className="agree">
                        <input type='checkbox' />
                        <span className="agr">I have gone through the instructions, understood legends and will hereby follow the same.</span>
                    </div>
                </div>
                <div className="Bu">
                    <Link to='/' className="Back">Back</Link>
                    <div className="Back" onClick={TestFunction}>Start</div>
                </div>
            </div>
            <div className="Ale">
                <div className="ab">
                    <div className="ac">
                        <div className="ad">Subject: Math</div>
                        <div className="ae">Class: IX</div>
                    </div>
                    <div className="af">
                        <div className="ag">Full Marks: 15</div>
                        <div className="ah">Time: 15min</div>
                    </div>
                </div>
                {Quuesstion.map(EExxaamm)}
                <div className="End">
                    <button className="EndTest" onClick={TestHide}>End Test</button>
                </div>
            </div>
            <div className="Ble">
                <div className="ble">
                <div>Marks: 6/15</div>
                    <i class="fa-solid fa-circle-check check"></i>
                    <div className="thank">ThankYou</div>
                    <Link to='/'><i class="fa-solid fa-house hme"></i></Link>
                </div>
            </div>
        </>
    )
}