import React from "react";
import SourceIX from '../Images/TestNine.png';
import SourceX from '../Images/TestTen.png';
import SourceXI from '../Images/TestEleven.png';
import SourceXII from '../Images/TestTwelve.png';
import { Link } from "react-router-dom";

export const ClassIX = [
    {
        src: SourceIX,
        SubName: 'Maths',
        Class: 'IX',
        Level: 'Easy'
    },
    {
        src: SourceIX,
        SubName: 'Hindi',
        Class: 'IX',
        Level: 'Easy'
    },
    {
        src: SourceIX,
        SubName: 'History',
        Class: 'IX',
        Level: 'Medium'
    },
    {
        src: SourceIX,
        SubName: 'English',
        Class: 'IX',
        Level: 'Hard'
    }
];

export const ClassX = [
    {
        src: SourceX,
        SubName: 'Maths',
        Class: 'X',
        Level: 'Easy'
    },
    {
        src: SourceX,
        SubName: 'chemistry',
        Class: 'X',
        Level: 'Medium'
    },
    {
        src: SourceX,
        SubName: 'History',
        Class: 'X',
        Level: 'Hard'
    },
    {
        src: SourceX,
        SubName: 'English',
        Class: 'X',
        Level: 'Medium'
    },
];
export const ClassXI = [
    {
        src: SourceXI,
        SubName: 'Maths',
        Class: 'XI',
        Level: 'Medium'
    },
    {
        src: SourceXI,
        SubName: 'Biology',
        Class: 'XI',
        Level: 'Hard'
    },
    {
        src: SourceXI,
        SubName: 'Civics',
        Class: 'XI',
        Level: 'Easy'
    },
    {
        src: SourceXI,
        SubName: 'English',
        Class: 'XI',
        Level: 'Medium'
    },
];
export const ClassXII = [
    {
        src: SourceXII,
        SubName: 'Maths',
        Class: 'XII',
        Level: 'Easy'
    },
    {
        src: SourceXII,
        SubName: 'Physics',
        Class: 'XII',
        Level: 'Hard'
    },
    {
        src: SourceXII,
        SubName: 'Geography',
        Class: 'XII',
        Level: 'Easy'
    },
    {
        src: SourceXII,
        SubName: 'English',
        Class: 'XII',
        Level: 'Medium'
    },
];


export function Cla(props) {
    return (
        <>
            <div className='class'>
                <img src={props.src} className='img' alt="/"></img>
                <div className='Sub'>{props.SubName}</div>
                <div className='Nine'>{props.Class}</div>
                <div className='Level'>{props.Level}</div>
                <Link to='/test' className='button'>Take Test</Link>
            </div>
        </>
    )
}