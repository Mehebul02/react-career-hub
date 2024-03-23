
import { useEffect, useState } from "react"
import Job from "./Job/Job"

const FeaturedJobs =()=>{
    const [jobs,setJobs]=useState([])
    const [dataLength,setDatalength] = useState(4)

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[

    ])
    return (
        <div>
           <div className=" text-center">
           <h1 className="text-4xl font-bold">Featured Jobs{jobs.length}</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
           </div >
           <div className="grid grid-cols-2 gap-6 mt-14">
           {
            jobs.slice(0,dataLength). map(job =><Job key={job.id} job={job}></Job>)
           }
           </div>
        <div className={dataLength === jobs.length && 'hidden'}>
        <button onClick={()=> setDatalength(jobs.length)} className="mx-auto mt-10 block"><a href="#_" class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-lg shadow-xl group hover:ring-1 hover:ring-purple-500">
<span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
<span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
<span class="relative text-white">See All Jobs</span>
</a></button>
        </div>
        </div>
    )
}
export default FeaturedJobs;