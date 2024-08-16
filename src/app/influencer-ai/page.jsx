// components/Hero.js

import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import { Navbar } from "../internals/Navbar";

function Hero() {
    return (
        <div className="w-full pt-10 sm:px-10 p-5 bg-yellow">
            <Navbar/>
        <div  className="h-[85vh]   -100 p-1 relative flex w-full">
 

<div className=" sm:block hidden  sm:w-6/12 p-16">
    <h1 className="font-bold text-7xl mb-4">Influencer AI</h1>
    
    <h2 className="font-semibold text-2xl   mb-4">Discover the Future</h2>
    <p className="text  mb-6">
        Explore how AI can revolutionize influencer marketing. Our platform leverages cutting-edge technology to connect brands with the right influencers.
    </p>

    <div className="mb-8">
        <h3 className="font-semibold text-xl mb-2">What We Give You More</h3>
        <div className="list-disc pl-1 space-y-1">
            <p>Advanced AI algorithms for better influencer matching</p>
            <p>Real-time analytics and reporting</p>
            <p>Customizable campaigns and tracking</p>
            <p>Integration with major social media platforms</p>
        </div>
    </div>

    <div>
    <a href="/learn-more" className=" duration-300 border  flex transition hover:scale-110 bg-black text-white font-semibold py-5 w-fit px-24  hover:bg-yellow  border-black-100 hover:text-black-100 ">
           Book a Demo
        </a>
    </div>
</div>






            <div className="w-2/12">
                {/* Empty div for spacing */}
            </div>
            <div className="  w-full  justify-center sm:w-4/12 p-4">
                <div className="w-fit h-full sm:-ml-8 flex space-x-4   relative  -100 p-2">
                    <div className="h-full  -mt-5 -100 rounded-full w-[210px] overflow-hidden">
                        <video
                            className="object-cover h-full w-full"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src="/influencer.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="h-full mt-5  -100 rounded-full w-[210px] overflow-hidden">
                        <video
                            className="object-cover h-full w-full"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src="/influencer3.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>





        </div>
        <div>

        </div>


        <div className="  flex mt-10 mb-6 min-h-[75vh] w-full px-6 text-black border-black-100">
            <div className="ml-5 border-t-[0.5px] w-1/2 border-gray-600 p-16 ">
<div className=" border-black-100 w-full h-full overflow-clip mx-auto rounded-lg shadow-sm my-auto ">

<video
                            className="object-cover h-full w-full"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src="/influencer2.mp4" type="video/mp4" />
                        </video>

</div>
            </div>
            <div className="border-t-[0.5px] mr-4 w-1/2 p-12 pl-16 border-gray-600">
    <h1 className="font-bold text-7xl mb-4">Join Our Platform</h1>
    
    <h2 className="font-semibold text-2xl mb-4">Be a Part of the Future</h2>
    <p className="text-lg mb-6">
        Join a community of top influencers and take your marketing to the next level. Our platform offers the tools and support you need to grow and connect with leading brands.
    </p>

    <div className="mb-8">
        <h3 className="font-semibold text-xl mb-2">Why Join Us?</h3>
        <div className="list-disc pl-1 space-y-1">
            <p>Exclusive access to high-profile brand collaborations</p>
            <p>Comprehensive analytics to track your performance</p>
            <p>Customizable campaign options</p>
            <p>Seamless integration with major social media platforms</p>
        </div>
    </div>

    <div>
        <a href="/sign-up" className="duration-300 border flex transition hover:scale-110 bg-black text-white font-semibold py-5 w-fit px-28 hover:bg-yellow border-black-100 hover:text-black-100">
           Sign Up
        </a>
    </div>
</div>

</div>


        </div>
    );
}


export  default Hero