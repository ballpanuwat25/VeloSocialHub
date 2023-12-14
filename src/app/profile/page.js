import React from 'react'
import Header from '../components/Header'
import Post from '../components/Post'
import Link from 'next/link'

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
                  <p className='text-xs text-gray-500'>2 friends</p>
                </div>

                <button className='p-2 text-sm rounded hover:bg-gray-200 cursor-pointer'>
                  <p className='text-sm text-primary'>See all friends</p>
                </button>
              </div>

              <div className='grid grid-cols-3 gap-3'>
                <div className='w-full h-36 rounded bg-cover bg-center bg-no-repeat'
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1694434943114-c8ea2049f781?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                  }}
                />

                <div className='w-full h-36 rounded bg-cover bg-center bg-no-repeat'
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1671293197723-31dbeaff1746?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                  }}
                />

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

            <div className='w-full bg-white p-3 rounded flex flex-col gap-3'>
              <div className='flex flex-row justify-between'>
                <div className='flex flex-row gap-3'>
                  <Link href={'/profile'} className='w-10 h-10 bg-primary rounded-full flex justify-center items-center hover:bg-rose-500'>
                    <div
                      className='w-10 h-10 rounded-full bg-cover bg-center bg-no-repeat cursor-pointer'
                      style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                      }}
                    />
                  </Link>

                  <div className='flex flex-col'>
                    <a className='font-medium text-sm hover:underline hover:cursor-pointer'>Ball Panuwat <span className='font-light text-sm'>updated his profile picture.</span></a>
                    <div className='flex flex-row gap-1 items-center'>
                      <p className='text-xs'>November 2 ·</p>
                      <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 512 512">
                        <path fill='#374151' d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className='flex flex-row'>
                  <button className='w-10 h-10 rounded-full flex justify-center items-center hover:bg-gray-50'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                      <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" fill="#E33450" />
                    </svg>
                  </button>

                  <button className='w-10 h-10 rounded-full flex justify-center items-center hover:bg-gray-50'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512">
                      <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" fill="#E33450" />
                    </svg>
                  </button>
                </div>
              </div>

              <hr />

              <div
                className='aspect-square bg-cover bg-center bg-no-repeat bg-gray-100 rounded'
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                }}
              />

              <div className='flex flex-row justify-between'>
                <div className='flex flex-row items-center gap-2'>
                  <button className='cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                      <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" fill="#E33450" />
                    </svg>
                  </button>
                  <span className='text-primary hover:underline cursor-pointer text-sm'> 2</span>
                </div>

                <div className='flex flex-row gap-5'>
                  <div className='flex flex-row items-center gap-2'>
                    <button className='cursor-pointer'>
                      <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                        <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" fill="#E33450" />
                      </svg>
                    </button>
                    <span className='text-primary hover:underline cursor-pointer text-sm'> 0</span>
                  </div>

                  <div className='flex flex-row items-center gap-2'>
                    <button className='cursor-pointer'>
                      <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                        <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" fill="#E33450" />
                      </svg>
                    </button>
                    <span className='text-primary hover:underline cursor-pointer text-sm'> 0</span>
                  </div>
                </div>
              </div>

              <hr />

              <div className='flex flex-row justify-evenly gap-5'>
                <div className='flex flex-row gap-2 cursor-pointer'>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                      <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" fill="#E33450" />
                    </svg>
                  </button>
                  <p className='text-primary'>Like</p>
                </div>

                <div className='flex flex-row gap-2 cursor-pointer'>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                      <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" fill="#E33450" />
                    </svg>
                  </button>
                  <p className='text-primary'>Comment</p>
                </div>

                <div className='flex flex-row gap-2 cursor-pointer'>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                      <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" fill="#E33450" />
                    </svg>
                  </button>
                  <p className='text-primary'>Share</p>
                </div>
              </div>
            </div>

            <div className='w-full bg-white p-3 rounded flex flex-col gap-3 mb-3'>
              <div className='flex flex-row justify-between'>
                <div className='flex flex-row gap-3'>
                  <Link href={'/profile'} className='w-10 h-10 bg-primary rounded-full flex justify-center items-center hover:bg-rose-500'>
                    <div
                      className='w-10 h-10 rounded-full bg-cover bg-center bg-no-repeat cursor-pointer'
                      style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                      }}
                    />
                  </Link>

                  <div className='flex flex-col'>
                    <a className='font-medium text-sm hover:underline hover:cursor-pointer'>Ball Panuwat <span className='font-light text-sm'>updated his cover picture.</span></a>
                    <div className='flex flex-row gap-1 items-center'>
                      <p className='text-xs'>November 2 ·</p>
                      <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 512 512">
                        <path fill='#374151' d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className='flex flex-row'>
                  <button className='w-10 h-10 rounded-full flex justify-center items-center hover:bg-gray-50'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                      <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" fill="#E33450" />
                    </svg>
                  </button>

                  <button className='w-10 h-10 rounded-full flex justify-center items-center hover:bg-gray-50'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512">
                      <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" fill="#E33450" />
                    </svg>
                  </button>
                </div>
              </div>

              <hr />

              <div
                className='aspect-video bg-cover bg-center bg-no-repeat bg-gray-100 rounded'
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1666030433251-f98e43be8241?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                }}
              />

              <hr />

              <div className='flex flex-row justify-evenly gap-5'>
                <div className='flex flex-row gap-2 cursor-pointer'>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                      <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" fill="#E33450" />
                    </svg>
                  </button>
                  <p className='text-primary'>Like</p>
                </div>

                <div className='flex flex-row gap-2 cursor-pointer'>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                      <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" fill="#E33450" />
                    </svg>
                  </button>
                  <p className='text-primary'>Comment</p>
                </div>

                <div className='flex flex-row gap-2 cursor-pointer'>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                      <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" fill="#E33450" />
                    </svg>
                  </button>
                  <p className='text-primary'>Share</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
