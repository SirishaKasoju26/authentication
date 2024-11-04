import React, { useState } from 'react';
import img from "../Assets/login.png";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

import './Login.scss';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    localStorage.setItem("email", email);
    localStorage.getItem("email")


    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError('Invalid email address');
        } else {
            setEmailError('');
        }
    };

    const validatePassword = () => {
        if (password.length < 8 || password.length > 16) {
            setPasswordError('Password should between 8 & 16 characters');
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!passwordRegex.test(password)) {
            setPasswordError('Password should be lowercase, uppercase');
        } else {
            setPasswordError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert('Missing Required Fields. Please enter valid details.');
            return;
        }

        validateEmail();
        validatePassword();

        if (!emailError && !passwordError) {
            alert('Signed in successful!');
            window.location.href = '/welcome?email=' + encodeURIComponent(email);
        }
    };

    return (
        <div className='container'>


            <div className='left'>
                <div className='right'>
                    <h1>Login</h1>
                    <p>Welcome back! please enter your detail</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} onBlur={validateEmail} />
                        {emailError && <p>{emailError}</p>}
                    </div>

                   

                    <div className='passed'>
                        <input type="password" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} onBlur={validatePassword} />
                        {passwordError && <p>{passwordError}</p>}
                    </div>

                    <div className='images'>
                        <FaRegEyeSlash />
                    </div>


                    <Link to="#" className='forgotPassword'>Forgot Password?</Link>

                    <button type="submit">Submit</button>


                </form>



            </div>

            <div className="login">
                <img src={img} alt="" />
            </div>



        </div>
    );
};

export default Login;