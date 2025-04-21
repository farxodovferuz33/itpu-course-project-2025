import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useForm} from "react-hook-form";
import apiCall from "./apiCall";
import {useNavigate} from "react-router-dom";

function Gallery(props) {

    const [photos, setPhotos] = useState([])

    const {reset, register, handleSubmit} = useForm();

    const navigate = useNavigate();

    function myFileSubmit(data){
        const formData = new FormData()

        formData.append("photo", data.photo[0])
        formData.append("caption", data.caption)

        apiCall("/gallery?token="+localStorage.getItem("key"), "POST", formData, {'Authorization': localStorage.getItem("key")}).then(
            ()=>getPhotos()
        ).catch(err=>{
            navigate("/secure/tg")
        })

        // axios.post("http://localhost:8080/gallery", formData).then(res=>{
        //     getPhotos()
        // })
    }


    function getPhotos(){

        // apiCall("/gallery", "get", {}, {'Authorization':localStorage.getItem("key")}).then(res=>{
        //     setPhotos(res.data)
        // }).catch(err=>{
        //     // navigate("/secure/tg")
        // })
        axios.get("http://localhost:8080/gallery").then(res=>{
            setPhotos(res.data)
        })

    }

    useEffect(() => {
        getPhotos()
    }, []);


    function deleteFeedback(uuid) {
        apiCall("/gallery/" + uuid+ "?token="+localStorage.getItem("key"), "DELETE").then(r  =>{
            getPhotos()
        }).catch(err=>{
            navigate("/secure/tg")
        })
    }

    return (
        <div id={"gallery"} style={{background: "#1D1E2C"}}>
            <div >
                <div >
                    <form onSubmit={handleSubmit(myFileSubmit)} style={{position:"fixed", top:"5px", display:"flex", alignItems:"center", gap:"2%"}}>
                        <input {...register("photo")} className="form-control form-control-lg mx-5" type="file"/>
                        <input {...register("caption")} className="form-control form-control-sm mx-5" type="text" placeholder=".form-control-sm" />
                        <button className={"btn btn-success float-end"}>Save</button>
                    </form>
                </div>

                <div>
                    <table className={"table table-bordered"} style={{marginTop:"80px"}}>
                        <thead className={"table table-dark"}>
                        <tr>
                            <th>Photo</th>
                            <th>ID</th>
                            <th>Caption</th>
                            <th>Action</th>
                        </tr>
                        </thead>

                        <tbody className={"table-success"}>
                        {
                            photos.map((item, index)=><tr key={item.uuid}>
                                <td>
                                    <img width={150} src={`data:image/jpeg;base64,${item.photoData}`} alt="#404"/>
                                </td>
                                <td>{item.uuid}</td>
                                <td>{item.caption}</td>
                                <td>
                                    <button onClick={()=>deleteFeedback(item.uuid)} className={"btn btn-danger"}>Delete</button>
                                </td>
                            </tr>)
                        }
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    );
}

export default Gallery;