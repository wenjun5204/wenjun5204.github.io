import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { PiMountains } from 'react-icons/pi';
import { CiCalendar } from 'react-icons/ci';
import { CiLocationOn } from 'react-icons/ci';
import { SlArrowRightCircle } from 'react-icons/sl';
import { RiMoneyCnyCircleLine } from 'react-icons/ri';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer';
import Link from 'next/link';

export default function Step1({ tips, setTips, suggest, setSuggest, setStep }) {
    const daysChange = (value) => {
        const newTips = { ...tips, days: value };
        setTips(newTips);
    };

    const budgetChange = (e) => {
        const budget = e.target.value || 0;
        const newTips = { ...tips, budget: budget };
        setTips(newTips);
    };

    const desitinationChange = (value) => {
        const newTips = { ...tips, destination: value };
        setTips(newTips);
    };

    const onTypeChange = (val) => {
        const newTips = { ...tips, type: val };
        setTips(newTips);
    };

    const handleNext = () => {
        console.log(123);
    };

    return (
        <div className="mt-36 flex flex-col items-center w-full p-8 gap-7 font-medium text-base">
            <div className=" w-full h-14 px-6 border-2 rounded-full flex items-center justify-between">
                <div className="flex items-center gap-2 ">
                    <CiLocationOn className=" w-8 h-8" />
                    <div className=" flex flex-col">
                        <span>目的地</span>
                        <span className=" text-sm font-normal">Desitination</span>
                    </div>
                </div>
                <div className=" flex flex-col">
                    <Select onValueChange={desitinationChange}>
                        <SelectTrigger className="w-32">
                            <SelectValue placeholder="意大利" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Italy">意大利</SelectItem>
                            <SelectItem value="Spain">西班牙</SelectItem>
                            {/* <SelectItem value="Verona">Verona</SelectItem> */}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="w-full h-14 px-6 border-2 rounded-full flex items-center justify-between">
                <div className="flex items-center gap-2 ">
                    <CiCalendar className=" w-8 h-8" />
                    <div className="flex flex-col">
                        <span>天数</span>
                        <span className=" text-sm font-normal">Days</span>
                    </div>
                </div>
                <div className="flex">
                    <Select onValueChange={daysChange}>
                        <SelectTrigger className="w-32">
                            <SelectValue placeholder="请选择" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value={3}>3</SelectItem>
                            <SelectItem value={4}>4</SelectItem>
                            <SelectItem value={5}>5</SelectItem>
                            <SelectItem value={6}>6</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className=" w-full h-14 px-6 border-2 rounded-full flex items-center justify-between">
                <div className="flex items-center gap-2 ">
                    <RiMoneyCnyCircleLine className=" w-8 h-8" />
                    <div className=" flex flex-col">
                        <span>预算</span>
                        <span className=" text-sm font-normal">Budget</span>
                    </div>
                </div>
                <div className="flex items-center">
                    <Input placeholder="请输入" className=" w-[100px]" onChange={budgetChange} />元
                </div>
            </div>
            <div className=" w-full h-14 px-6 border-2 rounded-full flex items-center justify-between">
                <div className="flex items-center gap-2 ">
                    <CiCalendar className=" w-8 h-8" />
                    <div className=" flex flex-col">
                        <span>游玩类型</span>
                        <span className=" text-sm font-normal">Style</span>
                    </div>
                </div>
                <div className="flex">
                    <Drawer>
                        <DrawerTrigger>{tips?.type || '城市观光'}</DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader>
                                <DrawerTitle>游玩类型?</DrawerTitle>
                                <DrawerDescription>
                                    <RadioGroup defaultValue={tips?.type || '城市观光'} onValueChange={onTypeChange}>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="城市观光" id="r1" />
                                            <Label htmlFor="r1">城市观光</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="人文体验" id="r2" />
                                            <Label htmlFor="r2">人文体验</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="自然风光" id="r3" />
                                            <Label htmlFor="r3">自然风光</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="特种兵行程" id="r4" />
                                            <Label htmlFor="r4">特种兵行程</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="购物" id="r5" />
                                            <Label htmlFor="r5">购物</Label>
                                        </div>
                                    </RadioGroup>
                                </DrawerDescription>
                            </DrawerHeader>
                            <DrawerFooter>
                                {/* <Button>Submit</Button> */}
                                <DrawerClose>
                                    <Button variant="outline">关闭</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
            {/* <div className=" w-full h-14 px-6 border-2 rounded-full flex items-center justify-between">
                <div className="flex items-center gap-2 ">
                    <PiMountains className=" w-8 h-8" />
                    <div className=" flex flex-col">
                        <span>必去城市/景点</span>
                        <span className=" text-sm font-normal">Days</span>
                    </div>
                </div>
                <div className="flex">
                    <Label>米兰大教堂</Label>
                </div>
            </div> */}

            <Link href="/map">
                <Button
                    className="flex gap-2 text-lg w-[335px] h-12 rounded-full bg-gradient-to-r from-[#21D4FD] to-[#B721FF]"
                    // onClick={handleNext}
                >
                    下一步，查看行程
                    <SlArrowRightCircle />
                </Button>
            </Link>

            {/* <div>{suggest}</div> */}
        </div>
    );
}

