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
            className='w-full h-96 rounded-xl rounded-t-none bg-cover bg-center bg-no-repeat pl-10 cursor-pointer'
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1666030433251-f98e43be8241?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          />

          <div className='flex flex-row'>
            <div
              className='absolute w-52 h-52 rounded-full bg-cover bg-center bg-no-repeat border-4 border-white cursor-pointer'
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                top: 350,
                marginLeft: 50,
              }}
            />

            <div className='w-full ml-72 py-8 pr-8 flex flex-row justify-between items-center'>
              <div>
                <p className='text-3xl font-bold text-gray-800'>Ball Panuwat</p>
                <p className='text-sm'>3 friends</p>
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
          <div className='w-1/2 flex flex-col gap-3'>
            <div className='flex flex-col gap-3 p-3 bg-white rounded '>
              <h2 className='text-xl font-bold text-gray-800'>About</h2>

              <button className='p-2 bg-gray-100 text-sm rounded hover:bg-gray-200'>
                Add bio
              </button>

              <button className='p-2 bg-gray-100 text-sm rounded hover:bg-gray-200'>
                Add details
              </button>

              <button className='p-2 bg-gray-100 text-sm rounded hover:bg-gray-200'>
                Add hobbies
              </button>
            </div>

            <div className='flex flex-row gap-3 p-3 bg-white rounded items-center justify-between'>
              <h2 className='text-xl font-bold text-gray-800'>Photo</h2>

              <button className='p-2 text-sm rounded hover:bg-gray-200 cursor-pointer'>
                <p className='text-sm text-primary'>See all photos</p>
              </button>
            </div>

            <div className='flex flex-col gap-3 p-3 bg-white rounded '>
              <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-col'>
                  <h2 className='text-xl font-bold text-gray-800'>Friends</h2>
                  <p className='text-xs text-gray-500'>3 friends</p>
                </div>

                <button className='p-2 text-sm rounded hover:bg-gray-200 cursor-pointer'>
                  <p className='text-sm text-primary'>See all friends</p>
                </button>
              </div>

              <div className='grid grid-cols-3 gap-3'>
                <p className='bg-red-300 w-full h-36 rounded'>1</p>
                <p className='bg-red-300 w-full h-36 rounded'>2</p>
                <p className='bg-red-300 w-full h-36 rounded'>3</p>
              </div>
            </div>

            <p className='text-xs text-gray-500 text-center mb-3'>
              <a className='cursor-pointer hover:underline'>Privacy</a> ·
              <a className='cursor-pointer hover:underline'> Terms</a> ·
              <a className='cursor-pointer hover:underline'> Advertising</a> ·
              <a className='cursor-pointer hover:underline'> Ad Choices</a> ·
              <a className='cursor-pointer hover:underline'> Cookies</a> ·
              <a className='cursor-pointer hover:underline'> More</a> ·
              VSH © 2023
            </p>
          </div>

          <div className='w-full flex flex-col gap-3'>
            <Post />

            <div className='w-full bg-white p-3 flex flex-col rounded'>
              <div className='flex flex-row justify-between items-center'>
                <h2 className='text-xl font-bold text-gray-800'>Posts</h2>

                <div className='flex flex-row gap-3'>
                  <button className='flex flex-row gap-2 items-center text-sm px-2 py-1 bg-gray-100 rounded hover:bg-gray-200'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                      <path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z" />
                    </svg>

                    Filters
                  </button>

                  <button className='flex flex-row gap-2 items-center text-sm px-2 py-1 bg-gray-100 rounded hover:bg-gray-200'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                      <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
                    </svg>

                    Manage posts
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
