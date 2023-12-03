import { Button } from '@mui/material';
import Image from 'next/image';
// import notionai from '../../../public/assets/NotionAI-img.webp';
const NotionAIaddon = () => {
    return (
        <div className='bg-[#F2F0EF] flex flex-col mt-6 rounded-lg pt-6 px-40 mb-4'>
            <div className='flex flex-col'>
                <span className='text-center text-2xl font-bold mb-3'>
                    Notion AI add-on
                </span>
                <span>
                    Add to any paid plan for $8 per member / month, billed
                    annually. $10 per member / month for monthly billing and
                    Free plans.
                </span>
                <Button
                    variant='contained'
                    className='bg-black text-white normal-case text-base font-semibold mr-3 hover:bg-[#333] btn mt-4 mb-10 flex-grow-0 justify-center'
                >
                    Get Notion Free
                </Button>
            </div>
            {/* <Image src={notionai} alt='notion ai image' /> */}
        </div>
    );
};

export default NotionAIaddon;
