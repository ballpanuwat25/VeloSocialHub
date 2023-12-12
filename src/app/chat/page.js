'use client'

import React from 'react'
import Header from '../components/Header'

export default function Message() {
    return (
        <div className='bg-secondary'>
            <Header />

            <div className='flex flex-row message__container bg-white'>
                <div className='h-full w-1/4 flex flex-col p-3 border-r overflow-y-scroll'>
                    <div className='flex flex-row items-center gap-3 mb-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512">
                            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" fill="#DA1A5F" />
                        </svg>

                        <input className="text-sm bg-gray-100 appearance-none border-2 border-gray-100 rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary" id="search_chat" type="text" placeholder='Search Chat' />
                    </div>

                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-row items-center justify-between pr-2 hover:bg-gray-200 rounded p-2 cursor-pointer'>
                            <div className='flex flex-row gap-3 items-center'>
                                <div className='w-14 h-14 rounded-full bg-primary relative'>
                                    <svg className='absolute' style={{ top: 17.5, left: 10.5 }} width="117" height="24" viewBox="0 0 117 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5666 23.1818C16.0621 23.1459 14.7367 22.6434 13.6621 21.5666C9.68597 17.5464 5.67402 13.5622 1.66207 9.54205C-1.31107 6.56284 -0.12898 1.53766 3.88297 0.281364C5.99641 -0.364731 7.93075 0.101893 9.50687 1.68124C13.483 5.62959 17.3875 9.57795 21.3278 13.5263C22.4024 14.6031 23.0114 15.8953 23.083 17.4388C23.1905 19.9872 21.3636 22.3922 18.8562 22.9665C18.4621 23.0741 17.9964 23.11 17.5666 23.1818Z" fill="#FFF" />
                                        <path d="M28.5264 0.0300293C31.5712 0.0300293 34.0429 2.47083 34.0429 5.55773C34.0429 8.64462 31.607 11.1213 28.5264 11.1572C25.4816 11.1931 22.9742 8.64462 22.9384 5.59362C22.9742 2.50672 25.4458 0.0300293 28.5264 0.0300293Z" fill="#FFF" />
                                    </svg>
                                </div>

                                <div className='flex flex-col'>
                                    <p>Velo Official ✔</p>
                                    <p className='text-gray-800 text-sm font-bold'>@everyone We have... · <span className='text-xs font-normal'> 1 min </span></p>
                                </div>
                            </div>

                            <div className='w-3 h-3 rounded-full bg-primary'></div>
                        </div>

                        <div className='flex flex-row items-center justify-between pr-2 bg-red-50 rounded p-2 cursor-pointer'>
                            <div className='flex flex-row gap-3 items-center'>
                                <div
                                    className='w-14 h-14 rounded-full bg-cover bg-center bg-no-repeat'
                                    style={{
                                        backgroundImage: "url('https://images.unsplash.com/photo-1694434943114-c8ea2049f781?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                                    }}
                                />

                                <div className='flex flex-col'>
                                    <p>Albert S. Varner</p>
                                    <p className='text-gray-800 text-sm'>Absolutely! Happy tra... · <span className='text-xs font-normal'> 30 min </span></p>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-row items-center justify-between pr-2 hover:bg-gray-200 rounded p-2 cursor-pointer'>
                            <div className='flex flex-row gap-3 items-center'>
                                <div
                                    className='w-14 h-14 rounded-full bg-cover bg-center bg-no-repeat'
                                    style={{
                                        backgroundImage: "url('https://images.unsplash.com/photo-1671293197723-31dbeaff1746?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                                    }}
                                />

                                <div className='flex flex-col'>
                                    <p>Crypto Professor 🎲</p>
                                    <p className='text-gray-800 text-sm font-bold'>Did you know about... · <span className='text-xs font-normal'> 2 day </span></p>
                                </div>
                            </div>

                            <div className='w-3 h-3 rounded-full bg-primary'></div>
                        </div>
                    </div>
                </div>

                <div className='h-full w-full flex flex-col p-3'>
                    <div className='sticky top-0 flex flex-row items-center justify-between pr-3 border-b pb-3'>
                        <div className='flex flex-row gap-3 items-center hover:bg-gray-100 p-1 rounded cursor-pointer'>
                            <div
                                className='w-12 h-12 rounded-full bg-cover bg-center bg-no-repeat'
                                style={{
                                    backgroundImage: "url('https://images.unsplash.com/photo-1694434943114-c8ea2049f781?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                                }}
                            />

                            <div>
                                <p className='font-bold'>Albert S. Varner</p>
                                <p className='text-sm text-gray-700'>Latest online 5 minutes ago</p>
                            </div>
                        </div>

                        <div className='flex flex-row items-center'>
                            <div className='flex justify-center items-center cursor-pointer hover:bg-gray-100 w-9 h-9 rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" fill="#DA1A5F" />
                                </svg>
                            </div>

                            <div className='flex justify-center items-center cursor-pointer hover:bg-gray-100 w-9 h-9 rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512">
                                    <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" fill="#DA1A5F" />
                                </svg>
                            </div>

                            <div className='flex justify-center items-center cursor-pointer hover:bg-gray-100 w-9 h-9 rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                                    <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" fill="#DA1A5F" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className='h-full overflow-y-scroll pr-3 pb-3'>
                        <div className='h-1/3 flex flex-col items-center justify-center gap-3'>
                            <div
                                className='w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat'
                                style={{
                                    backgroundImage: "url('https://images.unsplash.com/photo-1694434943114-c8ea2049f781?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                                }}
                            />

                            <p className='font-bold text-gray-700'>Albert S. Varner</p>
                        </div>

                        <p className='text-xs text-gray-700 text-center'>Dec 12, 2023, 7:21 PM</p> <br />

                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row gap-2'>
                                <div
                                    className='w-8 h-8 rounded-full bg-cover bg-center bg-no-repeat'
                                    style={{
                                        backgroundImage: "url('https://images.unsplash.com/photo-1694434943114-c8ea2049f781?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                                    }}
                                />

                                <p className='bg-gray-200 rounded-full p-2 text-xs'>Hey, man! You keeping up with the crypto buzz?</p>
                            </div>

                            <div className='flex flex-col gap-1 items-end'>
                                <p className='bg-primary text-white rounded-3xl rounded-br-md p-2 text-xs'>Absolutely! It's like a wild ride lately.</p>
                                <p className='bg-primary text-white rounded-3xl rounded-tr-md p-2 text-xs'>What's catching your eye?</p>
                            </div>

                            <div className='flex flex-row gap-2 items-end'>
                                <div
                                    className='w-8 h-8 rounded-full bg-cover bg-center bg-no-repeat'
                                    style={{
                                        backgroundImage: "url('https://images.unsplash.com/photo-1694434943114-c8ea2049f781?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                                    }}
                                />

                                <div className='flex flex-col items-start gap-1'>
                                    <p className='bg-gray-200 rounded-3xl rounded-bl-md p-2 text-xs'>Thinking about diving into XYZ token.</p>
                                    <p className='bg-gray-200 rounded-3xl rounded-tl-md p-2 text-xs'>Any thoughts?</p>
                                </div>
                            </div>

                            <div className='flex flex-col gap-1 items-end'>
                                <p className='bg-primary text-white rounded-3xl rounded-br-md p-2 text-xs'>Oh, nice choice!</p>
                                <p className='bg-primary text-white rounded-3xl rounded-br-md rounded-tr-sm p-2 text-xs'>I've been sticking with the classics, BTC and ETH</p>
                                <p className='bg-primary text-white rounded-3xl rounded-br-md rounded-tr-sm p-2 text-xs'>But XYZ has some potential.</p>
                                <p className='bg-primary text-white rounded-3xl rounded-tr-md p-2 text-xs'>What's the vibe?</p>
                            </div>

                            <div className='flex flex-row gap-2 items-end'>
                                <div
                                    className='w-8 h-8 rounded-full bg-cover bg-center bg-no-repeat'
                                    style={{
                                        backgroundImage: "url('https://images.unsplash.com/photo-1694434943114-c8ea2049f781?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                                    }}
                                />

                                <div className='flex flex-col items-start gap-1'>
                                    <p className='bg-gray-200 rounded-3xl rounded-bl-md p-2 text-xs'>Mixed bag, you know? Bullish vibes, but some skeptics too.</p>
                                    <p className='bg-gray-200 rounded-3xl rounded-tl-md p-2 text-xs'>Crypto life, right?</p>
                                </div>
                            </div>

                            <div className='flex flex-col gap-1 items-end'>
                                <p className='bg-primary text-white rounded-3xl rounded-br-md p-2 text-xs'>True that.</p>
                                <p className='bg-primary text-white rounded-3xl rounded-br-md rounded-tr-sm p-2 text-xs'>By the way, did you catch the latest on regulations?</p>
                                <p className='bg-primary text-white rounded-3xl rounded-tr-md p-2 text-xs'>Governments are really getting into the game.</p>
                            </div>

                            <div className='flex flex-row gap-2 items-end'>
                                <div
                                    className='w-8 h-8 rounded-full bg-cover bg-center bg-no-repeat'
                                    style={{
                                        backgroundImage: "url('https://images.unsplash.com/photo-1694434943114-c8ea2049f781?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                                    }}
                                />

                                <div className='flex flex-col items-start gap-1'>
                                    <p className='bg-gray-200 rounded-3xl rounded-bl-md p-2 text-xs'>Yeah, it's getting serious.</p>
                                    <p className='bg-gray-200 rounded-3xl rounded-tl-md p-2 text-xs'>Legitimacy vs. decentralization, a constant battle.</p>
                                </div>
                            </div>

                            <div className='flex flex-col gap-1 items-end'>
                                <p className='bg-primary text-white rounded-3xl rounded-br-md p-2 text-xs'>Tell me about it.</p>
                                <p className='bg-primary text-white rounded-3xl rounded-tr-md p-2 text-xs'>How you navigating all this?</p>
                            </div>

                            <div className='flex flex-row gap-2 items-end'>
                                <div
                                    className='w-8 h-8 rounded-full bg-cover bg-center bg-no-repeat'
                                    style={{
                                        backgroundImage: "url('https://images.unsplash.com/photo-1694434943114-c8ea2049f781?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                                    }}
                                />

                                <div className='flex flex-col items-start gap-1'>
                                    <p className='bg-gray-200 rounded-3xl rounded-bl-md p-2 text-xs'> Diversification, my friend.</p>
                                    <p className='bg-gray-200 rounded-3xl rounded-bl-md rounded-tl-md p-2 text-xs'> Can't go all-in on one thing.</p>
                                    <p className='bg-gray-200 rounded-3xl rounded-tl-md p-2 text-xs'> What's your play?</p>
                                </div>
                            </div>

                            <div className='flex flex-col gap-1 items-end'>
                                <p className='bg-primary text-white rounded-3xl rounded-br-md p-2 text-xs'>Same here.</p>
                                <p className='bg-primary text-white rounded-3xl rounded-br-md rounded-tr-md p-2 text-xs'>Spread the risk. </p>
                                <p className='bg-primary text-white rounded-3xl rounded-tr-md p-2 text-xs'>Any cool projects on your radar?</p>
                            </div>

                            <div className='flex flex-row gap-2 items-end'>
                                <div
                                    className='w-8 h-8 rounded-full bg-cover bg-center bg-no-repeat'
                                    style={{
                                        backgroundImage: "url('https://images.unsplash.com/photo-1694434943114-c8ea2049f781?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                                    }}
                                />

                                <div className='flex flex-col items-start gap-1'>
                                    <p className='bg-gray-200 rounded-3xl rounded-bl-md p-2 text-xs'> Checking out some DeFi action. </p>
                                    <p className='bg-gray-200 rounded-3xl rounded-tl-md p-2 text-xs'> You?</p>
                                </div>
                            </div>

                            <div className='flex flex-col gap-1 items-end'>
                                <p className='bg-primary text-white rounded-3xl rounded-br-md p-2 text-xs'> Research mode.</p>
                                <p className='bg-primary text-white rounded-3xl rounded-br-md rounded-tr-md p-2 text-xs'>Let's keep each other posted. </p>
                                <p className='bg-primary text-white rounded-3xl rounded-tr-md p-2 text-xs'>Crypto's always an adventure!</p>
                            </div>

                            <div className='flex flex-row gap-2 items-end'>
                                <div
                                    className='w-8 h-8 rounded-full bg-cover bg-center bg-no-repeat'
                                    style={{
                                        backgroundImage: "url('https://images.unsplash.com/photo-1694434943114-c8ea2049f781?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                                    }}
                                />

                                <div className='flex flex-col items-start'>
                                    <p className='bg-gray-200 rounded-3xl p-2 text-xs'>Absolutely! Happy trading, buddy!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-row items-center gap-2 pt-2'>
                        <div className='flex flex-row items-center'>
                            <div className='w-9 h-9 hover:bg-gray-100 rounded-full cursor-pointer flex justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="16" viewBox="0 0 384 512">
                                    <path fill="#DA1A5F" d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z" />
                                </svg>
                            </div>

                            <div className='w-9 h-9 hover:bg-gray-100 rounded-full cursor-pointer flex justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512">
                                    <path fill="#DA1A5F" d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
                                </svg>
                            </div>

                            <div className='w-9 h-9 hover:bg-gray-100 rounded-full cursor-pointer flex justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512">
                                    <path fill="#DA1A5F" d="M500.3 7.3C507.7 13.3 512 22.4 512 32V176c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48V71L352 90.2V208c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48V64c0-15.3 10.8-28.4 25.7-31.4l160-32c9.4-1.9 19.1 .6 26.6 6.6zM74.7 304l11.8-17.8c5.9-8.9 15.9-14.2 26.6-14.2h61.7c10.7 0 20.7 5.3 26.6 14.2L213.3 304H240c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V352c0-26.5 21.5-48 48-48H74.7zM192 408a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM478.7 278.3L440.3 368H496c6.7 0 12.6 4.1 15 10.4s.6 13.3-4.4 17.7l-128 112c-5.6 4.9-13.9 5.3-19.9 .9s-8.2-12.4-5.3-19.2L391.7 400H336c-6.7 0-12.6-4.1-15-10.4s-.6-13.3 4.4-17.7l128-112c5.6-4.9 13.9-5.3 19.9-.9s8.2 12.4 5.3 19.2zm-339-59.2c-6.5 6.5-17 6.5-23 0L19.9 119.2c-28-29-26.5-76.9 5-103.9c27-23.5 68.4-19 93.4 6.5l10 10.5 9.5-10.5c25-25.5 65.9-30 93.9-6.5c31 27 32.5 74.9 4.5 103.9l-96.4 99.9z" />
                                </svg>
                            </div>

                            <div className='w-9 h-9 hover:bg-gray-100 rounded-full cursor-pointer flex justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="18" viewBox="0 0 448 512">
                                    <path fill="#DA1A5F" d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z" />
                                </svg>
                            </div>
                        </div>

                        <input className='bg-gray-100 appearance-none border-2 border-gray-100 rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary' type='text' placeholder='Type a message...' />

                        <div>
                            <div className='w-9 h-9 hover:bg-gray-100 rounded-full cursor-pointer flex justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512">
                                    <path fill="#DA1A5F" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}