import React from 'react';
import CommunityImage from '../../assets/Home Images/Community image.jpg';

function HomeCommunity() {
  return (
    <div>
      <div className="h-[100vh] w-full flex flex-col lg:flex-row justify-center items-center bg-black">
        <div className="h-full w-full lg:w-1/2 p-6 lg:p-10 text-white">
          <section
            id="community"
            className="flex justify-center items-center flex-col h-full w-full"
          >
            <div className="w-full py-10">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <h2 className="text-blue-500 text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
                  Join Our Community
                </h2>
                <p className="text-base md:text-lg lg:text-xl mb-6">
                  Become a part of our vibrant community and engage with fellow
                  members. Share your ideas, collaborate on exciting projects,
                  and connect with people who share your interests and
                  passions. Together, we can create a supportive and thriving
                  network.
                </p>
                <h3 className="text-blue-500 font-bold text-xl md:text-2xl mb-4">
                  Why Be Part of Our Community?
                </h3>
                <ul className="list-disc list-inside mb-6 space-y-2">
                  <li>
                    <strong>Share Your Ideas:</strong> Contribute your thoughts
                    and insights with others.
                  </li>
                  <li>
                    <strong>Collaborate on Projects:</strong> Work alongside
                    community members on impactful initiatives.
                  </li>
                  <li>
                    <strong>Find Support:</strong> Connect with peers who share
                    similar interests or challenges.
                  </li>
                  <li>
                    <strong>Build Relationships:</strong> Forge lasting
                    friendships and professional connections.
                  </li>
                </ul>
                <p className="text-base md:text-lg">
                  Ready to connect? Click the button below to join our community
                  and start building meaningful relationships.
                </p>
                <div className="flex justify-center mt-4">
                  <a
                    href="#community"
                    className="bg-blue-600 text-white py-3 px-6 rounded-lg text-xl hover:bg-blue-500 transition-colors"
                  >
                    Join the Community
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="h-full w-full lg:w-1/2 flex justify-center items-center p-6 lg:p-10">
          <img
            className="max-h-[80%] rounded-3xl w-auto"
            src={CommunityImage}
            alt="Community"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeCommunity;
