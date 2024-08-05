import React from 'react';
import Blogimg from '../../assets/Home Images/Blog.webp';

function HomeBlog() {
    return (
        <div className="h-fit lg:h-fit w-full flex flex-col lg:flex-row justify-center items-center bg-black">
            <div className="h-[30vh] lg:h-full lg:min-h-[93vh] w-full lg:w-1/2 flex justify-center items-center p-4">
                <img
                    className="max-h-[80%] rounded-3xl w-auto lg:max-h-[70%]"
                    src={Blogimg}
                    alt="Blogimg"
                />
            </div>
            <div className="h-fit lg:h-full w-full lg:w-1/2 flex flex-col justify-start items-center p-6 lg:p-8 gap-4 text-white">
                <h2 className="text-blue-500 text-3xl md:text-4xl lg:text-4xl font-bold text-center">
                    Welcome to Our Blog
                </h2>
                <p className="text-xl md:text-2xl lg:text-3xl text-center mb-6">
                    <strong>Discover, Learn, and Engage</strong>
                </p>

                <p className="text-base md:text-lg lg:text-lg mb-6 text-justify mt-4 px-4 lg:px-8">
                    Explore our blog for the latest industry news, expert insights, practical how-to guides, and inspiring personal stories. Stay informed and get inspired with content designed to keep you ahead of the curve.
                </p>

                <h3 className="text-blue-500 font-bold text-xl md:text-2xl lg:text-2xl mb-4 text-center">
                    Why Follow Us?
                </h3>

                <ul className="list-disc list-inside mb-6 space-y-2 text-justify px-4 lg:px-8">
                    <li><strong>Stay Updated:</strong> Get the latest trends and updates.</li>
                    <li><strong>Learn from Experts:</strong> Gain insights from industry leaders.</li>
                    <li><strong>Find Solutions:</strong> Access practical guides and tips.</li>
                    <li><strong>Get Inspired:</strong> Read success stories and personal experiences.</li>
                </ul>

                <p className="text-base md:text-lg lg:text-lg text-justify px-4 lg:px-8">
                    Subscribe to our newsletter for updates and connect with us on social media. We’re excited to share valuable content and hear from you!
                </p>
            </div>
        </div>
    );
}

export default HomeBlog;
