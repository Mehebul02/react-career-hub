import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";

const Applied =()=>{
   const jobs =useLoaderData()
   useEffect(()=>{
      const storedJobs =getStoredJobApplication()
      if(jobs.length > 0){
         const jobApplied = jobs.filter(job =>storedJobs.includes(job.id))

      }
   },[])
   return(
    <div>
        <h1>applied jobs plecment</h1>
        </div>
   )
}
export default Applied;