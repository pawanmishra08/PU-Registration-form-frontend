import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
// import Sidebar from "../components/sidebar";


 function Applayout() {
    return (
        <div style={{display: "flex", flexDirection:"column",
         width: "100%", overflow: "auto"}}>
         <Header />
           <div style={{display: "flex", flexDirection:"column",
            width: "100%", overflow: "auto"}}>
            <Home />
            {/* <div style={{  display: "flex", flexDirection:"row", height: "100vh" }}>
             <Sidebar /> */}
                <div style={{ padding: 16 }}>
                    <Outlet />
                </div>
            </div>
    //    </div>
    );
}

export default Applayout;