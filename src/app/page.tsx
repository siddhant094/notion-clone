import Hero from './components/Hero';
import Tab from './components/Tabs';
import Logos from './components/Logos';
import NotionAIaddon from './components/NotionAIaddon';

export default function Home() {
    return (
        <main className='px-32 font-[Inter]'>
            <Hero />
            <Tab />
            <Logos />
            {/* <NotionAIaddon /> */}
        </main>
    );
}
