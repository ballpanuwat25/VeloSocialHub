import React from 'react'
import Post from './Post'

function Timeline() {
    return (
        <div className='container mx-auto w-full flex flex-col justify-center items-center mt-3 pb-3'>
            <div className='w-1/2 bg-white rounded mb-3'>
                <Post />
            </div>

            <div className='w-1/2 bg-white p-3 rounded flex flex-col gap-3 mb-3'>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row gap-3'>
                        <button className='w-10 h-10 bg-primary rounded-full flex justify-center items-center hover:bg-rose-500 relative'>
                            <svg className='absolute' style={{ top: 13, left: -4 }} width="111" height="18" viewBox="0 0 117 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5666 23.1818C16.0621 23.1459 14.7367 22.6434 13.6621 21.5666C9.68597 17.5464 5.67402 13.5622 1.66207 9.54205C-1.31107 6.56284 -0.12898 1.53766 3.88297 0.281364C5.99641 -0.364731 7.93075 0.101893 9.50687 1.68124C13.483 5.62959 17.3875 9.57795 21.3278 13.5263C22.4024 14.6031 23.0114 15.8953 23.083 17.4388C23.1905 19.9872 21.3636 22.3922 18.8562 22.9665C18.4621 23.0741 17.9964 23.11 17.5666 23.1818Z" fill="#FFF" />
                                <path d="M28.5264 0.0300293C31.5712 0.0300293 34.0429 2.47083 34.0429 5.55773C34.0429 8.64462 31.607 11.1213 28.5264 11.1572C25.4816 11.1931 22.9742 8.64462 22.9384 5.59362C22.9742 2.50672 25.4458 0.0300293 28.5264 0.0300293Z" fill="#FFF" />
                            </svg>
                        </button>

                        <div className='flex flex-col'>
                            <a className='hover:underline hover:cursor-pointer'>Velo Official</a>
                            <div className='flex flex-row gap-1 items-center'>
                                <p className='text-xs'>10.59 AM ·</p>
                                <svg xmlns="http://www.w3.org/2000/svg" height="10" width="16" viewBox="0 0 640 512">
                                    <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" fill="#505050" />
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

                <p>
                    BREAKING NEWS! 🚨 <br />
                    — Velo Official (<span className='text-primary hover:underline cursor-pointer'>@veloprotocol</span>) <br />
                    Dec 6, 2023 <br />
                    Hi @everyone, check out our latest Tweet! <br />
                    <br />
                    <span className='text-primary hover:underline cursor-pointer'>@squidrouter</span> <span className='text-primary hover:underline cursor-pointer'>@axelarnetwork</span> Benefits for YOU! <br />
                    <br />
                    ✅  Easy navigation & transactions across blockchains <br />
                    ✅  Enhanced accessibility & flexibility <br />
                    ✅ Improved liquidity via efficient USDV swapping <br />
                    <br />
                    <span className='text-primary hover:underline cursor-pointer'>#Velo</span> <span className='text-primary hover:underline cursor-pointer'>#DeFi</span> <span className='text-primary hover:underline cursor-pointer'>#Web3</span>
                </p>

                <div
                    className='w-full h-96 bg-contain bg-center bg-no-repeat bg-gray-100 rounded'
                    style={{
                        backgroundImage: "url('https://assets-global.website-files.com/63cd21f2067fe76124929ff0/63cd21f2067fe7578f92a05b_Group%20116046664.png')",
                    }}
                />

                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row items-center gap-2'>
                        <button className='cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" fill="#E33450" />
                            </svg>
                        </button>
                        <span className='text-primary hover:underline cursor-pointer text-sm'> 1.7k</span>
                    </div>

                    <div className='flex flex-row gap-5'>
                        <div className='flex flex-row items-center gap-2'>
                            <button className='cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                                    <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" fill="#E33450" />
                                </svg>
                            </button>
                            <span className='text-primary hover:underline cursor-pointer text-sm'> 92</span>
                        </div>

                        <div className='flex flex-row items-center gap-2'>
                            <button className='cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                                    <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" fill="#E33450" />
                                </svg>
                            </button>
                            <span className='text-primary hover:underline cursor-pointer text-sm'> 425</span>
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

            <div className='w-1/2 bg-white p-3 rounded flex flex-col gap-3'>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row gap-3'>
                        <button className='w-10 h-10 bg-primary rounded-full flex justify-center items-center hover:bg-rose-500 relative'>
                            <svg className='absolute' style={{ top: 13, left: -4 }} width="111" height="18" viewBox="0 0 117 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5666 23.1818C16.0621 23.1459 14.7367 22.6434 13.6621 21.5666C9.68597 17.5464 5.67402 13.5622 1.66207 9.54205C-1.31107 6.56284 -0.12898 1.53766 3.88297 0.281364C5.99641 -0.364731 7.93075 0.101893 9.50687 1.68124C13.483 5.62959 17.3875 9.57795 21.3278 13.5263C22.4024 14.6031 23.0114 15.8953 23.083 17.4388C23.1905 19.9872 21.3636 22.3922 18.8562 22.9665C18.4621 23.0741 17.9964 23.11 17.5666 23.1818Z" fill="#FFF" />
                                <path d="M28.5264 0.0300293C31.5712 0.0300293 34.0429 2.47083 34.0429 5.55773C34.0429 8.64462 31.607 11.1213 28.5264 11.1572C25.4816 11.1931 22.9742 8.64462 22.9384 5.59362C22.9742 2.50672 25.4458 0.0300293 28.5264 0.0300293Z" fill="#FFF" />
                            </svg>
                        </button>

                        <div className='flex flex-col'>
                            <a className='hover:underline hover:cursor-pointer'>Velo Official</a>
                            <div className='flex flex-row gap-1 items-center'>
                                <p className='text-xs'>08.17 AM ·</p>
                                <svg xmlns="http://www.w3.org/2000/svg" height="10" width="16" viewBox="0 0 640 512">
                                    <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" fill="#505050" />
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

                <p>
                    🚨 Greetings Velo community! 🚨 <br />
                    <br />
                    There is a security issue that allowed a malicious actor to drain funds from 7,767 wallets on the Solana network. It is currently being investigated and has been noted to include popular wallets such as Slope and Phantom! <br />
                    <br />
                    You can track the status of the issue  <span className='text-primary underline cursor-pointer'> <a href='https://twitter.com/SolanaStatus/status/1554658171934937090'>here</a> </span> <br />
                    <br />
                    If your wallet does have unusual behaviour, please ensure you complete the survey form <span className='text-primary underline cursor-pointer'> <a href=' https://solanafoundation.typeform.com/to/Rxm8STIT?typeform-source=admin.typeform.com'> here </a> </span>   <br />
                </p>

                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row items-center gap-2'>
                        <button className='cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" fill="#E33450" />
                            </svg>
                        </button>
                        <span className='text-primary hover:underline cursor-pointer text-sm'> 2.2k</span>
                    </div>

                    <div className='flex flex-row gap-5'>
                        <div className='flex flex-row items-center gap-2'>
                            <button className='cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                                    <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" fill="#E33450" />
                                </svg>
                            </button>
                            <span className='text-primary hover:underline cursor-pointer text-sm'> 147</span>
                        </div>

                        <div className='flex flex-row items-center gap-2'>
                            <button className='cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                                    <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" fill="#E33450" />
                                </svg>
                            </button>
                            <span className='text-primary hover:underline cursor-pointer text-sm'> 919</span>
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
        </div>
    )
}

export default Timeline