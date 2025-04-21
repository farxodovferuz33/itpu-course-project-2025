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
                        {lang==="RU"?"Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}
                    </p>

                    <br/>
                    <h5 style={{textShadow: "4px 4px 2px rgba(157,135,243,0.6)"}}>

                        {lang==="RU"?"* Профессиональные гиды":"* Professional guides"}</h5>

                    <p>
                        {lang==="RU"?"Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной Lorem Ipsum - это текст-рыба":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}
                    </p>
                </div>

                <img className={"minaret1"} src={minaret} alt="#404"/>
            </div>
        </div>
    );
}

export default WhyUs;