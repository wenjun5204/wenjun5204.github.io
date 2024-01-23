/*
 * @Author: liuwenjun05 liuwenjun05@meituan.com
 * @Date: 2023-12-28 19:19:40
 * @LastEditors: liuwenjun05
 * @Description: file content
 */
import Image from 'next/image'

export default function Home() {
  return (
    <div className=' w-full bg-white flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='flex flex-col items-center justify-center'>
        <Image
          src='/girl.png'
          alt='logo'
          width={100}
          height={100}
          className='w-100 h-100'
        />
        <h1 className='text-4xl font-bold text-center'>Hello World</h1>
        <p className='text-center text-2xl'>Welcome to Next.js</p>
        </div>
    </div>
  )
}
