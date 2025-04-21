import React from 'react';
import AboutUs from "./about_us/AboutUs";
import AboutUsInfo from "./about_us_info/AboutUsInfo";
import Gallery from "./gallery/Gallery";
import WhyUs from "./why_us/WhyUs";
import Packets from "./packets/Packets";
import Guides from "./guides/Guides";
import Feedback from "./feedback/Feedback";

function Main(props) {
    return (
        <div>
            <AboutUs/>
            <AboutUsInfo/>
            <Packets/>
            <WhyUs/>
            <Gallery/>
            <Guides/>

            <Feedback/>
        </div>
    );
}

export default Main;