"use client"
import {AnimatePresence,motion} from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function WorkExperience() {
  const textVariants = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.5,
        ease: 'easeIn',
      },
    },
  };
  
  return (
    <div className="w-full  max-w-7xl mx-auto">

<AnimatePresence>
      <motion.div
        className="flex font-bold justify-center text-3xl sm:text-6xl"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={textVariants}
      >
        <div className="text-center text-purple-400">WORK</div> EXPERIENCE
      </motion.div>
    </AnimatePresence>
    <div className="border-t border-purple-600 mx-5 my-4"/>
      <div className="w-full mt-2 flex  flex-wrap">

        {/* Experience 1 */}



<div className="sm:w-3/4 w-full block">
  {/* Experience 1 */}
  <div className="w-full p-1">
    <div className="hover:shadow-lg px-6">
      <div className="justify-between flex">
        <h1 className="text-xl sm:text-3xl font-semibold">Barsaati Films (Delhi Based Start-Up) – SDE (Full Stack + DevOps)</h1>
        <span className="text-purple-300 text-xs font-semibold sm:py-0 py-3">June 2024 – Current</span>
      </div>
      <ul className="mt-4">
        <strong className="ml-3 underline text-lg italic">CreateStir Marketing Application</strong>
        <li className="ml-4 text-xs sm:text-sm text-gray-300 my-1"><span className="-ml-2.5 ">-</span> Led <strong className="underline">deployment</strong> for <strong className="underline">microservice SaaS</strong> with <strong className="underline">Digital Ocean</strong>, including <strong className="underline">load balancers</strong>, and configuring multiple environments with <strong className="underline">Nginx</strong>, <strong className="underline">DNS</strong>, and <strong className="underline">SSL</strong>.</li>
        <li className="ml-4 text-xs sm:text-sm text-gray-300 my-1"><span className="-ml-2.5 ">-</span> <strong className="underline">Pipelines</strong> with <strong className="underline">Jenkins</strong> & <strong className="underline">Docker</strong> reduced deployment times by 30% and improved uptime by 15% with faster builds.</li>
        <li className="ml-4 text-xs sm:text-sm text-gray-300 my-1"><span className="-ml-2.5 ">-</span> Developed SaaS with <strong className="underline">NestJs</strong> & <strong className="underline">NextJs</strong>, achieving 25% faster load times through <strong className="underline">SSR/SSG</strong>, alongside <strong className="underline">PostgreSQL</strong>, layered with <strong className="underline">GraphQL</strong> for scalable querying.</li>
        <li className="ml-4 text-xs sm:text-sm text-gray-300 my-1"><span className="-ml-2.5 ">-</span> Managed large-scale <strong className="underline">influencer database</strong> with extensive <strong className="underline">web scraping</strong> and <strong className="underline">Cron jobs</strong> on remote servers, ensuring efficient <strong className="underline">container orchestration</strong> with <strong className="underline">Kubernetes (K8s)</strong>.</li>
        <li className="ml-4 text-xs sm:text-sm text-gray-300 my-1"><span className="-ml-2.5 ">-</span> Leveraged <strong className="underline">RabbitMQ</strong> for queuing processing with 100% uptime. Optimized <strong className="underline">proxy rotations</strong> with <strong className="underline">Bright Data</strong>, ensuring 99% reliability across pipelines.</li>
      </ul>
    </div>
  </div>
  <div className="border-t border-purple-600 mx-6 my-3 sm:my-5"/>

  {/* Experience 2 */}
  <div className="w-full p-1">
    <div className="hover:shadow-lg px-4">
      <div className="justify-between flex">
        <h1 className="text-xl sm:text-3xl font-semibold">TradeSocio (UAE Based FinTech) – NodeJS + Cloud Engineer - Remote</h1>
        <span className="text-purple-300 text-xs font-semibold sm:py-0 py-3">May 2024 – Current - (Internship)</span>
      </div>
      <ul className="mt-4">
        <strong className="ml-3 underline text-lg italic">Go Market Trading Application</strong>
        <li className="ml-4 text-xs sm:text-sm text-gray-300 my-1"><span className="-ml-2.5 ">-</span> Worked on <strong className="underline">migration</strong> of <strong className="underline">Mongo-based architecture</strong> to <strong className="underline">PostgreSQL</strong>, implementing <strong className="underline">Redis</strong> for caching, and <strong className="underline">sharding</strong> to handle large-scale data, increasing query performance by 40%.</li>
        <li className="ml-4 text-xs sm:text-sm text-gray-300 my-1"><span className="-ml-2.5 ">-</span> Optimized <strong className="underline">socket connections</strong> with batching and compression, minimizing fallback by 20%.</li>
        <li className="ml-4 text-xs sm:text-sm text-gray-300 my-1"><span className="-ml-2.5 ">-</span> Created <strong className="underline">CI-CD pipelines</strong> with <strong className="underline">Azure DevOps</strong> for parallel builds and automated testing within the pipeline, improving <strong className="underline">high availability</strong> by 30%.</li>
      </ul>
    </div>
  </div>
  <div className="border-t border-purple-600 mx-6 my-3 sm:my-5"/>

  {/* Experience 3 */}
  <div className="w-full p-1">
    <div className="hover:shadow-lg px-4">
      <div className="justify-between flex">
        <h1 className="text-xl sm:text-3xl font-semibold">FinXsystems (Canadian Fintech Start-Up) – Research & Development Engineer</h1>
        <span className="text-purple-300 text-xs font-semibold sm:py-0 py-3">Aug 2023 – Current - Remote (Part-Time)</span>
      </div>
      <ul className="mt-4">
        <strong className="ml-3 underline text-lg italic">Infrastructure Migration</strong>
        <li className="ml-4 text-xs sm:text-sm text-gray-300 my-1"><span className="-ml-2.5 ">-</span> Designed <strong className="underline">CI/CD pipeline</strong> using <strong className="underline">Azure Data Factory</strong>’s <strong className="underline">Linked Services</strong> and <strong className="underline">Integration Runtime</strong>. Facilitated the <strong className="underline">migration</strong> of databases from on-premises to <strong className="underline">Azure Cloud Data Lake</strong>, reducing manual errors by 85%.</li>
        <li className="ml-4 text-xs sm:text-sm text-gray-300 my-1"><span className="-ml-2.5 ">-</span> Used <strong className="underline">Azure Virtual Machines (VMs)</strong> to process data post-migration, improving operational efficiency by 15%.</li>
      </ul>
      <ul className="mt-4">
        <strong className="ml-3 underline text-lg italic">FinXsystem Service Site</strong>
        <li className="ml-4 text-xs sm:text-sm text-gray-300 my-1"><span className="-ml-2.5 ">-</span> Led the end-to-end development and deployment of the <strong className="underline">web application</strong> with <strong className="underline">AWS EC2</strong>, using <strong className="underline">CloudFront</strong> as a <strong className="underline">CDN</strong>, increasing delivery speed by 30%.</li>
        <li className="ml-4 text-xs sm:text-sm text-gray-300 my-1"><span className="-ml-2.5 ">-</span> Integrated <strong className="underline">notification Lambda function</strong>, increasing execution efficiency by 30%.</li>
      </ul>
    </div>
  </div>
  <div className="border-t sm:hidden border-purple-600 mx-6 my-3 sm:my-5"/>

</div>



        {/* Skills Section */}
        
        <div className="sm:w-1/4 sm:block w-[85%] sm:ml-0 ml-6 ">
          <div className=" h-full ">

          <strong className="ml-1 sm:hidden  text-2xl italic underline">SKILLS</strong>
          <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>          <strong className="ml-1 text-lg sm:text-xl text-purple-400">AWS</strong>
    </AccordionTrigger>
    <AccordionContent>
    <div className="flex flex-wrap mt-1">
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  EC2
                </div>

                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  ECR
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  Lambda
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  S3
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  ELB
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  VPS
                </div>

                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  Boto3
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  Cloudwatch
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  IAM
                </div>
              </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>


         
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>              <strong className="ml-1 text-lg sm:text-xl text-purple-400">AZURE</strong>
    </AccordionTrigger>
    <AccordionContent>
    <div className="flex flex-wrap mt-1">
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  Data Factory
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  VPS
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  Azure Migrate
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  Data Lake
                </div>
              

        
              </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>
        

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger> <strong className="ml-1 text-lg sm:text-xl text-purple-400">BACKEND</strong></AccordionTrigger>
    <AccordionContent>
    <div className="flex flex-wrap mt-1">

<div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
  NodeJS
</div>
<div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
  NestJs
</div>
<div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
  DJango
</div>
<div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
  Webhooks
</div>
<div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
  RabbitMq
</div>
<div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
  Linux Bash
</div>
<div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
  Payment Gateway
</div>
<div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
  SSE
</div>
<div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
  Redis
</div>
<div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
  Rest/Fast API
</div>
<div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
 Sockets
</div>
<div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
 Web RTC
</div>

<div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
  LangChain
</div>





</div>    </AccordionContent>
  </AccordionItem>
</Accordion>
           
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger> <strong className="ml-1 text-lg sm:text-xl text-purple-400">MISCLENEOUS</strong></AccordionTrigger>
    <AccordionContent>
    <div className="flex flex-wrap mt-1">
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  Docker
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  Nginx
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  Kubernetes
                </div>

                
              

        
              </div>    </AccordionContent>
  </AccordionItem>
</Accordion>

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>              <strong className="ml-1 text-lg sm:text-xl text-purple-400">DATABASE</strong>
    </AccordionTrigger>
    <AccordionContent>
    <div className="flex flex-wrap mt-1">
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  MongoDB
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  PostgreSql
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  Oracle
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
                <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  GraphQL
                </div>

                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
                <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  SQL
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
                <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  NOSQL
                </div>
                
              

        
              </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>
          

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>              <strong className="ml-1 text-lg sm:text-xl text-purple-400">FRONTEND</strong>
    </AccordionTrigger>
    <AccordionContent>
    <div className="flex flex-wrap mt-1">
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  ReactJs
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  NextJs
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  Tailwind
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
                <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  Redux
                </div>

                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
                <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  Hook
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-xs rounded-full flex items-center">
                <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  Refs
                </div>
                
              

        
              </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>
          </div>
        </div>

      </div>
    </div>
  );
}
