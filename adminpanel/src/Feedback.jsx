import React, {useEffect, useState} from 'react';
import axios from "axios";
import apiCall from "./apiCall";
import {useNavigate} from "react-router-dom";

function Feedback(props) {
    const [feedback, setFeedback] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [totalPages, setTotalPages] = useState(0)

    const navigate = useNavigate();

    function getFeedback() {
        apiCall("/feedback/getf?page=" + currentPage + "&token=" + localStorage.getItem("key"), "GET", {}, {'Authorization': localStorage.getItem("key")}).then(res => {
            setFeedback(res.data.content)
            setTotalPages(res.data.totalPages)
        }).catch(err=>{
            navigate("/secure/tg")
        })
    }

    useEffect(() => {
        getFeedback()
    }, [currentPage]);

    function prevPage() {
        if (currentPage !== 0) {
            setCurrentPage(currentPage - 1)
            getFeedback()
        }

    }

    function nextPage() {
        if (currentPage + 1 !== totalPages) {
            setCurrentPage(currentPage + 1)
            getFeedback()
        }
    }

    function deleteFeedback(uuid) {

        apiCall("/feedback/del/" + uuid + "?token=" + localStorage.getItem("key"),
            "DELETE",
            {headers: {'Authorization': localStorage.getItem("key")}}).then(res=>{
            getFeedback()

        }).catch(()=>navigate("/secure/tg"))

        // axios.delete("https://backtestdep-production.up.railway.app/feedback/del/" + uuid + "?token=" + localStorage.getItem("key"), {headers: {'Authorization': localStorage.getItem("key")}}).then(r => {
        // }).catch(err=>{
        //     navigate("/secure/tg")
        // })

    }


    return (
        <div id={"feedback"} style={{background: "#1D1E2C"}}>
            <div className={"container"}>
                <h2 className={"text-center text-light my-5"}>Feedbacks from clients</h2>
                <table className={"table table-bordered"}>
                    <thead className={"table table-dark"}>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>feedback</th>
                        <th>action</th>
                    </tr>
                    </thead>

                    <tbody className={"table table-success"}>
                    {
                        feedback.map((item, index) => <tr key={item.uuid}>
                            <td>{item.uuid}</td>
                            <td>{item.fullName}</td>
                            <td>{item.phoneNumber}</td>
                            <td>{item.email}</td>
                            <td>{item.feedback}</td>
                            <td>
                                <button onClick={() => deleteFeedback(item.uuid)} className={"btn btn-danger"}>Delete
                                </button>
                            </td>
                        </tr>)
                    }
                    </tbody>


                </table>
            </div>


            <div id={"pagination"}>
                <button style={currentPage === 0 ? {cursor: "not-allowed", opacity: "0.3"} : {cursor: "pointer"}}
                        className={"btn btn-info"} onClick={() => prevPage()}>Prev
                </button>
                <button style={currentPage + 1 === totalPages ? {
                    cursor: "not-allowed",
                    opacity: "0.3"
                } : {cursor: "pointer"}} disabled={currentPage + 1 === totalPages} className={"btn btn-success mx-3"}
                        onClick={() => nextPage()}>Next
                </button>
            </div>
        </div>
    );
}

export default Feedback;