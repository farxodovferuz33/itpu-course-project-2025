import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import apiCall from "./apiCall";

function Packet(props) {
    const {reset, register, handleSubmit} = useForm();
    const [packets, setPackets] = useState([])
    function myFileSubmit(data){
        const formData = new FormData()

        formData.append("photo", data.photo[0])
        formData.append("title", data.title)
        formData.append("description", data.description)
        formData.append("caption", data.caption)
        formData.append("price", data.price)

        apiCall("/packet?token="+localStorage.getItem("key"), "POST",  formData).then(res=>{
            getPackets()
        })
    }

    const navigate = useNavigate();

    function getPackets() {
        // apiCall("/packet").then(res=>{
        //     setPackets(res.data)
        //     console.log(res.data)
        // }).catch(err=>{
        //     // navigate("/secure/tg")
        //     console.log(err)
        // })

        axios.get("http://localhost:8080/packet").then(res=>{
            setPackets(res.data)
        }).catch()

    }

    useEffect(() => {
        getPackets()
    }, []);


    function deletePack(uuid) {
        apiCall("/packet/"+uuid+"?token="+localStorage.getItem("key"), "DELETE").then(res=>{
            getPackets()
        }).catch(err=>{
            navigate("/secure/tg")
        })
    }


    return (
        <div className={"guideMain"} >
            <div>
                <form onSubmit={handleSubmit(myFileSubmit)} style={{display:"flex", gap:"15px", alignItems:"center" ,flexDirection:"column"}}>
                    <input {...register("title")} className="form-control form-control-sm mx-5 w-75" type="text" placeholder="title" />
                    <input {...register("photo")} className="form-control form-control-lg mx-5 w-75" type="file"/>
                    <input {...register("caption")} className="form-control form-control-sm mx-5 w-75" type="text" placeholder="caption" />
                    <input {...register("description")} className="form-control form-control-sm mx-5 w-75" type="text" placeholder="description" />
                    <input {...register("price")} className="form-control form-control-sm mx-5 w-75" type="number" placeholder="price" />
                    <button className={"btn btn-success float-end"}>Save</button>
                </form>
            </div>


            <table className={"table table-bordered"}>
                <thead className={"table-dark"}>
                <tr>
                    <th>ID</th>
                    <th>title</th>
                    <th>Photo</th>
                    <th>Caption</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody className={"table-success"}>
                {
                    packets.map((item, index)=><tr key={item.uuid}>
                        <td>{item.uuid}</td>
                        <td>{item.title}</td>
                        <td>
                            <img width={150} src={`data:image/jpeg;base64,${item.photo.photoData}`} alt="#404"/>

                        </td>
                        <td>{item.photo.caption}</td>
                        <td>{item.description}</td>
                        <td><button onClick={()=>deletePack(item.uuid)} className={"btn btn-danger"}>Delete</button></td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    );
}

export default Packet;