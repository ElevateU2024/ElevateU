import React from 'react';
import EventImage from '../../assets/Home Images/EventImag.jpg';

function HomeEvent() {
  return (
    <div>
      <div className="h-[100vh] w-full flex flex-col lg:flex-row justify-center items-center bg-black">
        <div className="h-full w-full lg:w-1/2 flex justify-center items-center p-6 lg:p-10">
          <img
            className="max-h-[80%] rounded-3xl w-auto"
            src={EventImage}
            alt="Event"
          />
        </div>
        <div className="h-full w-full lg:w-1/2 p-6 lg:p-10 text-white">
          <section
            id="event"
            className="flex justify-center items-center flex-col h-full w-full"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-blue-500">
              Daily Updated Events
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-center mb-6">
              <strong>Discover, Celebrate, and Connect</strong>
            </p>
            <p className="text-base md:text-lg lg:text-xl mb-6">
              Join us for an exciting lineup of symposiums, cultural events, and
              college festivities. Dive into enriching discussions, celebrate
              diverse cultures, and connect with peers at events that promise
              memorable experiences and lasting friendships.
            </p>
            <div className="w-full">
              <h3 className="text-blue-500 font-bold text-xl md:text-2xl mb-4">
                Why Attend?
              </h3>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>
                  <strong>Engage in Learning:</strong> Participate in symposiums
                  with leading experts.
                </li>
                <li>
                  <strong>Celebrate Culture:</strong> Experience the vibrancy of
                  diverse cultural showcases.
                </li>
                <li>
                  <strong>Network:</strong> Build connections with fellow
                  students and professionals.
                </li>
                <li>
                  <strong>Create Memories:</strong> Enjoy unforgettable moments
                  at our college events.
                </li>
              </ul>
            </div>

            <div>
              <p className="text-lg md:text-xl text-blue-500">
                <strong>Join Us</strong>
              </p>
              <p className="text-base md:text-lg">
                Don’t miss out on these amazing opportunities! Subscribe to our
                event updates and follow us on social media to stay informed
                about upcoming events. We look forward to seeing you there!
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default HomeEvent;
