import { Spotlight } from "@/components/spot-light";
import { Navbar } from "./Navbar";

export function HomeSection(){
    return(
        <div className="w-full relative text-white h-fit">
           
<div className="mt-10"><Navbar/>
    </div>            
            <div className=" mt-16">
           <Spotlight/>
            </div>
        
        </div>
    )
}