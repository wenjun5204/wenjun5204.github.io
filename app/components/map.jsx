import React, { useEffect } from 'react';

const GaodeMap = () => {
    var points = [
        [116.39, 39.9], // 北京中心
        [116.48, 39.9],
        [116.52, 39.6], // 另一个位置
    ];
    useEffect(() => {
        // 动态加载高德地图SDK
        const loadMapScript = () => {
            const script = document.createElement('script');
            script.src = 'https://webapi.amap.com/maps?v=1.4.15&key=95a9d5f0a87ef8550bfc6591a2aeef18';
            script.async = true;
            script.onload = () => initMap();
            document.head.appendChild(script);
        };

        // 初始化地图
        const initMap = () => {
            const map = new window.AMap.Map('amap-container', {
                zoom: 11, // 初始缩放级别
                center: [116.39, 39.9], // 初始中心点坐标
            });

            var endIcon = new window.AMap.Icon({
                size: new window.AMap.Size(25, 34),
                image: '//a.amap.com/jsapi_demos/static/demo-center/icons/dir-marker.png',
                imageSize: new window.AMap.Size(135, 40),
                imageOffset: new window.AMap.Pixel(-95, -3)
            });
        
            // 将 icon 传入 marker
            var endMarker = new window.AMap.Marker({
                position: new window.AMap.LngLat(116.45,39.9),
                icon: endIcon,
                offset: new window.AMap.Pixel(-13, -30)
            });

            map.add(endMarker);

            // 绘制连线
            if (points && points.length > 1) {
                const path = points.map((poi) => [poi.longitude, poi.latitude]);
                const polyline = new window.AMap.Polyline({
                    path: path,
                    strokeColor: '#FF33FF', // 线颜色
                    strokeOpacity: 1, // 线透明度
                    strokeWeight: 3, // 线宽
                    strokeStyle: 'solid', // 线样式
                });
                map.add(polyline);
            }
        };

        if (!window.AMap) {
            loadMapScript();
        } else {
            initMap();
        }
    }, []);
    return (
        <div id="amap-container" style={{ width: '100%', height: '400px' }}>
            map
        </div>
    );
};

export default GaodeMap;
