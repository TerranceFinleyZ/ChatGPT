'use client'

import { useChat } from 'ai/react';
import { useEffect, useRef } from 'react';
import { FaRobot } from "react-icons/fa";
import Textarea from 'react-textarea-autosize';
import { MdArrowBackIosNew } from "react-icons/md";
import Link from 'next/link';

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api',  
  });

  const messageEndRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="min-h-screen text-white">
      {messages.length !== 0 ? (
        <div className='pb-32 pt-5 space-y-5 w-[75%] mx-auto relative'>
          {messages.map((message) => (
            <div key={message.id} className='w-full'>
              {message.role === 'user' ? (
                <div className='flex items-center gap-x-2'>
                  <div className='bg-gray-500 h-12 w-12 rounded-lg'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-full h-full text-white p-1'
                    >
                      <path 
                        fillRule='evenodd'
                        d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>

                  <p className='rounded-lg p-3 w-full border-gray-500 border-2 text-sm'>
                    {message.content}
                  </p>
                </div>
              ) : (
                <div className='flex gap-x-2'>
                  <div className='bg-blue-500 h-12 w-12 rounded-lg'>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none" 
                      viewBox="0 0 24 24"
                      className="w-full h-full text-white p-1"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
                    </svg>
                  </div>
                  <p className='rounded-lg p-3 w-full border-blue-500 border-2 text-sm'>
                    {message.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className='w-full flex justify-center pt-32'>
          <h1 className='font-bold text-3xl'>
          <FaRobot className='flex justify-center mt-10 mb-9 p-5 text-9xl text-blue-600 hover:-translate-y-1 hover:scale-110 duration-300'/>
          </h1>
        </div>
      )}

      <div ref={messageEndRef}></div>

      <form 
        onSubmit={handleSubmit} 
        className='mb-9 p-5 fixed bottom-0 left-0 w-[75%] mx-auto right-0'
      >

        <div className='relative flex items-center'>
          <Textarea 
           tabIndex={0}
           required
           rows={1}
           value={input}
           onChange={handleInputChange}
           autoFocus
           placeholder='Ask Me Anything...'
           spellCheck={false}
           className='w-full focus:outline-none shadow-blue-700 shadow-xl placeholder:text-gray-200 text-sm text-white p-5 pr-16 rounded-xl bg-neutral-600'
          />
          <button type='submit' className='absolute bg-blue-500 p-2 rounded-lg right-0 mr-5'>
           <svg
             xmlns='http://www.w3.org/2000/svg'
             viewBox='0 0 24 24'
             fill='currentColor'
             className='w-5 h-5 text-white'
           >
            <path d='M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z'/>
            </svg> 
          </button>
        </div>
        <Link className='flex mt-5 mb-1 items-center justify-center ' href="/">
          <MdArrowBackIosNew className="text-white lg:text-3xl mt-5 hover:-translate-y-1 hover:scale-110 duration-300" />
        </Link>
      </form>
    </div>
  );
}
