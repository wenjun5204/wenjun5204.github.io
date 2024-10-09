import Link from 'next/link';
import { FaRegEdit } from 'react-icons/fa';

export default function HeadGlobe({ tips, step, setStep }) {
    const curDestination = tips?.destination || 'Italy';
    return (
        <div className=" fixed top-0 z-50 w-full px-6 ">
            <div className="mt-6 flex items-center w-full h-10 justify-between">
                <Link href="/">
                    <div className=" text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r  from-go-g-start to-go-g-end">Go Globe</div>
                </Link>

                {/* <Link className="text-green-600 hover:text-primary" href="/">
            Home
        </Link> */}
                {step === 1 && (
                    <div className="" onClick={() => setStep(2)}>
                        map
                    </div>
                )}
                {step === 2 && (
                    <div className="flex items-center" onClick={() => setStep(1)}>
                        <FaRegEdit />
                        修改提示词
                    </div>
                )}
                {step === 3 && <Link href={`/more?destination=${curDestination}`}>More</Link>}
            </div>
            {step === 1 && <div className="mt-6 font-semibold">Hi！小马，来一起规划旅途吧～</div>}
            {step === 3 && <div className="mt-4 font-semibold">Hi，这是我根据您的每日行程，为你量身 推荐的酒店～</div>}
        </div>
    );
}
