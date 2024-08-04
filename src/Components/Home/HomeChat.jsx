import React from 'react'
import Chatimg from '../../assets/Home Images/chat.jpg';


function HomeChat() {
    return (
        <div>
            <div className='h-[100vh] w-full flex flex-col lg:flex-row justify-center items-center bg-black'>
                <div className='h-full w-full lg:w-1/2 p-6 lg:p-10 text-white'>
                    <section id="chat" className='flex justify-center items-center flex-col h-full w-full'>
                        <div className='w-full py-10'>
                            <div className='max-w-7xl mx-auto px-6 lg:px-8'>
                                <h2 className='text-blue-500 text-4xl md:text-5xl lg:text-6xl font-bold text-center  mb-8'>
                                    Connect with Your Peers
                                </h2>
                                <p className='text-base md:text-lg lg:text-xl mb-6'>
                                Engage with our community through real-time chat. Share ideas, collaborate on projects, or connect with like-minded individuals easily. Start conversations, join group chats, or send direct messages to foster collaboration and build meaningful connections.
                                </p>
                                <h3 className='text-blue-500 font-bold text-xl md:text-2xl mb-4 '>
                                    Why Join the Conversation?
                                </h3>
                                <ul className='list-disc list-inside mb-6 space-y-2'>
                                    <li><strong>Share Ideas:</strong> Exchange thoughts and insights with others.</li>
                                    <li><strong>Collaborate on Projects:</strong> Work together on community initiatives.</li>
                                    <li><strong>Find Support:</strong> Connect with peers who share similar interests or challenges.</li>
                                    <li><strong>Build Relationships:</strong> Forge new friendships and professional connections.</li>
                                </ul>
                                <p className='text-base md:text-lg'>
                                    Ready to start chatting? Click the button below to dive into conversations and connect with others in our vibrant community.
                                </p>
                                <div className='flex justify-center mt-4'>
                                    <a href="#chat" className='bg-blue-600 text-white py-3 px-6 rounded-lg text-xl hover:bg-blue-500 transition-colors'>
                                        Join the Chat
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className='h-full w-full lg:w-1/2 flex justify-center items-center p-6 lg:p-10'>
                    <img className='max-h-[80%] rounded-3xl w-auto' src={Chatimg} alt="Chat" />
                </div>
            </div>
        </div>
    )
}

export default HomeChat