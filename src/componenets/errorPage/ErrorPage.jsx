import { Link, useRouteError } from "react-router-dom";

const ErrorPage =()=>{
    const error =useRouteError()
    return (
      
        <div>
           
           {/* {
            error.statusText && <p className="flex justify-center items-center mt-10">দুঃখিত আমাদের ওয়েব সাইট কাজ চলছে</p>
           } */}
           <p>{error.statusText || error.message}</p>
           <Link to='/'><button className="btn">Go Back Home</button></Link>
        </div>
    )
}
export default ErrorPage;