import { useLoaderData, useParams } from "react-router-dom";
import { CiDollar } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStorage";
const JobDetails =()=>{
    const jobs =useLoaderData()
    const {id} = useParams()
    const jobint =parseInt(id) 
    const job =jobs.find(job => job.id ==jobint)
    console.log(job)
    const handleApplyJob=()=>{
        saveJobApplication(jobint)
        toast('You have a applied Successfully')
    }
    return(
        <div>
            <h1>Job Details</h1>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border border-red-700 col-span-3">
                    <h1 className="text-2xl text-black ">Job Description:<span className="text-sm text-gray-600">{job.job_description}</span></h1>
                   
                    <h1 className="text-2xl text-black">Job Responsibility:<span className="text-sm text-gray-600">{job.job_responsibility}</span> </h1>
                    <h1 className="text-2xl font-bold">Educational Requirements:</h1>
                    <p>{job.educational_requirements}</p>
                    <h1 className="text-2xl">Experiences</h1>
                    <p>{job.experiences}</p>

                </div>
                <div className="border border-yellow-400 col-span-1">
                    <h1 className="text-2xl text-black text-center">Job Details</h1>
                    <div className="divide"></div>
                    <h1 className="flex items-center gap-1 p-2 text-xl"><CiDollar />Salary:{job.salary}</h1>
                    <h1 className="flex">{job.job_title}</h1>
                    <h1>Contact Information</h1>
                    <button onClick={handleApplyJob}>
                    <a href="#_" class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-md shadow-xl group hover:ring-1 hover:ring-purple-500">
<span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
<span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
<span class="relative text-white">Apply Now</span>
</a>
                    </button>
                  
                </div>
            </div>
                <ToastContainer />
        </div>
    )
}
export default JobDetails;