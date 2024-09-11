'use client';
import Image from 'next/image';
import Link from 'next/link';
import { CheckIcon, GitHubLogoIcon, LinkedInLogoIcon, EnvelopeOpenIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// import  from '@radix-ui/react-icons';

import Dashboard from './dashboard/page';
import GaodeMap from './components/map';

export default function Home() {
    const handleScrollTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div className=' relative w-full bg-red-50 flex min-h-screen flex-col items-center justify-between p-10 md:p-24'>
            <nav className='w-full  bg-slate-100 h-[70px] fixed z-[100] top-0 shadow-md flex items-center justify-around '>
                <div className=' flex justify-around w-1/4'>
                    <a className='text-green-600 hover:text-primary' href='https://baidu.com'>
                        Wentao Zhu
                    </a>
                    <Link className='text-green-600 hover:text-primary' href='/dashboard'>Home</Link>
                    <Link className='text-green-600 hover:text-primary' href='/cv'>CV</Link>
                </div>
                <div className=' flex justify-around w-1/6'>
                    <a className='w-10 h-10 flex justify-center items-center rounded-full bg-gray-300 hover:bg-amber-300' href='/about'>
                        <CheckIcon className='w-2/3 h-2/3'/>
                    </a>
                    <a className='w-10 h-10 flex justify-center items-center rounded-full bg-gray-300 hover:bg-amber-300' href='/about'>
                        <GitHubLogoIcon className='w-2/3 h-2/3'/>
                    </a>
                    <a className='w-10 h-10 flex justify-center items-center rounded-full bg-gray-300 hover:bg-amber-300' href='/about'>
                        <TwitterLogoIcon className='w-2/3 h-2/3'/>
                    </a>
                    <a className='w-10 h-10 flex justify-center items-center rounded-full bg-gray-300 hover:bg-amber-300' href='/about'>
                        <LinkedInLogoIcon className='w-2/3 h-2/3'/>
                    </a>
                    <a className='w-10 h-10 flex justify-center items-center rounded-full bg-gray-300 hover:bg-amber-300' href='/about'>
                        <EnvelopeOpenIcon className='w-2/3 h-2/3'/>
                    </a>
                </div>
            </nav>

            <Dashboard/>
            <GaodeMap />
            <button onClick={handleScrollTop} className='bg-red-500 text-white font-bold py-2 px-4 rounded'>
                Scroll Top
            </button>
        </div>
    );
}
