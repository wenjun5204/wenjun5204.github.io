import React from 'react';

export default function page({ params, searchParams }) {
    const destination = String(searchParams?.destination) || '';

    const imageSrc = destination === 'Italy' ? '/roma_recommand.jpg' : '/bikaso.jpg';
    return (
        <div className=" w-full h-auto">
            <img className="w-full h-[1200px]" src={imageSrc} alt="" />
        </div>
    );
}
