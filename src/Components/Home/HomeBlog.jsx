import React from 'react'
import Blogimg from '../../assets/Home Images/Blog.webp';


function HomeBlog() {
    return (
        <div>
            <div className='h-[100vh] w-full flex flex-col lg:flex-row justify-center items-center bg-black'>
                <div className='h-full w-full lg:w-1/2 flex justify-center items-center p-6 lg:p-10'>
                    <img className='max-h-[80%] rounded-3xl w-auto' src={Blogimg} alt="Blog" />
                </div>
                <div className='h-full w-full lg:w-1/2 p-6 lg:p-10 text-white'>
                    <section id="blog" className='flex justify-center items-center flex-col h-full w-full'>
                        <h2 className='text-blue-500 text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4'>Welcome to Our Blog</h2>
                        <p className='text-xl md:text-2xl lg:text-3xl text-center mb-6'><strong>Discover, Learn, and Engage</strong></p>
                        <p className='text-base md:text-lg lg:text-xl mb-6'>
                            Explore our blog for the latest industry news, expert insights, practical how-to guides, and inspiring personal stories. Stay informed and get inspired with content designed to keep you ahead of the curve.
                        </p>
                        <div className='w-full'>
                            <h3 className='text-blue-500 font-bold text-xl md:text-2xl mb-4'>Why Follow Us?</h3>
                            <ul className='list-disc list-inside mb-6 space-y-2'>
                                <li><strong>Stay Updated:</strong> Get the latest trends and updates.</li>
                                <li><strong>Learn from Experts:</strong> Gain insights from industry leaders.</li>
                                <li><strong>Find Solutions:</strong> Access practical guides and tips.</li>
                                <li><strong>Get Inspired:</strong> Read success stories and personal experiences.</li>
                            </ul>
                        </div>

                        <div>
                            <p className='text-lg md:text-xl text-blue-500'><strong>Join Us</strong></p>
                            <p className='text-base md:text-lg'>
                                Subscribe to our newsletter for updates and connect with us on social media. We’re excited to share valuable content and hear from you!
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default HomeBlog