import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { IoIosStar } from 'react-icons/io';

export default function HotelCard({ ind, hotelInfo }) {
    const { desc, name, price, star, recommand, url } = hotelInfo || {};

    const jumpurl =
        url ||
        'http://i.meituan.com/awp/h5/hotel-fe-oshotel/home/index.html?poiId=106159469&utm_term=AiphoneBgroupC12.25.204DcopyEpromotionG0000000000000A399E066E2F1491191636140BCB8BE22A16593182857778828820240927154928304&utm_source=appshare&utm_medium=iOSweb&utm_fromapp=copy&utm_sharesource=promotion&lch=appshare_7f1d4f04608b7219A5';
    return (
        <div className="w-full mt-4">
            <Card>
                <CardHeader>
                    <CardTitle>day{ind}</CardTitle>
                    <Link href={'http://dpurl.cn/JEfpY0qz'}>
                        <img src="https://p0.meituan.net/wmadfe/0aef7c978dc9f25b5769fdd7df19fb4a54066.jpg" alt="" />
                    </Link>
                </CardHeader>
                <CardContent>
                    <div className=" w-full flex justify-between">
                        <div> {name || 'Hotel Artemide'}</div>
                        <div className=" flex items-center">
                            <IoIosStar className=" fill-yellow-400" />
                            <IoIosStar className=" fill-yellow-400" />
                            <IoIosStar className=" fill-yellow-400" />
                            {/* <IoIosStar  className=" fill-white"/> */}
                        </div>
                    </div>
                    <CardDescription>
                        <div className=" inline-flex bg-clip-text text-transparent bg-gradient-to-r  from-go-g-start to-go-g-end">推荐理由</div>
                        {desc || '温度适宜'}
                    </CardDescription>
                </CardContent>
                <CardFooter>

                    <div className=" w-full flex justify-between">
                        <div className=" text-blue-500">{price || 2270}</div>
                        <Link href={jumpurl}>
                            <Button className="bg-blue-500 rounded-full">去预定</Button>
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
