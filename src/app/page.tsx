import Hero from './components/Hero';
import Tab from './components/Tabs';
import Logos from './components/Logos';
import Team from './components/Team';
import NotionAIaddon from './components/NotionAIaddon';
import Avatars from './components/Avatars';
import Templates from './components/Templates';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function Home() {
    return (
        <div>
            <main className='max-sm:p-4 md:px-32 font-[Inter]'>
                <Navbar />
                <Hero />
                <Tab />
                <Logos />
                <Team />
                <Avatars />
                <Templates />
            </main>
            <Footer />
        </div>
    );
}
