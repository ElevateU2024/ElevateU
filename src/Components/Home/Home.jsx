import React from 'react';
import HomeIntro from './HomeIntro';
import HomeBlog from './HomeBlog';
import HomeChat from './HomeChat';
import HomeEvent from './HomeEvent';
import HomeCommunity from './HomeCommunity';
import HomeFooter from './HomeFooter';

const Home = () => {
  return (
    <div className='w-full h-fit font-Merriweather overflow-scroll' id='contentcontainer'>
      <div className='intro-container' name='Intro'>
        <HomeIntro />
      </div>
      <div className='community-container' name='Community'>
        <HomeCommunity />
      </div>
      <div className='blog-container' name='Blog' >
        <HomeBlog />
      </div>
      <div className='chat-container' name='Chat'>
        <HomeChat />
      </div>
      <div className='event-container' name='Event' >
        <HomeEvent />
      </div>
      <div className='footer-container' name='Footer'>
        <HomeFooter />
      </div>
    </div>
  );
};

export default Home;
