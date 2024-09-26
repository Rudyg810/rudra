import { FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { ImPaypal } from 'react-icons/im';

export function Footer() {
    return (
        <div className="text-white w-full border sm:px-24  py-10 border-black-100 bg-black-100">
            <div className="text-left mx-2 mb-1">
                <h2 className="text-lg font-bold">Rudra </h2>
                <div className="w-fit border-t  text-white ml-0 border border-black-100 pt-2">
                    <p>Follow me on our social media channels!</p>
                    <p className="mt-1 text-center text-sm">
                      The only limit to our realization of tomorrow is our doubts of today  Franklin D. Roosevelt
                    </p>
                 </div>
            </div>
            <div className="flex mx-2 justify-center border-gray-500 border-t-[0.5px] w-full  pt-6 items-center mt-12 mb-4">
                <a 
                    href="/" 
                    target='blank'
                    className="mx-4" 
                    title="Contact us on Twitter"
                >
                    <FaXTwitter size={30} className=" hover:scale-105 trasition duration-300  p-1" />
                </a>
                <a
                    target='blank'
                    href="https://www.linkedin.com/in/rudra-070a0a303/" className="mx-4">
                    <FaLinkedinIn size={30} className=" hover:scale-105 trasition duration-300  p-1" />
                </a>
                <a 
                    target='blank'
                href="https://paypal.com" className="mx-4">
                    <ImPaypal size={30} className=" hover:scale-105 trasition duration-300  p-1" />
                </a>
            </div>
        </div>
    );
}
