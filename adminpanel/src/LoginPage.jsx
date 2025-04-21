import React, {useState} from 'react';
import "./LoginPage.css"
import axios from "axios";
import {useNavigate} from "react-router-dom";
import apiCall from "./apiCall";
function LoginPage(props) {

    const [inpUsername, setInpUsername] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate();

    function login() {
        apiCall("/7a6ba797-9dca-4153-a071-3bc1183bc0c6/login", "POST", {username:inpUsername, password}).then(res=>{
            localStorage.setItem("key", res.data)
            navigate("/")
        }).catch(res=>{
            alert("Notog'ri")
        })
    }


    return (
        <div className={"body12"}>
            <div className="login-container">
                <div className="login-header">
                    <h2>Login</h2>
                    <div className="neon-line"></div>
                </div>
                <div className="login-form">
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input onChange={(e)=>setInpUsername(e.target.value)} type="text" id="username" name="username" placeholder="Enter your username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input onChange={(e)=>setPassword(e.target.value)} type="password" id="password" name="password" placeholder="Enter your password"/>
                    </div>
                    <div className="form-group">
                        <button onClick={login} type="submit">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;