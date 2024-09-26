"use client"
import { FaHeart, FaThumbsUp } from 'react-icons/fa'; // Example icons

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Users, Lightbulb, TrendingUp, ArrowRight } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { AnimatePresence, motion } from "framer-motion"; // Import from framer-motion
import { Breaker } from './components/breaker';
const HeartAnimation = ({ hearts }) => {
  return (
    <div className='relative'>
      <AnimatePresence>
        {Array.from({ length: hearts }).map((_, index) => (
          <motion.div
            key={index}
            className='absolute bottom-4 left-4 p-2'
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 0, y: -100 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{
              duration: 1.5,
              ease: 'easeOut',
              delay: index * 0.1,
              repeat: Infinity, // Continuously repeat the animation
              repeatType: 'loop', // Ensure the animation loops
            }}
            style={{
              animation: `flow 1.5s ease-out infinite`, // CSS animation for infinite flow
            }}
          >
            <FaHeart className='text-red-500 text-xl' />
          </motion.div>
        ))}
      </AnimatePresence>
      <style jsx>{`
        @keyframes flow {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-100px);
          }
        }
      `}</style>
    </div>
  );
};
function Hero() {
  const [showTooltip, setShowTooltip] = useState(false)
  const [pricing, setPricing] = useState(false);
  const [hearts,setHearts] = useState(2)
  const [engagements,setengagements] = useState(2)
  const [showbreak,setShowBreak] = useState(false)
  const handleClose = () => {
    setPricing(false);
  };
  useEffect(()=>{
    const show = new Promise((resolve)=>{
        setTimeout(() => {
            setShowBreak(true)
        }, 2000);
    })
  },[])

  return (
    <div className="flex  flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-black">
        {
            showbreak && <Breaker/>
        }
   <AnimatePresence>
   {pricing && (
  <motion.div
    className=" block min-w-full max-h-screen absolute z-50 items-center justify-center bg-white overflow-y-auto" // Added overflow-y-auto
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
  </motion.div>
)}

      </AnimatePresence>
      <div className='bg-black text-white '>

     
      <header className="">
        <div className="p-4  sm:container   flex justify-between items-center">
            <div className="text-2xl font-bold">Infinute</div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#Pricing" onClick={()=>setPricing(true)} className="hover:underline">Pricing</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="px-4 sm:container mx-auto pb-4">
        <div className="grid grid-cols-1 justify-between w-full  sm:grid-cols-2 gap-8 items-center">
          <div className=" h-full  ">
            <div className="">
              <h2 className="sm:text-7xl text-5xl font-bold leading-tight">Revolutionize Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Influencer Strategy</span></h2>
              <p className="text-xl text-gray-600">Harness the power of AI to supercharge your influencer marketing campaigns. Connect, analyze, and succeed like never before.</p>
            </div>

          </div>
          <div className="relative  mx-auto w-full sm:w-fit flex flex-col ">
            <div className="absolute  top-0 -left-4 sm:w-72 w-64 h-72 h- bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute  top-0 sm:-right-4 -left-0 sm:w-72 w-64 h-72 h- bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute  -bottom-8 sm:left-20 left-2 sm:w-72 w-64 h-72 h- bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="relative p-3">
              
            <Tabs defaultValue="signup" className="w-full   sm:max-w-md">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <Card className="text-black">
                  <CardHeader>
                    <CardTitle>Login to Your Account</CardTitle>
                    <CardDescription className="text-black">Choose your preferred login method.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button className="w-full bg-black" onClick={() => handelclick()}>
                      Login with Google
                    </Button>
                    <TooltipProvider>
                      <Tooltip open={showTooltip}>
                        <TooltipTrigger asChild>
                          <Button 
                            className="w-full text-black" 
                            variant="outline" 
                            disabled
                            onMouseEnter={() => setShowTooltip(true)}
                            onMouseLeave={() => setShowTooltip(false)}
                          >
                            Login with Instagram
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Coming soon</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip open={showTooltip}>
                        <TooltipTrigger asChild>
                          <Button 
                            className="w-full text-black" 
                            variant="outline" 
                            disabled
                            onMouseEnter={() => setShowTooltip(true)}
                            onMouseLeave={() => setShowTooltip(false)}
                          >
                            Login with Twitter
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Coming soon</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="signup">
              <Card className="text-black ">
                  <CardHeader>
                    <CardTitle className="">Create an Account</CardTitle>
                    <CardDescription className="text-black">Sign up to start your influencer journey.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button className="w-full bg-black" onClick={() => handelclick()}>
                      Sign Up with Google
                    </Button>
                    <TooltipProvider>
                      <Tooltip open={showTooltip}>
                        <TooltipTrigger asChild>
                          <Button 
                            className="w-full text-black" 
                            variant="outline" 
                            disabled
                            onMouseEnter={() => setShowTooltip(true)}
                            onMouseLeave={() => setShowTooltip(false)}
                          >
                            Sign Up with Instagram
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Coming soon</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip open={showTooltip}>
                        <TooltipTrigger asChild>
                          <Button 
                            className="w-full text-black" 
                            variant="outline" 
                            disabled
                            onMouseEnter={() => setShowTooltip(true)}
                            onMouseLeave={() => setShowTooltip(false)}
                          >
                            Sign Up with Twitter
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Coming soon</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>              
              
           </div>
          </div>
        </div>

      </main>
      </div>
<main>
          
<div className="mt-10">
<h3 className="text-3xl mb-10 font-bold  text-center">Unlock Your Influencer Potential</h3>

          <div className="grid grid-cols-2 sm:mx-24  md:grid-cols-2 lg:grid-cols-4 sm:gap-4 gap-2">
            
          <div className='relative  h-full  w-[95%] mx-auto rounded-xl overflow-hidden'>
    <video className='w-full sm:h-[50vh] h-[35vh] object-cover object-center' autoPlay muted loop>
      <source src="/a.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    
    <div className='absolute inset-0 flex flex-col items-center justify-center'>
      <AnimatePresence>
        {hearts > 0 && (
          <>
            <HeartAnimation hearts={hearts} />
            <motion.div
              className='absolute flex items-center space-x-2 bottom-4 left-4 p-2 bg-white rounded-full shadow-lg'
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <FaHeart className='text-red-500 text-2xl' />
              <span className='text-lg font-semibold'>{hearts}</span>
            </motion.div>
          </>
        )}
        
        {engagements > 0 && (
          <motion.div
            className='absolute flex items-center space-x-2 bottom-4 right-4 p-2 bg-white rounded-full shadow-lg'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <FaThumbsUp className='text-blue-500 text-2xl' />
            <span className='text-lg font-semibold'>{engagements}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </div>

  <div className='relative h-full  w-[95%] mx-auto rounded-xl overflow-hidden'>
    <img className='w-full sm:h-[50vh] h-[35vh] object-cover object-center'
      src='/x.png'
    />
    
    <div className='absolute inset-0 flex flex-col items-center justify-center'>
      <AnimatePresence>
        {hearts > 0 && (
          <>
            <HeartAnimation hearts={hearts} />
            <motion.div
              className='absolute flex items-center space-x-2 bottom-4 left-4 p-2 bg-white rounded-full shadow-lg'
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <FaHeart className='text-red-500 text-2xl' />
              <span className='text-lg font-semibold'>{hearts}</span>
            </motion.div>
          </>
        )}
        
        {engagements > 0 && (
          <motion.div
            className='absolute flex items-center space-x-2 bottom-4 right-4 p-2 bg-white rounded-full shadow-lg'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <FaThumbsUp className='text-blue-500 text-2xl' />
            <span className='text-lg font-semibold'>{engagements}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </div>

  <div className='relative h-full  w-[95%] mx-auto rounded-xl overflow-hidden'>
    <video className='w-full sm:h-[50vh] h-[35vh] object-cover object-center' autoPlay muted loop>
      <source src="/a.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    
    <div className='absolute inset-0 flex flex-col items-center justify-center'>
      <AnimatePresence>
        {hearts > 0 && (
          <>
            <HeartAnimation hearts={hearts} />
            <motion.div
              className='absolute flex items-center space-x-2 bottom-4 left-4 p-2 bg-white rounded-full shadow-lg'
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <FaHeart className='text-red-500 text-2xl' />
              <span className='text-lg font-semibold'>{hearts}</span>
            </motion.div>
          </>
        )}
        
        {engagements > 0 && (
          <motion.div
            className='absolute flex items-center space-x-2 bottom-4 right-4 p-2 bg-white rounded-full shadow-lg'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <FaThumbsUp className='text-blue-500 text-2xl' />
            <span className='text-lg font-semibold'>{engagements}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </div>

  <div className='relative h-full  w-[95%] mx-auto rounded-xl overflow-hidden'>
  <img className='w-full sm:h-[50vh] h-[35vh] object-cover object-center'
      src='/y.png'
    />
    
    <div className='absolute inset-0 flex flex-col items-center justify-center'>
      <AnimatePresence>
        {hearts > 0 && (
          <>
            <HeartAnimation hearts={hearts} />
            <motion.div
              className='absolute flex items-center space-x-2 bottom-4 left-4 p-2 bg-white rounded-full shadow-lg'
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <FaHeart className='text-red-500 text-2xl' />
              <span className='text-lg font-semibold'>{hearts}</span>
            </motion.div>
          </>
        )}
        
        {engagements > 0 && (
          <motion.div
            className='absolute flex items-center space-x-2 bottom-4 right-4 p-2 bg-white rounded-full shadow-lg'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <FaThumbsUp className='text-blue-500 text-2xl' />
            <span className='text-lg font-semibold'>{engagements}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </div>


          
          </div>
        </div>
        
        <div className="sm:mt-16 my-5 m mx-3 sm:mx-24  text-center">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2">
            <span>Get Started Now</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
</main>
    </div>
  )
}

export default Hero