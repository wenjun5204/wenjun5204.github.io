'use client';

import GaodeMap from '../components/map';
import HeadGlobe from '../components/headGlobe';

export default function Map() {
    return (
        <div>
            <HeadGlobe step={2}/>
            <GaodeMap />
        </div>
    );
}

