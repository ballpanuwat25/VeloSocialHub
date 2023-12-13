import React from 'react'
import Header from '../components/Header'
import Post from '../components/Post'

export default function Profile() {
  return (
    <div className='bg-white'>
      <Header />

      <div className='container mx-auto'>
        <div className='flex flex-col'>
          <div
            className='w-full h-96 rounded-xl rounded-t-none bg-cover bg-center bg-no-repeat pl-10'
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1666030433251-f98e43be8241?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          />

          <div className='flex flex-row'>
            <div>
              <div
                className='absolute w-52 h-52 rounded-full bg-cover bg-center bg-no-repeat border-4 border-white'
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                  top: 350,
                  marginLeft: 50,
                }}
              />
            </div>

            <div className='w-full ml-72 py-8 pr-8 flex flex-row justify-between items-center'>
              <div>
                <p className='text-3xl font-bold text-gray-800'>Ball Panuwat</p>
                <p className='text-sm'>2 friends</p>
              </div>

              <div className='flex flex-row gap-2'>
                <button className='text-sm bg-gray-100 p-2 rounded flex items-center gap-2 hover:bg-gray-200'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512">
                    <path fill='#1E1E1E' d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                  </svg>
                  Edit Profile
                </button>

                <button className='bg-gray-100 p-2 rounded flex items-center gap-2 hover:bg-gray-200'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512">
                    <path fill='#1E1E1E' d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <hr />

          <div className='flex flex-row justify-between'>
            <div className='flex flex-row items-center px-3 pt-1 items-center'>
              <button className='text-sm font-medium text-rose-500 border-b-2 border-rose-500 p-3 cursor-pointer'>Posts</button>
              <button className='text-sm font-medium text-gray-700 border-b-2 border-white p-3 rounded cursor-pointer hover:bg-gray-200'>About</button>
              <button className='text-sm font-medium text-gray-700 border-b-2 border-white p-3 rounded cursor-pointer hover:bg-gray-200'>Friends</button>
              <button className='text-sm font-medium text-gray-700 border-b-2 border-white p-3 rounded cursor-pointer hover:bg-gray-200'>Photos</button>
              <button className='text-sm font-medium text-gray-700 border-b-2 border-white p-3 rounded cursor-pointer hover:bg-gray-200'>Videos</button>
              <button className='text-sm font-medium text-gray-700 border-b-2 border-white p-3 rounded cursor-pointer hover:bg-gray-200'>Check-ins</button>
              <button className='text-sm font-medium text-gray-700 border-b-2 border-white p-3 rounded cursor-pointer hover:bg-gray-200 flex flex-row gap-2'>
                More
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512">
                  <path fill='#1E1E1E' d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z" />
                </svg>
              </button>
            </div>

            <button className='text-sm font-medium text-gray-700 border-white py-2 px-4 rounded cursor-pointer bg-gray-100 hover:bg-gray-200 my-2'>
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                <path fill='#1E1E1E' d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className='w-full bg-secondary pt-3'>
        <div className='container mx-auto flex flex-row gap-3'>
          <div className='w-1/2 bg-red-300 p-3'>hehe</div>
          <div className='w-full flex flex-col gap-3'>
            <Post />
          </div>
        </div>
      </div>
    </div>
  )
}
