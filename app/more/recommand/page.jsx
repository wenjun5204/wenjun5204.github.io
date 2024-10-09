import React from 'react';

export default function page() {
    const destination = 'Italy';

    const imageSrc = destination === 'Italy' ? '/roma_recommand.jpg' : '/bikaso.jpg';
    return (
        <div className=" w-full h-auto">
            <img className="w-full h-[1200px]" src={imageSrc} alt="" />
        </div>
    );
}
