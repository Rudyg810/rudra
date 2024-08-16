import { Navbar } from "../internals/Navbar"
import { WorkExperience } from "./work-experience"

function Experience(){
    return(
        <main className="w-full relative text-white  bg-black-100   h-fit">
            <div className="pt-10">
            <Navbar/>

            </div>
            <div className="mt-10">
                <WorkExperience/>
            </div>
        
        </main>
    )
}
export default Experience