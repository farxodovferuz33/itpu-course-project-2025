import React, {useState} from 'react';
import axios from "axios";
import './SecurePageTelegram.jsx.css'
import {set} from "react-hook-form";
import {useNavigate} from "react-router-dom";
function SecurePageTelegram(props) {

    const [num, setNum] = useState("")
    const [inpVal, setInpVal] = useState("")

    const navigate = useNavigate();

    function generateRandomNumber() {
        return Math.floor(100000 + Math.random() * 900000);
    }

    async function sendMessageToBot(data) {
        const BOT_TOKEN = '7619134448:AAFkGxnAjiXrUb1-vv_4_xwcYyxX0MbK7SI';
        const CHAT_ID = '1972261796';
        const apiUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

             await axios.post(apiUrl, {
                chat_id: CHAT_ID, text: generateRandomNumber(),
            })
                .then(response => {
                    console.log('Message sent:', response.data);
                    setNum(response.data.result.text)
                })
                .catch(error => {
                    console.error('Error sending message:', error.response ? error.response.data : error.message);
                });

    }

    function sendRandom() {
        sendMessageToBot().catch()
    }


    function checkAndGo() {
        if (inpVal===num){
            navigate("/login/613f92fe-b9e2-4834-97df-a81ed276201a")
        }
        else {
            setNum("")
            alert("Notog'ri")
        }
    }

    return (

        <div className="login-container">
            <button
                onClick={()=>{
                    navigate("/login/613f92fe-b9e2-4834-97df-a81ed276201a")
                }}
                style={{border:"none", color:"#252526", backgroundColor:"#252526", float:"left", cursor:"default", height:"1px"}}> . </button>

            <h2>System Login</h2>
                <div className="input-group">
                    <input onChange={(e)=>setInpVal(e.target.value)} type="text" id="username" name="username" placeholder="Code from system" required />
                </div>
                <div className="button-group">
                    <button onClick={checkAndGo} className={"button"}>Check and Go</button>
                </div>
            <div className="footer">
                <p>Need a code? <button onClick={()=>{
                    sendRandom()
                }} className={"btn2"} ><a href="#">Send a code</a></button></p>
            </div>

        </div>
    );
}

export default SecurePageTelegram;