import React, {useEffect, useState} from 'react';
import './header.css'
import logo from "./img/salamon-travel-high-resolution-logo-white-transparent.png"
import cartImg from "./img/cart.png"
import Rodal from "rodal";

function Header(props) {
    const lang = localStorage.getItem("lang");


    const [visible, setVisible] = useState(false)

    let cart = JSON.parse(localStorage.getItem('cart'));

    function openCarts() {
        setVisible(true)
    }

    return (
        <div>
            <header>
{/*                 <img className={"Logo-of-header"} width={120} src={logo} alt="#404"/> */}
                <span style={{color:"white"}}> LOGO </span>
                <ul>
                    <li><a href="#aboutUs">{lang === "RU" ? "O нас" : "About us"}</a></li>
                    <li><a href="#packets">{lang === "RU" ? "Tуристические пакеты" : "Tour packets"}</a></li>
                    <li><a href="#guides">{lang === "RU" ? "O наших гидах" : "About our guides"}</a></li>
                    <li><a href="#contacts">{lang === "RU" ? "Наши контакты" : "Contacts"}</a></li>
                </ul>


                <div className={"d-flex"}>
                    <div id={"responsiveNav"}>
                        <div>
                            <li><a href="#aboutUs">{lang === "RU" ? "O нас" : "About us"}</a></li>
                            <br/>
                            <li><a
                                href="#packets">{lang === "RU" ? "Tуристические пакеты" : "Tour packets"}</a>
                            </li>
                        </div>

                        <div>
                            <li><a href="#guides">{lang === "RU" ? "O наших гидах" : "About our guides"}</a></li>
                            <br/>
                            <li><a href="#contacts">{lang === "RU" ? "Наши контакты" : "Contacts"}</a></li>
                        </div>
                    </div>

                    <div>
                        <span className={"text-light"}>{cart!==null?cart.length:0}</span>
                        <img onClick={openCarts} style={{cursor: "pointer"}} width={20} src={cartImg} alt=""/>
                    </div>

                    <select onChange={(e) => {
                        localStorage.setItem("lang", e.target.value)
                        window.location.reload();
                    }} className={"header-select"} style={{
                        backgroundColor: "rgba(11, 2, 45, 0.5)",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        width: "80px"
                    }}>
                        <option value="">EN/RU</option>
                        <option value="UZ">EN</option>
                        <option value="RU">RU</option>
                    </select>
                </div>
            </header>


            <Rodal visible={visible} onClose={() => {
                setVisible(!visible)
            }}>
                <div style={{width: "100%", height: "100%", overflow: "scroll"}}>
                    <table className={"table table-bordered"}>

                        <tbody>
                        { cart!==null && cart.length!==0?
                            cart.map((item, index)=><tr key={index}>
                                <td><img width={70} src={`data:image/jpeg;base64,${item.photo.photoData}`} alt=""/></td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td><button onClick={()=>{
                                    cart = cart.filter(item1 => item1.uuid !== item.uuid)

                                    localStorage.setItem("cart", JSON.stringify(cart))
                                    window.location.reload()
                                    alert("Paket o'chirildi!")
                                }} className={"btn btn-danger"}>X</button></td>
                            </tr>):<tr className={"text-center text-success my-5"}><td>No booked travel tours</td></tr>
                        }
                        </tbody>

                    </table>

                </div>
            </Rodal>
        </div>
    );
}

export default Header;