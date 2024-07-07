import { Inter, Urbanist } from 'next/font/google'
import type { Metadata } from 'next'

 

import './globals.css'
 
import ToasterContext from './context/ToasterContext'
import AuthContext from './context/AuthContext'

const font = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store',
  description: 'Store - The place for all your purchases.',
  icons:{
    icon:'/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthContext>
    <html lang="en">
      <body className={font.className}>
        
       <ToasterContext/>
        {children}
   
      </body>
    </html>
    </AuthContext>
  )
}