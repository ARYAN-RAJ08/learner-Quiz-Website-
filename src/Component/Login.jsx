import React from "react";
import '../css/Login.css';
import logo from "../Images/learner logo.png"
import { Link } from "react-router-dom";
export default function LogIn() {
    return (
        <>
            <Link to='/' className="lolo">
                <img src={logo} alt="/" className="lolo"></img>
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
                            <h2 className="L">LOGIN</h2>
                            <form action="">
                                <div class="inputBx">
                                    <input type="text" required="required" />
                                    <span>Login</span>
                                    <i class="fas fa-user-circle"></i>
                                </div>
                                <div class="inputBx password">
                                    <input id="password-input" type="password" name="password" required="required" />
                                    <span>Password</span>
                                    <a href="#" class="password-control"></a>
                                    <i class="fas fa-key"></i>
                                </div>
                                <label class="remember"><input type="checkbox" />
                                    Remember</label>
                                <div class="inputBx">
                                    <input type="submit" value="Log in" />
                                </div>
                            </form>
                            <p>Forgot password? <a href='#'>Click Here</a></p>
                            <p>Don't have an account <Link to='/signup'>Sign up</Link></p>
                        </div>
                    </div>

                </div>
            </section></>
    );
}