import React from 'react';
import {Link, NavLink} from "react-router-dom";
import RightSide from "./RightSide";
import "./app.css"
import logo from "./salamon-travel-high-resolution-logo-white-transparent.png"

function LeftSide(props) {
    return (
        <div>
            <div className={"left-side"}>
                <br/>

                {/**

                <img width={150} style={{float:"right", marginRight:"10%"}} src={logo} alt="#404" />


                    */}

                <span style={{float:"right", marginRight:"10%"}} >LOGO LOGO</span>
                <div className={"btn-group"}>
                    <button className={"btn-of-left"}><Link style={{textDecoration:"none"}} to={"/"} >Home dashboard</Link> </button>
                    <button className={"btn-of-left"}><Link style={{textDecoration:"none"}} to={"/feedback"}> Feedback</Link> </button>
                    <button className={"btn-of-left"}><Link style={{textDecoration:"none"}} to={"/gallery"}> Gallery</Link></button>
                    <button className={"btn-of-left"}><Link style={{textDecoration:"none"}} to={"/guide"}>Guide</Link></button>
                    <button className={"btn-of-left"}><Link style={{textDecoration:"none"}} to={"/packet"}>Packet</Link> </button>
                </div>
            </div>
        </div>
    );
}

export default LeftSide;