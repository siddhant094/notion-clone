'use client';

import Image from 'next/image';
import { Tab } from '@headlessui/react';

import box1 from '../../../public/assets/box-i2.webp';
import box2 from '../../../public/assets/box-i1.webp';

import p1 from '../../../public/assets/p1.webp';
import p2 from '../../../public/assets/p2.webp';
import p3 from '../../../public/assets/p3.webp';
import p4 from '../../../public/assets/p4.webp';
import p5 from '../../../public/assets/p5.webp';
import p6 from '../../../public/assets/p6.webp';

import i11 from '../../../public/assets/i11.png';
import i12 from '../../../public/assets/i12.png';
import i13 from '../../../public/assets/i13.png';
import i14 from '../../../public/assets/i14.png';
import i15 from '../../../public/assets/i15.png';
import i16 from '../../../public/assets/i16.png';

import i21 from '../../../public/assets/i21.png';
import i22 from '../../../public/assets/i22.png';
import i23 from '../../../public/assets/i23.png';
import i24 from '../../../public/assets/i24.png';
import i25 from '../../../public/assets/i25.png';
import i26 from '../../../public/assets/i26.png';

import i31 from '../../../public/assets/i31.png';
import i32 from '../../../public/assets/i32.png';

import toolgirl from '../../../public/assets/tool-girl.png';
import toolline from '../../../public/assets/tool-line.png';
import toollogo from '../../../public/assets/tool-logo.webp';

import metalab from '../../../public/assets/metalab.png';
import matchgroup from '../../../public/assets/match-group.png';

import peek from '../../../public/assets/topPeek.png';

