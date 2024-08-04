import React from 'react'
import HomeLogo from "../../assets/ELEVATE-LogoLight2.png";
import BlogIcon from '../../assets/Home Icons/Blog.png';
import ChatIcon from '../../assets/Home Icons/chat.png';
import EventIcon from '../../assets/Home Icons/calendar.png';
import CommunityIcon from '../../assets/Home Icons/network.png';

function HomeIntro() {
    const HomeIcons = {
        Blog: BlogIcon,
        Chat: ChatIcon,
        Event: EventIcon,
        Community: CommunityIcon,
    };
    return (
        <div className='bg-gradient-to-b from-black via-blue-500 to-black h-[93vh] w-full flex flex-col justify-center items-center  '>
            <div className='flex flex-col items-center mb-10'>
                <img className='h-60 w-auto' src={HomeLogo} alt="Home Logo" />
            </div>
            <div className='flex flex-col items-center text-center px-4'>
                <p className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-mate max-w-4xl'>
                    The all-in-one community platform for educators
                </p>
                <div className='flex flex-wrap justify-center gap-8'>
                    {Object.entries(HomeIcons).map(([title, icon]) => (
                        <div key={title} className='h-50 w-60 bg-white/10 p-4 rounded-lg flex flex-col items-center shadow-md'>
                            <img src={icon} alt={`Home Icon ${title}`} className='h-16 w-16 md:h-20 md:w-20' />
                            <h1 className='mt-2 text-white font-mateSc text-lg md:text-xl uppercase'>{title}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomeIntro