import React from 'react';
import EventImage from '../../assets/Home Images/EventImag.jpg';

function HomeEvent() {
  return (
    <div className="h-fit lg:h-fit w-full flex flex-col lg:flex-row justify-center items-center bg-black">
      <div className="h-[30vh] lg:h-full lg:min-h-[93vh] w-full lg:w-1/2 flex justify-center items-center p-4">
        <img
          className="max-h-[80%] rounded-3xl w-auto lg:max-h-[70%]"
          src={EventImage}
          alt="Event Image"
        />
      </div>
      <div className="h-fit lg:h-full w-full lg:w-1/2 flex flex-col justify-start items-center p-6 lg:p-8 gap-4 text-white">
        <h2 className="text-blue-500 text-3xl md:text-4xl lg:text-4xl font-bold text-center">
          Daily Updated Events
        </h2>
        <p className="text-xl md:text-2xl lg:text-3xl text-center mb-6">
          <strong>Discover, Celebrate, and Connect</strong>
        </p>

        <p className="text-base md:text-lg lg:text-lg mb-6 text-justify mt-4 px-4 lg:px-8">
          Join us for an exciting lineup of symposiums, cultural events, and college festivities. Dive into enriching discussions, celebrate diverse cultures, and connect with peers at events that promise memorable experiences and lasting friendships.
        </p>

        <h3 className="text-blue-500 font-bold text-xl md:text-2xl lg:text-2xl mb-4 text-center">
          Why Attend?
        </h3>

        <ul className="list-disc list-inside mb-6 space-y-2 text-justify px-4 lg:px-8">
          <li>
            <strong>Engage in Learning:</strong> Participate in symposiums with leading experts.
          </li>
          <li>
            <strong>Celebrate Culture:</strong> Experience the vibrancy of diverse cultural showcases.
          </li>
          <li>
            <strong>Network:</strong> Build connections with fellow students and professionals.
          </li>
          <li>
            <strong>Create Memories:</strong> Enjoy unforgettable moments at our college events.
          </li>
        </ul>
        
        <p className="text-lg md:text-xl text-blue-500">
          <strong>Join Us</strong>
        </p>
        
        <p className="text-base md:text-lg lg:text-lg text-justify px-4 lg:px-8">
          Don’t miss out on these amazing opportunities! Subscribe to our event updates and follow us on social media to stay informed about upcoming events. We look forward to seeing you there!
        </p>
      </div>
    </div>
  );
}

export default HomeEvent;
