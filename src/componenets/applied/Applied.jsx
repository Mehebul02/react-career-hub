import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";

const Applied = () => {
   const jobs =useLoaderData()
   const [appliedJobs,setAppliedJob] = useState([])
   const [displayJob,setDisplay] = useState([])
   const handledisplayjob = (filter)=>{
if(filter === 'all'){
   setDisplay(appliedJobs)
}
else if(filter ==='remote'){
   const remoteJob =appliedJobs.filter(job =>job.remote_or_onsite ==='Remote' )
   setDisplay(remoteJob)
}
else if (filter === 'onsite'){
   const onsiteJob =appliedJobs.filter(job => job.remote_or_onsite ==='Onsite')
   setDisplay(onsiteJob)
}
   }
   useEffect(()=>{
      const storedJobs =getStoredJobApplication()
      if(jobs.length > 0){
         // const jobApplied = jobs.filter(job =>storedJobs.includes(job.id))
         const jobApplied =[];
         for(const id of storedJobs){
            const job =jobs.find(job => job.id === id)
            if(job){
            jobApplied.push(job)
            }
         }
      //   console.log(jobs,storedJobs,jobApplied )
      setAppliedJob(jobApplied)

      }
   },[])
   return(
    <div>
        <h1>applied jobs plecment:{appliedJobs.length}</h1>
       <div className="mt-10">
       <details className="dropdown">
  <summary className="m-1 btn">open or close</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li onClick={()=>handledisplayjob('all')}><a>All</a></li>
    <li onClick={()=>handledisplayjob('remote')}><a>Remote</a></li>
    <li onClick={()=>handledisplayjob('onsite')}><a>Onsite</a></li>
  </ul>
</details>
       </div>
       <div className="mt-32">
       {
         appliedJobs.map(job => <li>
            <span>{job.job_title}</span>
            <span>{job.company_name}</span>
         </li>)
        }
       </div>
        </div>
   )
}
export default Applied;