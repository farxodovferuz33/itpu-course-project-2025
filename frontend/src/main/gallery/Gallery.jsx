import React, {useEffect, useState} from 'react';
import "./gallery.css"
import axios from "axios";

function Gallery(props) {

    const [photos, setPhotos] = useState([])

    useEffect(() => {
        getPhotos()
    }, []);

    function getPhotos(){
        axios.get("http://localhost:8080/gallery").then(res=>{
            setPhotos(res.data)
        }).catch()
    }

    const lang = localStorage.getItem("lang");

    return (
        <div style={{backgroundColor:"white", borderTop:"1px solid"}}>
            <div>
                <h1 style={{textShadow: "4px 4px 2px rgba(157,135,243,0.6)"}} className={"intro12"}>{lang==="RU"?"Наша галерея":"Our Gallery"}</h1>

                <div className={"galleryGroup"}>
                    {
                        photos.map((item, index)=><div key={item.uuid}
                            style={{backgroundImage:` url(data:image/jpeg;base64,${item.photoData}) `,
                            backgroundSize:"100% 100%"
                        }
                        }
                            className="galleryPic">
                        </div>)
                    }
                </div>

            </div>
        </div>
    );
}

export default Gallery;