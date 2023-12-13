'use client'

import React, { useState } from 'react';
import Link from 'next/link';

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='sticky top-0 w-full flex flex-row justify-between items-center px-5 py-3 divideY gap-3 bg-white z-50'>
      <div className='flex flex-row items-center'>
        <Link href={'/'}>
          <svg width="117" height="24" viewBox="0 0 117 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5666 23.1818C16.0621 23.1459 14.7367 22.6434 13.6621 21.5666C9.68597 17.5464 5.67402 13.5622 1.66207 9.54205C-1.31107 6.56284 -0.12898 1.53766 3.88297 0.281364C5.99641 -0.364731 7.93075 0.101893 9.50687 1.68124C13.483 5.62959 17.3875 9.57795 21.3278 13.5263C22.4024 14.6031 23.0114 15.8953 23.083 17.4388C23.1905 19.9872 21.3636 22.3922 18.8562 22.9665C18.4621 23.0741 17.9964 23.11 17.5666 23.1818Z" fill="#DA1A5F" />
            <path d="M28.5264 0.0300293C31.5712 0.0300293 34.0429 2.47083 34.0429 5.55773C34.0429 8.64462 31.607 11.1213 28.5264 11.1572C25.4816 11.1931 22.9742 8.64462 22.9384 5.59362C22.9742 2.50672 25.4458 0.0300293 28.5264 0.0300293Z" fill="#DA1A5F" />
          </svg>
        </Link>

        <input className="text-sm -ml-12 bg-gray-100 appearance-none border-2 border-gray-100 rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary" id="search" type="text" placeholder='Search Velo Social Hub' />
      </div>

      <div className='flex flex-row gap-3'>
        <Link href={'/chat'} className='w-10 h-10 bg-primary rounded-full flex justify-center items-center hover:bg-rose-500'>
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512" fill="#FFF">
            <path d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z" />
          </svg>
        </Link>

        <div className="relative inline-block text-left">
          <button onClick={handleDropdownToggle} className={`w-10 h-10 bg-primary rounded-full flex justify-center items-center hover:bg-rose-500 focus:outline-none ${isDropdownOpen ? 'active' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
              <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-61.9 50.1-112 112-112zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" fill="#FFF" />
            </svg>
          </button>

          <div className={`absolute z-50 right-1 mt-3 w-80 bg-white border border-gray-300 rounded-md shadow-lg ${isDropdownOpen ? '' : 'hidden'}`}>
            <div className='flex flex-col py-1 divide-y'>
              <a href="#" className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                <div className='flex flex-row gap-3 items-center'>
                  <div className='w-10 h-10 bg-primary rounded-full flex justify-center items-center relative'>
                    <svg className='absolute' style={{ top: 13, left: -4 }} width="111" height="18" viewBox="0 0 117 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.5666 23.1818C16.0621 23.1459 14.7367 22.6434 13.6621 21.5666C9.68597 17.5464 5.67402 13.5622 1.66207 9.54205C-1.31107 6.56284 -0.12898 1.53766 3.88297 0.281364C5.99641 -0.364731 7.93075 0.101893 9.50687 1.68124C13.483 5.62959 17.3875 9.57795 21.3278 13.5263C22.4024 14.6031 23.0114 15.8953 23.083 17.4388C23.1905 19.9872 21.3636 22.3922 18.8562 22.9665C18.4621 23.0741 17.9964 23.11 17.5666 23.1818Z" fill="#FFF" />
                      <path d="M28.5264 0.0300293C31.5712 0.0300293 34.0429 2.47083 34.0429 5.55773C34.0429 8.64462 31.607 11.1213 28.5264 11.1572C25.4816 11.1931 22.9742 8.64462 22.9384 5.59362C22.9742 2.50672 25.4458 0.0300293 28.5264 0.0300293Z" fill="#FFF" />
                    </svg>
                  </div>

                  <div className='w-48'>
                    <p className='font-bold'>Velo Official has posted in Velo Social Hub: BREAK...</p>
                    <p className='text-xs'>2 days ago</p>
                  </div>
                </div>

                <div className='w-3 h-3 bg-primary rounded-full' />
              </a>

              <a href="#" className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                <div className='flex flex-row gap-3 items-center'>
                  <div className='w-10 h-10 bg-primary rounded-full flex justify-center items-center relative'>
                    <svg className='absolute' style={{ top: 13, left: -4 }} width="111" height="18" viewBox="0 0 117 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.5666 23.1818C16.0621 23.1459 14.7367 22.6434 13.6621 21.5666C9.68597 17.5464 5.67402 13.5622 1.66207 9.54205C-1.31107 6.56284 -0.12898 1.53766 3.88297 0.281364C5.99641 -0.364731 7.93075 0.101893 9.50687 1.68124C13.483 5.62959 17.3875 9.57795 21.3278 13.5263C22.4024 14.6031 23.0114 15.8953 23.083 17.4388C23.1905 19.9872 21.3636 22.3922 18.8562 22.9665C18.4621 23.0741 17.9964 23.11 17.5666 23.1818Z" fill="#FFF" />
                      <path d="M28.5264 0.0300293C31.5712 0.0300293 34.0429 2.47083 34.0429 5.55773C34.0429 8.64462 31.607 11.1213 28.5264 11.1572C25.4816 11.1931 22.9742 8.64462 22.9384 5.59362C22.9742 2.50672 25.4458 0.0300293 28.5264 0.0300293Z" fill="#FFF" />
                    </svg>
                  </div>

                  <div className='w-48'>
                    <p>Velo Official has posted in Velo Social Hub: 🚨 Greet...</p>
                    <p className='text-xs'>2 days ago</p>
                  </div>
                </div>
              </a>

              <a href="#" className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                <div className='flex flex-row gap-3 items-center'>
                  <div
                    className='w-10 h-10 rounded-full bg-cover bg-center bg-no-repeat'
                    style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1694434943114-c8ea2049f781?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    }}
                  />

                  <div className='w-48'>
                    <p><span className='font-bold'>Albert S. Varner</span> sent you a friend request.</p>
                    <p className='text-xs'>4 days ago • Accepted</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <Link href={'/profile'} className='w-10 h-10 bg-primary rounded-full flex justify-center items-center hover:bg-rose-500'>
          <div
            className='w-10 h-10 rounded-full bg-cover bg-center bg-no-repeat cursor-pointer'
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          />
        </Link>
      </div>
    </div>
  )
}

export default Header
