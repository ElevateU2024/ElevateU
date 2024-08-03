import React from 'react';
import HomeLogo from "../../assets/ELEVATE-LogoLight2.png";
import BlogIcon from '../../assets/Home Icons/Blog.png';
import ChatIcon from '../../assets/Home Icons/chat.png';
import EventIcon from '../../assets/Home Icons/calendar.png';
import CommunityIcon from '../../assets/Home Icons/network.png';


const HomeIcons = {
  Blog: BlogIcon,
  Chat: ChatIcon,
  Event: EventIcon,
  Community: CommunityIcon,
};

const Home = () => {
  return (
    <div className='h-fit w-full'>
      <div className='h-[93vh] w-full flex flex-col justify-center items-start'>
        <div className='flex flex-col justify-center items-center h-[50vh] w-full'>
          <img className='z-0 h-60 w-auto scale-125' src={HomeLogo} alt="Home Logo" />
        </div>
        <div className='flex flex-col justify-start items-center w-full h-[50vh]'>
          <p className='text-5xl font-bold font-mateSc text-white max-w-xl text-center'>
            The all-in-one community platform for educators
          </p>
          <div className='flex space-x-4 mt-4 justify-center items-center text-center'>
            {Object.entries(HomeIcons).map(([title, icon], index) => (
              <div>
                <div key={index} className='bg-white/10 p-3 rounded-lg flex flex-col items-center'>
                  <img
                    src={icon}
                    alt={`Home Icon ${title}`}
                    className='h-20 w-20'
                  />
                </div>
                <h1 className='mt-2 text-white font-mateSc'>{title}</h1>

              </div>

            ))}
          </div>
        </div>
      </div>

      <div className='h-[100vh] w-full flex flex-col justify-center items-start bg-black'>
        {/* Additional content here */}
      </div>
    </div>
  );
};

export default Home;
