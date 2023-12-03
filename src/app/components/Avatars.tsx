'use client';
import Image from 'next/image';
import avatars from '../../../public/assets/avatars.webp';

import socials from '../../../public/assets/community-socials.webp';
import welcome from '../../../public/assets/community-welcome.webp';

import user1 from '../../../public/assets/user1.png';
import user2 from '../../../public/assets/user2.png';
import user3 from '../../../public/assets/user3.png';

import img1 from '../../../public/assets/img1.png';
import img2 from '../../../public/assets/img2.webp';

import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

function Item(props: any) {
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <Image src={props.item.link} alt='' width={300} height={500} />

            <Button className='CheckButton'>Check it out!</Button>
        </Paper>
    );
}

const Avatars = (props: any) => {
    var items = [
        {
            name: 'Random Name #1',
            description: 'Probably the most random thing you have ever seen!',
            link: '../../../public/assets/img2.webp',
        },
        {
            name: 'Random Name #2',
            description: 'Hello World!',
            link: '../../../public/assets/img1.png',
        },
    ];

    return (
        <div>
            <Image src={avatars} alt='avatars' />
            <div className='flex flex-wrap max-sm:flex-col'>
                <div className='md:min-w-[30%] flex flex-col bg-[#F6F5F4] rounded-lg mr-4 max-sm:mb-4'>
                    <div className='flex flex-col'>
                        <span className='text-5xl font-bold px-8 pt-7 text-[#0a85d1]'>
                            1M+
                        </span>
                        <span className='my-4 px-8'>community members</span>
                    </div>
                </div>
                <div className='md:min-w-[30%] flex flex-col bg-[#F6F5F4] rounded-lg mr-4 max-sm:mb-4'>
                    <div className='flex flex-col'>
                        <span className='text-5xl font-bold px-8 pt-7 text-[#0a85d1]'>
                            150+
                        </span>
                        <span className='my-4 px-8'>community groups</span>
                    </div>
                </div>
                <div className='md:min-w-[30%] flex flex-col bg-[#F6F5F4] rounded-lg mr-4 max-sm:mb-4'>
                    <div className='flex flex-col'>
                        <span className='text-5xl font-bold px-8 pt-7 text-[#0a85d1]'>
                            50+
                        </span>
                        <span className='my-4 px-8'>countries represented</span>
                    </div>
                </div>
                <div className='md:max-w-[47%] flex flex-col bg-[#F6F5F4] rounded-lg mr-4 mt-4'>
                    <div className='flex flex-col'>
                        <span className='text-lg font-bold px-8 pt-7'>
                            An always-on support network
                        </span>
                        <span className='my-4 px-8'>
                            Swap setups and share tips in over 149 online
                            communities.
                        </span>
                        <Image
                            src={socials}
                            alt='socials'
                            className='max-w-full max-h-full w-72 h-auto'
                        />
                    </div>
                </div>
                <div className='md:max-w-[47%] flex flex-col bg-[#F6F5F4] rounded-lg mr-4 mt-4'>
                    <div className='flex flex-col'>
                        <span className='text-lg font-bold px-8 pt-7'>
                            Choose your language
                        </span>
                        <span className='my-4 px-8'>
                            Notion currently supports English, Korean, Japanese,
                            French, German, Spanish, and Portuguese. With more
                            to come!
                        </span>
                        <Image
                            src={welcome}
                            alt='welcome'
                            className='max-w-full max-h-full ml-8 h-auto mr-0 mb-0'
                        />
                    </div>
                </div>
                <div className='md:w-[60%] flex flex-col bg-[#F6F5F4] rounded-lg mr-4 mt-4'>
                    <div className='flex flex-col justify-center items-center'>
                        <Carousel className='w-full h-full'>
                            {items.map((item, i) => (
                                <Image
                                    key={i}
                                    src={img1}
                                    alt='welcome'
                                    className='w-full h-full mx-8 my-8'
                                />
                                // <Item key={i} item={item} />
                            ))}
                        </Carousel>
                    </div>
                </div>
                <div className='flex flex-col md:max-w-[35%]'>
                    {/* 3 boxes */}
                    <div className='flex flex-col bg-[#F6F5F4] rounded-lg mr-4 mt-4 p-4'>
                        <div className='flex flex-row mb-2'>
                            <Image
                                src={user1}
                                alt='user1'
                                className='max-w-full max-h-full h-12 w-12 mr-4'
                            />
                            <div className='flex flex-col'>
                                <span className='text-base font-bold'>
                                    Deborah Mecca
                                </span>
                                <span className=''>@DebMecca</span>
                            </div>
                        </div>
                        <span className='text-base text-[#121212]'>
                            I used to HATE documenting things. And then I
                            started {'using '}
                            <span className='text-[#1b95e0]'>@NotionHQ</span>
                            {' and'} I document a lot. A LOT A LOT. Now I just
                            realize that it wasn't that I hated documenting, I
                            just hated Google Docs.
                        </span>
                    </div>
                    <div className='flex flex-col bg-[#F6F5F4] rounded-lg mr-4 mt-4 p-4'>
                        <div className='flex flex-row mb-2'>
                            <Image
                                src={user2}
                                alt='user2'
                                className='max-w-full max-h-full h-12 w-12 mr-4'
                            />
                            <div className='flex flex-col'>
                                <span className='text-base font-bold'>
                                    Deborah Mecca
                                </span>
                                <span className=''>@DebMecca</span>
                            </div>
                        </div>
                        <span className='text-base text-[#121212]'>
                            I used to HATE documenting things. And then I
                            started {'using '}
                            <span className='text-[#1b95e0]'>@NotionHQ</span>
                            {' and'} I document a lot. A LOT A LOT. Now I just
                            realize that it wasn't that I hated documenting, I
                            just hated Google Docs.
                        </span>
                    </div>
                    <div className='flex flex-col bg-[#F6F5F4] rounded-lg mr-4 mt-4 p-4'>
                        <div className='flex flex-row mb-2'>
                            <Image
                                src={user3}
                                alt='user3'
                                className='max-w-full max-h-full h-12 w-12 mr-4'
                            />
                            <div className='flex flex-col'>
                                <span className='text-base font-bold'>
                                    Deborah Mecca
                                </span>
                                <span className=''>@DebMecca</span>
                            </div>
                        </div>
                        <span className='text-base text-[#121212]'>
                            I used to HATE documenting things. And then I
                            started {'using '}
                            <span className='text-[#1b95e0]'>@NotionHQ</span>
                            {' and'} I document a lot. A LOT A LOT. Now I just
                            realize that it wasn't that I hated documenting, I
                            just hated Google Docs.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Avatars;
