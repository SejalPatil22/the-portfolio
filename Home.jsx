import React from 'react'
import pic from "../../public/2nd.jpeg"

import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { FaTelegram } from 'react-icons/fa6';

import { SiMongodb } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa6';

import { ReactTyped } from "react-typed";

import resume from "../assets/sejuu resume.pdf"

const Home = () => {
    return (
        <>
            <div name="Home" className='flex max-w-screen-2xl container mx-auto px-4 md:px-20  my-20'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                        <span className='text-xl'>Welcome To My Page </span>
                        <div className='flex space-x-1 text-2xl md:text-4xl'>
                            <h1>Hello, I'm a</h1>
                            {/* <span className='text-blue-800 font-bold'>Developer</span> */}
                            <ReactTyped
                                className='text-pink-800 font-bold'

                                strings={["Developer", "Programmer", "Coder"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <br />
                        <p className="text-sm md:text-md text-justify">
                            Hello i am a passionated full stack developer with a knowledge of the mern stack and also the hands on experience on the so many projects i am currently in the b tecj in final year of the electronics and telecommunication branch
                        </p>
                        <br />
                        {/* social media icons */}
                        <div className='flex flex-col items-center text-center md:flex-row justify-between space-y-9 md:space-y-0 '>
                            <div className='space-y-2 '>
                                <h1 className='font-bold'>
                                    Available On
                                </h1>
                                <ul className='flex space-x-5'>
                                    <li>
                                        <a href="https://www.github.com/" target='_blank'>
                                            <FaGithub className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>

                                    <li>
                                        <a href="https://www.linkedin.com/" target='_blank'>
                                            <FaLinkedin className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>

                                    <li>
                                        <a href="https://www.youtube.com/" target='_blank'>
                                            <IoLogoYoutube className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>

                                    <li>
                                        <a href="https://t.me/" target='_blank'>
                                            <FaTelegram className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='space-y-2' >
                                <h1 className='font-bold'>
                                    Currently Working On
                                </h1>
                                <div className='flex space-x-5 '>
                                    <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />

                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        {/* <div className='ml-52 justify-center '>
                            <button className='bg-pink-300 px-6 py-2 rounded-xl cursor-pointer '> Resume
                                <a href={resume} download='resume'></a>
                            </button>
                        </div> */}

                        <div className='items-center flex justify-center'>
                            <a href={resume} download='resume' className='bg-pink-300 px-6 py-2 rounded-xl cursor-pointer'>
                                Resume
                            </a>
                        </div>


                    </div>


                    <div className='md:w-1/2 md:ml-48 md:mt-20 mt-5 order-1'>
                        <img src={pic} className='rounded-full md:w-[400px] md:h-[400px]' alt="" />
                    </div>

                </div>


            </div>
            <hr className='border-2 border-pink-200 shadow-md' />


        </>
    )
}

export default Home