import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu"
  import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
export function Navbar (){
    return(
<NavigationMenu  className=" sm:text-lg  mx-auto ">
   <NavigationMenuList className="space-x-4 sm:space-x-10">






   <Sheet className="">
  <SheetTrigger>  
    <NavigationMenuItem className="flex font-semibold " role="button">
     Services <BsArrowUpRight className="my-auto ml-1  size-4"/>
    </NavigationMenuItem>
    </SheetTrigger>
    <SheetContent className="bg-black border-none text-white">
    <SheetHeader >
      <SheetTitle>
      <div  className="text-3xl text-white mt-2 ">
      <span className="text-purple-600">Services</span> Provided</div></SheetTitle>
      <SheetDescription>
        <div className=" ">        
 <p>This action cannot be undone. This will permanently delete your account
      and remove your data from our servers.
        </p>
        <div className=" h-[500px] block py-5  space-y-8">
<div className=" block sm:flex">
<div className="sm:w-4/6 h-full my-auto px-3  rounded-lg  relative">
  <div
    className="absolute inset-0 bg-cover m-2 bg-center bg-no-repeat filter blur border border-white"
    style={{
      backgroundImage: "url('/petri.png')",
      zIndex: "-1",
    }}
  ></div>
  <Link href={"https://petrichorthrift.com"} target="blank">
  <div role="button" className="relative hover:scale-95 transition duration-300 z-10 py-3.5">
  <img src="/petri.png" alt="Main Content" className="w-full rounded-sm h-auto" />
  </div>
  </Link>

</div>
 <div className="sm:w-2/6 py-4  px-2 pl-3">
<h1 className="text-white font-semibold ">Petrichor</h1>
<p className="text-gray-300  text-xs">
Join our AI-powered platform to connect with top brands, customize campaigns, access analytics, and elevate your influencer impact. </p>
 </div>
</div>

<div className="border-t mx-6 border-purple-600"></div>

</div>
        </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>


<Sheet className="">
  <SheetTrigger>  
    <NavigationMenuItem className="flex font-semibold " role="button">
     Products <BsArrowUpRight className="my-auto ml-1  size-4"/>
    </NavigationMenuItem>
    </SheetTrigger>
    <SheetContent className="bg-black border-none text-white">
    <SheetHeader >
      <SheetTitle>
      <div  className="text-3xl flex text-white mt-2 ">
      <span className="text-purple-600">Products</span> Created</div></SheetTitle>
      <SheetDescription>
        <div className=" ">
        
 <p>This action cannot be undone. This will permanently delete your account
      and remove your data from our servers.
        </p>
        
        <div className=" h-[500px] block py-5  space-y-8">
<div className="block  sm:flex">
<div className="sm:w-4/6 h-full my-auto px-3  relative">
  <div
    className="absolute inset-0 bg-cover m-2 bg-center bg-no-repeat filter blur"
    style={{
      backgroundImage: "url('/inf.png')",
      zIndex: "-1",
    }}
  ></div>
    <Link href={"/influencer-ai"}>

  <div role="button" className="relative hover:scale-95 transition duration-300 z-10 py-3">
  <img src="/inf.png" alt="Main Content" className="w-full rounded-sm h-auto" />
  </div>
  </Link>
</div>
 <div className="sm:w-2/6  py-4 px-2 pl-3">
<h1 className="text-white font-semibold ">Influencer AI</h1>
<p className="text-gray-300  text-xs">
Join our AI-powered platform to connect with top brands, customize campaigns, access analytics, and elevate your influencer impact. </p>
 </div>
</div>


<div className="border-t mx-6 border-purple-600"></div>




</div>


        </div>
     





      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

<Sheet className="">
  <SheetTrigger>  
    <NavigationMenuItem className="flex font-semibold " role="button">
     Hire Me <BsArrowUpRight className="my-auto ml-1  size-4"/>
    </NavigationMenuItem>
    </SheetTrigger>
    <SheetContent className="bg-black border-none text-white">
    <SheetHeader >
      <SheetTitle>
      <div  className="text-3xl text-white mt-2 ">
      <span className="text-purple-600">Hire</span> Me</div></SheetTitle>
      <SheetDescription>
        <div>
      <p className="">This action cannot be undone. This will permanently delete your account
      and <Link href={"/"}><span role="button" className="w- transition duration-300 hover:text-white flex">View the Home Page <BsArrowUpRight className="hover:fill-white ml-1 my-auto"/></span></Link> 
        </p>  


        <div className=" h-[500px] block py-5  space-y-8">
<div className=" block sm:flex">
<div className="sm:w-4/6 h-full my-auto px-3  relative">
  <div
    className="absolute inset-0 bg-cover m-2 bg-center bg-no-repeat filter blur-xl"
    style={{
      backgroundImage: "url('/work.png')",
      zIndex: "-1",
    }}
  ></div>
    <Link href={"/experience"}>

  <div   role="button"
 className="relative border rounded-lg hover:scale-95 transition duration-300 border-purple-800 z-10 py-3">
    <img src="/work.png" alt="Main Content" className="w-full rounded-sm h-auto" />
  </div>
  </Link>
</div>
 <div className="sm:w-2/6  py-4 px-2 pl-3">
<h1 className="text-white font-semibold "><span className="text-purple-600">Work</span> Experience</h1>
<p className="text-gray-300  text-xs">
Join our AI-powered platform to connect with top brands, customize campaigns, access analytics, and elevate your influencer impact. </p>
 </div>
</div>

<div className="border-t mx-6 border-purple-600"></div>

</div>

</div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

  </NavigationMenuList>
</NavigationMenu>
    )
  }