import React, {useEffect, useState} from 'react';
import "./packets.css"
import axios from "axios";
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import {useForm} from "react-hook-form";
function Packets(props) {

    const [cart1, setCart1] = useState([])

    const [packets, setPackets] = useState([])
    const [visible, setVisible] = useState(false)
    const {register,reset,handleSubmit} = useForm()

    const storedBookedCarts = localStorage.getItem('cart');

    useEffect(() => {
        getPackets()
        if (storedBookedCarts===null){
            localStorage.setItem("cart", JSON.stringify([]))
            console.log("null worked to create")
        }else {
            const oldCart = localStorage.getItem('cart');
            const parsed = JSON.parse(oldCart);
            const done = cart1.concat(parsed);
            localStorage.setItem("cart", JSON.stringify(done))
        }
    }, [cart1]);




    function getPackets() {
        axios.get("http://localhost:8080/packet").then(res => {
            setPackets(res.data)
        })
    }


    function bookPacket(data, uuid) {
        getPacketByIdAndSend(data, uuid).then(res => {
        }).catch()

    }

    function getPacketByIdAndSend(data, uuid) {
        return axios.get("http://localhost:8080/packet/" + uuid).then(res=>{
            sendMessageToBot(data, res.data)
        })
    }

    function sendMessageToBot(data, item) {
        const BOT_TOKEN = '7619134448:AAFkGxnAjiXrUb1-vv_4_xwcYyxX0MbK7SI';
        const CHAT_ID = ['1972261796'];
        const MESSAGE = `ism familya: ${data.name} \ntelefon raqam: ${data.phone} \n Packet nomi: ${item.title}`;
        const apiUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

        for (let id of CHAT_ID) {
            console.log(id)
            axios.post(apiUrl, {
                chat_id: id, text: MESSAGE,
            })
                .then(response => {
                    console.log('Message sent:', response.data);
                })
                .catch(error => {
                    console.error('Error sending message:', error.response ? error.response.data : error.message);
                });
        }


    }

    function bronQilish(item){
        setVisible(!visible)
        localStorage.setItem("packet", JSON.stringify(item))
    }


    function mySubmit(data){
        const item = JSON.parse(localStorage.getItem("packet"));
        bookPacket(data, item.uuid)
        cart1[0] = item
        setCart1([...cart1])
        reset()
        setVisible(!visible)
        alert("Paket muvaffaqiyatli bron qilindi")
        window.location.reload()
    }

    const lang = localStorage.getItem("lang");

    return ( <div  style={{backgroundColor: "white", borderTop: "1px solid"}}>
            <div id={"packets"}>
                <h1  style={{textShadow: "4px 4px 2px rgba(157,135,243,0.6)"}} className={"intro1"}>
                    {lang==="RU"?"Узнайте о наших туристических пакетах и ​​забронируйте место прямо сейчас\n" +
                        "                    зарезервировать":"Know about our tour packets and book your ticket now\n" +
                        "                    "}

                </h1>

                <div className={"cardGroup"} >

                    {packets.map((item, index) => <div className="card" style={{width: "18rem"}} key={item.uuid}>
                            <img src={`data:image/jpeg;base64,${item.photo.photoData}`} className="{card-img-top}" alt="..." />
                                <div className={"card-body"}>
                                    <h5 className={"card-title"}>{item.title}</h5>
                                    <p className={"card-text"}>{item.description}</p>
                                    <p className={"card-text text-success"}>{item.price} so'm</p>
                                    <button className={'bron-button'} onClick={() => bronQilish(item)}>Bron qilish</button>
                                </div>
                        </div>
                    )}


                </div>

            </div>
        <Rodal height={310} visible={visible} onClose={()=> {
            setVisible(!visible)
            reset()
        }}>
            <form className={"formOfRodal p-2"} onSubmit={handleSubmit(mySubmit)}>
                <br/>
                <input minLength={2} required={true} placeholder={"O'zingiz haqqingizda ma'lumot (Ism va manzilingiz)"} className={"form-control w-100 "} {...register("name")} type="text"/> <br/>
                <input defaultValue={"998"} pattern="\d{12}" required={true} placeholder={"telefon raqam"} className={"form-control w-100 "} {...register("phone")} type="tel"/> <br/>
                <p>Online payment<br/> <span style={{color:"green"}}>2222 2222 3333 3333</span> <br/>
                <span style={{color:"green"}}>NAME SURENAME</span>
                </p>
                <button className={"btn btn-success w-25 float-end"}>Send</button>
            </form>
        </Rodal>
        </div>);
}

export default Packets;