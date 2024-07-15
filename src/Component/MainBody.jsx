import React from 'react';
import { ClassIX, ClassX, ClassXI, ClassXII } from '../JSX/Cla';
import { Classes } from '../JSX/Function';
import '../css/MainBody.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function MainBody() {
    return (
        <>
            <div className='ClaIX'>
                {ClassIX.map(Classes)}
                <Link to='/class9' className='arrow'>
                    <i class="fa-solid fa-angles-right arr"></i>
                </Link>
            </div>
            <div className='ClaIX'>
                {ClassX.map(Classes)}
                <Link to='/class10' className='arrow'>
                    <i class="fa-solid fa-angles-right arr"></i>
                </Link>
            </div>
            <div className='ClaIX'>
                {ClassXI.map(Classes)}
                <Link to='/class11' className='arrow'>
                    <i class="fa-solid fa-angles-right arr"></i>
                </Link>
            </div>
            <div className='ClaIX'>
                {ClassXII.map(Classes)}
                <Link to='/class12' className='arrow'>
                    <i class="fa-solid fa-angles-right arr"></i>
                </Link>
            </div>
            <Footer />

        </>
    )

}

export default MainBody
