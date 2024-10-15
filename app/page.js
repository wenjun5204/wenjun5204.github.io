'use client';
import { useState } from 'react';
import Link from 'next/link';
import { CheckIcon, GitHubLogoIcon, LinkedInLogoIcon, EnvelopeOpenIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import HeadGlobe from './components/headGlobe';
import Step1 from './components/step1';

export default function Home() {
    const handleScrollTop = () => {
        window.scrollTo(0, 0);
    };

    const [tips, setTips] = useState({
        destination: 'Italy',
        days: 6,
        budget: 5000,
        type: '购物',
    });
    return (
        <div className=" relative w-full bg-red-50 flex min-h-screen flex-col items-center justify-between p-10 md:p-24">
            <nav className="w-full  bg-slate-100 h-[70px] fixed z-[100] top-0 shadow-md flex items-center justify-around ">
                <HeadGlobe step={1} />
            </nav>

            <Step1 tips={tips} setTips={setTips}/>

            <button onClick={handleScrollTop} className="bg-red-500 text-white font-bold py-2 px-4 rounded">
                Scroll Top
            </button>
        </div>
    );
}

