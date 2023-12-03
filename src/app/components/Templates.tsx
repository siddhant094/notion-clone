import Image from 'next/image';
import { Button } from '@mui/material';

import socials from '../../../public/assets/community-socials.webp';
import welcome from '../../../public/assets/community-welcome.webp';

import user1 from '../../../public/assets/user1.png';
import user2 from '../../../public/assets/user2.png';
import user3 from '../../../public/assets/user3.png';

import pointer from '../../../public/assets/topPeekJ.png';

import parade from '../../../public/assets/notion-parade.webp';

import companywiki from '../../../public/assets/company-wiki.webp';

const Templates = () => {
    return (
        <div>
            <div className='md:h-[120px] max-sm:h-20'></div>
            <div className='flex flex-col justify-center items-center md:px-40 pb-7 relative'>
                <Image
                    src={pointer}
                    alt=''
                    className='absolute right-0 h-auto w-52 bottom-0 -mb-16 max-sm:hidden'
                />
                <span className='text-5xl font-bold pb-6 text-center max-sm:text-3xl'>
                    Endless ways to use it
                </span>
                {/* <div className='h-[20px]'></div> */}
                <a
                    href=''
                    className='text-center hover:underline text-[#0a85d1]'
                >
                    Browse all {'templates '}
                    <span aria-hidden='true'>→</span>
                </a>
            </div>

            <div className='flex flex-wrap'>
                <div className='md:max-w-[47%] flex flex-col bg-[#F6F5F4] rounded-lg mr-4 mt-4'>
                    <div className='flex flex-col mt-4 ml-4'>
                        <span className='text-lg font-bold mb-12'>
                            Company wiki
                        </span>
                        <a href='' className='hover:underline text-[#0a85d1]'>
                            Get {'template '}
                            <span aria-hidden='true'>→</span>
                        </a>
                        <Image
                            src={companywiki}
                            alt='company wiki'
                            className='h-[360px] w-auto'
                        />
                    </div>
                </div>
                <div className='flex flex-col max-sm:w-full md:w-[25%]'>
                    {/* 3 vertical boxes */}
                    <div className='max-w-full flex flex-col bg-[#F6F5F4] rounded-lg mr-4 mt-4 p-4'>
                        <span className='text-lg font-bold mb-12'>
                            Product Roadmap
                        </span>
                        <a href='' className='hover:underline text-[#0a85d1]'>
                            Get {'template '}
                            <span aria-hidden='true'>→</span>
                        </a>
                    </div>
                    <div className='max-w-full flex flex-col bg-[#F6F5F4] rounded-lg mr-4 mt-4 p-4'>
                        <span className='text-lg font-bold mb-12'>
                            Meeting Notes
                        </span>
                        <a href='' className='hover:underline text-[#0a85d1]'>
                            Get {'template '}
                            <span aria-hidden='true'>→</span>
                        </a>
                    </div>
                    <div className='max-w-full flex flex-col bg-[#F6F5F4] rounded-lg mr-4 mt-4 p-4'>
                        <span className='text-lg font-bold mb-12'>
                            Editorial calendar
                        </span>
                        <a href='' className='hover:underline text-[#0a85d1]'>
                            Get {'template '}
                            <span aria-hidden='true'>→</span>
                        </a>
                    </div>
                </div>
                <div className='flex flex-col max-sm:flex-wrap max-sm:w-full md:w-[25%]'>
                    {/* 3 vertical boxes */}
                    <div className='max-w-full flex flex-col bg-[#F6F5F4] rounded-lg mr-4 mt-4 p-4'>
                        <span className='text-lg font-bold mb-12'>
                            Product Roadmap
                        </span>
                        <a href='' className='hover:underline text-[#0a85d1]'>
                            Get {'template '}
                            <span aria-hidden='true'>→</span>
                        </a>
                    </div>
                    <div className='max-w-full flex flex-col bg-[#F6F5F4] rounded-lg mr-4 mt-4 p-4'>
                        <span className='text-lg font-bold mb-12'>
                            Meeting Notes
                        </span>
                        <a href='' className='hover:underline text-[#0a85d1]'>
                            Get {'template '}
                            <span aria-hidden='true'>→</span>
                        </a>
                    </div>
                    <div className='max-w-full flex flex-col bg-[#F6F5F4] rounded-lg mr-4 mt-4 p-4'>
                        <span className='text-lg font-bold mb-12'>
                            Editorial calendar
                        </span>
                        <a href='' className='hover:underline text-[#0a85d1]'>
                            Get {'template '}
                            <span aria-hidden='true'>→</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className='md:h-[80px] max-sm:hidden'></div>
            <div className='flex flex-col md:mx-24'>
                <span className='text-6xl text-[#121212] font-bold pt-14 my-3 text-center max-sm:text-5xl'>
                    Get started for free
                </span>
                <span className='text-base mb-2 text-center'>
                    Play around with it first. Pay and add your team later.
                </span>
                <div className='flex flex-row justify-center pb-8'>
                    <Button
                        variant='contained'
                        className='bg-black text-white normal-case text-base font-semibold hover:bg-[#333] btn flex-grow-0 justify-center'
                    >
                        Try Notion Free
                    </Button>
                    {/* <Button className='bg-white text-[#121212] normal-case text-base font-semibold hover:bg-[#333] btn'>
                    Sign up for Q&A Waitlist
                </Button> */}
                    <a
                        href=''
                        className='text-center hover:underline text-[#0a85d1] my-auto md:ml-5'
                    >
                        Read customer {'stories '}
                        <span aria-hidden='true'>→</span>
                    </a>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <Image
                    src={parade}
                    alt='notion parade'
                    className='w-[670px] h-auto'
                />
            </div>
        </div>
    );
};

export default Templates;
