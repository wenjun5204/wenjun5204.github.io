import Image from 'next/image';

const images = [
    '/hair/boy1.jpeg',
    '/hair/boy2.jpeg',
    '/hair/boy21.jpeg',
    '/hair/boy22.jpeg',
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