"use client"
import {AnimatePresence,motion} from "framer-motion"

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
    <div className="w-full p-4 max-w-7xl mx-auto">

<AnimatePresence>
      <motion.div
        className="flex font-bold justify-center text-6xl"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={textVariants}
      >
        <div className="text-center text-purple-400">WORK</div> EXPERIENCE
      </motion.div>
    </AnimatePresence>
      <div className="w-full mt-10 flex  flex-wrap">

        {/* Experience 1 */}
        <div className="w-3/4 block">
          <div className="w-full p-1">
            <div className="border-t border-purple-800 hover:shadow-lg pt-4 p-3">
              <div className="justify-between flex">
                <h1 className="text-5xl font-semibold">Barsati Films</h1>
                <span className="text-purple-300 font-semibold py-3">06/2024-Current</span>
              </div>
              <ul className="mt-4">
                <strong className="ml-3 text-2xl">Stir Deployment</strong>
                <li className="ml-5 text-gray-300"><span className="-ml-2.5">-</span> Handled the entire deployment stage for a SaaS application with Digital Ocean, working on Droplets, Load Balancing, staging, and production.</li>
                <li className="ml-5 text-gray-300"><span className="-ml-2.5">-</span> Created CI/CD Pipeline using Jenkins with Docker containerization and GitHub plugins automation, integrated with the Droplet.</li>
                <li className="ml-5 text-gray-300"><span className="-ml-2.5">-</span> Worked on CDN with Object Storing and Managed Services.</li>
              </ul>
              <ul className="mt-4">
                <strong className="ml-3 text-2xl">Stir-Backend</strong>
                <li className="ml-5 text-gray-300"><span className="-ml-2.5">-</span> Created cron-job schedulers using RabbitMQ for efficient asynchronous programming using a queue structure.</li>
                <li className="ml-5 text-gray-300"><span className="-ml-2.5">-</span> Integrated Proxy Mesh for IP rotation and large-scale scraping, adding proxies to effectively collect data from third-party sources.</li>
              </ul>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="w-full p-1">
            <div className="border-t border-purple-800 hover:shadow-lg pt-4 p-3">
              <div className="justify-between flex">
                <h1 className="text-5xl font-semibold">Finxsystem</h1>
                <span className="text-purple-300 font-semibold py-3">07/2023-Current</span>
              </div>
              <ul className="mt-4">
                <strong className="ml-3 text-2xl">Finx Website Creation & Deployment</strong>
                <li className="ml-5 text-gray-300"><span className="-ml-2.5">-</span> Deployed a web application on AWS, including working with EC2 instances, integrating S3 buckets for object storage, and SES for email functionalities.</li>
                <li className="ml-5 text-gray-300"><span className="-ml-2.5">-</span> Worked on Lambda serverless functions and integrated them into web applications, ensuring robust backend and runtime disaster management with Boto3 automation and CloudWatch.</li>
              </ul>
              <ul className="mt-4">
                <strong className="ml-3 text-2xl">Performance Analyzer</strong>
                <li className="ml-5 text-gray-300"><span className="-ml-2.5">-</span> Created a Performance Analyzer in MERN, integrating tools like pcap and Perfview for system/application log generation with centralized logging.</li>
              </ul>
              <ul className="mt-4">
                <strong className="ml-3 text-2xl">Infrastructure Migration to Azure</strong>
                <li className="ml-5 text-gray-300"><span className="-ml-2.5">-</span> Created a CI/CD Data Pipeline using Azure Data Factory's Integration Runtime to migrate the database from a local machine to Azure Cloud Data Lake.</li>
              </ul>
            </div>
          </div>

          {/* Experience 3 */}
          <div className="w-full p-1">
            <div className="border-t border-purple-800 hover:shadow-lg pt-4 p-3">
              <div className="justify-between flex">
                <h1 className="text-5xl font-semibold">Ascer Solution</h1>
                <span className="text-purple-300 font-semibold py-3">02/2024-06/2024</span>
              </div>
              <ul className="mt-4">
                <strong className="ml-3 text-2xl">WiFi Standards Toolkit</strong>
                <li className="ml-5 text-gray-300"><span className="-ml-2.5">-</span> Developed real-time data collection scripts for the custom-measurement industry, creating RVR, RVOR, and other test cases for Wi-Fi standard checks using LANs with high computation and multiprocessing (cluster).</li>
                <li className="ml-5 text-gray-300"><span className="-ml-2.5">-</span> Configured secure web/LAN sockets and SSH, working with MongoDB sharding and replication.</li>
                <li className="ml-5 text-gray-300"><span className="-ml-2.5">-</span> Enabled parallel processing to manage high data volume, ensuring timely analysis, and applied Llama NLP model for training.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="w-1/4 p-1 pl-4">
          <div className="p-5 h-full ">
          <div className="block">
              <strong className="ml-1 text-2xl text-purple-400">AWS</strong>
              <div className="flex flex-wrap mt-1">
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  EC2
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  Lambda
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  S3
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  ELB
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  VPS
                </div>

                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  Boto3
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  Cloudwatch
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  IAM
                </div>
              </div>
            </div>

            <div className="block mt-5">
              <strong className="ml-1 text-2xl text-purple-400">AZURE</strong>
              <div className="flex flex-wrap mt-1">
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  Data Factory
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  VPS
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  Azure Migrate
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  Data Lake
                </div>
              

        
              </div>
            </div>

            <div className="block mt-5">
              <strong className="ml-1 text-2xl text-purple-400">BACKEND</strong>
              <div className="flex flex-wrap mt-1">

                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  NodeJS
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  NestJs
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  DJango
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  Webhooks
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  RabbitMq
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  Linux Bash
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  Payment Gateway
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  SSE
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  Redis
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  Rest/Fast API
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                 Sockets
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                 Web RTC
                </div>

                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  LangChain
                </div>
             
        
              

        
              </div>
            </div>



            <div className="block mt-5">
              <strong className="ml-1 text-2xl text-purple-400">MISCLENEOUS</strong>
              <div className="flex flex-wrap mt-1">
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  Docker
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  Nginx
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  Kubernetes
                </div>

                
              

        
              </div>
            </div>

            <div className="block mt-5">
              <strong className="ml-1 text-2xl text-purple-400">DATABASE</strong>
              <div className="flex flex-wrap mt-1">
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  MongoDB
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  PostgreSql
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  Oracle
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  GraphQL
                </div>

                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  SQL
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  NOSQL
                </div>
                
              

        
              </div>
            </div>


            <div className="block mt-5">
              <strong className="ml-1 text-2xl text-purple-400">FRONTEND</strong>
              <div className="flex flex-wrap mt-1">
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  ReactJs
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  NextJs
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                  <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  Tailwind
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  Redux
                </div>

                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  Hook
                </div>
                <div role="button" className="border-2 border-purple-600 hover:scale-95 transition duration-300 px-3 py-1 m-1 text-white font-semibold text-sm rounded-full flex items-center">
                <div className="rounded-full w-2 h-2 bg-purple-400 my-auto mr-2"></div>
                  Refs
                </div>
                
              

        
              </div>
            </div>

          



          </div>
        </div>

      </div>
    </div>
  );
}
