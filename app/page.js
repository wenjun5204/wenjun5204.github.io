'use client';
import Image from 'next/image';
import Link from 'next/link';
import { CheckIcon, GitHubLogoIcon, LinkedInLogoIcon, EnvelopeOpenIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// import  from '@radix-ui/react-icons';

export default function Home() {
    const handleScrollTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div className=' relative w-full bg-slate-50 flex min-h-screen flex-col items-center justify-between p-24'>
            <nav className='w-full  bg-slate-100 h-[70px] fixed z-[100] top-0 shadow-md flex items-center justify-around '>
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
                        <EnvelopeOpenIcon />
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
            <div className='z-0 min-w-md overflow-hidden flex flex-col items-center justify-center pt-[20px] relative'>
                <div className='w-full flex items-center flex-col md:flex-row'>
                    <div className=' flex items-center justify-center p-20 '>
                        <Image src='/girl.png' alt='logo' width={200} height={200} className='rounded-sm overflow-hidden' />
                    </div>

                    <div className=' w-auto p-8 leading-normal'>
                        <p>
                            Wentao Zhu is a fourth-year Ph.D. student in Computer Science at &nbsp;
                            <a href='www.baidu.com' className=' text-blue-300'>
                                Center on Frontiers of Computing Studies
                            </a>
                            , Peking University. He is a member of the Computer Vision and Digital Art group, advised by Prof. Yizhou Wang. Previously, he received Bachelor's degrees in Computer
                            Science and Economics from Peking University in 2020.
                            <br />
                            <br />
                            His research interests primarily include computer vision and machine learning. Specifically, he is interested in building human-aware AI systems that can perceive,
                            understand, and interact with human beings.
                        </p>
                    </div>
                </div>
                <div className='w-full px-20'>
                    <p className=' text-lg leading-10 font-bold'>Publications</p>
                    <div className=' text-sm leading-10 font-bold'>2023</div>

                    <div className='flex flex-col m-10 gap-4'>
                        <div className='flex items-center w-full '>
                            <Image src='/celebv-hq.gif' alt='logo' width={300} height={60} className='w-100 h-100' />
                            <Card className='ml-10 w-full'>
                                <CardHeader>
                                    <CardTitle>Human Motion Generation: A Survey</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <b>Wentao Zhu</b>*, Xiaoxuan Ma*, Dongwoo Ro*, Hai Ci, Jinlu Zhang, Jiaxin Shi, Feng Gao, Qi Tian, Yizhou Wang <br />
                                    <em>IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)</em>, 2023 <br />
                                </CardContent>
                                <CardFooter className=' text-blue-400'>
                                    <a href='https://arxiv.org/pdf/2307.10894.pdf' target='_blank'>
                                        Paper
                                    </a>
                                </CardFooter>
                            </Card>
                        </div>
                        <div className='flex items-center w-full '>
                            <Image src='/celebv-hq.gif' alt='logo' width={300} height={60} className='w-100 h-100' />
                            <Card className='ml-10 w-full'>
                                <CardHeader>
                                    <CardTitle>Human Motion Generation: A Survey</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <b>Wentao Zhu</b>*, Xiaoxuan Ma*, Dongwoo Ro*, Hai Ci, Jinlu Zhang, Jiaxin Shi, Feng Gao, Qi Tian, Yizhou Wang <br />
                                    <em>IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)</em>, 2023 <br />
                                </CardContent>
                                <CardFooter className=' text-blue-400'>
                                    <a href='https://arxiv.org/pdf/2307.10894.pdf' target='_blank'>
                                        Paper
                                    </a>
                                </CardFooter>
                            </Card>
                        </div>
                        <div className='flex items-center w-full '>
                            <Image src='/celebv-hq.gif' alt='logo' width={300} height={60} className='w-100 h-100' />
                            <Card className='ml-10 w-full'>
                                <CardHeader>
                                    <CardTitle>Human Motion Generation: A Survey</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <b>Wentao Zhu</b>*, Xiaoxuan Ma*, Dongwoo Ro*, Hai Ci, Jinlu Zhang, Jiaxin Shi, Feng Gao, Qi Tian, Yizhou Wang <br />
                                    <em>IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)</em>, 2023 <br />
                                </CardContent>
                                <CardFooter className=' text-blue-400'>
                                    <a href='https://arxiv.org/pdf/2307.10894.pdf' target='_blank'>
                                        Paper
                                    </a>
                                </CardFooter>
                            </Card>
                        </div>
                        <div className='flex items-center w-full '>
                            <Image src='/celebv-hq.gif' alt='logo' width={300} height={60} className='w-100 h-100' />
                            <Card className='ml-10 w-full'>
                                <CardHeader>
                                    <CardTitle>Human Motion Generation: A Survey</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <b>Wentao Zhu</b>*, Xiaoxuan Ma*, Dongwoo Ro*, Hai Ci, Jinlu Zhang, Jiaxin Shi, Feng Gao, Qi Tian, Yizhou Wang <br />
                                    <em>IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)</em>, 2023 <br />
                                </CardContent>
                                <CardFooter className=' text-blue-400'>
                                    <a href='https://arxiv.org/pdf/2307.10894.pdf' target='_blank'>
                                        Paper
                                    </a>
                                </CardFooter>
                            </Card>
                        </div>
                        <div className='flex items-center w-full '>
                            <Image src='/celebv-hq.gif' alt='logo' width={300} height={60} className='w-100 h-100' />
                            <Card className='ml-10 w-full'>
                                <CardHeader>
                                    <CardTitle>Human Motion Generation: A Survey</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <b>Wentao Zhu</b>*, Xiaoxuan Ma*, Dongwoo Ro*, Hai Ci, Jinlu Zhang, Jiaxin Shi, Feng Gao, Qi Tian, Yizhou Wang <br />
                                    <em>IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)</em>, 2023 <br />
                                </CardContent>
                                <CardFooter className=' text-blue-400'>
                                    <a href='https://arxiv.org/pdf/2307.10894.pdf' target='_blank'>
                                        Paper
                                    </a>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                    <div className=' text-sm leading-10 font-bold'>2022</div>

                    <div className='flex flex-col m-10 gap-y-4'>
                        <div className='flex items-center w-full '>
                            <Image src='/gfpose.gif' alt='logo' width={300} height={60} className='w-100 h-100' />
                            <Card className='ml-10 w-full'>
                                <CardHeader>
                                    <CardTitle>Human Motion Generation: A Survey</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <b>Wentao Zhu</b>*, Xiaoxuan Ma*, Dongwoo Ro*, Hai Ci, Jinlu Zhang, Jiaxin Shi, Feng Gao, Qi Tian, Yizhou Wang <br />
                                    <em>IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)</em>, 2023 <br />
                                </CardContent>
                                <CardFooter className=' text-blue-400'>
                                    <a href='https://arxiv.org/pdf/2307.10894.pdf' target='_blank'>
                                        Paper
                                    </a>
                                </CardFooter>
                            </Card>
                        </div>
                        <div className='flex items-center w-full '>
                            <Image src='/gfpose.gif' alt='logo' width={300} height={60} className='w-100 h-100' />
                            <Card className='ml-10 w-full'>
                                <CardHeader>
                                    <CardTitle>Human Motion Generation: A Survey</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <b>Wentao Zhu</b>*, Xiaoxuan Ma*, Dongwoo Ro*, Hai Ci, Jinlu Zhang, Jiaxin Shi, Feng Gao, Qi Tian, Yizhou Wang <br />
                                    <em>IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)</em>, 2023 <br />
                                </CardContent>
                                <CardFooter className=' text-blue-400'>
                                    <a href='https://arxiv.org/pdf/2307.10894.pdf' target='_blank'>
                                        Paper
                                    </a>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* <Image src='/gfpose.gif' alt='logo' width={300} height={100} className='w-100 h-100' /> */}
            </div>
            <div className='w-full px-20'>
                <h1 className='text-4xl font-bold leading-[80px]'>Teaching</h1>
                <div className=' flex items-center justify-between'>
                    <a className=' text-blue-400' href='https://arxiv.org/pdf/2307.10894.pdf' target='_blank'>
                        Robot Vision and Learning - From a Perspective of Embodied AI
                    </a>
                    <span>Fall 2022</span>
                </div>
                <div className=' flex items-center justify-between'>
                    <a className=' text-blue-400' href='https://arxiv.org/pdf/2307.10894.pdf' target='_blank'>
                        Robot Vision and Learning - From a Perspective of Embodied AI
                    </a>
                    <span>Fall 2022</span>
                </div>
                <div className=' flex items-center justify-between'>
                    <a className=' text-blue-400' href='https://arxiv.org/pdf/2307.10894.pdf' target='_blank'>
                        Robot Vision and Learning - From a Perspective of Embodied AI
                    </a>
                    <span>Fall 2022</span>
                </div>
            </div>

            <button onClick={handleScrollTop} className='bg-red-500 text-white font-bold py-2 px-4 rounded'>
                Scroll Top
            </button>
        </div>
    );
}
