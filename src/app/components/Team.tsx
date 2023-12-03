'use client';

import Image from 'next/image';
import { Tab } from '@headlessui/react';

import t1 from '../../../public/assets/t1.png';
import t2 from '../../../public/assets/t2.png';
import t3 from '../../../public/assets/t3.png';
import t4 from '../../../public/assets/t4.png';
import t5 from '../../../public/assets/t5.png';
import t6 from '../../../public/assets/t6.png';

import ti1 from '../../../public/assets/ti1.png';
import ti2 from '../../../public/assets/ti2.png';
import ti3 from '../../../public/assets/ti3.png';
import ti4 from '../../../public/assets/ti4.png';
import ti5 from '../../../public/assets/ti5.png';
import ti6 from '../../../public/assets/ti6.png';

import avatars from '../../../public/assets/avatars.webp';

const Team = () => {
    return (
        <div className=''>
            <span className='text-5xl font-bold pb-6 flex justify-center items-center max-sm:text-center'>
                Every team, side-by-side
            </span>
            <Tab.Group>
                <Tab.List className='flex flex-row mb-4 justify-between overflow-x-scroll'>
                    <Tab className='focus:outline-none ui-not-selected:bg-[#F6F5F4] ui-selected:bg-white ui-selected:border flex flex-col p-4 justify-center items-center mr-3 flex-grow rounded-xl hover:bg-[#F1EFEE]'>
                        <Image src={ti1} alt='ti1' className='w-16 h-16' />
                        <span className='text-[##050505] text-base font-medium focus:outline-none'>
                            Engineering
                        </span>
                    </Tab>
                    <Tab className='focus:outline-none ui-not-selected:bg-[#F6F5F4] ui-selected:bg-white ui-selected:border flex flex-col p-4 justify-center items-center mr-3 flex-grow rounded-xl hover:bg-[#F1EFEE]'>
                        <Image src={ti2} alt='ti2' className='w-16 h-16' />
                        <span className='text-[##050505] text-base font-medium'>
                            Design
                        </span>
                    </Tab>
                    <Tab className='focus:outline-none ui-not-selected:bg-[#F6F5F4] ui-selected:bg-white ui-selected:border flex flex-col p-4 justify-center items-center mr-3 flex-grow rounded-xl hover:bg-[#F1EFEE]'>
                        <Image src={ti3} alt='ti3' className='w-16 h-16' />
                        <span className='text-[##050505] text-base font-medium'>
                            Product
                        </span>
                    </Tab>
                    <Tab className='focus:outline-none ui-not-selected:bg-[#F6F5F4] ui-selected:bg-white ui-selected:border flex flex-col p-4 justify-center items-center mr-3 flex-grow rounded-xl hover:bg-[#F1EFEE]'>
                        <Image src={ti4} alt='ti4' className='w-16 h-16' />
                        <span className='text-[##050505] text-base font-medium'>
                            Marketing
                        </span>
                    </Tab>
                    <Tab className='focus:outline-none ui-not-selected:bg-[#F6F5F4] ui-selected:bg-white ui-selected:border flex flex-col p-4 justify-center items-center mr-3 flex-grow rounded-xl hover:bg-[#F1EFEE]'>
                        <Image src={ti5} alt='ti5' className='w-16 h-16' />
                        <span className='text-[##050505] text-base font-medium'>
                            Operations
                        </span>
                    </Tab>
                    <Tab className='max-sm:w-1/4 focus:outline-none ui-not-selected:bg-[#F6F5F4] ui-selected:bg-white ui-selected:border flex flex-col p-4 justify-center items-center flex-grow rounded-xl hover:bg-[#F1EFEE]'>
                        <Image src={ti6} alt='ti6' className='w-16 h-16' />
                        <span className='text-[##050505] text-base font-medium'>
                            HR
                        </span>
                    </Tab>
                </Tab.List>
                <Tab.Panels className='shadow-lg'>
                    <Tab.Panel className='shadow-lg'>
                        <Image
                            src={t1}
                            alt='t1'
                            className='border rounded-lg'
                        />
                    </Tab.Panel>
                    <Tab.Panel>
                        <Image
                            src={t2}
                            alt='t2'
                            className='border rounded-lg'
                        />
                    </Tab.Panel>
                    <Tab.Panel>
                        <Image
                            src={t3}
                            alt='t3'
                            className='border rounded-lg'
                        />
                    </Tab.Panel>
                    <Tab.Panel>
                        <Image
                            src={t4}
                            alt='t4'
                            className='border rounded-lg'
                        />
                    </Tab.Panel>
                    <Tab.Panel>
                        <Image
                            src={t5}
                            alt='t5'
                            className='border rounded-lg'
                        />
                    </Tab.Panel>
                    <Tab.Panel>
                        <Image
                            src={t6}
                            alt='t6'
                            className='border rounded-lg'
                        />
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
            <div className='md:h-[120px] max-sm:h-20'></div>
            <div className='flex flex-col justify-center items-center md:mx-40 pb-7'>
                <span className='text-5xl font-bold pb-6 text-center max-sm:text-3xl'>
                    Join a global movement. Unleash your creativity.
                </span>
                <span className='text-center'>
                    Our vibrant community produces content, teaches courses, and
                    leads events all over the world.
                </span>
                <div className='h-[20px]'></div>
                <a
                    href=''
                    className='text-center hover:underline text-[#0a85d1]'
                >
                    Learn {'more '}
                    <span aria-hidden='true'>→</span>
                </a>
            </div>
        </div>
    );
};

export default Team;
