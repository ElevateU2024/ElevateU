import React from 'react';
import CommunityImage from '../../assets/Home Images/Community image.jpg';

function HomeCommunity() {
  return (
    <div className="h-fit lg:h-fit w-full flex flex-col lg:flex-row justify-center items-center bg-black">
      <div className="h-[30vh] lg:h-full lg:min-h-[93vh] w-full lg:w-1/2 flex justify-center items-center p-4">
        <img
          className="max-h-[80%] rounded-3xl w-auto lg:max-h-[70%]"
          src={CommunityImage}
          alt="Community"
        />
      </div>
      <div className="h-fit lg:h-full w-full lg:w-1/2 flex flex-col justify-start items-center p-6 lg:p-8 gap-4 text-white">
        <h2 className="text-blue-500 text-3xl md:text-4xl lg:text-4xl font-bold text-center">
          Join Our Community
        </h2>
        <p className="text-base md:text-lg lg:text-lg mb-6 text-justify mt-4 px-4 lg:px-8">
          Become a part of our vibrant community and engage with fellow members. Share your ideas, collaborate on exciting projects, and connect with people who share your interests and passions. Together, we can create a supportive and thriving network.
        </p>
        <h3 className="text-blue-500 font-bold text-xl md:text-2xl lg:text-2xl mb-4 text-center">
          Why Be Part of Our Community?
        </h3>
        <ul className="list-disc list-inside mb-6 space-y-2 text-justify px-4 lg:px-8">
          <li>
            <strong>Share Your Ideas:</strong> Contribute your thoughts and insights with others.
          </li>
          <li>
            <strong>Collaborate on Projects:</strong> Work alongside community members on impactful initiatives.
          </li>
          <li>
            <strong>Find Support:</strong> Connect with peers who share similar interests or challenges.
          </li>
          <li>
            <strong>Build Relationships:</strong> Forge lasting friendships and professional connections.
          </li>
        </ul>
        <p className="text-base md:text-lg lg:text-lg text-justify px-4 lg:px-8">
          Ready to connect? Click the button below to join our community and start building meaningful relationships.
        </p>
        <div className="flex justify-center mt-4 mb-2">
          <a
            href="#community"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg md:text-xl lg:text-lg hover:bg-blue-500 transition-colors"
          >
            Join the Community
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeCommunity;