const Logos = () => {
    function classNames(arg0: string, arg1: string, arg2: string): string {
        throw new Error('Function not implemented.');
    }

    return (
        <div>
            <div className='h-[120px]'></div>
            <div className='flex flex-col md:mx-24'>
                <span className='text-4xl font-bold md:pt-14 my-3 text-center'>
                    Millions run on Notion every day
                </span>
                <span className='text-2xl  font-medium mb-2 text-center'>
                    Powering the world’s best teams, from next-generation
                    startups to established enterprises.
                </span>
                <a
                    href=''
                    className='text-center hover:underline text-[#0a85d1] font-semibold'
                >
                    Read customer {'stories '}
                    <span aria-hidden='true'>→</span>
                </a>
                <div className='mt-8 flex flex-row max-sm:flex-wrap items-center mb-12 justify-center'>
                    <Image src={i11} alt='' className='h-4' />
                    <Image src={i12} alt='' className='h-4' />
                    <Image src={i13} alt='' className='h-4' />
                    <Image src={i14} alt='' className='h-4' />
                    <Image src={i15} alt='' className='h-4' />
                    <Image src={i16} alt='' className='h-4' />
                </div>
                <div className='mt-8 flex flex-row mb-12 max-sm:flex-wrap'>
                    <Image src={i21} alt='' className='h-6 ' />
                    <Image src={i22} alt='' className='h-6 ' />
                    <Image src={i23} alt='' className='h-6 ' />
                    <Image src={i24} alt='' className='h-6 ' />
                    <Image src={i25} alt='' className='h-6 ' />
                    <Image src={i26} alt='' className='h-6 ' />
                </div>
                <div className='mt-8 flex flex-row mb-12 max-sm:flex-wrap'>
                    <Image src={i31} alt='' className='h-6 ' />
                    <Image src={i32} alt='' className='h-6 ' />
                </div>
            </div>

            <div className='md:h-[40px] max-sm:h-5'></div>

            <div className='flex flex-col'>
                <span className='text-5xl font-bold pt-14 my-3 text-center'>
                    Consolidate tools. <br />
                    Cut costs.
                </span>
                <div className='flex flex-col justify-center content-center'>
                    <div className='flex flex-row justify-center items-center mt-4 relative'>
                        <Image
                            src={toolgirl}
                            alt=''
                            className='absolute w-52 h-auto right-0 mr-28 mb-52 max-sm:hidden'
                        />
                        <Image
                            src={toollogo}
                            alt=''
                            className='w-[35em] object-contain'
                        />
                        {/* </div> */}
                        {/* <div className='flex flex-row justify-center items-center mt-4'> */}
                        <Image
                            src={toolline}
                            alt=''
                            className='w-[35em] object-contain absolute'
                        />
                    </div>
                </div>
                {/* <Image src={toolline} alt='' /> */}
            </div>
            <div className='min-h-[56px]'></div>
            <div className='flex flex-col md:mx-40'>
                <span className='font-[georgia] text-center text-3xl'>
                    "We got rid of nearly a dozen different tools because of{' '}
                    {/* <br /> */}
                    what Notion does for us."
                </span>
                <div className='flex flex-row justify-center items-center mt-4'>
                    <div className='flex justify-center items-center'>
                        <Image
                            src={metalab}
                            alt='metalab img'
                            className='w-auto h-auto mr-2'
                        />
                    </div>
                    <div className='flex flex-col text-sm'>
                        <span className='font-bold'>Justin Watt</span>
                        <span>Director of Ops & Marketing, MetaLab</span>
                    </div>
                </div>
            </div>
            <div className='min-h-[80px]'></div>
            <div className='relative'>
                <span className='text-5xl font-bold pb-6 flex justify-center items-center max-sm:text-center max-sm:mb-32'>
                    Powerful building blocks
                </span>
                <Image
                    src={peek}
                    alt='top peek image'
                    className='absolute h-36 w-auto left-0 bottom-0 max-sm:-mb-32'
                />
            </div>
            <div className='flex flex-wrap justify-between'>
                <div className='flex flex-col px-8 py-7 bg-[#F6F5F4] rounded-lg mb-4'>
                    <div className='flex flex-col'>
                        <span className='text-lg font-bold'>
                            Visualize, filter & sort any way you want
                        </span>
                        <span className='my-4'>
                            Show only tasks assigned to you, or items marked as
                            urgent. Break <br />
                            down any project in the way that’s most helpful to
                            you.
                        </span>
                        <Tab.Group>
                            <Tab.Panels>
                                <Tab.Panel>
                                    <Image
                                        src={p1}
                                        alt='c1'
                                        className='border rounded-lg'
                                    />
                                </Tab.Panel>
                                <Tab.Panel>
                                    <Image
                                        src={p2}
                                        alt='c2'
                                        className='border rounded-lg'
                                    />
                                </Tab.Panel>
                                <Tab.Panel>
                                    <Image
                                        src={p3}
                                        alt='c3'
                                        className='border rounded-lg'
                                    />
                                </Tab.Panel>
                                <Tab.Panel>
                                    <Image
                                        src={p4}
                                        alt='c4'
                                        className='border rounded-lg'
                                    />
                                </Tab.Panel>
                                <Tab.Panel>
                                    <Image
                                        src={p5}
                                        alt='c4'
                                        className='border rounded-lg'
                                    />
                                </Tab.Panel>
                                <Tab.Panel>
                                    <Image
                                        src={p6}
                                        alt='c4'
                                        className='border rounded-lg'
                                    />
                                </Tab.Panel>
                            </Tab.Panels>
                            <Tab.List className='flex flex-row flex-wrap mb-4 mt-4 justify-center'>
                                <Tab className='focus:outline-none flex flex-col ui-selected:bg-[#E3E2E1] hover:bg-[#ECEBEA] px-2 border rounded-lg p-1 justify-between mr-3'>
                                    Board
                                </Tab>
                                <Tab className='focus:outline-none ui-selected:bg-[#E3E2E1] hover:bg-[#ECEBEA] px-2 flex flex-col border rounded-lg p-1 justify-between mr-3'>
                                    Table
                                </Tab>
                                <Tab className='focus:outline-none ui-selected:bg-[#E3E2E1] hover:bg-[#ECEBEA] px-2 flex flex-col border rounded-lg p-1 justify-between mr-3'>
                                    Timeline
                                </Tab>
                                <Tab className='focus:outline-none ui-selected:bg-[#E3E2E1] hover:bg-[#ECEBEA] px-2 flex flex-col border rounded-lg p-1 justify-between mr-3'>
                                    Calendar
                                </Tab>
                                <Tab className='focus:outline-none ui-selected:bg-[#E3E2E1] hover:bg-[#ECEBEA] px-2 flex flex-col border rounded-lg p-1 justify-between mr-3'>
                                    Gallery
                                </Tab>
                                <Tab className='focus:outline-none ui-selected:bg-[#E3E2E1] hover:bg-[#ECEBEA] px-2 flex flex-col border rounded-lg p-1 justify-between mr-3'>
                                    List
                                </Tab>
                            </Tab.List>
                        </Tab.Group>
                    </div>
                </div>

                <div className='md:max-w-[47%] flex flex-col max-sm:flex-wrap bg-[#F6F5F4] rounded-lg mb-4'>
                    <div className='flex flex-col'>
                        <span className='text-lg font-bold px-8 pt-7'>
                            Customize the info you track
                        </span>
                        <span className='my-4 px-8'>
                            Create your own labels, tags, owners, and more, so
                            everyone has context and everything stays organized.
                        </span>
                        <Image src={box1} alt='' />
                    </div>
                </div>
                <div className='md:max-w-[47%] flex flex-col max-sm:flex-wrap bg-[#F6F5F4] rounded-lg mb-4 ml-4'>
                    <div className='flex flex-col'>
                        <span className='text-lg font-bold px-8 pt-7'>
                            Build any page, communicate any idea
                        </span>
                        <span className='my-4 px-8'>
                            Everything is drag and drop in Notion — images,
                            toggles, to-do’s, even embedded databases.
                        </span>
                        <Image src={box1} alt='' className='mr-0 mb-0' />
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:mx-40 mt-5'>
                <span className='font-[georgia] text-center text-3xl'>
                    "Notion adapts to your needs. It’s as minimal or as powerful
                    as you need it to be."
                </span>
                <div className='flex flex-row justify-center mt-4'>
                    <Image
                        src={matchgroup}
                        alt='matchgroup img'
                        className='w-auto h-auto mr-2'
                    />
                    <div className='flex flex-col text-sm'>
                        <span className='font-bold'>Rahim Makani</span>
                        <span>Director of Product, Matchgroup</span>
                    </div>
                </div>
            </div>
            <div className='md:h-[120px] max-sm:h-10'></div>
        </div>
    );
};

export default Logos;
