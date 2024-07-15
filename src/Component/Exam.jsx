import React from "react";
import '../css/Exam.css';
export default function Exam(props) {
    return (
        <>
            <div className="qquu">
                <div className="Q" id={props.queNo}>
                    <div className="Question">
                        <span className="QQ">{props.queNo}. </span>
                        <span className="que">{props.question}</span>
                    </div>
                    <div className="option">
                        <div className="opch">
                            <input type="radio" name={props.queNo} />
                            <label className="option1">{props.optionOne}</label>
                        </div>
                        <div className="opch">
                            <input type="radio" name={props.queNo} />
                            <label className="option1">{props.optionTwo}</label>
                        </div>
                        <div className="opch">
                            <input type="radio" name={props.queNo} />
                            <label className="option1">{props.optionThree}</label>
                        </div>
                        <div className="opch">
                            <input type="radio" name={props.queNo} />
                            <label className="option1">{props.optionFour}</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}