/*
 * @Author: liuwenjun05 liuwenjun05@meituan.com
 * @Date: 2023-12-28 10:50:25
 * @LastEditors: liuwenjun05
 * @Description: file content
 */
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'regan的页面',
  description: 'regan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
