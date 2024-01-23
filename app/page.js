'use client';
import Image from 'next/image';
import Link from 'next/link';
import { CheckIcon, GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
// import  from '@radix-ui/react-icons';

export default function Home() {
    // 帮忙实现一个点击滚动到顶部的功能函数，当超出当前页面的高度时在页面右下角展示一个按钮，点击后回到顶部
    // console.log(window.scrollY)
    const handleScrollTop = () => {
        console.log(11);
        // if (window.scrollY > 100) {
        //   document.getElementById('scroll-top').style.display = 'block'
        // } else {
        //   document.getElementById('scroll-top').style.display = 'none'
        // }
        // window.scrollTo({
        //   top: 0,
        //   behavior: 'smooth',
        // })
    };
    return (
        <div className=' relative w-full bg-slate-50 flex min-h-screen flex-col items-center justify-between p-24'>
            <nav className='w-full h-[70px] fixed z-[100] top-0 shadow-md flex items-center justify-around '>
                <div className=' flex justify-around w-1/4'>
                    <a className='' href='https://liuwenjun.fun'>
                        Wentao Zhu
                    </a>
                    <Link href='/dashboard'>Home</Link>
                    <Link href='/cv'>CV</Link>
                </div>
                <div className=' flex justify-around w-1/6'>
                    <a href='/about'>
                        <CheckIcon />
                    </a>
                    <a href='/contact'>
                        <GitHubLogoIcon />
                    </a>
                    <a href='/contact'>
                        <GitHubLogoIcon />
                    </a>
                    <a href='/contact'>
                        <TwitterLogoIcon />
                    </a>
                    <a href='/contact'>
                        <LinkedInLogoIcon />
                    </a>
                </div>
            </nav>
            <div className='z-0 bg-slate-100 min-w-md overflow-hidden flex flex-col items-center justify-center pt-[70px] relative'>
                <div className='w-full flex items-center flex-col md:flex-row'>
                    <div className=' flex items-center justify-center p-20 '>
                        <Image src='/girl.png' alt='logo' width={200} height={200} className='rounded-sm overflow-hidden' />
                    </div>

                    <div className=' w-auto p-8 leading-normal'>
                        <p>
                            Wentao Zhu is a fourth-year Ph.D. student in Computer Science at
                            &nbsp;
                            <a href='www.baidu.com' className=" text-blue-300">Center on Frontiers of Computing Studies</a>, Peking University. He is a member of the Computer Vision and Digital Art group, advised by Prof.
                            Yizhou Wang. Previously, he received Bachelor's degrees in Computer Science and Economics from Peking University in 2020.
                            <br />
                            <br />
                            His research interests primarily include computer vision and machine learning. Specifically, he is interested in building human-aware AI systems that can perceive,
                            understand, and interact with human beings.
                        </p>
                    </div>
                </div>

                <Image src='/gfpose.gif' alt='logo' width={300} height={100} className='w-100 h-100' />
                <h1 className='text-4xl font-bold text-center'>Hello World</h1>
                <p className='text-center text-2xl'>Welcome to Next.js</p>
            </div>
            <button onClick={handleScrollTop} className='bg-red-500 text-white font-bold py-2 px-4 rounded'>
                Scroll Top
            </button>
        </div>
    );
}
