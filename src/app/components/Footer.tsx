import React from 'react';
import Notion from '../../../public/assets/notion.svg';
import Image from 'next/image';

import clogo from '../../../public/assets/notion icon.webp';

const Footer = () => {
    return (
        <div className='border flex md:flex-row max-sm:flex-col md:py-20 md:px-32 justify-between max-sm:p-4'>
            <div className='flex flex-col'>
                <div className='flex flex-row'>
                    <Image src={clogo} alt='img' width={50} height={50} />
                    <span className='text-[#050505] font-bold text-base max-sm:hidden'>
                        Notion
                    </span>
                </div>
            </div>
            <div className='flex md:flex-col max-sm:flex-row max-sm:justify-between'>
                <div className='flex flex-col'>
                    <span className='font-semibold text-[#121212]'>
                        Product
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Wikis
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Projects
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Docs
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Notion AI
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        What's new
                    </span>
                </div>
                <div className='flex flex-col max-sm:text-right'>
                    <span className='font-semibold text-[#121212] md:mt-8'>
                        Solutions
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Enterprise
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Small Business
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Personal use
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Remote work
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Startups
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Education
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Nonprofits
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Engineering
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Products
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Design
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Managers
                    </span>
                </div>
            </div>
            <div className='flex md:flex-col max-sm:flex-row max-sm:justify-between'>
                <div className='flex flex-col max-sm:hidden'>
                    <span className='font-semibold text-[#121212]'>
                        Download
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        iOS & Android
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Mac & Windows
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Web Clipper
                    </span>
                </div>
                <div className='flex flex-col'>
                    <span className='font-semibold text-[#121212] mt-8'>
                        Build
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Integrations
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Templates
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        API docs
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Guides and tutorials
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Hire a consultant
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Become an affiliate
                    </span>
                </div>
                <div className='flex flex-col max-sm:text-right'>
                    <span className='font-semibold text-[#121212] mt-8'>
                        Learn
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Customer stories
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Help center
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Webinars
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Blog
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Community
                    </span>
                </div>
            </div>
            <div className='flex md:flex-col max-sm:flex-row max-sm:justify-between'>
                <div className='flex flex-col'>
                    <span className='font-semibold text-[#121212] max-sm:mt-8'>
                        Get Started
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Switch from Confluence
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Switch from Asana
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Switch from Evernote
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Compare vs Monday
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Compare vs Clickup
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Compare vs Jira
                    </span>
                </div>
                <div className='flex flex-col max-sm:text-right max-sm:mb-8'>
                    <span className='font-semibold text-[#121212] mt-8'>
                        Resources
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Pricing
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        About us
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Careers
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Media kit
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Email us
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Cookie settings
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Terms & privacy
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        California Privacy Notice
                    </span>
                    <span className='mt-1.5 hover:text-[#0a85d1] hover:underline text-[#00000099]'>
                        Status
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
