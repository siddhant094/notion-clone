import Image from 'next/image';

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

import toolgirl from '../../../public/assets/tool-girl.webp';
import toolline from '../../../public/assets/tool-line.webp';
import toollogo from '../../../public/assets/tool-logo.webp';

import metalab from '../../../public/assets/metalab.png';

const Logos = () => {
    return (
        <div>
            <div className='h-[120px]'></div>
            <div className='flex flex-col mx-24'>
                <span className='text-4xl font-bold pt-14 my-3 text-center'>
                    Millions run on Notion every day
                </span>
                <span className='text-2xl  font-medium mb-2 text-center'>
                    Powering the world’s best teams, from next-generation
                    startups to established enterprises.
                </span>
                <a
                    href=''
                    className='text-center hover:underline text-[#0a85d1]'
                >
                    Read customer {'stories '}
                    <span aria-hidden='true'>→</span>
                </a>
                <div className='mt-8 flex flex-row items-center mb-12 justify-center'>
                    <Image src={i11} alt='' className='h-4' />
                    <Image src={i12} alt='' className='h-4' />
                    <Image src={i13} alt='' className='h-4' />
                    <Image src={i14} alt='' className='h-4' />
                    <Image src={i15} alt='' className='h-4' />
                    <Image src={i16} alt='' className='h-4' />
                </div>
                <div className='mt-8 flex flex-row mb-12'>
                    <Image src={i21} alt='' className='h-6 ' />
                    <Image src={i22} alt='' className='h-6 ' />
                    <Image src={i23} alt='' className='h-6 ' />
                    <Image src={i24} alt='' className='h-6 ' />
                    <Image src={i25} alt='' className='h-6 ' />
                    <Image src={i26} alt='' className='h-6 ' />
                </div>
                <div className='mt-8 flex flex-row mb-12'>
                    <Image src={i31} alt='' className='h-6 ' />
                    <Image src={i32} alt='' className='h-6 ' />
                </div>
            </div>

            <div className='h-[40px]'></div>

            <div className='flex flex-col'>
                <span className='text-5xl font-bold pt-14 my-3 text-center'>
                    Consolidate tools. <br />
                    Cut costs.
                </span>
                <div className='flex flex-col justify-center content-center'>
                    <Image
                        src={toollogo}
                        alt=''
                        className='w-[25em] object-contain'
                    />
                    <Image
                        src={toolline}
                        alt=''
                        className='w-[25em] object-contain'
                    />
                </div>
                {/* <Image src={toolline} alt='' /> */}
            </div>
            <div className='min-h-[56px]'></div>
            <div className='flex flex-col mx-40'>
                <span className='font-[georgia] text-center text-3xl'>
                    "We got rid of nearly a dozen different tools because of{' '}
                    {/* <br /> */}
                    what Notion does for us."
                </span>
                <div className='flex flex-row justify-center mt-4'>
                    <Image
                        src={metalab}
                        alt='metalab img'
                        className='w-auto h-auto mr-2'
                    />
                    <div className='flex flex-col text-sm'>
                        <span className='font-bold'>Justin Watt</span>
                        <span>Director of Ops & Marketing, MetaLab</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Logos;