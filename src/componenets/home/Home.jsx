import Banner from "../banner/Banner";
import FeaturedJobs from "../featuredJobs/FeaturedJobs";
import JobCatagory from "../jobcatagory/JobCatagory";

const Home =()=>{
    return(
        <div>
            <h1>This Home Page</h1>
           <Banner></Banner>
           <JobCatagory></JobCatagory>
           <FeaturedJobs></FeaturedJobs>
        </div>
    )
}
export default Home;