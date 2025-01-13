import React from 'react';
import "../css/Heading.css"
import { Link } from 'react-router-dom';
function Heading() {
    return (
        <>
            <div className='header'>
                <Link to='/class9' className='header2 C'>Class IX </Link>
                <Link to='/class10' className='header3 C'>Class X </Link>
                <Link to='/class11' className='header4 C'>Class XI </Link>
                <Link to='/class12' className='header5 C'>Class XII </Link>
                <Link className='header6 C'>Competition</Link>

            </div>

        </>
    )
}

export default Heading
