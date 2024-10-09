import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import DragSort from '@/components/drag/sort';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';

const iconsUrl = [
    'https://p0.meituan.net/wmadfe/302a8b342d41d0aceaa668fa491a412e5412.png',
    'https://p0.meituan.net/wmadfe/a35d850adf70a55a80cbd6928ba5a03f6457.png',
    'https://p0.meituan.net/wmadfe/432319f334f6a7d5b3bd8c81f3598a906917.png',
    'https://p0.meituan.net/wmadfe/dd252fecaa50bf7671de97b1c3e70dbb5891.png',
];
export default function MtdMap({ coordinate }) {
    const containerRef = useRef(null);
    const mapCurrent = useRef(null);

    const [currRoute, setCurrRoute] = useState([]);
    const [tabs, setTabs] = useState([]);
    const [active, setActive] = useState();

    useEffect(() => {
        if (Array.isArray(coordinate)) {
            const newRoute = coordinate.map((item) => {
                return item.coordinates;
            });
            setCurrRoute(newRoute);
            setTabs(coordinate);
        }
    }, [coordinate]);

    const initMap = (currroute) => {
        const curCenter = currroute[0] || [12.5, 41.9];

        const map = new window.mtdpMap.Map({
            container: containerRef.current,
            center: curCenter,
            lazyRender: false,
            zoom: 16,
            oversea: true,
        });

        // map.on('click', (e) => {
        //     const infoWindow = new window.mtdpMap.InfoWindow({
        //         map,
        //         position: e.lngLat,
        //         content: `坐标：${e.lngLat.toArray()}`,
        //         enableCloseOnClick: false, // 允许展示多个信息窗体
        //     });
        // });

        mapCurrent.current = map;

        var markers = [];
        var polylines = [];

        (currroute || []).forEach((item, ind) => {
            const icon = new window.mtdpMap.Icon(iconsUrl?.[ind] || 'https://p0.meituan.net/wmadfe/e2a4cc3915ff361f8976fe4606782165561.png', { size: [36, 36], imageSize: [36, 36] });
            markers[ind] = new window.mtdpMap.Marker({
                map,
                icon,
                position: item,
            });
        });

        for (let ind = 0; ind < currRoute.length; ind++) {
            if (ind === currRoute.length - 1) {
                polylines[ind] = new window.mtdpMap.Polyline({
                    path: [currRoute[ind], currRoute[0]],
                    visible: true,
                    strokeColor: '#0000FF',
                    strokeWeight: 3,
                    map: map,
                });
            } else {
                polylines[ind] = new window.mtdpMap.Polyline({
                    path: [currRoute[ind], currRoute[ind + 1]],
                    visible: true,
                    strokeColor: '#0000FF',
                    strokeWeight: 3,
                    map: map,
                });
            }
        }

        const icon = new window.mtdpMap.Icon('https://mss.vip.sankuai.com/v1/mss_2337f9d8e6254e1dbf8bb9fd36629530/map-web/kangaroo.png', { size: [36, 36], imageSize: [36, 36] });


        var icon2 = new window.mtdpMap.Icon('http://mss.vip.sankuai.com/v1/mss_2337f9d8e6254e1dbf8bb9fd36629530/map-web/marker-icon.png', {
            size: [25, 36],
        })
        markers.forEach((item, index) => {
            item.on('click', (e) => {
                const lnglat = e.data.target.getPosition()
                map.setCenter(lnglat);
                markers[index].setIcon(icon2);
                // markers[index].setLabel({ content: '地点', offset: [4, 4] });
            });
        });

        console.log(123, currroute);

        // var polylines = new window.mtdpMap.Polyline({
        //     path: [[12.5, 41.8], [12.5, 41.7]],
        //     visible: true,
        //     strokeColor: "#0000FF",
        //     strokeWeight: 3,
        //     map: map,
        // });

        // var polylines = new window.mtdpMap.Polyline({
        //     path: [[12.5, 41.8], [12.3155, 45.4408]],
        //     visible: true,
        //     strokeColor: "#0000FF",
        //     strokeWeight: 3,
        //     map: map,
        // });

        // 绘制连线
        // if (points && points.length > 1) {
        //     const path = points.map((poi) => [poi.longitude, poi.latitude]);
        //     const polyline = new window.AMap.Polyline({
        //         path: path,
        //         strokeColor: '#FF33FF', // 线颜色
        //         strokeOpacity: 1, // 线透明度
        //         strokeWeight: 3, // 线宽
        //         strokeStyle: 'solid', // 线样式
        //     });
        //     map.add(polyline);
        // }
    };

    // console.log(123, window)
    useEffect(() => {
        // 动态加载高德地图SDK
        const loadMapScript = () => {
            const script = document.createElement('script');
            script.src = 'https://lbsapi.meituan.com/jsapi/maps?v=2.1.0&key=meb5fd96a2094622914fd8a04615794j&plugin=Polyline';
            script.async = false;
            script.onload = () => initMap(currRoute);
            document.head.appendChild(script);
        };

        // 初始化地图

        // loadMapScript();
        if (!window.mtdpMap) {
            loadMapScript();
        } else {
            // console.log(666, window.mtdpMap);
            initMap(currRoute);
        }
    }, [currRoute]);

    const handleDraw = () => {
        new window.mtdpMap.Polyline({
            path: [
                [12.5, 41.8],
                [12.3155, 45.4408],
            ],
            visible: true,
            strokeColor: '#0000FF',
            strokeWeight: 3,
            map: mapCurrent.current,
        });
    };

    const handleDays = (key) => {
        const newRoute = coordinate[key]?.sights.map((item) => item.coordinates) || [];
        setCurrRoute(newRoute);
    };

    // console.log(123, currRoute);

    return (
        <div ref={containerRef} style={{ height: '100vh', width: '100%', padding: 0, margin: 0 }}>
            <div className="w-full px-6 flex items-center gap-2 fixed top-16 z-50">
                {coordinate.map((item, index) => {
                    return (
                        <Button className="w-8 h-4" key={index} onClick={() => handleDays(index)}>
                            day{index + 1}
                        </Button>
                    );
                })}
            </div>
            <div className="w-full flex justify-center  absolute bottom-24 z-50">
                {
                    <Card className="w-11/12">
                        <CardHeader className="p-4">
                            <CardTitle>
                                <span className="bg-clip-text text-transparent bg-gradient-to-r  from-go-g-start to-go-g-end">路线推荐理由</span>
                            </CardTitle>
                            {/* <CardDescription>Card Description</CardDescription> */}
                        </CardHeader>
                        <CardContent className="p-4 pt-0 text-sm">
                            <span>用特种兵行程感受文艺复兴的气息，感受买买买的快乐，体验历史古城与时尚之都的双重魅力</span>
                        </CardContent>
                    </Card>
                }
            </div>
            {/* <Button className=' absolute bottom-0 z-50 right-0' onClick={handleDraw}>画线</Button> */}
        </div>
    );
}
