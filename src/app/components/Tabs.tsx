'use client';
import { Tab } from '@headlessui/react';
import Image from 'next/image';
import c1 from '../../../public/assets/c1.webp';
import c2 from '../../../public/assets/c2.webp';
import c3 from '../../../public/assets/c3.webp';
import c4 from '../../../public/assets/c4.webp';

const Tabs = () => {
    return (
        <Tab.Group>
            <Tab.List className='flex flex-row mb-4 justify-between max-sm:overflow-x-scroll'>
                <Tab className='w-1/3 max-sm:w-1/2 focus:outline-none flex flex-col border rounded-lg p-4 justify-between mr-3 ui-not-selected:bg-[#F6F5F4] ui-selected:bg-white ui-selected:border'>
                    <span className='font-semibold'>Get answers</span>
                    <span className='text-left'>
                        Just ask Q&A, and find the info you nedd in seconds.
                    </span>
                    <a
                        href=''
                        className='ui-not-selected:hidden text-[#ea4e43] font-semibold'
                    >
                        Learn {'more '}
                        <span aria-hidden='true'>→</span>
                    </a>
                </Tab>
                <Tab className='w-1/3 max-sm:w-1/2 focus:outline-none flex flex-col border rounded-lg p-4 justify-between mr-3 ui-not-selected:bg-[#F6F5F4] ui-selected:bg-white ui-selected:border'>
                    <span className='font-semibold'>Write better</span>
                    <span className='text-left'>
                        Get help writing and brainstorming in Notion, not in a
                        seperate browser tab.
                    </span>
                    <a
                        href=''
                        className='ui-not-selected:hidden text-[#9D34DA] font-semibold'
                    >
                        Learn {'more '}
                        <span aria-hidden='true'>→</span>
                    </a>
                </Tab>
                <Tab className='w-1/3 max-sm:w-1/2 focus:outline-none flex flex-col border rounded-lg p-4 justify-between mr-3 ui-not-selected:bg-[#F6F5F4] ui-selected:bg-white ui-selected:border'>
                    <span className='font-semibold mb-2'>Autofill tables</span>
                    <span className='text-left'>
                        Turn overwhelming data into clear, actionable
                        information in seconds.
                    </span>
                    <a
                        href=''
                        className='ui-not-selected:hidden text-[#0a85d1] font-semibold'
                    >
                        Learn {'more '}
                        <span aria-hidden='true'>→</span>
                    </a>
                </Tab>
                <Tab className='w-1/3 max-sm:w-1/2 focus:outline-none flex flex-col inline border rounded-lg p-4 justify-between ui-not-selected:bg-[#F6F5F4] ui-selected:bg-white ui-selected:border'>
                    <span className='font-semibold mb-2'>Autofill tables</span>
                    <span className='text-left'>
                        Turn overwhelming data into clear, actionable
                        information in seconds.
                    </span>
                    <a
                        href=''
                        className='ui-not-selected:hidden text-[#f5a300] font-semibold'
                    >
                        Learn {'more '}
                        <span aria-hidden='true'>→</span>
                    </a>
                </Tab>
            </Tab.List>
            <Tab.Panels>
                <Tab.Panel>
                    <Image src={c1} alt='c1' className='border rounded-lg' />
                </Tab.Panel>
                <Tab.Panel>
                    <Image src={c2} alt='c2' className='border rounded-lg' />
                </Tab.Panel>
                <Tab.Panel>
                    <Image src={c3} alt='c3' className='border rounded-lg' />
                </Tab.Panel>
                <Tab.Panel>
                    <Image src={c4} alt='c4' className='border rounded-lg' />
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    );
};

export default Tabs;
