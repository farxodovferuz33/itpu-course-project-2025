import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import apiCall from "./apiCall";

function Guide(props) {
    const {reset, register, handleSubmit} = useForm();
    const [guides, setGuides] = useState([])

    const navigate = useNavigate();
    function myFileSubmit(data){
        const formData = new FormData()

        formData.append("photo", data.photo[0])
        formData.append("fullName", data.fullName)
        formData.append("description", data.description)
        formData.append("caption", data.caption)

        apiCall("/guide?token="+localStorage.getItem("key"),"POST", formData).then(res=>{
            getGuides()
        }).catch(err=>{
            navigate("/secure/tg")
        })
    }

    function getGuides() {
        // apiCall("/guide", "GET", {}, {'Authorization':localStorage.getItem("key")}).then(res=>{
        //     setGuides(res.data)
        //     console.log(res.data)
        // }).catch(err=>{
        //     navigate("/secure/tg")
        // })
        axios.get("http://localhost:8080/guide").then(res=>{
            setGuides(res.data)
        }).catch()
    }

    useEffect(() => {
        getGuides()
    }, []);


    function deleteGuide(uuid) {
        apiCall("/guide/"+uuid +"?token="+localStorage.getItem("key"), "DELETE").then(res=>{
            getGuides()
        }).catch(err=>{
            navigate("/secure/tg")
        })
    }

    return (
        <div className={"guideMain"} >
            <div>
                <form onSubmit={handleSubmit(myFileSubmit)} style={{display:"flex", gap:"15px", alignItems:"center" ,flexDirection:"column"}}>
                    <input {...register("fullName")} className="form-control form-control-sm mx-5 w-75" type="text" placeholder="Full name of guide" />
                    <input {...register("photo")} className="form-control form-control-lg mx-5 w-75" type="file"/>
                    <input {...register("caption")} className="form-control form-control-sm mx-5 w-75" type="text" placeholder="caption" />
                    <input {...register("description")} className="form-control form-control-sm mx-5 w-75" type="text" placeholder="description" />
                    <button className={"btn btn-success float-end"}>Save</button>
                </form>
            </div>
            
            <table className={"table table-bordered"}>
                <thead className={"table-dark"}>
                <tr>
                    <th>ID</th>
                    <th>Fullname</th>
                    <th>Photo</th>
                    <th>Caption</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody className={"table-success"}>
                {
                    guides.map((item, index)=><tr key={item.uuid}>
                        <td>{item.uuid}</td>
                        <td>{item.fullName}</td>
                        <td>
                            <img width={150} src={`data:image/jpeg;base64,${item.photo.photoData}`} alt="#404"/>

                        </td>
                        <td>{item.photo.caption}</td>
                        <td>{item.description}</td>
                        <td><button onClick={()=>deleteGuide(item.uuid)} className={"btn btn-danger"}>Delete</button></td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    );
}

export default Guide;