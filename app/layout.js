
import './globals.css'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '酒旅小助手',
  description: 'regan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* 引入高德地图API */}
        <script src="https://webapi.amap.com/maps?v=1.4.15&key=95a9d5f0a87ef8550bfc6591a2aeef18"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
