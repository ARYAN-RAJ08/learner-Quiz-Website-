import React from "react";
import '../css/Navbar.css';
import { Link } from "react-router-dom";
import logo from "../Images/learner logo.png"
export default function Navbar() {
    return (
        <>
            <div className="a">
                <div className="b">
                    <Link to="/"><img src={logo} alt="logo" className="Logo"></img></Link>

                </div>
                <div className="c">
                    <Link to="/" className="home s">Home</Link>
                    <Link to="/aboutus" className="aboutus s">About Us</Link>
                    <div className="contactus s">Contact Us</div>
                    <Link to='/login' className="login s">Log In</Link>
                </div>
            </div>
        </>
    )
}