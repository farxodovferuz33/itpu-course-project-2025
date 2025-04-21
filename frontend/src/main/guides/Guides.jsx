import React, {useEffect, useState} from 'react';
import "./guides.css"
import axios from "axios";
function Guides(props) {

    const [guides, setGuides] = useState([])

    useEffect(() => {
        getGuides()
    }, []);

    function getGuides(){
        axios.get("http://localhost:8080/guide").then(res => {
            setGuides(res.data)
        }).catch()
    }


    const lang = localStorage.getItem("lang");

    return (
        <div id={"guides"} style={{backgroundColor:"white", borderTop:"1px solid"}}>
            <div >
                <h1 style={{textShadow: "4px 4px 2px rgba(157,135,243,0.6)"}} className={"intro"}>
                    {lang==="RU"?"Ознакомьтесь с нашими руководствами":"Know about our guides"}
                    </h1>

                <div className={"guideGroup"}>
                    {guides.map((item, index) => <div className="card" style={{width: "18rem", height:"20rem"}} key={item.uuid}>
                            <img src={`data:image/jpeg;base64,${item.photo.photoData}`} className="{card-img-top}" alt="..." />
                            <div className={"card-body"}>
                                <h5 className={"card-title"}>{item.fullName}</h5>
                                <h5 className={"card-title"}>{item.title}</h5>
                                <h5 className={"card-title"}>{item.description}</h5>
                            </div>
                        </div>


                    )}
                </div>

            </div>
        </div>
    );
}

export default Guides;
