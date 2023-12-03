import { Button } from '@mui/material';
import herogirl from '../../../public/assets/hero-img.webp';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';

const Hero = () => {
    return (
        // <div className='flex flex-row justify-between'>
        <div className='flex flex-col'>
            <span className='text-6xl font-[Inter] font-bold pt-14 my-3 text-center'>
                Write, plan, share. <br /> With AI at your side.
            </span>
            <span className='text-2xl font-[Inter] font-medium mb-5 text-center'>
                Notion is the connected workspace where better, faster work
                happens.
            </span>
            <div className='flex flex-row justify-center'>
                <Button
                    variant='contained'
                    className='bg-black text-white normal-case text-base font-semibold hover:bg-[#333] btn mb-10 flex-grow-0 justify-center'
                >
                    Get Notion Free
                </Button>
                {/* <Button className='bg-white text-[#121212] normal-case text-base font-semibold hover:bg-[#333] btn'>
                    Sign up for Q&A Waitlist
                </Button> */}
            </div>
            <div className='flex justify-center'>
                <Image src={herogirl} alt='hero image' width={640} />
            </div>
        </div>
    );
};

export default Hero;
