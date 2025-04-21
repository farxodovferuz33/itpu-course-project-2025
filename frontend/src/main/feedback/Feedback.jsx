import React from 'react';
import "./feedback.css"
import ark from "./ark.jpg";
import axios from "axios";
import {useForm} from "react-hook-form";

function Feedback(props) {
    const {reset, register, handleSubmit} = useForm();

    async function feedbackSubmit(data){
        await saveFeedback(data).then().catch()
        await sendMessageToBot(data).then().catch()
        reset()
        alert("Feedback jo'natildi!")
    }

    const lang = localStorage.getItem("lang");


    async function sendMessageToBot(data) {
        const BOT_TOKEN = '7619134448:AAFkGxnAjiXrUb1-vv_4_xwcYyxX0MbK7SI';
        const CHAT_ID = ['1972261796'];
        const MESSAGE = `Name and surename: \nIsm familya: ${data.fullName} \nYour phone number: ${data.phoneNumber} \nEmail: ${data.email} \nFeedback: *${data.feedback}*`;
        const apiUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

        for (let id of CHAT_ID) {
            await axios.post(apiUrl, {
                chat_id: id, text: MESSAGE,
            })
                .then(response => {
                    console.log('Message sent');
                })
                .catch(error => {
                    console.error('Error sending message:', error.response ? error.response.data : error.message);
                });
        }

    }

    async function saveFeedback(data){
        return await axios.post("http://localhost:8080/feedback", data)
    }


    return (
        <div className={"bg-light"} style={{borderTop:"1px solid"}}>
            <div className={"introd"}>
                <img className={"ark"} src={ark} alt="#404"/>

                <div className={"feedb"}>
                    <form onSubmit={handleSubmit(feedbackSubmit)}>
                        <h3 style={{textShadow: "4px 4px 2px rgba(157,135,243,0.6)"}}>
                            {lang==="RU"?"Оставляйте свои жалобы и предложения здесь":"Let us know about your concerns and feedbacks"}</h3>
                        <br/>
                        <br/>
                        <label >
                            {lang==="RU"?"Ваша фамилия:":"Name and surename:"}
                            <input required={true} minLength={2} {...register("fullName")} className={"form-control"} type="text" placeholder={"Name and surename"}/>
                        </label>
                        <br/>

                        <br/>
                        <label>
                            {lang==="RU"?"Ваш номер телефона:":"Your phone number:"}

                            <input required={true} pattern="\d{12}" defaultValue={"+"} {...register("phoneNumber")}  className={"form-control"} type="tel" placeholder={"Your phone number"}/>
                        </label>
                        <br/>
                        <br/>

                        <label>
                            {lang==="RU"?"Ваш электронный адрес:":"Your email address:"}

                            <input required={true} minLength={3} {...register("email")}  className={"form-control"} type="email" placeholder={"qwerty@gmail.com"}/>
                        </label>

                        <br/>
                        <br/>
                        <label >
                            {lang==="RU"?"Напишите о своей жалобе или предложении:":"Tell us about your concerns and feedbacks:"}
                            <textarea required={true} minLength={3} {...register("feedback")} style={{resize:"none"}} className={"form-control"}  placeholder={"feedback"}/>
                        </label>

                        <button style={{float:"right"}} className={"btn btn-success m-3"}>Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Feedback;