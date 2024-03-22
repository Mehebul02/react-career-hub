import { Outlet } from "react-router-dom";
import Footer from "../../footer/Footer";

const Root =()=>{
    return (
        <div>
            <h1>hello</h1>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}
export default Root;