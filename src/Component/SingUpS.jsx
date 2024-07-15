import React from "react";
import '../css/SingUp.css';
// import show_hide_password from '../JavaScript/LogIn';
import { Link } from "react-router-dom";
import logo from '../Images/learner logo.png'
export default function SingUp() {
    return (
        <>
            <Link to='/' className="lolo">
                <img src={logo} alt="/" className="looo"></img>
            </Link>
            <section className="BoDy">
                <div class="box">
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>

                    <div class="container">
                        <div class="form">
                            <h2 className="L">SignUp</h2>
                            <form action="">
                                <div class="inputBx">
                                    <input type="text" required="required" />
                                    <span>Full Name</span>
                                    <i class="fas fa-user-circle"></i>
                                </div>
                                <div class="inputBx">
                                    <input type="text" required="required" />
                                    <span>Phone Number</span>
                                    <i class="fa-solid fa-phone fas"></i>
                                </div>
                                <div class="inputBx">
                                    <input type="text" required="required" />
                                    <span>Email Id</span>
                                    <i class="fa-solid fa-envelope fas"></i>
                                </div>
                                <div class="inputBx password">
                                    <input id="password-input" type="password" name="password" required="required" />
                                    <span>Password</span>
                                    <a href="#" class="password-control"></a>
                                    <i class="fas fa-key"></i>
                                </div>
                                <div class="inputBx password">
                                    <input id="password-input" type="password" name="password" required="required" />
                                    <span>Confirm Password</span>
                                    <a href="#" class="password-control"></a>
                                    <i class="fas fa-key"></i>
                                </div>
                                <div class="inputBx">
                                    <input type="submit" value="Sign Up" />
                                </div>
                            </form>
                            <p>Already have an account <Link to='/login'>Log In</Link></p>
                        </div>
                    </div>

                </div>
            </section></>
    );
}