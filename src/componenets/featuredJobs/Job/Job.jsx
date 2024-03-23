import { CiLocationOn ,CiDollar} from "react-icons/ci";
import { Link } from "react-router-dom";
const Job=({job})=>{
    const{id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary,job_description,job_responsibility,educational_requirements,experiences,contact_information}=job
    return(
        <div>
         <div className="card card-compact  bg-base-100 shadow-xl ">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body space-y-2">
    <h2 className="card-title">{job_title}</h2>
    <h2 className="text-xl">{company_name}</h2>
    <div>
        <button className="px-5 py-2 font-extrabold border rounded-md border-[#6d3fae] mr-3">{remote_or_onsite}</button>
        <button  className="px-5 py-2 font-extrabold border rounded-md border-[#6d3fae]">{job_type}</button>
    </div>
    <div className="flex">

<p className="flex items-center text-md"><CiLocationOn />{location}</p>
<p className="flex items-center text-md"><CiDollar />{salary}</p>

    </div>
    <div className="card-actions justify-start">
      <Link to={`/job/${id}`}>
      <button ><a href="#_" class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-lg shadow-xl group hover:ring-1 hover:ring-purple-500">
<span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
<span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
<span class="relative text-white">View Details</span>
</a></button></Link>
    </div>
  </div>
</div>

        </div>
    )
}
export default Job;