import "./app.css"
import LeftSide from "./LeftSide";
import {Route, Routes, useLocation} from "react-router-dom";
import RightSide from "./RightSide";
import Feedback from "./Feedback";
import "bootstrap/dist/css/bootstrap.css"
import Gallery from "./Gallery";
import Guide from "./Guide";
import Packet from "./Packet";
import SecurePageTelegram from "./SecurePageTelegram";
import LoginPage from "./LoginPage";
import {useEffect} from "react";


function App() {
    const location = useLocation();

    const clearLocalStorageDaily = () => {
        const clearTime = 3 * 60 * 60 * 1000;

        // const clearTime = 10 * 1000;

        setInterval(() => {
            localStorage.removeItem("key");
        }, clearTime);
    };

    useEffect(() => {
        clearLocalStorageDaily()
    }, []);

    return (
        <div style={{display: "flex"}}>
            {location.pathname !== "/login/613f92fe-b9e2-4834-97df-a81ed276201a" && location.pathname !== "/secure/tg"
                ? < LeftSide/> : ""}


            <Routes>
                <Route path={"/"} element={<RightSide/>}/>
                <Route path={"/feedback"} element={<Feedback/>}/>
                <Route path={"/gallery"} element={<Gallery/>}/>
                <Route path={"/guide"} element={<Guide/>}/>
                <Route path={"/packet"} element={<Packet/>}/>

                <Route path={"/secure/tg"} element={<SecurePageTelegram/>}/>
                <Route path={"/login/613f92fe-b9e2-4834-97df-a81ed276201a"} element={<LoginPage/>}/>
            </Routes>

        </div>
    );
}

export default App;
