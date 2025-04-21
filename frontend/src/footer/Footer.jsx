import React from 'react';
import logo from "./salamon-travel-high-resolution-logo-white-transparent.png"
import "./footer.css"
import location from "./free-icon-location-pin-7785145.png"

function Footer(props) {
    const lang = localStorage.getItem("lang");

    const style = {



        }
    return (
        <div id={"contacts"} style={{backgroundColor:"rgba(11, 2, 45, 0.64)"}}>
            <footer>
                <div className={"footer-left"}>
                    <p>
{/*                         <img width={150} src={logo} alt="#404"/> */}
                        <span> LOGO </span>
                        <br/>
                        <br/>
                        <br/>

                        {lang==="RU"?"Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал \n" +
                            "Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum Lorem Ipsum - это текст-рыба, часто используемый в печати Lorem Ipsum - это текст-рыба, часто используемый в печати Lorem Ipsum - это текст-рыба, часто используемый в печати":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery \n" +
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s "}
                    </p>
                </div>

                <div>
                    <ul className={"footer-li"}>
                        <li>{lang==="RU"?"Контакты:":" Contacts:"}</li>
                        <li>International: +17894561232 </li>
                        <li>Uzbekistan: +998912345678 </li>

                        <li>{lang==="RU"?"Наши адреса:":"Address:"}</li>
                        <li>Uzbekistan, Bukhara region, Bukhara city, BukharaBukhara, Bukhara Street home 845 A</li>
                        <li><button className={"btn btn-light"}><a target={"_blank"} className={"text-dark"} href="https://maps.app.goo.gl/ZmQku5afMqejd9uz7">Google xaritada ko'rish </a> <img width={20}
                                                                                                                          src={location} alt=""/></button> </li>

                    </ul>

                </div>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61517.84702568083!2d64.38159865110059!3d39.77759498137793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f50060e65993cd5%3A0xc87beaf40e48e767!2z0JHRg9GF0LDRgNCwLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e1!3m2!1sru!2s!4v1744033105623!5m2!1sru!2s" width="600" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </footer>
        </div>
    );
}

export default Footer;