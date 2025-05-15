import React from 'react';
import minaret from "./img/minaret.jpg"
import "./whyUs.css"

function WhyUs(props) {

    const lang = localStorage.getItem("lang");

    return (
        <div className={"bg-light"} style={{borderTop:"1px solid"}}>
            <div className={"whyUsMain"}>
                <div className={"usInfo1"}>
                    <h3 style={{textShadow: "4px 4px 2px rgba(157,135,243,0.6)"}}>
                        {lang==="RU"?"Почему мы?":"Why you should choose us?"}</h3>
                    <br/>
                    <h5 style={{textShadow: "4px 4px 2px rgba(157,135,243,0.6)"}}>
                        {lang==="RU"?"* Самые дешевые цены":"* Affordable prices"}</h5>
                    <p>
                        {lang==="RU"?"С нами вы можете путешествовать по историческим местам Узбекистана от 700 000 сум.":"You can travel with us with starting price of packets 700 000 ming sum"}
                    </p>

                    <br/>
                    <h5 style={{textShadow: "4px 4px 2px rgba(157,135,243,0.6)"}}>

                        {lang==="RU"?"* Профессиональные гиды":"* Professional guides"}</h5>

                    <p>
                        {lang==="RU"?"С нашими профессиональными гидами вы не только весело проведете время, но и улучшите свои знания об истории Узбекистана.":"Not only you will have a rest with our guides plus you will improve knowledge about history"}
                    </p>
                </div>

                <img className={"minaret1"} src={minaret} alt="#404"/>
            </div>
        </div>
    );
}

export default WhyUs;