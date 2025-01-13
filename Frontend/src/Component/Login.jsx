import React, { useState, useEffect } from "react";
import '../css/Login.css';
import logo from "../Images/learner logo.png"
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

export default function LogIn() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const Navigate = useNavigate()
    useEffect(() => { //prevent going to the login page after login to the account
        if (localStorage.getItem('token') !== null) {
            window.location.href = '/gotLost';
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault(); //prevent reloding
        const payload = {
            email,
            password
        };

        // setSettingUp(true);
        axios.post('http://localhost:5000/login', payload) //Backend connecting
            .then((res) => {
                // setSettingUp(false);
                // toast("Log in Successful"); //display default message on the screen
                console.log("User logged in:", res);
                localStorage.setItem('token', JSON.stringify(res.data.token)); //store a token in localstorage 
                Navigate('/');
            })
            .catch((err) => {
                //setSettingUp(false);
                //toast("Log in failed");
                console.error("Frontend Error", err);
            });

        console.log(payload);
    };
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
                            <form>
                                <div class="inputBx">
                                    <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} required />
                                    <span>Username</span>
                                    <i class="fas fa-user-circle"></i>
                                </div>
                                <div class="inputBx password">
                                    <input id="password-input" type="password" name="password" onChange={(e) => setPassword(e.target.value)} required="required" />
                                    <span>Password</span>
                                    <a href="#" class="password-control"></a>
                                    <i class="fas fa-key"></i>
                                </div>
                                <label class="remember"><input type="checkbox" />
                                    Remember</label>
                                <div class="inputBx">
                                    <input onClick={handleSubmit} type="submit" value="Log in" />
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