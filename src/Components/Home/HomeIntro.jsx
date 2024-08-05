import React from 'react';
import HomeLogo from "../../assets/ELEVATE-LogoLight2.png";
import BlogIcon from '../../assets/Home Icons/Blog.png';
import ChatIcon from '../../assets/Home Icons/chat.png';
import EventIcon from '../../assets/Home Icons/calendar.png';
import CommunityIcon from '../../assets/Home Icons/network.png';
import { IoIosArrowDropdownCircle } from "react-icons/io";

import { Link } from 'react-scroll';

function HomeIntro() {
    // Define icons object
    const HomeIcons = {
        Blog: BlogIcon,
        Chat: ChatIcon,
        Event: EventIcon,
        Community: CommunityIcon,
    };

    return (
        <div className='bg-home bg-center bg-cover gap-2 h-[93vh] w-full flex flex-col justify-center items-center'>
            {/* Logo section */}
            <div className='h-[40vh] w-full flex justify-center items-end bg-red-90'>
                <img
                    className='h-52 lg:h-60 w-auto'
                    src={HomeLogo}
                    alt="Home Logo"
                />
            </div>

            {/* Main content section */}
            <div className='h-[60vh] w-full flex flex-col justify-start items-center gap-1'>
                <p className='text-center text-3xl md:text-5xl lg:text-6xl font-bold text-blue-500 mb-6 max-w-4xl font-mateSc'>
                    The all-in-one community platform for educators
                </p>

                <div className='grid gap-4 justify-items-center xs:grid-cols-2 xs:grid-rows-2 md:grid-cols-4 md:grid-rows-1'>
                    {Object.entries(HomeIcons).map(([title, icon]) => (
                        <div
                            key={title} // Added key here for better React practices
                            className='bg-white/10 p-2 shadow-xl shadow-black rounded-lg flex flex-col justify-center items-center w-24 h-auto xs:w-32 md:w-32 lg:w-36'
                        >
                            <Link
                                to={title}
                                containerId='contentcontainer'
                                smooth={true}
                                duration={500}
                                className='flex flex-col justify-center items-center'
                            >
                                <img
                                    src={icon}
                                    alt={`Home Icon ${title}`}
                                    className='h-12 w-12 md:h-16 md:w-16'
                                />
                                <h1 className='mt-2 font-bold text-white font-mateSc text-sm md:text-lg uppercase text-center'>
                                    {title}
                                </h1>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Scroll down prompt */}
                <div className='text-lg lg:mt-5 text-white flex justify-center items-center flex-col mt-1'>
                    <p>To Know More Scroll Down</p>
                    <span>
                        <IoIosArrowDropdownCircle size={35} />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default HomeIntro;
