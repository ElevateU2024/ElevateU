import React from 'react';
import HomeIntro from './HomeIntro';
import HomeBlog from './HomeBlog';
import HomeChat from './HomeChat';
import HomeEvent from './HomeEvent';
import HomeCommunity from './HomeCommunity';
import HomeFooter from './HomeFooter';

const Home = () => {
  return (
    <div className='w-full h-fit font-Merriweather'>
      <HomeIntro />
      <HomeCommunity></HomeCommunity>
      <HomeBlog />
      <HomeChat />
      <HomeEvent></HomeEvent>
      <HomeFooter></HomeFooter>
    </div>
  );
};

export default Home;
