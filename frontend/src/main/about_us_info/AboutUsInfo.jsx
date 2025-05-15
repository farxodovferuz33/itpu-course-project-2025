import React from 'react';
import "./AboutUsInfo.css"
import minaret from "./img/minaret.jpg"
function AboutUsInfo(props) {
    const lang = localStorage.getItem("lang");
    return (

        <div id={"aboutUs"}>

            <div className={"aboutUsInfo"} >

                <img className={"minaret"} height={600} width={420} src={minaret} alt=""/>

                <div>

                    <div className={"infoAll"} >
                        <h1 style={{textShadow: "4px 4px 2px rgba(157,135,243,0.6)"}}>{lang==="RU"?"O нас":"About us"}</h1>
                        {lang==="RU"?"«Salamon Travel» предлагает туристические пакеты.В пакете «Саламон Трэвел» вы станете свидетелем незабываемых моментов благодаря прекрасным развлекательным путешествиям по Узбекистану.\n" +
                            "                        Вы также сможете посетить древние памятники Бухары, в частности Йетти Пир, Чорбакр и летний дворец покойного бухарского амира Амира Олимхана.Кроме того, вы отдохнете на горе Ташкента и станете обладателем чудесных и прекрасных воспоминаний. Отдых осуществляется через нашу компанию.\n" +
                            "                        Гостиничное обслуживание, проездные билеты и питание – все включено в стоимость! Мы рады подарить вам красивые и значимые моменты. Да, все наши сборы оплачиваются из кармана и подлежат обсуждению. Человек имеет право жить для себя и иметь культурный досуг, даже если это всего лишь один день в его жизни. Приглашаем вас в такие путешествия.\n" +
                            "                        Мы ждем вас!!!":"\"Salamon Travel\" sayyohlik paketlarini taqdim etadi.Siz \"Salamon travel\" paketida Òzbekiston bòylab ajoyib ko'ngilochar sayohatlar orqali   unutilmas lahzalarning guvohi bo'lasiz.\n" +
                            "                        Buxoroning qadimiy qadamjolari, xususan, Yetti pir ,Chorbakr va Sònggi Buxoro Amiri Amir Olimxonning yozgi saroyini ham kòrishingiz mumkin.Bundan tashqari, Toshkent toģ baģrida dam olib, ajoyib va bir-biridan go'zal xotiralarning egasiga aylanasiz.Poytaxtimizning muqaddas gòshalariga sayohat uyushtirib, mazza qilib hordiq chiqarish ham aynan bizning firmamiz orqali amalga oshadi.\n" +
                            "                        Mehmonxona xizmati,yòl chiptalari va Tamaddi  - hammasi tòlov ichida ! Biz sizga go' zal va mazmunli onlarni taqdim etishdan mamnunmiz. Ha aytgancha, to'lovlarimiz barchasi cho'ntakbop, kelishilgan holda bo'ladi. Inson hayoti  davomida bir kun bo'lsa ham, o'zi uchun yashab, madaniy hordiq chiqarishga haqli. Biz sizni aynan mana shunday sayohatlarga taklif qilamiz.\n" +
                            "                        Sizni kutib qolamiz !!!"}
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default AboutUsInfo;