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
                        {lang==="RU"?"«COMPANY NAME» это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный\n" +
                            "                        это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекциюLorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяриза\n" +
                            "                        это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекциюLorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в\n" +
                            "                        часто используемый":"\"COMPANY NAME\" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s \n" +
                            "                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever\n" +
                            "                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.\n" +
                            "                        typesetting industry"}
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default AboutUsInfo;