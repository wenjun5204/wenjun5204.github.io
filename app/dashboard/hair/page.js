import Image from 'next/image';

const images = [
    '/hair/boy1.jpeg',
    '/hair/boy2.jpeg',
    '/hair/boy21.jpeg',
    '/hair/boy22.jpeg',
    '/hair/11.png',
    '/hair/12.png',
    '/hair/13.png',
    '/hair/14.png',
    '/hair/15.png',
    '/hair/16.png',
    '/hair/17.png',
    '/hair/18.png',
];

export default function HairPage() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {images.map((src, index) => (
                <div key={index} style={{ flex: '1 0 21%', position: 'relative', height: '200px' }}>
                    <Image src={src} alt={`Image ${index + 1}`} layout="fill" objectFit="cover" />
                </div>
            ))}
        </div>
    );
}