import React from "react";
import '../css/Navbar.css';
import { Link, useNavigate } from "react-router-dom";
import logo from "../Images/learner logo.png"
export default function Navbar() {
    const tkn = JSON.parse(localStorage.getItem('token'));
    const Navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('token');
        Navigate('/')
    }
    if (tkn === null) {
        return (
            <>
                <div className="a">
                    <div className="b">
                        <Link to="/"><img src={logo} alt="logo" className="Logo"></img></Link>

                    </div>
                    <div className="c">
                        <Link to="/" className="home s">Home</Link>
                        <Link to="/aboutus" className="aboutus s">About Us</Link>
                        <Link to='/contactus' className="contactus s">Contact Us</Link>
                        <Link to='/login' className="login s">Log In</Link>
                    </div>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="a">
                    <div className="b">
                        <Link to="/"><img src={logo} alt="logo" className="Logo"></img></Link>

                    </div>
                    <div className="c">
                        <Link to="/" className="home s">Home</Link>
                        <Link to="/aboutus" className="aboutus s">About Us</Link>
                        <Link to='/contactus' className="contactus s">Contact Us</Link>
                        <div onClick={handleLogout} className="login s">Log Out</div>
                    </div>
                </div>
            </>
        )
    }
}