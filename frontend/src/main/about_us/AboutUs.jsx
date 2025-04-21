import React from 'react';
import "./aboutUs.css"

function AboutUs(props) {
    const lang = localStorage.getItem("lang");

    return (
        <div className={"aboutusbody"}>
            <div className="aboutUs">
                <div className={"color"}>
                    <h1 className={"text-center h1-of-aboutusbody"}>{lang==="RU"?"Путешествуйте по Узбекистану с *Company name*":"With *Company Name* travel to Uzbekistan"}</h1>
                    <p className={"text-center p-of-aboutusbody"}>{lang==="RU"?"Путешествуйте по Узбекистану вместе с нами по доступным ценам.":"Travel with us with Affordable prices"}</p>
                </div>
            </div>
            <div id="aboutUs"></div>

        </div>
    );
}

export default AboutUs;