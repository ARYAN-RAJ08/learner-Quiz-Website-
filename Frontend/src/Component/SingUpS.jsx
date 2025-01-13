import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../css/SingUp.css';
// import show_hide_password from '../JavaScript/LogIn';
import { Link, useNavigate } from "react-router-dom";
import logo from '../Images/learner logo.png'


export default function SingUp() {
    const [fullName, setFullname] = useState()
    const [pNumber, setpNumber] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [Cpassword, setCpassword] = useState()
    const Navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            window.location.href = '/gotLost';
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            fullName,
            pNumber,
            email,
            password,
            Cpassword
        };

        // setSettingUp(true);
        axios.post('http://localhost:5000/signup', payload)
            .then((res) => {
                // setSettingUp(false);
                // toast("Log in Successful");
                console.log("Registering Successful:", res);
                //localStorage.setItem('token', JSON.stringify(res.data.token));
                Navigate('/login');
            })
            .catch((err) => {
                //setSettingUp(false);
                //toast("Registration failed");
                console.error(err);
            });

        console.log(payload);
    };

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
                                    <input type="text" name="fullName" onChange={(e) => setFullname(e.target.value)} required="required" />
                                    <span>Full Name</span>
                                    <i class="fas fa-user-circle"></i>
                                </div>
                                <div class="inputBx">
                                    <input type="text" name="pNumber" onChange={(e) => setpNumber(e.target.value)} required="required" />
                                    <span>Phone Number</span>
                                    <i class="fa-solid fa-phone fas"></i>
                                </div>
                                <div class="inputBx">
                                    <input name="email" onChange={(e) => setEmail(e.target.value)} type="text" required="required" />
                                    <span>Email Id</span>
                                    <i class="fa-solid fa-envelope fas"></i>
                                </div>
                                <div class="inputBx password">
                                    <input onChange={(e) => setPassword(e.target.value)} id="password-input" type="password" name="password" required="required" />
                                    <span>Password</span>
                                    <a href="#" class="password-control"></a>
                                    <i class="fas fa-key"></i>
                                </div>
                                <div class="inputBx password">
                                    <input onChange={(e) => setCpassword(e.target.value)} id="password-input" type="password" name="Cpassword" required="required" />
                                    <span>Confirm Password</span>
                                    <a href="#" class="password-control"></a>
                                    <i class="fas fa-key"></i>
                                </div>
                                <div class="inputBx">
                                    <input onClick={handleSubmit} type="submit" value="Sign Up" />
                                </div>
                            </form>
                            <p>Already have an account <Link to='/login'>Log In</Link></p>
                        </div>
                    </div>

                </div>
            </section></>
    );
}