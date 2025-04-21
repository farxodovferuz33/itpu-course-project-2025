import React from 'react';
import avatar from "./man.png"

function RightSide(props) {
    return (
        <div>
            <div className={"right-side"}>
                <header>
                    <h1>Hello, Feruz</h1>
                    <div style={{display:"flex", gap:"10px"}}>
                        <img src={avatar} width={40} alt="#404"/>
                        <h4 className={"text-success"}>Feruz Farxodov</h4>
                    </div>
                </header>
            </div>
        </div>
    );
}

export default RightSide;