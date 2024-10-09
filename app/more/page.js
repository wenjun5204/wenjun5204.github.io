'use client';
import HeadGlobe from '../components/headGlobe';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HiOutlineArrowDownCircle } from 'react-icons/hi2';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

import TodoList from '@/components/cilentCom/todo';
import Visa from '@/components/cilentCom/visa';
import Itinerary from '@/components/cilentCom/itinerary';

const More = ({ params, searchParams }) => {
    // const result = await postGptRequest({ content: '请根据上述内容给出智能行程单' });
    // console.log(123, result);
    const destination = String(searchParams?.destination) || '';
    return (
        <div className="w-full h-auto flex flex-col">
            <HeadGlobe />
            <div className="mt-16 px-6">
                <div className="mt-4">Hi，我还可以为你做更多～</div>

                <div className="flex items-center gap-2 mt-4">
                    <Card className="flex-1 bg-[#F4EDFF] h-44">
                        <CardHeader>
                            <CardTitle>行前Todo List</CardTitle>
                            {/* <CardDescription>Card Description</CardDescription> */}
                        </CardHeader>
                        <CardContent>
                            <TodoList />
                        </CardContent>
                    </Card>
                    <Card className="flex-1 bg-[#D0E6FF] h-44">
                        <CardHeader>
                            <CardTitle>智能行程单</CardTitle>
                            {/* <CardDescription>Card Description</CardDescription> */}
                        </CardHeader>
                        <CardContent>
                            <span className="text-sm">已为您智能生成详细行程单，便利您的行程</span>
                            <div className=" mt-3">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button className="bg-[#288DFF]">
                                            <HiOutlineArrowDownCircle className="w-4 h-4" />
                                            点击下载
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-md w-5/6 rounded-lg">
                                        <DialogHeader>
                                            <DialogTitle>智能行程单</DialogTitle>
                                            <DialogDescription>可以复制当前的智能行程单.</DialogDescription>
                                        </DialogHeader>
                                        <Itinerary destination={destination} />
                                        <DialogFooter className="sm:justify-start">
                                            <DialogClose asChild>
                                                <Button type="button" variant="secondary">
                                                    关闭
                                                </Button>
                                            </DialogClose>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-4">
                    <Card className="flex-1 bg-[#F2FBD9]">
                        <CardHeader>
                            <CardTitle>看展推荐</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Link href={`/more/recommand?destination=${destination}`}>
                                <div className=" flex items-center gap-2">
                                    <span className="text-sm">n个美术馆推荐 为你带来无与伦比的 文艺复兴文化之旅</span>
                                    <div className=" mt-4">
                                        <img src="/recommand.png"></img>
                                    </div>
                                </div>
                            </Link>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-4">
                    <Card className="flex-1 bg-[#288DFF]">
                        <CardHeader>
                            <CardTitle>签证办理攻略</CardTitle>
                            {/* <CardDescription>Card Description</CardDescription> */}
                        </CardHeader>
                        <CardContent>
                            <span className="text-sm">懒人省心办理签证攻略，专业靠谱</span>
                            <div className=" mt-4">
                                {/* <Button className="bg-white text-black rounded-full">查看详情</Button> */}

                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button className="bg-white text-black rounded-full">查看详情</Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-md w-5/6 rounded-lg">
                                        <DialogHeader>
                                            <DialogTitle>签证办理攻略</DialogTitle>
                                            <DialogDescription>懒人省心办理签证攻略，专业靠谱.</DialogDescription>
                                        </DialogHeader>
                                        <Visa />
                                        <DialogFooter className="sm:justify-start">
                                            <DialogClose asChild>
                                                <Button type="button" variant="secondary">
                                                    关闭
                                                </Button>
                                            </DialogClose>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default More;
