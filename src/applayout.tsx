import Header from "./components/Header";
import Sidebar from "./components/sidebar";


 function Applayout() {
    return (
        <div style={{display: "flex", flexDirection:"column",
         width: "100%", overflow: "auto"}}>
            <Header />
            <div style={{  display: "flex", flexDirection:"row", height: "100vh" }}>
                <Sidebar />
            </div>
         </div>
    );
}

export default Applayout;